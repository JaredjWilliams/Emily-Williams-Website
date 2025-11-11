# User Isolation Strategy

## Problem Statement

When deploying a multi-user website on AWS, we need to ensure that:
1. Each user has their own isolated experience
2. One user's interactions don't affect another user's view
3. User data is completely separated and secure

## Solution Architecture

### 1. Authentication Layer (AWS Cognito)

**How it works:**
- Each user gets a unique `userId` (Cognito User ID) upon registration
- Authentication returns JWT tokens containing the user's identity
- Tokens are validated on every API request

**Isolation guarantee:**
- Users can only authenticate as themselves
- Tokens cannot be forged (cryptographically signed)
- User identity is verified server-side

### 2. API Layer (API Gateway + Lambda)

**How it works:**
- All API endpoints require authentication
- Lambda functions extract `userId` from the JWT token
- **Critical**: `userId` is NEVER accepted from request body - only from token

**Isolation guarantee:**
```typescript
// ✅ CORRECT - Extract userId from token
const payload = await verifier.verify(token);
const userId = payload.sub; // From token, not request

// ❌ WRONG - Never trust userId from request
const userId = request.body.userId; // NEVER DO THIS
```

### 3. Database Layer (DynamoDB)

**How it works:**
- All user data uses `USER#{userId}` as the partition key
- Queries are filtered by the authenticated user's ID
- No cross-user queries are possible

**Data Structure:**
```
PK: "USER#userId123"
SK: "ORDER#orderId456"
userId: "userId123"  // Redundant but useful
orderData: { ... }
```

**Isolation guarantee:**
- Partition key ensures physical data separation
- Queries can only access data for the authenticated user
- Even if a query is malformed, it cannot access other users' data

### 4. Frontend Layer (React)

**How it works:**
- Authentication state managed in React Context
- Access tokens stored securely (localStorage with expiration)
- All API calls include authentication headers

**Isolation guarantee:**
- Users can only see their own UI state
- API calls automatically include their token
- No way to make requests as another user

## Data Flow Example: Submitting an Order

```
1. User fills out order form
   ↓
2. Frontend gets access token from AuthContext
   ↓
3. Frontend sends POST /orders with:
   - Authorization: Bearer <token>
   - Body: { name, email, paintingType, ... }
   ↓
4. API Gateway validates token with Cognito
   ↓
5. Lambda function:
   - Verifies token (extracts userId)
   - Creates DynamoDB item:
     PK: "USER#{userId}"
     SK: "ORDER#{orderId}"
   ↓
6. Order stored in user's partition
   ↓
7. Response returned to user
```

## Querying User Data

When a user requests their orders:

```
1. User clicks "My Orders"
   ↓
2. Frontend sends GET /orders with Authorization header
   ↓
3. Lambda function:
   - Verifies token → extracts userId
   - Queries DynamoDB:
     KeyConditionExpression: 'PK = :pk'
     ExpressionAttributeValues: {
       ':pk': `USER#${userId}`  // Only this user's data
     }
   ↓
4. Returns only orders for authenticated user
```

## Security Measures

### 1. Token Validation
- All tokens verified server-side using AWS JWT Verifier
- Expired tokens rejected
- Invalid signatures rejected

### 2. User ID Extraction
- User ID always extracted from token, never from request
- Prevents user impersonation attacks

### 3. Database Queries
- All queries filtered by authenticated user's ID
- No wildcard queries that could expose other users' data
- Partition key ensures physical isolation

### 4. CORS Configuration
- API Gateway configured to only accept requests from frontend domain
- Prevents unauthorized cross-origin requests

## Testing Isolation

### Test Case 1: Order Submission
1. User A signs in → submits order
2. User B signs in → submits order
3. Verify: Each user only sees their own order

### Test Case 2: Data Access
1. User A signs in → gets their orders
2. Verify: API returns only User A's orders
3. User B signs in → gets their orders
4. Verify: API returns only User B's orders

### Test Case 3: Token Tampering
1. User A signs in → gets token
2. Try to modify token → send request
3. Verify: Request rejected (invalid signature)

### Test Case 4: Direct Database Access
1. Try to query DynamoDB directly with another user's ID
2. Verify: IAM permissions prevent unauthorized access
3. Even if accessed, partition key ensures data isolation

## Multi-Tenant Scenarios

If you need separate "instances" per user (like white-label sites):

### Option 1: Subdomain Routing
- Each user gets: `user123.yourdomain.com`
- Route to user-specific configuration
- Serve customized content per user

### Option 2: User Preferences
- Store user-specific preferences in DynamoDB
- Customize UI based on preferences
- All data still isolated by userId

### Option 3: Separate Deployments
- Each user gets their own AWS resources
- Complete isolation but higher cost
- Use CloudFormation/CDK for automation

## Common Pitfalls to Avoid

### ❌ Don't: Accept userId from Request Body
```typescript
// WRONG - User could impersonate others
const userId = event.body.userId;
```

### ❌ Don't: Use Global Secondary Index Without Filtering
```typescript
// WRONG - Could expose other users' data
const result = await dynamoClient.send(
  new QueryCommand({
    IndexName: 'GSI1',
    // Missing userId filter!
  })
);
```

### ❌ Don't: Store Tokens in Plain Text
```typescript
// WRONG - Vulnerable to XSS
localStorage.setItem('token', token);
```

### ✅ Do: Always Extract userId from Token
```typescript
// CORRECT
const payload = await verifier.verify(token);
const userId = payload.sub;
```

### ✅ Do: Filter All Queries by userId
```typescript
// CORRECT
KeyConditionExpression: 'PK = :pk',
ExpressionAttributeValues: {
  ':pk': `USER#${userId}`
}
```

## Monitoring and Auditing

Set up CloudWatch Logs to monitor:
- Authentication failures
- API requests with invalid tokens
- DynamoDB query patterns
- Unusual access patterns

Use CloudTrail to audit:
- User sign-ups
- API access patterns
- Data access logs

## Conclusion

This architecture ensures complete user isolation through:
1. **Authentication**: Unique user IDs via Cognito
2. **Authorization**: Token-based API access
3. **Data Isolation**: Partition-key based storage
4. **Security**: Server-side validation and filtering

Each user's data is physically and logically separated, ensuring that one user's interactions cannot affect another user's experience.

