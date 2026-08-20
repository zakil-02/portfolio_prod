# Personal Portfolio

A modern, responsive portfolio for a Data Scientist / ML & Data Engineer — built with React and a custom, Apple-inspired dark design system. Showcases experience, education, projects, and skills with an animated hero, scroll-reveal sections, a filterable project grid, and a glassmorphism navbar.

## ✨ Design

- Cohesive design-token system (layered neutrals + a warm amber brand gradient) in `src/App.css`
- Fluid typography (`clamp()`), custom scroll-reveal (`components/Reveal.js`), and `prefers-reduced-motion` support
- Fully responsive (mobile → desktop) with a scroll-spy navbar and filterable projects

## 🌐 Live Website

**[View Live Portfolio](https://zakil-02.github.io/portfolio_prod)**

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone git@github.com-personal:zakil-02/portfolio_prod.git
cd portfolio_prod
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

### `npm start`
Runs the app in development mode with hot reload.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. The build is optimized and minified.

### `npm run deploy`
Builds and deploys the app to GitHub Pages. This is what updates the live website.

## 🚢 Deployment

This portfolio is deployed using GitHub Pages. To deploy updates:

### Step 1: Make Your Changes
Edit your code, test locally with `npm start`

### Step 2: Commit Changes
```bash
git add .
git commit -m "Description of your changes"
git push origin main
```

### Step 3: Deploy to GitHub Pages
```bash
npm run deploy
```

This command will:
1. Build an optimized production version
2. Push the build to the `gh-pages` branch
3. Update the live website at https://zakil-02.github.io/portfolio_prod

**Note:** It may take 1-2 minutes for changes to appear. Hard refresh your browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows) to see updates immediately.

## 🛠️ Built With

- **React 19** - Frontend framework
- **React Bootstrap** - Layout & UI components
- **Custom CSS design system** - Design tokens, gradients, motion
- **Animate.css** + IntersectionObserver - Entrance & scroll-reveal animations
- **EmailJS** - Contact form functionality
- **GitHub Pages** - Hosting

## 📁 Project Structure

```
portfolio_prod/
├── public/           # Static files
├── src/
│   ├── assets/      # Images, fonts, reports
│   ├── components/  # React components
│   ├── data/        # Project data
│   ├── App.js       # Main app component
│   └── index.js     # Entry point
├── build/           # Production build (generated)
└── package.json     # Dependencies and scripts
```

## 🔧 Configuration

### Updating the Homepage URL

If you fork this project, update the homepage in `package.json`:

```json
"homepage": "https://your-username.github.io/your-repo-name"
```

### Updating Deployment Repository

Update the deploy script in `package.json`:

```json
"deploy": "gh-pages -d build -r git@github.com-personal:your-username/your-repo-name.git"
```

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Zakaria Akil**
- GitHub: [@zakil-02](https://github.com/zakil-02)
- Email: zakaria.akil.2002@gmail.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using React and deployed on GitHub Pages
