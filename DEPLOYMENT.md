# GitHub Pages Deployment Setup

This document provides step-by-step instructions for setting up GitHub Pages deployment for The Third High Experience project.

## Repository Configuration

### 1. Enable GitHub Pages

1. Go to your GitHub repository: https://github.com/dushyantgupta72/thethirdhighexperience
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy when you push to the main branch

### 2. Verify Workflow Permissions

1. In your repository, go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, ensure **Read and write permissions** is selected
3. Check **Allow GitHub Actions to create and approve pull requests** if needed

## Deployment Process

### Automatic Deployment

- The site automatically deploys when you push changes to the `main` branch
- GitHub Actions workflow builds the project and deploys to GitHub Pages
- The deployment typically takes 2-5 minutes to complete

### Manual Deployment

If you need to trigger a manual deployment:

1. Go to **Actions** tab in your repository
2. Select the **Deploy to GitHub Pages** workflow
3. Click **Run workflow** → **Run workflow**

## Accessing Your Site

Once deployed, your site will be available at:
**https://dushyantgupta72.github.io/thethirdhighexperience/**

## Troubleshooting

### Common Issues

1. **"Creating Pages deployment failed" / HttpError: Not Found (404)**  
   This means GitHub Pages is not using **GitHub Actions** as the source. Fix it:
   - Go to **Settings** → **Pages** (left sidebar).
   - Under **Build and deployment**, set **Source** to **GitHub Actions** (not "Deploy from a branch").
   - Save and re-run the workflow. The deploy-pages action only works when Source is GitHub Actions.

2. **Build Failures**: Check the Actions tab for error logs.

3. **Assets Not Loading**: Verify the `basePath` and `assetPrefix` in `next.config.ts`.

### Checking Deployment Status

1. Go to **Actions** tab to see workflow runs
2. Click on a specific run to see detailed logs
3. Green checkmark = successful deployment
4. Red X = failed deployment (check logs for errors)

## Configuration Files

The following files have been configured for GitHub Pages deployment:

- `next.config.ts` - Next.js configuration with static export
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `package.json` - Build scripts for deployment
- `public/.nojekyll` - Prevents Jekyll processing

## Development vs Production

- **Development**: `npm run dev` - runs with hot reload at http://localhost:3000
- **Production Build**: `npm run build:github` - creates static export in `out/` directory
- **Local Production Test**: After building, serve the `out/` directory with any static server

## Support

If you encounter issues with deployment, check:
1. GitHub Actions logs in the repository
2. GitHub Pages settings in repository settings
3. Next.js static export documentation
