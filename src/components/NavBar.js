import React from 'react';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav class="navbar">
      <div class="navbar-brand">
        <a href="/">
          <img src="/ScoutOutNav.png" alt="ScoutOut" />
        </a>
      </div>

      <ul class="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/explore">Explore</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>

      <div class="navbar-actions">
        <a href="/signin" class="btn">
          Sign in
        </a>
      </div>
    </nav>
  );
}
