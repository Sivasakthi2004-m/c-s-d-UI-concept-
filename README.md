# 🔐 Cipher Seek Dashboard

A modern, sleek cybersecurity monitoring dashboard built with React, TypeScript, and Tailwind CSS. Track keywords, monitor alerts, view reports, and manage your security infrastructure with an intuitive interface.

![Dashboard Preview](https://img.shields.io/badge/React-18.3.1-blue?logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?logo=typescript) ![Vite](https://img.shields.io/badge/Vite-5.4.19-purple?logo=vite)

## ✨ Features

- 📊 **Interactive Dashboard** - Real-time monitoring with charts and analytics
- 🔍 **Keyword Tracking** - Monitor and manage security keywords
- 🚨 **Alert System** - Stay informed with real-time notifications
- 📈 **Reports** - Generate and view detailed security reports
- 🔎 **Search** - Powerful search across all data
- ⚙️ **Settings** - Customize your dashboard experience
- 🌙 **Dark Mode** - Clean, modern dark-themed UI

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router DOM
- **Charts**: Recharts
- **State Management**: TanStack Query
- **Form Handling**: React Hook Form + Zod

## 📋 Prerequisites

Before installing, make sure you have:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

## 🚀 Installation

### For Windows Users:

#### 1. Install Prerequisites
- Download and install [Node.js](https://nodejs.org/) (LTS version)
- Download and install [Git](https://git-scm.com/download/win)
- Verify installation by opening **Command Prompt** and running:
  ```bash
  node --version
  npm --version
  git --version
  ```

#### 2. Clone the Repository
Open **Command Prompt** or **Git Bash**:
```bash
cd Desktop
git clone https://github.com/YOUR-USERNAME/cipher-seek-dash.git
cd cipher-seek-dash
```

#### 3. Install Dependencies
```bash
npm install
```
*This may take 2-5 minutes depending on your internet connection*

#### 4. Start Development Server
```bash
npm run dev
```

#### 5. Open in Browser
Navigate to: **http://localhost:5173/**

---

### For Mac/Linux Users:

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/cipher-seek-dash.git

# Navigate to project directory
cd cipher-seek-dash

# Install dependencies
npm install

# Start development server
npm run dev
```

Open your browser and visit: **http://localhost:5173/**

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm test` | Run tests |
| `npm run test:watch` | Run tests in watch mode |

## 📁 Project Structure

```
cipher-seek-dash-main/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Layout.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   └── ...
│   ├── pages/          # Page components
│   │   ├── Index.tsx   # Dashboard
│   │   ├── Keywords.tsx
│   │   ├── Alerts.tsx
│   │   ├── Reports.tsx
│   │   ├── Search.tsx
│   │   └── Settings.tsx
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── index.html          # HTML template
├── package.json        # Dependencies
└── vite.config.ts      # Vite configuration
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory for any environment-specific configurations:
```env
VITE_API_URL=your_api_url_here
```

### Customization
- **Colors**: Edit `tailwind.config.ts` to customize the color scheme
- **Components**: All UI components use shadcn/ui - modify in `src/components/ui/`

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Dependencies Installation Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clean build
npm run build -- --force
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Sivasakthi2004-m**
- GitHub: [@Sivasakthi2004-m](https://github.com/Sivasakthi2004-m)

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)

---

⭐ **Star this repo if you find it helpful!**
