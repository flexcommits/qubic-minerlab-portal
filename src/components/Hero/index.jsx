"use client";

import {
  Container,
  keyframes,
  useStyleConfig,
  Box,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import Image from "next/image";
import GlobalButton from "../Common/Button";
import { useState } from "react";
import { useRouter } from 'next/navigation'

const styles = {
  paddingY: "py-16",
  flexStart: "justify-start",
  paragraph: "font-poppins font-normal text-white text-[18px]",
};

// Define keyframe animation for arrow sliding
const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(10px); /* Adjust the sliding distance as needed */
  }
`;

// style
import "./style.scss";

const Hero = () => {
  const router = useRouter()
  const [featureCard, setFeatureCard] = useState([
    {
      title: "Continuous Innovation",
      description:
        "We're committed to staying at the forefront of innovation, delivering cutting-edge solutions and technologies that empower our users to stay ahead of the curve and capitalize on emerging opportunities in the market",
      image: "/icons/artificial-intelligence.png",
    },
    {
      title: "Intuitive User Experience",
      description:
        "We've designed our platform with simplicity and ease of use in mind. Our intuitive interface makes it easy for miners of all experience levels to navigate and manage their mining activities effortlessly, so you can spend less time wrestling with technology and more time mining",
      image: "/icons/mental-health.png",
    },
    {
      title: "Reliable Infrastructure",
      description:
        "Trust is the cornerstone of successful mining operations, which is why we've invested heavily in building a robust and reliable infrastructure. With industry-leading uptime and performance",
      image: "/icons/networks 1.png",
    },
  ]);

  return (
    <>
      <section
        className="h-screen hero-bg flex items-center justify-center text-white"
        id="home"
      >
        <Container
          maxW="1600px"
          className="flex items-center justify-space-between text-center text-white"
        >
          <img
            className="mx-auto start-col-content"
            style={{ objectFit: "contain" }}
            src="/svg/planet.svg"
            alt="planet"
          />

          <div className="flex flex-col end-col-content">
            <h3 className="font-light text-2xl">Welcome to MinerLab.io</h3>
            <h1 className="text-4xl font-bold mb-5">
              Empowering Your Crypto Mining Journey
            </h1>
            <br />
            <h2 className="font-light text-3xl">
              Step into the future of cryptocurrency mining with MinerLab.io
            </h2>

            <GlobalButton onClick={() => router.push("/about#projects")} className={`mx-auto my-10`} text="Our Solutions" />
          </div>
        </Container>
      </section>

      <section className="p-5 bg-black flex flex-col items-center justify-center">
        <div className="relative vector-border">
          <h2 className="text-white bottom-[-23px] text-center p-2 px-8 absolute text-3xl max-w-[475px] bg-black">
            <span className="primary">Control</span> of your Crypto
          </h2>
        </div>

        <p className="my-10 text-sm text-white text-center">
          Why Choose <span className="primary">MinerLab.io</span>
        </p>

        <section className="flex minerlab-feature-card-parent items-center justify-center">
          {featureCard.map((card, index) => (
            <div className="relative flex items-center justify-center">
              {/* <div className="blur-xl z-10 w-[422px] h-[382px] m-10" ></div> */}
              <section
                key={`feature-cardItem-${index}`}
                className="minerlab-feature-card relative z-20 "
              >
                <img
                  src={card.image}
                  className="icon absolute top-[-60px]"
                  alt="icon"
                />
                <h3 className="h-[54px] absolute top-28 text-xl">
                  {card.title}
                </h3>
                <p className="h-[134px] primary tracking-wider w-[349px] top-48 absolute text-center">
                  {card.description}
                </p>
              </section>
            </div>
          ))}
        </section>
      </section>

      <section className="section-02-bg"></section>
    </>
  );
};

export default Hero;
