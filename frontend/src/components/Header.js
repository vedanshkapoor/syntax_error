// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
  console.log('Header component is rendered');
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/generate-flashcards" className="nav-link">Generate AI Flashcards</Link>
        <Link to="/generate-quiz" className="nav-link">Generate AI Quiz</Link>
        <button className="create-btn">+ Create</button>
        <div className="auth-links">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-link">Signup</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
