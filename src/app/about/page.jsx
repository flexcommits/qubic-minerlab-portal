"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@chakra-ui/react";

import "./style.scss";

const About = () => {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "Abel Lab",
      role: "web developer",
      image: "/icons/abel-icon-blue.png",
      url: "https://abel.minerlab.io",
      description:
        "A solo pool designed for our GPU Clients who would like to embark on the journey of block-finding on the Abel blockchain.",
      socialIcons: [
        {
          name: "Slack",
          icon: "/icons/mdi_slack.png",
          link: "https://www.facebook.com/",
        },
        {
          name: "Telegram",
          icon: "/icons/iconoir_telegram.png",
          link: "https://twitter.com/",
        },
        {
          name: "Discord",
          icon: "/icons/ant-design_discord-outlined.png",
          link: "https://www.instagram.com/",
        },
      ],
    },
    {
      name: "Qubic Lab",
      role: "web developer",
      image: "/icons/poolsolution.png",
      url: "https://qubic.minerlab.io",
      description:
        "Our newest project at Minerlab, a pool designed for the Qubic blockchain. Currently working on most CPUs and GPUs!",
      socialIcons: [
        {
          name: "Slack",
          icon: "/icons/mdi_slack.png",
          link: "https://www.facebook.com/",
        },
        {
          name: "Telegram",
          icon: "/icons/iconoir_telegram.png",
          link: "https://twitter.com/",
        },
        {
          name: "Discord",
          icon: "/icons/ant-design_discord-outlined.png",
          link: "https://www.instagram.com/",
        },
      ],
    },
    {
      name: "Minerlab VPN",
      role: "web developer",
      image: "/icons/vpnMinerlab.png",
      url: "https://vpn.minerlab.io",
      description:
        "An enterprise solution designed for miners to control all their machines through one platform.",
      socialIcons: [
        {
          name: "Slack",
          icon: "/icons/mdi_slack.png",
          link: "https://www.facebook.com/",
        },
        {
          name: "Telegram",
          icon: "/icons/iconoir_telegram.png",
          link: "https://twitter.com/",
        },
        {
          name: "Discord",
          icon: "/icons/ant-design_discord-outlined.png",
          link: "https://www.instagram.com/",
        },
      ],
    },
  ]);

  return (
    <section>
      <div className="about-section-one">
        <Container
          maxW="1400px"
          className="p-10 py-36 flex items-center h-full"
        >
          <h1 className="text-white lg:text-6xl text-4xl">
            Accelerate the world's <br />
            <span className="ml-stroke--text text-6xl">transition to</span>
            <br />
            cryptocurrency
          </h1>
        </Container>
      </div>
      <div className="about-section-two text-white">
        <Container maxW="1400px" className="h-full relative">
          <div className="w-full absolute left-0">
            <div className="max-w-[859px] mx-auto">
              <h1 className="lg:text-5xl text-xl lg:my-10 my-3">
                One Vision, One Global Team
              </h1>
              <h2 className="primary lg:text-3xl tracking-wide text-sm lg:max-w-[859px]">
                Building a world-changing platform is a monumental task. We aim
                to achieve it.
              </h2>
            </div>
          </div>

          <div className="h-full flex flex-wrap items-center justify-around lg:text-[#86CEE4]">
            <div className="">
              <h1 className="text-8xl font-bold mb-2">2460</h1>
              <span className="text-3xl">Users</span>
            </div>

            <div>
              <h1 className="text-8xl font-bold mb-2">14</h1>
              <span className="text-3xl">Countries</span>
            </div>
          </div>
        </Container>
      </div>

      <div>
        <Container maxW="1600px" className="">
          <div id="projects" className="about-section-three my-12 lg:text-6xl text-4xl">
            <div className="max-w-[796px] mx-auto relative">
              <img
                src="/icons/plusIcon.png"
                alt="plusIcon.png"
                width={"80px"}
                className="absolute right-0 bottom-[75px] object-contain"
              />
              <h1 className="text-white relative z-10 text-center">Meet Our Projects</h1>
              <img
                src="/icons/plusIcon.png"
                alt="plusIcon.png"
                width={"80px"}
                className="absolute left-0 top-0 object-contain"
              />
            </div>
          </div>

          <div className="about-section-four flex flex-wrap items-center justify-center my-10">
            {teamMembers.map((member, index) => (
              <section className="flex flex-wrap justify-center my-5 px-2">
                <div className="relative">
                  {/* <img
                    src="/images/user-img-overlay.png"
                    alt="user-img-overlay"
                    className="absolute"
                  /> */}
                  <Link target="_black" href={member.url}>
                    <img
                      className="object-contain w-[190px] h-[100px]"
                      src={member.image}
                      alt={member.name}
                    />
                  </Link>
                </div>
                <div className="flex flex-col px-5">
                  <h1 className="primary text-3xl lg:text-left text-center">{member.name}</h1>
                  {/* <h2 className="text-xl primary">{member.role}</h2> */}
                  <p className="max-w-[200px] lg:text-left text-center h-[120px] text-gray-50 text-sm">
                    {member.description}
                  </p>
                  {/* <div className="flex items-center my-2">
                    {member.socialIcons.map((icon, index) => (
                      <Link
                        target="_blank"
                        href={icon.link}
                        key={`about-socialIcon-${index}`}
                      >
                        <img
                          className="mr-5 h-[30px] w-[30px]"
                          src={icon.icon}
                          alt={icon.name}
                        />
                      </Link>
                    ))}
                  </div> */}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default About;
