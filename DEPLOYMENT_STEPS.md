# Step-by-Step Deployment Guide

## Prerequisites

1. AWS Account with appropriate permissions
2. Node.js 18+ installed
3. AWS CLI configured (`aws configure`)
4. Serverless Framework installed (`npm install -g serverless`)

## Step 1: Set Up AWS Cognito User Pool

### Option A: Using AWS Console

1. Go to AWS Cognito Console
2. Click "Create user pool"
3. Configure sign-in options:
   - Select "Email" as sign-in option
4. Configure security requirements:
   - Password policy: Minimum 8 characters, require uppercase, lowercase, numbers
5. Configure sign-up experience:
   - Enable self-registration
   - Required attributes: Email, Name
6. Configure message delivery:
   - Use Cognito default email
7. Review and create
8. Note down:
   - User Pool ID (e.g., `us-east-1_XXXXXXXXX`)
   - App Client ID (from "App integration" tab)

### Option B: Using AWS CLI

```bash
# Create user pool
aws cognito-idp create-user-pool \
  --pool-name emily-williams-users \
  --auto-verified-attributes email \
  --username-attributes email \
  --policies PasswordPolicy={MinimumLength=8,RequireUppercase=true,RequireLowercase=true,RequireNumbers=true,RequireSymbols=false} \
  --schema Name=email,AttributeDataType=String,Required=true,Mutable=true Name=name,AttributeDataType=String,Required=false,Mutable=true

# Create app client (replace USER_POOL_ID)
aws cognito-idp create-user-pool-client \
  --user-pool-id USER_POOL_ID \
  --client-name emily-williams-web-client \
  --generate-secret \
  --explicit-auth-flows ALLOW_USER_PASSWORD_AUTH ALLOW_REFRESH_TOKEN_AUTH ALLOW_USER_SRP_AUTH
```

## Step 2: Create DynamoDB Tables

### Option A: Using AWS Console

1. Go to DynamoDB Console
2. Create table: `emily-williams-orders`
   - Partition key: `PK` (String)
   - Sort key: `SK` (String)
   - Add GSI: `GSI1`
     - Partition key: `GSI1PK` (String)
     - Sort key: `GSI1SK` (String)
   - Billing mode: On-demand

### Option B: Using AWS CLI

```bash
aws dynamodb create-table \
  --table-name emily-williams-orders \
  --attribute-definitions \
    AttributeName=PK,AttributeType=S \
    AttributeName=SK,AttributeType=S \
    AttributeName=GSI1PK,AttributeType=S \
    AttributeName=GSI1SK,AttributeType=S \
  --key-schema \
    AttributeName=PK,KeyType=HASH \
    AttributeName=SK,KeyType=RANGE \
  --global-secondary-indexes \
    IndexName=GSI1,KeySchema=[{AttributeName=GSI1PK,KeyType=HASH},{AttributeName=GSI1SK,KeyType=RANGE}],Projection={ProjectionType=ALL} \
  --billing-mode PAY_PER_REQUEST
```

## Step 3: Install Frontend Dependencies

```bash
npm install amazon-cognito-identity-js
```

## Step 4: Configure Environment Variables

1. Copy `.env.example` to `.env`
2. Fill in your Cognito and API Gateway values:

```bash
cp .env.example .env
```

Edit `.env` with your actual values.

## Step 5: Deploy Backend API (Serverless)

1. Install Serverless dependencies:

```bash
cd aws-config/lambda
npm init -y
npm install @aws-sdk/client-dynamodb @aws-sdk/lib-dynamodb aws-jwt-verify
```

2. Update `serverless.yml` with your Cognito User Pool ARN
3. Deploy:

```bash
serverless deploy
```

4. Note the API Gateway endpoint URL from the output

## Step 6: Update Frontend Environment Variables

Update `.env` with the API Gateway endpoint:

```
VITE_API_BASE_URL=https://your-api-id.execute-api.us-east-1.amazonaws.com/prod
```

## Step 7: Build and Deploy Frontend

### Option A: AWS Amplify (Recommended)

1. Push code to GitHub/GitLab/Bitbucket
2. Go to AWS Amplify Console
3. Click "New app" → "Host web app"
4. Connect your repository
5. Configure build settings (use `amplify.yml`)
6. Add environment variables:
   - `VITE_COGNITO_USER_POOL_ID`
   - `VITE_COGNITO_CLIENT_ID`
   - `VITE_API_BASE_URL`
7. Deploy

### Option B: S3 + CloudFront (Manual)

1. Build the app:

```bash
npm run build
```

2. Create S3 bucket:

```bash
aws s3 mb s3://emily-williams-website --region us-east-1
```

3. Upload files:

```bash
aws s3 sync dist/ s3://emily-williams-website --delete
```

4. Enable static website hosting:

```bash
aws s3 website s3://emily-williams-website --index-document index.html --error-document index.html
```

5. Create CloudFront distribution (use AWS Console or CloudFormation)

6. Configure CloudFront to use the S3 bucket

## Step 8: Test User Isolation

1. Create two test user accounts:
   - User 1: test1@example.com
   - User 2: test2@example.com

2. Sign in as User 1 and submit an order
3. Sign out and sign in as User 2
4. Verify User 2 cannot see User 1's orders
5. Submit an order as User 2
6. Verify each user only sees their own orders

## Step 9: Set Up CORS (if needed)

If you encounter CORS issues:

1. In API Gateway console, enable CORS on your endpoints
2. Add your frontend domain to allowed origins
3. Redeploy API Gateway

## Troubleshooting

### Authentication Issues
- Verify Cognito User Pool ID and Client ID are correct
- Check that users have verified their email (if required)
- Check browser console for token errors

### API Errors
- Verify Lambda function has correct IAM permissions
- Check CloudWatch Logs for Lambda errors
- Verify DynamoDB table exists and has correct schema

### CORS Errors
- Ensure API Gateway CORS is configured
- Check that frontend URL is in allowed origins
- Verify preflight OPTIONS requests are handled

## Security Checklist

- [ ] Cognito User Pool has strong password policy
- [ ] API Gateway uses Cognito authorizer
- [ ] Lambda functions validate userId from token (never from request body)
- [ ] DynamoDB queries filter by userId
- [ ] Environment variables are not committed to git
- [ ] HTTPS is enabled (CloudFront/Amplify)
- [ ] CORS is properly configured

## Cost Monitoring

Set up AWS Cost Alerts:
1. Go to AWS Billing Console
2. Set up budget alerts
3. Monitor:
   - Lambda invocations
   - DynamoDB read/write units
   - API Gateway requests
   - CloudFront data transfer

## Next Steps

- Set up CI/CD pipeline
- Add monitoring and logging (CloudWatch, X-Ray)
- Implement rate limiting
- Add user order history page
- Set up email notifications for new orders

