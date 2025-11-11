# Quick Start: Deploy to AWS Amplify

## ✅ Your build is ready!

Your site builds successfully. Follow these steps to deploy:

## Step 1: Commit Your Changes

```bash
git add .
git commit -m "Ready for AWS Amplify deployment"
git push origin master
```

## Step 2: Deploy to AWS Amplify

1. **Go to AWS Amplify Console**
   - Visit: https://console.aws.amazon.com/amplify
   - Sign in with your AWS account

2. **Create New App**
   - Click **"New app"** → **"Host web app"**

3. **Connect Repository**
   - Choose your Git provider (GitHub/GitLab/Bitbucket)
   - Authorize if first time
   - Select your repository: `Emily-Williams-Website`
   - Select branch: `master`
   - Click **"Next"**

4. **Configure Build**
   - Amplify should auto-detect `amplify.yml`
   - If not, verify:
     - Build command: `npm run build`
     - Output directory: `dist`
   - Click **"Next"**

5. **Review & Deploy**
   - Review settings
   - Click **"Save and deploy"**
   - Wait 3-5 minutes for deployment

6. **Get Your URL**
   - Once complete, you'll see: `https://main.xxxxx.amplifyapp.com`
   - Click to view your live site! 🎉

## That's It!

Your site is now live! Every time you push to `master`, Amplify will automatically redeploy.

## Need Help?

See `AMPLIFY_DEPLOYMENT_GUIDE.md` for detailed instructions and troubleshooting.

