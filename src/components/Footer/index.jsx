"use client";

import React, { useState } from "react";
import Logo from "../Logo";
import SubHeader from "../subHeader";
import "./footer.scss";
import { motion } from "framer-motion";
import { FaDiscord, FaTelegramPlane, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  const [navLinks, setNavLinks] = useState([
    {
      name: "Pools",
      href: "#",
      current: true,
    },
    {
      name: "Enterprise Services",
      href: "#",
      current: false,
    },
    {
      name: "About",
      href: "#",
      current: false,
    },
  ]);

  const socialLinks = [
    {
      name: "Discord",
      href: "#",
      icon: <FaDiscord className="social_icons" />,
    },
    {
      name: "Telegram",
      href: "#",
      icon: <FaTelegramPlane className="social_icons" />,
    },
    {
      name: "Email",
      href: "#",
      icon: <FaEnvelope className="social_icons" />,
    },
  ];

  return (
    <footer className="container mx-auto mt-48">
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <SubHeader label="Get in touch" />
      </motion.div>

      <div className="flex my-10 footer-btn items-center justify-center">
        {socialLinks.map((link) => (
          <button className="mx-2 rounded-xl shadow-inner icon-button relative overflow-hidden">
            <a className="flex flex-col items-center text-white justify-center">
              {/* <img src={link.icon} alt={link.name} className="social_icons" /> */}
              {link.icon}
              <div className="hidden ml-2 text-sm">{link.name}</div>
            </a>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Logo />
      </div>

      <div className="my-10">
        <ul className="flex justify-center flex-wrap items-center mt-3 text-xl font-medium text-white ">
          {navLinks.map((link) => (
            <li
              key={`footer-socialIcon-${link.name}`}
              className="me-4 footer-links md:me-6"
            >
              <a className={`font-bold ${link.current ? "underline" : ""}`}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
