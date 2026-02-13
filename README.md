# News World

## Stay Updated with Real-Time News Aggregation

A modern, responsive news aggregation platform built with React and Vite. Browse news across multiple categories, search for topics, and read full articles with a beautiful dark-themed interface.

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack & Prerequisites](#tech-stack--prerequisites)
3. [Architecture Diagram](#architecture-diagram)
4. [Project Structure](#project-structure)
5. [User Instructions](#user-instructions)
6. [Developer Instructions](#developer-instructions)
7. [Contributor Expectations](#contributor-expectations)
8. [Known Issues](#known-issues)

---

## Features

| Feature | Description |
|---------|-------------|
| **Category Filtering** | Browse news by Technology, Health, Science, Entertainment, Sports |
| **Search Functionality** | Search for news on any topic using the search bar |
| **Responsive Design** | Works seamlessly on desktop, tablet, and mobile devices |
| **Real-time Updates** | Fetches latest news from NewsData.io |
| **Image Fallback** | Displays placeholder images for articles without images |
| **Smooth Animations** | Hover effects and card lift animations |
| **Dark Theme** | Modern dark interface for comfortable reading |

---

## Tech Stack & Prerequisites

### Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 18 | UI Library |
| Vite | Build Tool & Dev Server |
| Bootstrap 5 | CSS Framework |
| NewsData.io | News Data Source |
| JavaScript ES6+ | Programming Language |

### Prerequisites

- Node.js v14 or higher
- npm or yarn
- NewsData.io API key (free from [newsdata.io](https://newsdata.io))

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                      News World App                         │
└─────────────────────────────────────────────────────────────┘
                              │
                    ┌─────────┴─────────┐
                    │                   │
            ┌───────▼────────┐  ┌──────▼────────┐
            │   App.jsx      │  │  State Mgmt   │
            │  (Root)        │  │  - category   │
            └───────┬────────┘  │  - searchQuery│
                    │           └──────────────┘
        ┌───────────┼───────────┐
        │           │           │
   ┌────▼────┐ ┌───▼────┐ ┌───▼────────┐
   │ Navbar  │ │NewsBoard│ │ NewsItem   │
   │         │ │         │ │            │
   │ - Search│ │ - Fetch │ │ - Display  │
   │ - Filter│ │ - Filter│ │ - Image    │
   └────┬────┘ └───┬────┘ │ - Link     │
        │          │      └────────────┘
        └──────────┼──────────┐
                   │          │
            ┌──────▼──────┐   │
            │  NewsData.io│   │
            │  Endpoint   │   │
            └─────────────┘   │
                              │
                    ┌─────────▼──────┐
                    │  Rendered UI   │
                    │  News Cards    │
                    └────────────────┘
```

---

## Project Structure

```
NEWS-React/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation, search, category buttons
│   │   ├── NewsBoard.jsx       # Main news container, API calls
│   │   └── NewsItem.jsx        # Individual news card component
│   ├── assets/
│   │   └── logo.png            # Fallback image for articles
│   ├── App.jsx                 # Root component, state management
│   ├── App.css                 # Global styles
│   └── main.jsx                # Entry point
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies
├── .env                        # Environment variables
└── README.md                   # Documentation
```

---

## User Instructions

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd NEWS-React
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create `.env` file in root directory
   - Add: `VITE_NEWS_API_KEY=your_api_key_here`
   - Get free API key from [newsdata.io](https://newsdata.io)

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Navigate to `http://localhost:5173`

### Using the App

| Action | How To |
|--------|--------|
| **Browse Categories** | Click category buttons in navbar (Technology, Health, Science, Entertainment, Sports) |
| **Search News** | Type in search bar and click "Search" button |
| **Read Article** | Click "Read More" button on any news card |
| **Return Home** | Click "News World" logo in navbar |

---

## Developer Instructions

### Development Setup

```bash
# Install dependencies
npm install

# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Key Components

**App.jsx** - State management for category and search query
```javascript
const [category, setCategory] = useState("general");
const [searchQuery, setSearchQuery] = useState("");
```

**Navbar.jsx** - Uses useRef for search input
```javascript
const searchInputRef = useRef(null);
```

**NewsBoard.jsx** - Fetches data with useEffect
```javascript
useEffect(() => {
  // API call to NewsData.io
}, [category, searchQuery]);
```

**NewsItem.jsx** - Renders individual news cards with error handling

### React Concepts Used

- Components & Props
- Hooks (useState, useEffect, useRef)
- Conditional Rendering
- Array Iteration (.map())
- Event Handlers
- Data Fetching
- Side Effects

---

## Contributor Expectations

### Before Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Follow existing code style and structure
4. Test your changes locally

### Contribution Guidelines

| Guideline | Details |
|-----------|---------|
| **Code Style** | Use ES6+, follow existing patterns |
| **Components** | Keep components small and reusable |
| **Comments** | Add comments for complex logic |
| **Testing** | Test on desktop and mobile |
| **Commits** | Use clear, descriptive commit messages |

### Submitting Changes

1. Commit your changes
2. Push to your fork
3. Submit a pull request with description
4. Wait for review and feedback

---

## Known Issues

| Issue | Status | Workaround |
|-------|--------|-----------|
| Some articles missing images | Open | App shows fallback logo automatically |
| Search results may be limited | Open | Try more specific search terms |
| Mobile navbar collapse on search | Open | Manually close navbar after search |

---

## Made with 💗 by BlaZe

For questions or support, open an issue on the repository.

**License:** MIT
