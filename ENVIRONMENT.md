# Environment and Deployment Settings

This document outlines the external configuration and environment settings required for the CS Interview Study project.

## GitHub Pages Configuration

To ensure successful deployment, verify the following settings in your GitHub repository:

### 1. Enable GitHub Actions

Go to **Settings > Actions > General** and ensure that "Allow all actions and reusable workflows" is selected.

### 2. Workflow Permissions

Go to **Settings > Actions > General > Workflow permissions** and ensure:

- "Read and write permissions" is selected (required for the `peaceiris/actions-gh-pages` action to push to the `gh-pages` branch).
- "Allow GitHub Actions to create and approve pull requests" is checked if you plan to use automated PR tools.

### 3. GitHub Pages Source

After the first successful run of the deployment workflow:

1. Go to **Settings > Pages**.
2. Under **Build and deployment > Branch**, ensure the branch is set to `gh-pages` and the folder is set to `/(root)`.

## Docusaurus Configuration

Key deployment URLs are configured in `website/docusaurus.config.ts`:

- **URL**: `https://parkblo.github.io`
- **Base URL**: `/CS-Interview-Study/`

If you move the repository or use a custom domain, update these values accordingly.

## Local Development

To run the site locally for testing:

```bash
cd website
npm install
npm start
```

This will start a development server at `http://localhost:3000/CS-Interview-Study/`.
