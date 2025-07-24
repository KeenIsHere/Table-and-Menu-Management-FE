# React Simple Project

A simple multi-page React application demonstrating component structure, routing, and context usage. Built with Vite for fast development.

## 🚀 Features

- Home, About, Contact, Menu, and Signup pages
- Authentication and Count context using React Context API
- Custom reusable components (Button, Input Field)
- Responsive and clean UI
- Fast development with Vite

## 🏗️ Project Structure
react-simple-project/
-├── public/
-├── src/
-│ ├── assets/
-│ ├── components/
-│ ├── context/
-│ ├── pages/
-│ ├── util/
-│ ├── App.jsx
-│ ├── main.jsx
-│ └── index.css
-├── index.html
-├── package.json
-└── vite.config.js


## 🛠️ Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

```bash
cd react-simple-project
npm install
```

### Running the App

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## 📂 Pages

- `/` - Home Page
- `/about` - About Page
- `/contact` - Contact Page
- `/menu` - Menu Page
- `/signup` - Signup Page
- `/login` - Login Page

## 🧩 Contexts

- **AuthContext**: Manages authentication state.
- **CountContext**: Demonstrates global state management.

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

## 📄 License

[MIT](LICENSE)

---

*This project is for educational purposes and demonstrates basic React concepts.*

# Software Requirements Specification (SRS)

## 1. Introduction

### 1.1 Purpose
This document specifies the requirements for a simple React web application designed to demonstrate basic component structure, routing, and context usage.

### 1.2 Scope
The application provides a multi-page interface with authentication, a homepage, and additional informational pages (About, Contact, Menu, Signup). It uses React Context for state management and Vite for development.

### 1.3 Definitions, Acronyms, and Abbreviations
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast frontend build tool.
- **Context**: React's way to manage global state.

## 2. Overall Description

### 2.1 Product Perspective
- Built with React and Vite.
- Uses functional components and hooks.
- Organized into pages and reusable components.

### 2.2 Product Functions
- Home page with navigation.
- About, Contact, Menu, and Signup pages.
- Authentication context for login state.
- Count context for demonstration of global state.
- Custom input fields and buttons.

### 2.3 User Classes and Characteristics
- End users: General web users.
- Developers: Those interested in learning React basics.

### 2.4 Operating Environment
- Modern web browsers (Chrome, Firefox, Edge, Safari).
- Node.js and npm for development.

## 3. Specific Requirements

### 3.1 Functional Requirements
- Users can navigate between pages.
- Users can sign up and log in (mocked).
- State is managed globally using React Context.

### 3.2 Non-Functional Requirements
- Responsive design.
- Fast load times (Vite).
- Code is modular and maintainable.

## 4. External Interface Requirements

### 4.1 User Interfaces
- Simple, clean UI with navigation bar.
- Forms for login and signup.

### 4.2 Hardware Interfaces
- None.

### 4.3 Software Interfaces
- React, Vite, Node.js.

## 5. Other Requirements
- Open source, MIT License.

