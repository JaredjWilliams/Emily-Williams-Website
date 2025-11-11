import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, QueryCommand } from '@aws-sdk/lib-dynamodb';
import { CognitoJwtVerifier } from 'aws-jwt-verify';

const dynamoClient = DynamoDBDocumentClient.from(new DynamoDBClient({}));
const TABLE_NAME = process.env.ORDERS_TABLE_NAME || 'emily-williams-orders';
const USER_POOL_ID = process.env.USER_POOL_ID || '';

const verifier = CognitoJwtVerifier.create({
  userPoolId: USER_POOL_ID,
  tokenUse: 'access',
});

interface OrderRequest {
  name: string;
  email: string;
  phone?: string;
  paintingType: string;
  size?: string;
  message: string;
}

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    // Extract and verify JWT token
    const authHeader = event.headers.Authorization || event.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: 'Unauthorized: Missing or invalid token' }),
      };
    }

    const token = authHeader.substring(7);
    const payload = await verifier.verify(token);
    const userId = payload.sub; // Cognito User ID

    // Parse request body
    const body: OrderRequest = JSON.parse(event.body || '{}');

    // Validate required fields
    if (!body.name || !body.email || !body.paintingType || !body.message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Generate order ID
    const orderId = `order-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const timestamp = new Date().toISOString();

    // Store order with user isolation
    const orderItem = {
      PK: `USER#${userId}`,
      SK: `ORDER#${orderId}`,
      GSI1PK: 'ORDER',
      GSI1SK: timestamp,
      userId: userId, // Redundant but useful for queries
      orderId: orderId,
      name: body.name,
      email: body.email,
      phone: body.phone || '',
      paintingType: body.paintingType,
      size: body.size || '',
      message: body.message,
      status: 'pending',
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    await dynamoClient.send(
      new PutCommand({
        TableName: TABLE_NAME,
        Item: orderItem,
      })
    );

    return {
      statusCode: 201,
      headers,
      body: JSON.stringify({
        success: true,
        orderId: orderId,
        message: 'Order submitted successfully',
      }),
    };
  } catch (error: any) {
    console.error('Error submitting order:', error);

    if (error.name === 'JwtExpiredError' || error.name === 'JwtInvalidSignatureError') {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: 'Unauthorized: Invalid or expired token' }),
      };
    }

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};

