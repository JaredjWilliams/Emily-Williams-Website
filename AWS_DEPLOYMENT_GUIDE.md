# AWS Deployment Guide: User Isolation Architecture

## Overview

This guide explains how to deploy the Emily Williams website on AWS with complete user isolation, ensuring each user's interactions and data are completely separate.

## Architecture Overview

```
┌─────────────────┐
│   CloudFront    │  ← CDN for static assets
└────────┬────────┘
         │
┌────────▼────────┐
│   S3 Bucket     │  ← Static React app hosting
└────────┬────────┘
         │
┌────────▼────────┐
│  API Gateway    │  ← REST API endpoint
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
┌───▼───┐ ┌──▼────┐
│Lambda │ │Lambda │  ← Serverless functions
└───┬───┘ └───┬───┘
    │         │
┌───▼─────────▼───┐
│   DynamoDB      │  ← User-isolated data storage
└─────────────────┘
         │
┌────────▼────────┐
│  AWS Cognito     │  ← User authentication
└─────────────────┘
```

## Key Components for User Isolation

### 1. **User Authentication (AWS Cognito)**
- Each user gets a unique `userId` (Cognito User ID)
- JWT tokens contain user identity
- All API requests include authentication headers

### 2. **Database Design (DynamoDB)**
- **Partition Key**: `userId` (ensures data isolation)
- **Sort Key**: Varies by entity type
- Example: `userId#orderId`, `userId#paintingId`

### 3. **API Layer (API Gateway + Lambda)**
- All endpoints validate JWT tokens
- Extract `userId` from token
- Filter all queries by `userId`
- Never expose data without user context

### 4. **Frontend State Management**
- Store user session in React Context
- Include auth token in all API calls
- Handle token refresh automatically

## Implementation Strategy

### Phase 1: Authentication Setup
1. Create AWS Cognito User Pool
2. Configure authentication flows
3. Set up frontend auth context

### Phase 2: Backend API
1. Create Lambda functions for:
   - Order submissions (user-specific)
   - Gallery data (public, but user favorites are isolated)
   - User preferences
2. Set up API Gateway with Cognito authorizer
3. Implement DynamoDB tables with user partitioning

### Phase 3: Frontend Integration
1. Add authentication UI (login/signup)
2. Update OrderForm to use authenticated API
3. Add user-specific features (saved favorites, order history)

### Phase 4: Deployment
1. Build and deploy static site to S3
2. Configure CloudFront distribution
3. Set up CI/CD pipeline

## Data Isolation Patterns

### Pattern 1: User-Owned Data (Orders, Preferences)
```typescript
// DynamoDB Structure
{
  PK: "USER#userId123",
  SK: "ORDER#orderId456",
  userId: "userId123",
  orderData: { ... }
}
```

### Pattern 2: Public Data with User Context (Gallery)
```typescript
// Public paintings
{
  PK: "PAINTING#paintingId",
  SK: "METADATA",
  // Public data
}

// User-specific interactions
{
  PK: "USER#userId123",
  SK: "FAVORITE#paintingId",
  userId: "userId123",
  paintingId: "paintingId"
}
```

### Pattern 3: Multi-Tenant Isolation
If you need separate "instances" per user (like white-label sites):
- Use subdomain routing: `user123.yourdomain.com`
- Store user-specific configuration
- Serve customized content per user

## Security Best Practices

1. **Never trust client-side data**
   - Always validate `userId` from JWT token
   - Never accept `userId` from request body

2. **Principle of Least Privilege**
   - Lambda functions only access data for authenticated user
   - Use IAM roles with minimal permissions

3. **Data Validation**
   - Validate all inputs server-side
   - Sanitize user inputs
   - Use parameterized queries

4. **Token Management**
   - Short-lived access tokens (15 min)
   - Refresh tokens for longer sessions
   - Automatic token refresh in frontend

## Cost Optimization

- **S3 + CloudFront**: ~$0.50/month for low traffic
- **Lambda**: Pay per request (~$0.20 per million)
- **DynamoDB**: On-demand pricing (~$1.25 per million reads)
- **Cognito**: First 50,000 MAU free

**Estimated monthly cost for 1,000 users**: ~$5-10/month

## Deployment Options

### Option 1: AWS Amplify (Recommended for Quick Start)
- Handles authentication, hosting, and API automatically
- Best for rapid deployment
- See `amplify.yml` configuration

### Option 2: Manual AWS Setup
- More control over infrastructure
- Better for custom requirements
- See CloudFormation templates

### Option 3: Serverless Framework
- Infrastructure as code
- Easy to version control
- See `serverless.yml` configuration

## Next Steps

1. Review the implementation files in this directory
2. Set up AWS account and configure credentials
3. Deploy authentication first
4. Test user isolation with multiple test accounts
5. Deploy backend API
6. Update frontend to use authenticated endpoints
7. Deploy to production

## Testing User Isolation

1. Create two test user accounts
2. Submit orders from each account
3. Verify each user only sees their own orders
4. Verify users cannot access each other's data
5. Test token expiration and refresh

## Monitoring & Logging

- CloudWatch Logs for Lambda functions
- CloudWatch Metrics for API Gateway
- X-Ray for distributed tracing
- Set up alerts for authentication failures

