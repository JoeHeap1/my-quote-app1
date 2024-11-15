import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Flashcards from "./components/Flashcards";
import TestMode from "./components/TestMode";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>My Quote Learning App</h1>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/flashcards">Flashcards</Link></li>
              <li><Link to="/test-mode">Test Mode</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/test-mode" element={<TestMode />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>© 2024 My Quote Learning App</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
