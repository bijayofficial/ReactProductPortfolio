import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-between px-55 py-8 items-center">
      <div className="flex flex-col text-gray-500">
        <span>MERN &copy; 2026</span>
        <span>
          All right reserved by <span className="font-bold">LANCERS</span>.
          Distributed by
          <span className="font-bold"> Bijay Ghosh</span>
        </span>
      </div>

      <div className="flex gap-5">
        <FaTwitter />
        <FaFacebook />
        <FaInstagram />
        <FaGithub />
        <FaYoutube />
      </div>
    </footer>
  );
};

export default Footer;
