"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const feedbacks = [
  {
    id: 1,
    name: "Nafiz Salim",
    title: "Graphic Designer",
    text: "Simple but delicious. The crust was perfectly crisp with a smoky edge, the tomatoes tasted fresh, and the mozzarella was melty and rich. Classic done right.",
    avatar: "/customer.png",
  },
  {
    id: 2,
    name: "Anika Rahman",
    title: "UI/UX Designer",
    text: "Simple but delicious. The crust was perfectly crisp with a smoky edge, the tomatoes tasted fresh, and the mozzarella was melty and rich. Classic done right.",
    avatar: "/customer.png",
  },
  {
    id: 3,
    name: "Anika Rahman",
    title: "UI/UX Designer",
    text: "Simple but delicious. The crust was perfectly crisp with a smoky edge, the tomatoes tasted fresh, and the mozzarella was melty and rich. Classic done right.",
    avatar: "/customer.png",
  },
];

export default function FeedbackSlider() {
  const [current, setCurrent] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex max-w-7xl mx-auto md:pb-0 pb-6  flex-col-reverse md:gap-0 gap-8 md:flex-row items-center justify-between w-full
     px-4  bg-white relative overflow-hidden">
      {/* Left Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={isMounted ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-1/2 w-full space-y-6 text-left"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Customer <span className="text-[#a62222]">Feedback</span>
        </h2>

        <AnimatePresence mode="wait">
          <motion.p
            key={feedbacks[current].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-gray-700 text-lg max-w-xl"
          >
            {feedbacks[current].text}
          </motion.p>
        </AnimatePresence>

        {/* Profile & Navigation */}
        <div className="flex items-center justify-between">
          {/* Profile */}
          <div className="flex items-center gap-4">
            <Image
              src={feedbacks[current].avatar}
              alt="avatar"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold text-[#a62222]">
                {feedbacks[current].name}
              </p>
              <p className="text-black text-sm">{feedbacks[current].title}</p>
            </div>
          </div>

          {/* Dot Navigation (Desktop) */}
          <div className="hidden md:flex gap-3 mt-6 justify-end">
            {feedbacks.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  idx === current
                    ? "bg-[#a62222] border-[#a62222]"
                    : "border-[#a62222]"
                }`}
              />
            ))}
          </div>

          {/* Arrow Navigation (Mobile) */}
          <div className="flex md:hidden gap-3 mt-6 justify-end">
            <button
              onClick={handlePrev}
              className="text-white text-xl px-1 py-1 bg-[#F5878752] rounded-full"
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={handleNext}
              className="text-white text-xl px-1 py-1 bg-[#F5878752] rounded-full"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Right Section (Image) */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isMounted ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="md:w-1/2 w-full flex justify-center relative mt-10 md:mt-0"
      >
        <Image
          src="/image.png"
          alt="chef"
          width={450}
          height={600}
          className="relative z-10 object-contain"
        />
      </motion.div>
    </div>
  );
}
