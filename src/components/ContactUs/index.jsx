import React from "react";
import { Container } from "@chakra-ui/react";
import GlobalButton from "@/components/Common/Button";

// import styles
import "./style.scss";

const ContactUs = () => {
  return (
    <div className="contact-bg flex items-center justify-center">
      <Container
        maxW="1600px"
        className="flex my-5 lg:block flex-wrap items-center justify-center"
      >
        <div className="font-normal">
          <h1 className="text-5xl">
            See what <br />{" "}
            <span className="text-[#5BBDDB] font-bold">Minerlab</span> is up to
          </h1>
          <p className="text-lg max-w-[1200px] my-10">
            Your premier destination for innovative mining solutions and
            unparalleled support. Whether you're a seasoned miner or just
            dipping your toes into the world of digital currencies, our platform
            offers a comprehensive suite of services designed to elevate your
            mining experience to new heights. ⁠
          </p>
        </div>

        <div>
          <section className="contact-form-fields">
            <div className="flex items-center">
              <input
                className="lg:w-[354px] w-[120px] h-[51px] mr-1"
                type="text"
                placeholder="Name"
              />
              <input
                className="lg:w-[354px] w-[120px] h-[51px] ml-1"
                type="text"
                placeholder="Email"
              />
            </div>

            <div className="flex items-center my-2">
              <input
                className="lg:w-[354px] w-[100px] h-[51px] mr-1"
                type="text"
                placeholder="Phone"
              />
              <input
                className="lg:w-[354px] w-[100px] h-[51px] ml-1"
                type="text"
                placeholder="Subject"
              />
            </div>

            <div className="my-2">
              <textarea
                placeholder="Message"
                className="w-full h-[250px]"
                type="text"
              />
            </div>
          </section>
          <GlobalButton className={`mx-auto my-10`} text="Contact Us" />
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
