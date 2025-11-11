# Pre-Deployment Checklist

## ✅ Before Deploying to AWS Amplify

### 1. Test Build Locally
```bash
npm install
npm run build
```
- [ ] Build completes without errors
- [ ] `dist` folder is created
- [ ] `dist/index.html` exists

### 2. Commit All Changes
```bash
git add .
git commit -m "Prepare for AWS Amplify deployment"
git push origin master
```

### 3. Verify Files Are Ready
- [x] `amplify.yml` exists (build configuration)
- [x] `package.json` has build script
- [x] `index.html` exists in root
- [x] `vite.config.ts` is configured

### 4. Deploy to Amplify
- [ ] Go to AWS Amplify Console
- [ ] Connect repository
- [ ] Deploy!

## Quick Commands

**Test build:**
```bash
npm run build
```

**Commit changes:**
```bash
git add .
git commit -m "Ready for deployment"
git push origin master
```

**View built files:**
```bash
ls -la dist/
```

