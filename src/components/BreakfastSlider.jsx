"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const slides = [
  {
    id: 1,
    title: "BREAKFAST",
    description:
      "Breakfast, often referred to as the ‘most important meal of the day’, provides essential nutrients to kick start our day. It includes a variety of foods, like fruits, cereals, dairy products, and proteins, that contribute to a balanced diet.",
    image: "/res-1.png",
    thumbnail: "/res-1.png",
    bgColor: "#880808",
    circleColor: "#a52a2a",
  },
  {
    id: 2,
    title: "BREAKFAST",
    description:
      "Breakfast, often referred to as the ‘most important meal of the day’, provides essential nutrients to kick start our day. It includes a variety of foods, like fruits, cereals, dairy products, and proteins, that contribute to a balanced diet.",
    image: "/banner-2.png",
    thumbnail: "/banner-2.png",
    bgColor: "#0a4669",
    circleColor: "#0a3659",
  },
  {
    id: 3,
    title: "BREAKFAST",
    description:
      "Breakfast, often referred to as the ‘most important meal of the day’, provides essential nutrients to kick start our day. It includes a variety of foods, like fruits, cereals, dairy products, and proteins, that contribute to a balanced diet.",
    image: "/banner-3.png",
    thumbnail: "/banner-3.png",
    bgColor: "#a95c68",
    circleColor: "#953553",
  },
  {
    id: 4,
    title: "BREAKFAST",
    description:
      "Breakfast, often referred to as the ‘most important meal of the day’, provides essential nutrients to kick start our day. It includes a variety of foods, like fruits, cereals, dairy products, and proteins, that contribute to a balanced diet.",
    image: "/banner-4.png",
    thumbnail: "/banner-4.png",
    bgColor: "#006666",
    circleColor: "#003333",
  },
];

const arcTransition = {
  hidden: {
    opacity: 0,
    x: [0, 10, 10, -100],
    y: [300, 200, 100, 0],
    rotate: [-30, -15, -5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    x: [0, 100, 200, 300],
    y: [0, -50, -80, -100],
    rotate: [0, 10, 25, 40],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function BreakfastSlider() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bg = slides[current];

  const arcTransition = {
    hidden: {
      opacity: 0,
      x: isMobile ? -100 : [0, 10, 10, -100],
      y: isMobile ? 0 : [300, 200, 100, 0],
      rotate: isMobile ? 0 : [-30, -15, -5, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      x: isMobile ? 0 :80,
      y: isMobile ? 0 :  100,
  
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: isMobile ? 300 : [0, 100, 200, 300],
      y: isMobile ? 0 : [0, -50, -80, -100],
      rotate: isMobile ? 0 : [0, 10, 25, 40],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="relative w-full lg:h-[964px] px-8 md:px-12 lg:px-16 md:h-[900px] h-[812px] overflow-hidden py-16"
      animate={{ backgroundColor: bg.bgColor }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Background Circles */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`circle-1-${bg.circleColor}`}
          className="absolute top-[30%] left-[70%] w-[150%] h-[150%] rounded-full opacity-30 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3, backgroundColor: bg.circleColor }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={`circle-2-${bg.circleColor}`}
          className="absolute bottom-[10%] right-[60%] w-[130%] h-[130%] rounded-full opacity-30 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3, backgroundColor: bg.circleColor }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full h-full px-4 mt-0 sm:mt-12 md:mt-0 ">
        {/* Left Section (Text + Thumbnails) */}
        <div className="w-full md:w-1/2   md:space-y-12 text-white text-center md:text-left">
          <h1 className="text-[45px] md:text-7xl lg:text-[96px] font-medium">
            {bg.title}
          </h1>
          <p className="text-md md:text-lg lg:text-xl font-medium md:font-bold blading-relaxed max-w-xl mx-auto md:mx-0">
            {bg.description}
          </p>
          {/* for mobile */}
          <div className="w-full md:w-1/2 relative md:hidden flex justify-center items-center h-[300px] md:h-[800px]">
            {/* Navigation Buttons (Mobile Only) */}
            <div className="absolute top-1/2 -translate-y-1/2 flex justify-between items-center w-full px-0 md:hidden z-20">
              <button
                onClick={() =>
                  setCurrent((prev) =>
                    prev === 0 ? slides.length - 1 : prev - 1
                  )
                }
                className="text-white bg-[#F5878752] rounded-full p-3 text-xl shadow-md"
              >
                <IoIosArrowBack />
              </button>
              <button
                onClick={() =>
                  setCurrent((prev) =>
                    prev === slides.length - 1 ? 0 : prev + 1
                  )
                }
                className="text-white bg-[#F5878752] rounded-full p-3 text-xl  shadow-md"
              >
                <IoIosArrowForward />
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.img
                key={bg.image}
                src={bg.image}
                alt="main"
                className="absolute object-contain h-[70%]  w-auto drop-shadow-2xl"
                variants={arcTransition}
                initial="hidden"
                animate="visible"
                exit="exit"
              />
            </AnimatePresence>
          </div>
          <div className="flex gap-4 justify-center md:justify-start mt-12 lg:mt-24">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                onClick={() => setCurrent(index)}
                className="relative cursor-pointer"
              >
                <div
                  className={`rounded-full border-4 overflow-hidden w-[80px] h-[80px] md:w-[130px] md:h-[130px] lg:w-[160px] lg:h-[160px] transition duration-300 ${
                    index === current ? "border-white" : "border-transparent"
                  }`}
                >
                  <Image
                    src={slide.thumbnail}
                    alt="thumb"
                    width={110}
                    height={110}
                    className="object-cover w-full h-full"
                  />
                </div>
                {index === current && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-1 h-[4px] w-[60%] bg-white rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section (Image + Arrows) */}
        <div className="w-full md:w-1/2 md:relative hidden md:flex justify-center items-center h-[300px] md:h-[800px]">
          {/* Navigation Buttons (Mobile Only) */}
          <div className="absolute top-1/2 -translate-y-1/2 flex justify-between items-center w-full px-4 md:hidden z-20">
            <button
              onClick={() =>
                setCurrent((prev) =>
                  prev === 0 ? slides.length - 1 : prev - 1
                )
              }
              className="bg-white text-black rounded-full p-2 shadow-md"
            >
              &#8592;
            </button>
            <button
              onClick={() =>
                setCurrent((prev) =>
                  prev === slides.length - 1 ? 0 : prev + 1
                )
              }
              className="bg-white text-black rounded-full p-2 shadow-md"
            >
              &#8594;
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.img
              key={bg.image}
              src={bg.image}
              alt="main"
              className="absolute object-contain h-[60%] w-auto drop-shadow-2xl"
              variants={arcTransition}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
