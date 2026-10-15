# Block3AI Website

Source repository for the Block3AI developer portfolio website.

Block3AI is a personal development portfolio focused on practical work across artificial intelligence, blockchain, Web3, and Web2 coding projects. The website is intentionally lightweight and low-maintenance; ongoing experiments, coding exercises, prototypes, and development notes live in **The Lab** on GitHub.

## Website

https://block3ai.com

## The Lab

https://github.com/Block3AI/TheLab

The Lab is the active build-and-learn workspace. It is where smaller projects, experiments, coding exercises, prototypes, developer notes, and evolving technical work are documented so the main Block3AI website can remain a stable professional overview.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Responsive design
- Static hosting
- No framework or build step required

## Repository Structure

```text
block3ai-website/
├── index.html
├── projects.html
├── about.html
├── contact.html
├── privacy-policy.html
├── terms-and-conditions.html
├── .htaccess
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── main.js
│       └── chat.js
├── .gitignore
└── README.md
```

## Local Development

Open `index.html` directly in a browser or use a local development server such as Live Server from Cursor/VS Code.

## Deployment

The production website is hosted as a static site on Hostinger.

### GitHub auto-deployment

Connect `https://github.com/Block3AI/block3ai-website` in the **block3ai.com** dashboard under **Advanced → Git**. Select branch **main** and deployment directory **public_html**. This is a static HTML site: no install, build, or start command is required.

Before the first deployment, back up the current hosted files and check for hosting-only files or subdirectories that must be preserved. Use **Connect with GitHub**, authorize only this repository where possible, select it, and deploy. Enable **Auto-deployment** in the Git overview. Setup is complete only when Hostinger reports a successful deployment for the expected commit and the live site shows that change.

For future updates, preview changes locally, commit and push to `main`, then check Hostinger's deployment history and the live website. Check all six pages, mobile navigation, and project links, including `/privacy-policy` and `/terms-and-conditions`. If an update fails, inspect the deployment log; to roll back code, revert the offending commit and push the revert.

See [Hostinger's Git deployment guide](https://www.hostinger.com/support/1583302-how-to-deploy-a-git-repository-in-hostinger/) for the current dashboard flow. The account connection and deployment status are managed in Hostinger, not by this README.

### Manual deployment fallback

Upload the following directly into the site's `public_html` directory:

- `index.html`
- `projects.html`
- `about.html`
- `contact.html`
- `privacy-policy.html`
- `terms-and-conditions.html`
- `.htaccess` (serves the extensionless legal URLs on Apache/LiteSpeed)
- `robots.txt`
- `sitemap.xml`
- `assets/`

`README.md` and `.gitignore` are repository files and do not need to be deployed to `public_html`.

The legal pages use `.htaccess` rewrite rules for their public URLs. A basic local static server may only serve the `.html` files; verify the extensionless URLs on Hostinger after deployment. If hosting already has a `.htaccess` file, merge these two scoped rewrite rules with its existing settings.

## Development Approach

Block3AI.com is intended to remain a stable professional portfolio and overview rather than a continuously changing project log.

Major portfolio-level work may be added to the website when appropriate. Day-to-day development, learning projects, experiments, prototypes, and technical progress are maintained in The Lab and other GitHub repositories.

## Status

Current master version: v2 stable portfolio.
