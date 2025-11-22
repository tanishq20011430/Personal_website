# Tanishq Soni - Personal Website

A modern, interactive personal portfolio website showcasing data analytics and data science projects.

## 🌐 Live Site

This website is automatically deployed to GitHub Pages using GitHub Actions.

**Live URL:** `https://tanishq20011430.github.io/Personal_website/`

## 🚀 Deployment

The site is configured for automatic deployment to GitHub Pages. The deployment happens automatically when:
- Code is pushed to the `main` branch
- Manually triggered from the GitHub Actions tab

### Deployment Workflow

The deployment uses the `.github/workflows/static.yml` workflow file which:
1. Checks out the repository
2. Configures GitHub Pages
3. Uploads the static files
4. Deploys to GitHub Pages

### Manual Deployment

To manually trigger a deployment:
1. Go to the [Actions tab](https://github.com/tanishq20011430/Personal_website/actions)
2. Select the "Deploy static content to Pages" workflow
3. Click "Run workflow"
4. Select the `main` branch and click "Run workflow"

## 🛠️ Technology Stack

- **HTML5** - Structure and content
- **CSS3** - Styling with custom animations
- **JavaScript** - Interactive features and functionality
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Lucide Icons** - Modern icon library (via CDN)
- **Google Fonts** - Inter and JetBrains Mono fonts

## 📁 Project Structure

```
Personal_website/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├── .github/
│   └── workflows/
│       └── static.yml  # GitHub Pages deployment workflow
└── README.md           # This file
```

## 🔧 Local Development

To run the website locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/tanishq20011430/Personal_website.git
   cd Personal_website
   ```

2. Start a local web server:
   ```bash
   # Using Python 3
   python3 -m http.server 8080

   # Or using Python 2
   python -m SimpleHTTPServer 8080

   # Or using Node.js http-server
   npx http-server -p 8080
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

## ✨ Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Terminal** - Custom command-line interface for navigation
- **Animated Elements** - Smooth animations and transitions
- **Project Showcase** - Featured projects with detailed descriptions
- **Contact Form** - Get in touch functionality
- **Copy Email** - Quick email copy functionality

## 📝 Content Sections

1. **Hero Section** - Introduction and call-to-action
2. **Projects** - Featured data analytics and data science projects
3. **Experience** - Professional work history
4. **Skills** - Technical skills and technologies
5. **Interactive Terminal** - Command-line interface for exploration
6. **Contact** - Contact form and social links

## 🔐 GitHub Pages Setup

To enable GitHub Pages for this repository:

1. Go to repository Settings
2. Navigate to "Pages" in the sidebar
3. Under "Build and deployment":
   - Source: Select "GitHub Actions"
4. The site will be available at: `https://tanishq20011430.github.io/Personal_website/`

## 📄 License

© 2025 Tanishq Soni. All rights reserved.

## 📧 Contact

- **Email:** tanishqsoni81@gmail.com
- **LinkedIn:** [tanishq-soni14301](https://www.linkedin.com/in/tanishq-soni14301/)
- **GitHub:** [tanishq20011430](https://github.com/tanishq20011430)
