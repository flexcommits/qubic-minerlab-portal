"use client";
import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaSearch,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import Logo from "../Logo";
import Dropdown from "../Dropdown";
import Sidebar from "../Sidebar";

// Styles
import "./header.scss";
import "../../app/globals.css";
import Image from "next/image";
import Link from "next/link";

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const [navLinks, setNavLinks] = useState([
    {
      name: "Pools",
      href: "#",
      current: true,
      dropdown: true,
      drawer: true,
      subMenu: false,
      childrens: [
        {
          name: "Qubic Lab",
          href: "https://qubic.minerlab.io",
          icon: "/icons/poolsolution.png",
          current: false,
        },
        {
          name: "Abel Lab",
          href: "https://abel.minerlab.io",
          icon: "/favicons/abel.png",
          current: false,
        },
      ],
    },
    {
      name: "Enterprise Services",
      href: "#",
      current: false,
      drawer: true,
      dropdown: true,
      subMenu: false,
      childrens: [
        {
          name: "MinerLab Vpn Solution",
          href: "https://vpn.minerlab.io/login",
          icon: "/favicons/pritunal.ico",
          current: false,
        },
      ],
    },
    {
      name: "About",
      href: "/about",
      current: false,
      drawer: true,
      target: false,
    },
    {
      name: "Contact Us",
      href: "/contact-us",
      current: false,
      drawer: true,
      target: false,
    },
  ]);

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
  };

  const [expand, setExpand] = useState(true);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const drawerRef = useRef(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      toggleDrawer();
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add scroll event listener
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  const headerClasses = classNames(
    "fixed top-0 z-50 w-full mt-2 flex justify-center items-center",
    {
      "text-white": isScrolled,
      "bg-transparent text-white": !isScrolled,
    }
  );

  const drawerClasses = classNames(
    "fixed top-0 left-0 h-full w-64 glass-css text-white z-50 transition-transform transform",
    {
      "-translate-x-full": !isDrawerOpen,
      "translate-x-0": isDrawerOpen,
    }
  );

  const toggleSubmenu = (index, name) => {
    const updatedNavLinks = navLinks.map((link, linkIndex) => {
      if (linkIndex === index) {
        return {
          ...link,
          subMenu: !link.subMenu,
        };
      } else {
        return link;
      }
    });
    setNavLinks(updatedNavLinks);
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <header className={headerClasses}>
          <div
            className={`rounded-full max-w-[1200px] mx-auto w-full my-3 flex items-center justify-center space-x-4 ${
              isScrolled ? "glass-css" : ""
            }`}
          >
            {/* Show logo only on mobile screens */}
            <nav className="lg:hidden h-16 w-full px-5 flex items-center justify-between">
              <button className="text-2xl p-2" onClick={() => toggleDrawer()}>
                {isDrawerOpen ? <FaTimes /> : <FaBars />}
              </button>

              <Logo />

              <img
                style={{ height: "24px" }}
                src="/images/discord-white.png"
                alt="discord"
              />
            </nav>

            {/* Navigation menu items */}
            <nav className="header-menu-items hidden lg:flex items-center justify-center space-x-4">
              <Logo />
              <ul className="flex items-center justify-center space-x-4">
                <>
                  {navLinks.map((link) =>
                    link?.dropdown ? (
                      <li
                        key={`menu1-${link.name}`}
                        className="flex items-center"
                      >
                        <Dropdown
                          label={link.name}
                          childrens={link.childrens}
                        />
                      </li>
                    ) : (
                      // Don't render the logo in the menu on larger screens
                      <li className="flex items-center">
                        <Link
                          href={link.href}
                          target={link?.target ? "_blank" : "_self"}
                          className="hover:bg-[#354f78] montserrat font-bold py-3 px-10 rounded-full "
                        >
                          {link.name}
                        </Link>
                      </li>
                    )
                  )}
                </>
              </ul>
            </nav>
          </div>
        </header>
      </motion.div>

      {/* Drawer */}
      <div ref={drawerRef} className={`${drawerClasses}`}>
        {/* Drawer content goes here */}
        <div className="px-4 py-2">
          <div className="flex items-center justify-end my-2">
            <button
              className="bg-white text-black rounded-full cursor-pointer p-2"
              onClick={() => toggleDrawer()}
            >
              {isDrawerOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <ul>
            {navLinks.map((link, linkIndex) => {
              if (link.drawer)
                if (link?.childrens?.length) {
                  return (
                    <div key={`ul-${link.name}-${linkIndex}`}>
                      <li
                        onClick={() => toggleSubmenu(linkIndex, link.name)}
                        className="p-2 py-3 flex items-center"
                      >
                        <span>{link.name}</span>
                        {link.subMenu ? (
                          <FaAngleUp className="ms-2" />
                        ) : (
                          <FaAngleDown className="ms-2" />
                        )}
                      </li>

                      <ul className="ml-5 submenu-child">
                        {link.subMenu &&
                          link.childrens.map((child) => (
                            <li className="p-2 py-3">
                              <Link className="text-white" href={child.href}>
                                {child.name}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  );
                } else
                  return (
                    <li className="p-2 py-3">
                      <Link
                        onClick={() => toggleDrawer()}
                        href={link.href}
                        className="text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
            })}
          </ul>

          {/* Add more drawer links here */}
        </div>
      </div>
    </>
  );
};

// export default Header;
