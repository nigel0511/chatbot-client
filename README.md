# Frontend Application

This is the frontend application of the project, built with React, TypeScript, Vite, and styled with TailwindCSS and Material UI. It communicates with the backend API and provides a modern, responsive user interface.

## Table of Contents

1. [Overview](#overview)
2. [Installation](#installation)
3. [Development](#development)
   - [Run the Development Server](#run-the-development-server)
   - [Building for Production](#building-for-production)
   - [Preview](#preview)
4. [Folder Structure](#folder-structure)
5. [Linting](#linting)
6. [Dependencies](#dependencies)
7. [License](#license)

---

## Overview

This application is designed to provide an intuitive user interface for interacting with the backend services.

---

## Installation

To get started with this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/nigel0511/chatbot-client.git
cd chatbot-client
```

### 2. Install dependencies

Make sure you have `Node.js` (preferably the latest LTS version) installed. Then run the following command to install the project dependencies:

```bash
npm install
```

---

## Development

### Run the Development Server

To run the application in development mode, use the following command:

```bash
npm run dev
```

This will start the development server on `http://localhost:5173` by default, with hot reloading enabled. Any changes you make to the source code will automatically refresh the browser.

### Building for Production

To build the project for production, use the following command:

```bash
npm run build
```

This will transpile the TypeScript code and bundle the assets for production. The production-ready files will be available in the `dist` directory.

### Preview

To preview the production build locally, run the following command:

```bash
npm run preview
```

This starts a preview server where you can view the production build.

---

## Folder Structure

Here's an overview of the folder structure of the frontend app:

```
frontend/
├── node_modules/            # Project dependencies
├── public/                  # Static files (e.g., index.html, images)
├── src/                     # Source code
│   ├── assets/              # Images, fonts, etc.
│   ├── components/          # Reusable React components
│   ├── context/             # React context
│   ├── helpers/             # helpers
│   ├── pages/               # React components for different pages
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Entry point of the React app
├── .gitignore               # Git ignore file
├── package.json             # Project configuration file
├── tsconfig.json            # TypeScript configuration file
├── vite.config.ts           # Vite configuration file
└── README.md                # Project documentation
```

---

## Linting

To maintain code quality, the project uses ESLint with TypeScript support. You can run the linter with the following command:

```bash
npm run lint
```

This will check the source files for any linting errors. The `--max-warnings 0` flag ensures that warnings are treated as errors.

---

## Dependencies

This project uses the following dependencies:

### Development Tools

- **Vite**: Next-generation, fast, and optimized build tool for modern web projects.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.

To install all dependencies, run:

```bash
npm install
```

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Additional Notes:

- Ensure your **backend API** is running before you use the frontend application.
- Use `.env` files for managing sensitive environment variables like API URLs.
- If you encounter issues with the build process, make sure that **Node.js** is up to date and that all dependencies are installed correctly.

---

## Configuration

### Vite Configuration

Vite is used as the bundler for this project. The main configuration file is `vite.config.ts`, which allows you to configure the development server, production build options, and plugins.

### TypeScript Configuration

TypeScript is used in this project, and the configuration file is `tsconfig.json`. Make sure you have the necessary TypeScript types and check the configuration for any changes required.

---

By following the instructions above, you can successfully set up, develop, and build this frontend application. If you have any questions, feel free to open an issue in the repository.

```

```
