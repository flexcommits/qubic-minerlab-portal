import React from "react";

export const Hero = () => {
  return (
    <section className="w-full p-2 my-36 hero_section ">
      {/* <img className="opacity-10 bg-image" src="/images/dotted-bg.png" /> */}
      <div className="absolute hidden md:block bottom-0 -z-10 left-0 ml-8 mb-8">
        <div className="w-96 h-96 p-96 rounded-full bg-[#305cad] blur-[200px]"></div>
      </div>

      <img className="bg-image" src="/images/net-web.png" />
      <div className="w-full sec-one-content">
        <div className="flex items-center justify-center text-white">
          <img src="/images/left-step.png" alt="arrow" />
          <h1 className="text-center stroke--text mx-2 font-light text-white lg:text-8xl text-3xl raleway-light">
            Welcome to Minerlab.io
          </h1>
          <img src="/images/step2.png" alt="arrow" />
        </div>

        <h1 className="lg:text-6xl lineheight-mobile md:text-3xl md:leading-loose text-xl lg:leading-loose sm:leading-loose leading-loose montserrat-bold text-center my-5 text-white">
          <span className="border-solid bg-primary py-3 px-5 rounded-full">
            Node Hosting
          </span>{" "}
          VPN Security, Mining <br /> Support –
          <span className="border-solid border-2 border-white py-3 px-5 mx-3 rounded-full">
            Uniting Tech Solutions
          </span>
        </h1>

        <h3 className="text-center text-gray-100 text-xl montserrat">
          Unlocking Node Hosting, Securing Connections with Organizational VPN,
          and Expert Mining Tech Support – <br /> Your Gateway to Powering
          Masternodes, Validator Nodes, and Staking across 70+ Protocols.
        </h3>

        <div className="flex items-center justify-center">
          <button className="hover:shadow-inner my-10 glass-css border-primary rounded-3xl btn-primary">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};
