"use client";

import React, { useState } from "react";
import Link from "next/link";
import GlobalButton from "@/components/Common/Button";
import { Container } from "@chakra-ui/react";

import "./style.scss";

const contactUs = () => {
  const socialIcons = [
    // {
    //   name: "Slack",
    //   icon: "/icons/mdi_slack.png",
    //   link: "https://www.slack.com/",
    // },
    {
      name: "Telegram",
      icon: "/icons/iconoir_telegram.png",
      link: "https://t.me/minerlab_io",
    },
    {
      name: "Discord",
      icon: "/icons/ant-design_discord-outlined.png",
      link: "https://discord.gg/CtT3mtxSpY",
    },
  ];

  return (
    <Container maxW="1400px" className="p-10 py-36">
      <section>
        <div className="flex flex-col text-white items-start justify-center">
          <h1 className="text-6xl font-bold text-center">Contact Us</h1>
          <p className="text-center my-5 text-xl">
            We are here to help you with any questions you may have.
          </p>
        </div>
      </section>

      <section className="ml-contact-form relative">
        <img
          src="/svg/3Dwave.svg"
          className="absolute right-0 top-0 object-contain contact-us-svg"
          alt="3dwave"
        />

        <img
          src="/icons/plusIcon.png"
          alt="plusIcon.png"
          width={"124px"}
          className="absolute right-0 bottom-[150px] object-contain"
        />

        <img
          src="/icons/plusIcon.png"
          alt="plusIcon.png"
          width={"124px"}
          className="absolute right-[700px] bottom-[0px] object-contain"
        />

        <img
          src="/icons/plusIcon.png"
          alt="plusIcon.png"
          width={"124px"}
          className="absolute right-[400px] top-[0px] object-contain"
        />

        <div className="ml-form-style-2 w-full flex flex-col items-start justify-center">
          <input type="text" placeholder="name" />
          <input type="text" placeholder="e-mail" />
          <input type="text" placeholder="Discord" />
          <textarea id="textarea" type="text" placeholder="your message" />

          <GlobalButton text={"SEND MESSAGE"} />
        </div>

        <div className="flex flex-col py-5 px-16 w-full items-start justify-center">
          <section className="max-w-[329px]">
            <h3 className="primary text-lg">Contact Information</h3>

            <p className="text-lg text-white my-10">
              Thank you for considering{" "}
              <span className="primary cursor-pointer">Minerlab.io</span>{" "}
              features and solutions. We value your interest and are committed
              to providing you with exceptional service. Please leave your
              information and we will get back to you. We aim to respond within
              one business day.
            </p>

            <h3 className="primary text-lg"> Networking</h3>
            <div className="ml-social-icons my-2 flex items-center">
              {socialIcons.map((icon, index) => (
                <Link
                  target="_blank"
                  href={icon.link}
                  key={`contact-socialIcon-${index}`}
                >
                  <img
                    className="mr-5 h-[42px] w-[42px]"
                    src={icon.icon}
                    alt={icon.name}
                  />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>

      <div className="relative mt-30 my-20">
        <img
          src="/svg/3Dwave.svg"
          className="absolute z-10 left-0 blur-lg"
          alt="3dwave"
        />
        <section className="text-white text-left relative z-20">
          <h1 className="text-6xl">We integrate</h1>
          <h2 className="lg:text-8xl text-6xl primary ml-stroke--text">
            new inovative
          </h2>
          <h1 className="text-6xl">
            <span className="font-bold">blockchain</span> protocol
          </h1>
        </section>
      </div>

      <img
        src="/svg/3Dwave.svg"
        className="absolute right-0 bottom-[-400px] blur-lg"
        alt="3dwave"
      />
    </Container>
  );
};

export default contactUs;
