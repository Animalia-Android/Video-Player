import React from 'react';
import './Footer.css'; // make sure this is imported

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        <small>
          © {new Date().getFullYear()} by{' '}
          <a
            href="https://douglas-sellers-portfolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            SellersSystems.com
          </a>
        </small>
      </p>
    </footer>
  );
}
