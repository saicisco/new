# Deployment Guide - Portfolio Website

This guide covers multiple deployment options for your portfolio website using GitHub.

---

## 🚀 Option 1: GitHub Pages (Recommended - Free & Easy)

### Prerequisites
- GitHub account
- Git initialized in your project
- Repository created on GitHub

### Setup Steps

#### 1. Push Your Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio website"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/portfolio-site.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### 2. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **GitHub Actions**
4. The deployment will start automatically on your next push!

#### 3. Access Your Site

Your site will be available at:
- **With custom domain**: `https://franciscoleiros.com`
- **Without custom domain**: `https://YOUR_USERNAME.github.io/portfolio-site/`

**Important**: If using the github.io URL format, update `vite.config.ts`:
```typescript
base: '/portfolio-site/',  // Replace with your repo name
```

### Automatic Deployments

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:
- ✅ Builds your site on every push to `main`
- ✅ Runs TypeScript checks
- ✅ Deploys to GitHub Pages
- ✅ Takes ~2-3 minutes per deployment

### Manual Deploy

To manually trigger a deployment:
1. Go to **Actions** tab in your GitHub repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

---

## 🌐 Option 2: Custom Domain Setup

### If You Have a Custom Domain (e.g., franciscoleiros.com)

#### 1. Add CNAME file

```bash
echo "franciscoleiros.com" > public/CNAME
git add public/CNAME
git commit -m "Add custom domain"
git push
```

#### 2. Configure DNS (at your domain registrar)

Add these DNS records:

**For apex domain (franciscoleiros.com):**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

#### 3. Enable HTTPS

1. Go to **Settings** → **Pages**
2. Enable **Enforce HTTPS** (wait 10-15 minutes for certificate)

DNS propagation can take 24-48 hours.

---

## ⚡ Option 3: Vercel (Fastest & Easiest)

### Deploy with Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **Add New** → **Project**
4. Select your `portfolio-site` repository
5. Keep default settings (Vite detected automatically)
6. Click **Deploy**

**Your site goes live in ~30 seconds!**

### Vercel Benefits
- ✅ Automatic deployments on every push
- ✅ Preview URLs for pull requests
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Custom domain support
- ✅ Web analytics included

---

## 🔵 Option 4: Netlify

### Deploy with Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up/login with GitHub
3. Click **Add new site** → **Import an existing project**
4. Connect to GitHub and select your repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy**

### Netlify Benefits
- ✅ Automatic deployments
- ✅ Free SSL
- ✅ Form handling
- ✅ Serverless functions support
- ✅ Split testing

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All images exist in `public/` folder
- [ ] `CV.pdf` and `CV.md` are in `public/`
- [ ] Update meta tags in `index.html` with correct URLs
- [ ] Create `public/og-image.jpg` (1200x630px) for social media
- [ ] Test build locally: `npm run build && npm run preview`
- [ ] Update repository URL in `package.json` if needed
- [ ] Check all links work correctly

---

## 🔧 Troubleshooting

### Build Fails on GitHub Actions

**Check**: TypeScript errors
```bash
npm run build  # Run locally to see errors
```

### 404 Errors After Deployment

**Fix**: Add this to `public/` if using GitHub Pages:
```html
<!-- public/404.html -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/'">
  </head>
</html>
```

### Assets Not Loading

**Check**: `vite.config.ts` base path
- Custom domain or Vercel/Netlify: `base: '/'`
- GitHub Pages (repo URL): `base: '/repo-name/'`

### Slow Build Times

**Optimize**:
```bash
# Clear cache
rm -rf node_modules dist
npm ci
npm run build
```

---

## 🎯 Recommended Deployment Strategy

| Use Case | Recommendation | Why |
|----------|---------------|-----|
| **Personal portfolio** | GitHub Pages or Vercel | Free, easy, reliable |
| **Need custom domain** | Vercel or Netlify | Easiest DNS setup |
| **Need analytics** | Vercel | Built-in analytics |
| **Need forms** | Netlify | Native form handling |
| **Want GitHub-only** | GitHub Pages | No external services |

---

## 📊 Post-Deployment

After deploying:

1. **Test on multiple devices** (mobile, tablet, desktop)
2. **Check social media previews**:
   - Test with [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - Test with [Twitter Card Validator](https://cards-dev.twitter.com/validator)
3. **Monitor performance**:
   - Run [Lighthouse audit](https://pagespeed.web.dev/)
   - Check [GTmetrix](https://gtmetrix.com/)
4. **Set up analytics** (Google Analytics, Plausible, or Vercel Analytics)
5. **Submit to Google Search Console**

---

## 🔄 Making Updates

### To update your live site:

```bash
# Make changes to your code
git add .
git commit -m "Update: description of changes"
git push

# Deployment happens automatically!
```

### Rollback to Previous Version

**GitHub Pages**:
```bash
git revert HEAD
git push
```

**Vercel/Netlify**: Use dashboard to rollback to previous deployment

---

## 📚 Additional Resources

- [GitHub Pages Docs](https://docs.github.com/pages)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Vite Production Guide](https://vitejs.dev/guide/build.html)
- [Custom Domain Setup](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

**Need help?** Check the GitHub Actions logs in your repository's Actions tab for detailed error messages.
