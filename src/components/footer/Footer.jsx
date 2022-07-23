import React from "react";
import "./footer.css";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        Phalla Borormey
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/messages/t/100009017799685">
          <FaFacebookF />
        </a>
        <a href="https://web.telegram.org/z/#1075950092">
          <FaTelegramPlane />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
