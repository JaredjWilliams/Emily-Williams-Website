# AWS Amplify Deployment Guide

Follow these steps to deploy your Emily Williams website to AWS Amplify.

## Prerequisites

1. ✅ AWS Account (if you don't have one, sign up at https://aws.amazon.com)
2. ✅ GitHub/GitLab/Bitbucket account (or AWS CodeCommit)
3. ✅ Your code committed to a Git repository

## Step 1: Prepare Your Repository

### 1.1 Initialize Git (if not already done)

```bash
git init
git add .
git commit -m "Initial commit - ready for Amplify deployment"
```

### 1.2 Push to GitHub/GitLab/Bitbucket

**Option A: GitHub (Recommended)**

1. Create a new repository on GitHub (don't initialize with README)
2. Push your code:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

**Option B: GitLab**

```bash
git remote add origin https://gitlab.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

**Option C: Bitbucket**

```bash
git remote add origin https://bitbucket.org/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to AWS Amplify

### 2.1 Access AWS Amplify Console

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Sign in with your AWS account
3. Click **"New app"** → **"Host web app"**

### 2.2 Connect Repository

1. Choose your Git provider (GitHub, GitLab, Bitbucket, or AWS CodeCommit)
2. **First time?** Click **"Authorize"** to connect your Git account
3. Select your repository from the list
4. Select the branch (usually `main` or `master`)
5. Click **"Next"**

### 2.3 Configure Build Settings

Amplify should auto-detect your build settings. Verify:

- **App name**: `emily-williams-website` (or your preferred name)
- **Environment**: `amplify.yml` (should be auto-detected)
- **Build settings**: Should show:
  ```
  version: 1
  frontend:
    phases:
      preBuild:
        commands:
          - npm ci
      build:
        commands:
          - npm run build
    artifacts:
      baseDirectory: dist
      files:
        - '**/*'
  ```

If it doesn't auto-detect, click **"Edit"** and paste the contents of `amplify.yml`.

### 2.4 Review and Deploy

1. Review the settings
2. Click **"Save and deploy"**

### 2.5 Wait for Deployment

- Amplify will:
  1. Clone your repository
  2. Install dependencies (`npm ci`)
  3. Build your app (`npm run build`)
  4. Deploy to CloudFront CDN

- This takes **3-5 minutes** for the first deployment
- You'll see live build logs in the console

## Step 3: Access Your Website

Once deployment completes:

1. You'll see a **green checkmark** ✅
2. Click on your app name
3. You'll see a URL like: `https://main.xxxxxxxxxxxx.amplifyapp.com`
4. **Click the URL** to view your live site!

## Step 4: Custom Domain (Optional)

### 4.1 Add Custom Domain

1. In Amplify Console, click **"Domain management"** (left sidebar)
2. Click **"Add domain"**
3. Enter your domain name (e.g., `emilywilliamsart.com`)
4. Click **"Configure domain"**

### 4.2 Configure DNS

1. Amplify will provide DNS records to add
2. Go to your domain registrar (GoDaddy, Namecheap, Route 53, etc.)
3. Add the CNAME or A records provided by Amplify
4. Wait for DNS propagation (5-60 minutes)

### 4.3 SSL Certificate

- Amplify automatically provisions SSL certificates via AWS Certificate Manager
- HTTPS will be enabled automatically once DNS propagates

## Step 5: Continuous Deployment

✅ **Automatic Deployments**: Every time you push to your main branch, Amplify will automatically rebuild and redeploy your site!

### To update your site:

```bash
git add .
git commit -m "Update website"
git push origin main
```

Amplify will detect the push and start a new deployment automatically.

## Troubleshooting

### Build Fails

1. **Check build logs** in Amplify Console
2. **Common issues:**
   - Missing dependencies → Check `package.json`
   - TypeScript errors → Run `npm run build` locally first
   - Missing files → Check `.gitignore` isn't excluding needed files

### Site Shows 404

1. **Check `amplify.yml`** - Make sure `baseDirectory: dist` is correct
2. **Verify build output** - Check if `dist` folder is created during build
3. **Check `index.html`** - Should be in the root of `dist` folder

### Environment Variables

If you need environment variables later:

1. Go to **"App settings"** → **"Environment variables"**
2. Add variables (e.g., `VITE_API_URL`)
3. Redeploy the app

## Monitoring & Analytics

### View Analytics

1. Click **"Analytics"** in Amplify Console
2. View:
   - Page views
   - Unique visitors
   - Top pages
   - Geographic distribution

### View Logs

1. Click **"Monitoring"** → **"Logs"**
2. View build logs and runtime logs

## Cost

**AWS Amplify Free Tier:**
- ✅ 1,000 build minutes/month
- ✅ 15 GB storage
- ✅ 5 GB served/month
- ✅ Perfect for small-medium sites

**After free tier:**
- Build minutes: $0.01/minute
- Storage: $0.023/GB/month
- Data transfer: $0.15/GB

**Estimated cost for typical site**: **$0-5/month**

## Quick Reference

**Your Amplify App URL**: `https://main.xxxxxxxxxxxx.amplifyapp.com`

**Update site**:
```bash
git push origin main
```

**View deployments**: AWS Amplify Console → Your App → Deployments

**View logs**: AWS Amplify Console → Your App → Monitoring → Logs

## Next Steps

1. ✅ Test your live site
2. ✅ Share the URL
3. ✅ Set up custom domain (optional)
4. ✅ Monitor analytics
5. ✅ Make updates and push to Git!

## Support

- **AWS Amplify Docs**: https://docs.amplify.aws
- **AWS Support**: https://aws.amazon.com/support
- **Build Issues**: Check CloudWatch Logs in Amplify Console

---

**🎉 Congratulations! Your site is now live on AWS Amplify!**

