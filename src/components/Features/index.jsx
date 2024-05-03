"use client";

import { Card } from "./Card";
import SubHeader from "../subHeader";
import { motion } from "framer-motion";
import "animate.css";
import { useInView } from "react-intersection-observer";

export default function Feature() {
  const featuresList = [
    {
      title: "Expert Mining Tech Support",
      className: "animate__slideInLeft animate__delay-5s",
      description:
        "Get dedicated technical assistance and guidance to optimize your mining operations.",
      image: "/mining.png",
    },
    {
      title: "Staking Opportunities",
      className: "animate__slideInLeft",
      description:
        "Participate in staking across over 70 protocols, maximizing your earning potential.",
      image: "/stacking.png",
    },
    {
      title: "Multi-Node Support",
      className: "animate__slideInLeft",
      description:
        "Seamlessly manage Masternodes, Validator Nodes, Super Nodes, Sentry Nodes, and Full Nodes all in one place.",
      image: "/node.svg",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false, // Allow animations on both up and down scroll
    threshold: 0.2,
  });

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2 },
    },
    hidden: {
      opacity: 0,
      y: 50,
    },
  };

  const upVariants = {
    visibleUp: {
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    hiddenUp: {
      y: -30, // Adjust offset for a subtle upward animation
    },
  };

  const downVariants = {
    visibleDown: {
      y: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
    hiddenDown: {
      y: 30, // Adjust offset for a subtle downward animation
    },
  };

  return (
    <section className="container mx-auto">
      <div className="chips animate__slideInLeft">Features</div>

      <div className="flex flex-wrap items-center justify-between mb-10">
        <h2 className="text-white montserrat my-2 lg:text-5xl sm:text-xl text-xl font-semibold max-w-[800px]">
          Streamlining <br /> Tech Hurdles.
        </h2>

        <h2 className="text-gray-200 text-right montserrat my-2 lg:text-2xl sm:text-lg text-lg font-semibold max-w-[800px]">
          Empowering Your Digital Future with Advanced Tech Solutions and Secure
          Infrastructure!
        </h2>
      </div>

      <section className="max-w-[1300px] mx-auto cursor-pointer">
        {featuresList.map((feature, index) => (
          <>
            <hr className="my-10" />
            <motion.div
              key={`feature-listItem-${index}`}
              initial="hidden"
              animate={"visible"}
              variants={variants}
              className={`flex items-center justify-between lg:text-4xl sm:text-2xl text-lg text-white ${feature.className}`}
            >
              <div>
                <h3 className="montserrat font-bold">{feature.title}</h3>
              </div>

              <h3 className="montserrat text-gray-200 text-right lg:text-xl text-sm lg:max-w-[600px] max-w-[200px] font-bold">
                {feature.description}
              </h3>
            </motion.div>
          </>
        ))}
      </section>
    </section>

    // <div className="relative -z-10 bg-transparent flex w-auto flex-col justify-center items-center h-full">
    //   <div className="absolute hidden md:block top-0 -z-10 right-0 mr-8 mt-8">
    //     <div className="w-96 h-96 p-96 rounded-full bg-[#123575] blur-[200px]"></div>
    //   </div>

    //   {/* Circle at the bottom left */}
    //   <div className="absolute hidden md:block  bottom-0 -z-10 left-0 ml-8 mb-8">
    //     <div className="w-96 h-96 p-96 rounded-full bg-[#2a748c] blur-[200px]"></div>
    //   </div>

    //   <SubHeader label="Minerlab Features" />

    //   <div className="mt-20 gap-16 flex flex-wrap sm:grid-cols-2 xl:grid justify-center   xl:grid-cols-3">
    //     {/* 1 */}
    //     <Card
    //       heading={"Node Hosting"}
    //       description={
    //         "Effortlessly host Masternodes, Validator Nodes, and more on our non-custodial platform."
    //       }
    //       image={"/Node.js_logo.svg"}
    //     />
    //     {/* 2 */}
    //     <Card
    //       heading={"Organizational VPN"}
    //       description={
    //         "Ensure secure connections with our built-in VPN, safeguarding your data and privacy."
    //       }
    //       image={"/vpn.png"}
    //     />
    //     {/* 3 */}
    //     <Card
    //       heading={"Expert Mining Tech Support"}
    //       description={
    //         "Get dedicated technical assistance and guidance to optimize your mining operations."
    //       }
    //       image={"/mining.png"}
    //     />
    //     {/* 4 */}
    //     <Card
    //       heading={"Staking Opportunities"}
    //       description={
    //         "Participate in staking across over 70 protocols, maximizing your earning potential."
    //       }
    //       image={"/stacking.png"}
    //     />
    //     {/* 5 */}
    //     <Card
    //       heading={"Multi-Node Support"}
    //       description={
    //         "Seamlessly manage Masternodes, Validator Nodes, Super Nodes, Sentry Nodes, and Full Nodes all in one place."
    //       }
    //       image={"/node.svg"}
    //     />
    //     {/* 6 */}
    //     <Card
    //       heading={"Non-Custodial Security"}
    //       description={
    //         "Enjoy peace of mind with our non-custodial approach, maintaining full control of your assets at all times."
    //       }
    //       image={"/security.svg"}
    //     />
    //   </div>
    // </div>
  );
}
