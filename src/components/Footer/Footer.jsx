import React from "react";
import "./Footer.css"; // İhtiyacınıza göre CSS dosyanızın adını düzenleyin

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
          <ul>
            <li>
              <a>Ana Sayfa</a>
            </li>
            <li>
              <a>Hakkımızda</a>
            </li>
            <li>
              <a>Hizmetlerimiz</a>
            </li>
            <li>
              <a>İletişim</a>
            </li>
          </ul>
        </div>
    </footer>
  );
};

export default Footer;
