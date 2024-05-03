"use client";
import { motion } from "framer-motion";
import { BiChevronRight } from "react-icons/bi";
import { useInView } from "react-intersection-observer";

export const Card = ({ heading, description, image }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow animations on both up and down scroll
    threshold: 0.2,
  });

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
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
    <motion.div
      className="flex flex-col gap-2 glass-css border p-4 rounded-3xl w-[400px] h-[300px]"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      <motion.div className="w-60 h-60">
        <motion.img
          src={image}
          alt="img"
          height={60}
          width={60}
          objectFit="cover"
          position="center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </motion.div>
      <motion.h1
        className="text-white md:text-2xl pixelify-sans text-xl font-bold h-20 max-w-full"
        initial={{ opacity: 0 }}
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        custom={inView} // Track scroll direction for custom animation
        onCustom={(direction) => {
          if (direction === "up") {
            return { animate: "visibleUp", variants: upVariants };
          } else if (direction === "down") {
            return { animate: "visibleDown", variants: downVariants };
          }
        }}
      >
        {heading}
      </motion.h1>
      <motion.p
        className="text-white montserrat h-12 max-w-full text-sm md:text-lg"
        initial={{ opacity: 0 }}
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        custom={inView} // Track scroll direction for custom animation
        onCustom={(direction) => {
          if (direction === "up") {
            return { animate: "visibleUp", variants: upVariants };
          } else if (direction === "down") {
            return { animate: "visibleDown", variants: downVariants };
          }
        }}
      >
        {description}
      </motion.p>
      <button className="w-10 h-10 cursor-pointer p-1 bg-primary rounded-full mb-8 mt-8 flex justify-center">
        <BiChevronRight className="text-white text-3xl" />
      </button>
    </motion.div>
  );
};
