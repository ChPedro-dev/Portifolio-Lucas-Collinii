# Project Context: Portfolio SPA

This is a professional portfolio Single Page Application (SPA) built with React. It showcases video editing, design, and music production work.

## 🛠 Tech Stack
- **Framework:** React 19
- **Build Tool:** Create React App (via `react-scripts`)
- **Audio Visualization:** `wavesurfer.js`
- **Styling:** Vanilla CSS (component-scoped)
- **Icons/Media:** SVG, PNG, MP4, MOV, WAV (stored locally)

## 🏗 Architecture
The application is structured as a vertical scrolling SPA with a "Detail View" for projects.

- **Main Flow:** The `App.js` manages the top-level state. Most sections are rendered within a single container that uses `display: none` when a project is selected to show `ProjectDetail`.
- **Animations:** Uses a custom "reveal on scroll" system via `IntersectionObserver` in `App.js` that adds the `.visible` class to elements with the `.reveal` class.
- **Routing:** No formal router (like `react-router-dom`) is used; instead, it uses conditional rendering based on the `activeProject` state in `App.js`.

## 📁 Key Directories
- `src/components/`: Contains all UI components and their respective `.css` files.
- `public/assets/`: Structured repository for all media assets:
    - `FONTS/`: Custom typography (Palmyra, Quinn, SF Pro).
    - `HOME/`: Assets for the Hero section.
    - `SESSÃO 1-5/`: Assets grouped by portfolio sections (Video, Design, Music, etc.).
    - `PNGS/`: General icons and logos.

## 🧩 Main Components
- **Navbar:** Sticky navigation with links to sections.
- **Hero:** Impactful landing section.
- **Projects / Volunteer:** Grid-based displays of work.
- **Music:** Integrates `wavesurfer.js` for audio playback and visualization.
- **ProjectDetail:** A full-screen overlay/view that appears when a project is selected, showing videos, timelines, and descriptions.

## 🚀 Development Commands
- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm test`: Launches the test runner.

## 📝 Notes for Claude
- **Asset Paths:** Always reference assets relative to the `public` folder (e.g., `/assets/HOME/BACKGROUND.png`).
- **Styling:** Follow the existing pattern of creating a `<Component>.css` for each `<Component>.jsx`.
- **Responsiveness:** The project uses a mix of flexbox and absolute positioning; ensure new components respect the responsive design patterns found in existing `.css` files.
