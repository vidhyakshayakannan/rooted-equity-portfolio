# Deploying Rooted Equity Portfolio

This guide explains how to deploy your portfolio for free using popular hosting services.

## Prerequisites

-   A GitHub account (recommended)
-   Your code pushed to a GitHub repository

## Option 1: Vercel (Recommended)

Vercel is the creators of Next.js and provides excellent support for React apps.

1.  **Sign Up**: Go to [vercel.com](https://vercel.com) and sign up with GitHub.
2.  **Import Project**:
    -   Click "Add New..." -> "Project".
    -   Select your `rooted-equity-portfolio` repository from the list.
3.  **Configure**:
    -   Framework Preset: Should automatically detect "Vite".
    -   Root Directory: Leave as default (`./`).
    -   Build Command: `npm run build` (default).
    -   Output Directory: `dist` (default).
4.  **Deploy**: Click "Deploy".
    -   Vercel will build your site and give you a URL (e.g., `rooted-equity.vercel.app`).
    -   Any future pushes to `main` will automatically redeploy.

**Note**: A `vercel.json` file has been added to handle client-side routing (ensuring refreshing on subpages works).

## Option 2: Netlify

Netlify is another excellent free option for static sites.

1.  **Sign Up**: Go to [netlify.com](https://netlify.com) and sign up with GitHub.
2.  **Add New Site**:
    -   Click "Add new site" -> "Import an existing project".
    -   Select GitHub.
    -   Authorize Netlify and choose your repository.
3.  **Build Settings**:
    -   Build command: `npm run build`
    -   Publish directory: `dist`
4.  **Deploy**: Click "Deploy site".

**Note**: A `_redirects` file has been added to `public/` to handle client-side routing correctly on Netlify.

## Option 3: Manual Drag-and-Drop (Netlify)

If you don't want to use GitHub:

1.  Run `npm run build` locally in your terminal.
2.  This creates a `dist` folder in your project directory.
3.  Log in to [Netlify Drop](https://app.netlify.com/drop).
4.  Drag the `dist` folder onto the page.
5.  Your site will be live instantly!

## Troubleshooting

-   **404 on Refresh**: If you refresh on `/about` and get a 404 error, ensure `vercel.json` (for Vercel) or `_redirects` (for Netlify) was included in your deployment.
-   **Images Missing**: Ensure specific images are in `public/images` and referenced with absolute paths (e.g., `/images/my-photo.jpg`).
