import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1 className="logo">UrbanHarvest</h1>
          <p>
          Urban Harvest: Revolutionizing Food Delivery with Sustainability and Freshness</p>
          <p>

Discover Urban Harvest, the groundbreaking web app that’s transforming the food delivery landscape with a fresh twist. By seamlessly connecting local farmers with urban dwellers, Urban Harvest ensures that every meal is a farm-to-table experience. Our platform champions sustainability by reducing food miles and minimizing waste, all while delivering the freshest produce and gourmet meals right to your doorstep. Join us on our mission to support local agriculture, promote eco-friendly practices, and savor the taste of truly fresh food. Welcome to the future of food delivery – welcome to Urban Harvest.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" href="NA"/>
            <img src={assets.twitter_icon} alt="" href="https://x.com/KunalRawat0904"/>
            <img src={assets.linkedin_icon} alt="" href="https://www.linkedin.com/in/kunal-rawat-3156901b9/"/>
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 830705XXXX</li>
            <li>Kunalrawat7766@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © UrbanHarvest - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
