# Simple AWS Deployment Guide

Since there's no authentication or data persistence needed, deploying to AWS is straightforward. Each user's browser session is naturally isolated.

## Deployment Options

### Option 1: AWS Amplify (Recommended - Easiest)

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Go to AWS Amplify Console**
   - Click "New app" → "Host web app"
   - Connect your repository
   - Select your branch

3. **Configure build settings**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Use the provided `amplify.yml` file

4. **Deploy**
   - Amplify will automatically build and deploy
   - You'll get a URL like: `https://main.xxxxx.amplifyapp.com`

**Cost**: Free tier includes 1000 build minutes/month and 15 GB storage

### Option 2: S3 + CloudFront (More Control)

1. **Build your app:**
   ```bash
   npm run build
   ```

2. **Create S3 bucket:**
   ```bash
   aws s3 mb s3://emily-williams-website --region us-east-1
   ```

3. **Upload files:**
   ```bash
   aws s3 sync dist/ s3://emily-williams-website --delete
   ```

4. **Enable static website hosting:**
   ```bash
   aws s3 website s3://emily-williams-website \
     --index-document index.html \
     --error-document index.html
   ```

5. **Create CloudFront distribution** (for HTTPS and CDN):
   - Use AWS Console or CloudFormation
   - Point to your S3 bucket
   - Enable HTTPS

**Cost**: ~$0.50/month for low traffic

### Option 3: Netlify/Vercel (Easiest, Not AWS)

1. **Push to GitHub**
2. **Connect to Netlify/Vercel**
3. **Auto-deploy**

**Cost**: Free tier available

## User Isolation

Since there's no server-side data:
- ✅ Each browser session is naturally isolated
- ✅ No shared state between users
- ✅ Form submissions are client-side only (toast notifications)
- ✅ No authentication needed

## Environment Variables

No environment variables needed for this simple setup.

## Custom Domain

1. **Buy a domain** (Route 53, Namecheap, etc.)
2. **Add DNS records** pointing to your CloudFront/Amplify distribution
3. **Configure SSL** (automatic with CloudFront/Amplify)

## Monitoring

- **CloudWatch** (if using AWS): Monitor S3/CloudFront access
- **Google Analytics**: Add tracking code for visitor analytics
- **Amplify Console**: Built-in analytics if using Amplify

## Cost Estimate

**AWS Amplify**: Free tier covers most use cases
**S3 + CloudFront**: ~$0.50-2/month for low-medium traffic
**Custom Domain**: ~$10-15/year

## Next Steps

1. Choose deployment option
2. Build and deploy
3. Test the site
4. Add custom domain (optional)
5. Set up monitoring/analytics (optional)

