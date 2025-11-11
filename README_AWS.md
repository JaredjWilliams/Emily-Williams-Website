# AWS Deployment with User Isolation

This document provides a comprehensive guide for deploying the Emily Williams website on AWS with complete user isolation.

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up AWS Cognito:**
   - Follow `DEPLOYMENT_STEPS.md` Step 1
   - Note your User Pool ID and Client ID

3. **Configure environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your Cognito and API Gateway values
   ```

4. **Deploy backend:**
   ```bash
   cd aws-config/lambda
   npm install
   serverless deploy
   ```

5. **Deploy frontend:**
   - Use AWS Amplify (recommended) or S3 + CloudFront
   - See `DEPLOYMENT_STEPS.md` for details

## Architecture Overview

The solution ensures user isolation through:

1. **AWS Cognito** - User authentication with unique user IDs
2. **API Gateway + Lambda** - Serverless API with JWT validation
3. **DynamoDB** - User-partitioned data storage (PK = USER#{userId})
4. **React Context** - Frontend authentication state management

## Key Files

- `AWS_DEPLOYMENT_GUIDE.md` - Architecture and design patterns
- `DEPLOYMENT_STEPS.md` - Step-by-step deployment instructions
- `aws-config/` - Backend configuration and Lambda functions
- `src/contexts/AuthContext.tsx` - Authentication context provider
- `src/services/api.ts` - API service with authentication
- `src/components/AuthModal.tsx` - Sign in/up UI
- `src/components/Header.tsx` - Navigation with auth controls

## User Isolation Guarantees

✅ **Data Isolation**: All user data stored with `USER#{userId}` partition key
✅ **API Security**: All endpoints validate JWT tokens and extract userId
✅ **Query Filtering**: DynamoDB queries filtered by authenticated user's ID
✅ **Token Validation**: Server-side token verification prevents token tampering
✅ **No Cross-User Access**: Users cannot access other users' data

## Testing User Isolation

1. Create two test accounts
2. Sign in as User 1, submit an order
3. Sign out, sign in as User 2
4. Verify User 2 cannot see User 1's orders
5. Submit order as User 2
6. Verify each user only sees their own data

## Security Features

- JWT token-based authentication
- Server-side token validation
- User ID extracted from token (never from request body)
- DynamoDB partition key ensures data isolation
- CORS configured for frontend domain only
- HTTPS enforced via CloudFront/Amplify

## Cost Estimate

For ~1,000 active users/month:
- **S3 + CloudFront**: ~$0.50/month
- **Lambda**: ~$0.20/month
- **DynamoDB**: ~$1.25/month
- **Cognito**: Free (first 50k MAU)
- **API Gateway**: ~$3.50/month

**Total: ~$5-6/month**

## Support

For issues or questions:
1. Check `DEPLOYMENT_STEPS.md` troubleshooting section
2. Review CloudWatch Logs for Lambda errors
3. Verify environment variables are set correctly
4. Check AWS IAM permissions

