"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const logos = [
  "/partner/baka.png",
  "/partner/bakary.png",
  "/partner/bistro.png",
  "/partner/coffe.png",
  "/partner/frok.png",
  "/partner/resturent.png",
  "/partner/coffe.png",
  "/partner/frok.png",
  "/partner/resturent.png",
];

export default function PartnerLogos() {
  const controls = useAnimation();
  const loopRef = useRef(null);

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <div className="pb-20 pt-24 bg-white max-w-7xl px-4 mx-auto overflow-hidden">
      <div className="text-center mb-12">
        <p className="text-[#a62222] font-medium">Partners & Clients</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          We work with the best people
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={loopRef}
          animate={controls}
          className="flex w-max gap-20"
        >
          {[...logos, ...logos].map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt={`logo-${i}`}
              width={140}
              height={100}
              className="grayscale opacity-60  transition duration-300"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
