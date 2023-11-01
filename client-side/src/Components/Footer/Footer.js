import React from "react";
import {
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  Mail,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex md:flex-row mb-0 w-full md:h-384 bg-black justify-between text-white p-4">
      <div className="flex items-center justify-center md:flex flex-col mt-4 mb-12 md:justify-between mx-8">
        <h4 className="text-2xl font-semibold">EduVerse</h4>
        <h2>Follow us</h2>
        <div>
          <a href="#">
            <Facebook />
          </a>
          <a href="#">
            <Instagram />
          </a>
          <a href="#">
            <Twitter />
          </a>
          <a href="#">
            <LinkedIn />
          </a>
        </div>
      </div>
      <div className="flex self-center md:flex flex-col mt-4 w-72">
        <h4 className="text-xl self-center font-medium">Quick links</h4>
        <div className="flex justify-between mt-4">
          <div className="flex flex-col">
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Login</a>
            <a href="#">Sign up</a>
          </div>
          <div className="flex flex-col">
            <a href="#">Contact us</a>
            <a href="#">FAQs</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
      <div className="flex self-center text-center md:flex flex-col mt-4 w-72">
        <h4 className="text-xl font-medium">Get in Touch</h4>
        <a href="#" className="flex mt-4 mb-1">
          <span>
            <LocationOn className="mr-2" />
          </span>
          <span>Lorem ipsum dolor sit amet.</span>
        </a>
        <a href="#" className="flex mb-1">
          <span>
            <WhatsApp className="mr-2" />
          </span>
          <span>+1234 567 890</span>
        </a>
        <a href="#" className="flex">
          <span>
            <Mail className="mr-2" />
          </span>
          <span>eduverse@edu.co</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
