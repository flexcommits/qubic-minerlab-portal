"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaAngleDown, FaCaretUp, FaChevronCircleDown } from "react-icons/fa";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

// import styles
import "./style.scss";

export const dropdown = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              className="dropdown-cs-btn"
              as={Button}
              rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            >
              <div className="montserrat font-bold">{props.label}</div>
            </MenuButton>
            <MenuList className={`dropdown-menu-list-1`}>
              {props.childrens?.length &&
                props.childrens.map((item, index) => (
                  <>
                    <MenuItem
                      className="text-black flex items-center justify-start"
                      key={`$dropdown-menuItem-${index}`}
                      as="a"
                      target="_blank"
                      href={item.href}
                    >
                      <img
                        src={item.icon}
                        className="mr-3 h-[32px] w-[32px]"
                        style={{ objectFit: "contain" }}
                        alt={item.name}
                      />

                      <div>{item.name}</div>
                    </MenuItem>
                    {index !== props.childrens?.length - 1 ? (
                      <hr className="border-1 border-gray-600 my-2" />
                    ) : (
                      ""
                    )}
                  </>
                ))}
            </MenuList>
          </>
        )}
      </Menu>
    </>
    // <div>
    //   <a
    //     href={"#"}
    //     onClick={() => setShowMenu(!showMenu)}
    //     className=" hover:bg-[#354f78] font-bold py-3 px-10 flex items-center rounded-full "
    //   >
    //     {props.label}
    //     {
    //       <FaAngleDown
    //         className={`${
    //           showMenu ? "transform rotate-180" : ""
    //         } text-white text-lg ms-2`}
    //       />
    //     }
    //   </a>

    //   {showMenu && (
    //     <section className="flex flex-col items-center">
    //       <FaCaretUp className="mx-auto absolute -bottom-2 text-3xl" />
    //       <div
    //         id="dropdown"
    //         className="z-30 top-20 absolute cs-dropdown-01 rounded-lg shadow w-72"
    //       >
    //         <ul
    //           className="text-sm w-64 h-full bg-white mx-auto text-black rounded-xl"
    //           aria-labelledby="dropdownDefaultButton"
    //         >
    //           {props.childrens?.length
    //             ? props.childrens.map((item, index) => (
    //                 <>
    //                   <li className="bg-white">
    //                     <a
    //                       href={item.href}
    //                       target="_blank"
    //                       className="flex items-center"
    //                     >
    //                       <img
    //                         src={item.icon}
    //                         className="mr-2 w-16"
    //                         style={{ width: "32px", objectFit: "contain" }}
    //                         alt={item.name}
    //                       />
    //                       <span>{item.name}</span>
    //                     </a>
    //                   </li>
    //                   <hr className="border-1 border-gray-300" />
    //                 </>
    //               ))
    //             : null}

    //           {/* hr line  */}

    //           {/* <li>
    //             <a
    //               href="https://vpn.minerlab.io/login"
    //               target="_blank"
    //               className="flex items-center px-4 py-2 hover:bg-cyan-950 text-black hover:text-white"
    //             >
    //               <img
    //                 src="/images/pritunl.png"
    //                 className="mr-2 bg-black rounded-full px-3 py-1"
    //                 style={{ height: "30px" }}
    //                 alt="pritunl"
    //               />
    //               <span>Minerlab VPN</span>
    //             </a>
    //           </li> */}
    //         </ul>
    //       </div>
    //     </section>
    //   )}
    // </div>
  );
};

export default dropdown;
