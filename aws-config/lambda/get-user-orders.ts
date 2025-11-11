import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, QueryCommand } from '@aws-sdk/lib-dynamodb';
import { CognitoJwtVerifier } from 'aws-jwt-verify';

const dynamoClient = DynamoDBDocumentClient.from(new DynamoDBClient({}));
const TABLE_NAME = process.env.ORDERS_TABLE_NAME || 'emily-williams-orders';
const USER_POOL_ID = process.env.USER_POOL_ID || '';

const verifier = CognitoJwtVerifier.create({
  userPoolId: USER_POOL_ID,
  tokenUse: 'access',
});

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization',
    'Access-Control-Allow-Methods': 'GET,OPTIONS',
    'Content-Type': 'application/json',
  };

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
    const userId = payload.sub;

    // Query orders for this specific user only
    const result = await dynamoClient.send(
      new QueryCommand({
        TableName: TABLE_NAME,
        KeyConditionExpression: 'PK = :pk',
        ExpressionAttributeValues: {
          ':pk': `USER#${userId}`,
        },
        // Only get orders (not other user data)
        FilterExpression: 'begins_with(SK, :orderPrefix)',
        ExpressionAttributeValues: {
          ':pk': `USER#${userId}`,
          ':orderPrefix': 'ORDER#',
        },
        ScanIndexForward: false, // Most recent first
      })
    );

    // Format response (remove internal keys)
    const orders = (result.Items || []).map((item) => {
      const { PK, SK, GSI1PK, GSI1SK, ...orderData } = item;
      return orderData;
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        orders: orders,
      }),
    };
  } catch (error: any) {
    console.error('Error fetching orders:', error);

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

