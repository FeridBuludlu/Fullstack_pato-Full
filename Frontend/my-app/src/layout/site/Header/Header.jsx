import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
const Header = () => {
  return (
    <div className="Header_main">
    <div>
    
    </div>
      <div className="Header_left">
        <img
          src="https://preview.colorlib.com/theme/pato/images/icons/logo.png.webp"
          alt=""
        />
      </div>
      <div className="Header_middle">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="admin/">MENU</Link></li>
          <li><Link>RESERVATION</Link></li>
          <li><Link>GALLERY</Link></li>
          <li><Link>ABOUT</Link></li>
          <li><Link>BLOG</Link></li>
          <li><Link>CONTACT</Link></li>
        </ul>
      </div>
      <div className="Header_right">
      <i class="fa-solid fa-plane"></i>
      <i class="fa-brands fa-facebook-f"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-solid fa-bars"></i>
      </div>
    </div>
  );
};

export default Header;
