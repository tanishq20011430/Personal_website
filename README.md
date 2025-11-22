# Personal Website - Tanishq Soni

A modern, responsive personal portfolio website showcasing data analytics and data science expertise.

## 🌐 Live Website

This website is deployed using GitHub Pages. Once merged to the main branch, it will be automatically available at:
`https://tanishq20011430.github.io/Personal_website/`

## 📋 Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Built with Tailwind CSS and custom styling
- **Interactive Elements**: Smooth animations and transitions
- **Professional Portfolio**: Showcasing skills, projects, and experience

## 🚀 Deployment

This website is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Deployment Process

1. **Automatic Deployment**: Every push to the `main` branch triggers an automatic deployment (once GitHub Pages is configured to use GitHub Actions)
2. **Manual Deployment**: You can also trigger deployment manually from the Actions tab
3. **GitHub Pages Configuration**: The workflow automatically handles all deployment steps

### How to Deploy

#### First-Time Setup

1. Go to your repository settings on GitHub
2. Navigate to **Settings** > **Pages**
3. Under "Source", select **GitHub Actions**
4. The workflow will automatically deploy the site

#### Making Updates

1. Make your changes to `index.html`, `styles.css`, or `script.js`
2. Commit and push to the `main` branch
3. GitHub Actions will automatically deploy your changes
4. Your site will be updated within 1-2 minutes

## 📁 Project Structure

```
.
├── .github/
│   └── workflows/
│       └── static.yml          # GitHub Actions deployment workflow
├── index.html                  # Main HTML file
├── styles.css                  # Custom CSS styles
├── script.js                   # JavaScript functionality
└── README.md                   # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom styles and animations
- **JavaScript**: Interactive functionality
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Lucide Icons**: Modern icon library
- **Google Fonts**: Inter and JetBrains Mono fonts

## 💻 Local Development

To run the website locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/tanishq20011430/Personal_website.git
   cd Personal_website
   ```

2. Open `index.html` in your browser, or use a local server:
   ```bash
   # Using Python
   python -m http.server 8080
   
   # Using Node.js (if you have npx)
   npx serve
   ```

3. Visit `http://localhost:8080` in your browser

## 📝 Making Changes

1. Edit the HTML, CSS, or JavaScript files as needed
2. Test locally by opening `index.html` in a browser
3. Commit your changes
4. Push to the `main` branch for automatic deployment

## 📄 License

This is a personal portfolio website. All rights reserved.

## 👤 Author

**Tanishq Soni**
- Data Analyst | Data Scientist
- Turning Messy Data into Measurable Business Outcomes

---

For any questions or issues, please open an issue in this repository.
