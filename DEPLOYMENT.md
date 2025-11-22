# GitHub Pages Deployment Guide

This document provides step-by-step instructions for deploying your personal website to GitHub Pages.

## Prerequisites

- GitHub account with access to this repository
- Repository must be public (or GitHub Pro for private repo deployment)

## Deployment Steps

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/tanishq20011430/Personal_website`
2. Click on **Settings** (top menu)
3. In the left sidebar, scroll down and click **Pages**
4. Under **Source**, select **GitHub Actions** from the dropdown
5. That's it! The workflow is already configured.

### Step 2: Merge This Pull Request

1. Review the changes in this PR
2. Click **Merge Pull Request**
3. Confirm the merge

### Step 3: Monitor Deployment

1. Go to the **Actions** tab in your repository
2. You'll see a workflow run named "Deploy static content to Pages"
3. Click on it to see the deployment progress
4. Wait for it to complete (usually takes 1-2 minutes)

### Step 4: Access Your Website

Once the workflow completes successfully:

1. Go back to **Settings** > **Pages**
2. You'll see a message: "Your site is live at https://tanishq20011430.github.io/Personal_website/"
3. Click the link or visit the URL directly

## Troubleshooting

### Issue: Workflow doesn't run after merge

**Solution**: 
- Ensure you merged to the `main` branch
- Check the Actions tab for any errors
- Verify that GitHub Actions are enabled in repository settings

### Issue: Page shows 404 Not Found

**Solution**:
- Wait a few more minutes for deployment to complete
- Check that `index.html` exists in the root of your repository
- Verify the workflow completed successfully

### Issue: Page shows but with broken styles

**Solution**:
- Check browser console for errors
- Verify that `styles.css` and `script.js` are in the root directory
- Ensure all external resources (fonts, icons) are accessible

## Manual Deployment Trigger

You can also manually trigger a deployment:

1. Go to **Actions** tab
2. Click on "Deploy static content to Pages" workflow
3. Click **Run workflow** button
4. Select the `main` branch
5. Click **Run workflow**

## Updating Your Website

After initial deployment, any updates are simple:

1. Make changes to your files (`index.html`, `styles.css`, `script.js`)
2. Commit and push to the `main` branch
3. GitHub Actions will automatically deploy your changes
4. Your site will be updated within 1-2 minutes

## File Structure for Deployment

The following files are essential for deployment:
```
├── .github/workflows/static.yml  # Required for GitHub Pages deployment
├── index.html                     # Main page (required)
├── styles.css                     # Styles
├── script.js                      # Scripts
└── README.md                      # Documentation
```

## Important Notes

- The workflow is triggered on pushes to the `main` branch
- You can also trigger deployments manually from the Actions tab
- The site URL will be: `https://tanishq20011430.github.io/Personal_website/`
- Changes typically go live within 1-2 minutes of a successful workflow run

## Next Steps

After deployment:
1. ✅ Share your website URL with others
2. ✅ Add it to your resume and LinkedIn profile
3. ✅ Keep your content updated regularly
4. ✅ Consider adding a custom domain (optional)

## Custom Domain (Optional)

If you want to use a custom domain:

1. Purchase a domain from a domain registrar
2. Go to **Settings** > **Pages**
3. Under **Custom domain**, enter your domain
4. Follow the DNS configuration instructions provided by GitHub
5. Wait for DNS propagation (can take up to 24 hours)

---

Need help? Open an issue in this repository or check the [GitHub Pages documentation](https://docs.github.com/en/pages).
