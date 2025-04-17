/* eslint-disable no-unused-vars */
import React from 'react';
import InvertedComma from "../assets/inverted-commas.svg";
import { motion } from "motion/react"

// Props-based component for reusability
const TestimonialCard = ({ quote, name, role, image }) => {
  return (
    <div className="flex flex-col items-center justify-center px-[30px] lg:mx-[120px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[77px] bg-[#3c3c3c] rounded-lg relative pt-10 md:pt-[90px] pb-10 px-6 md:pr-[19.21px] md:pl-[67px] w-full h-full">
        <img
          src={InvertedComma}
          alt="Inverted Comma"
          className="w-[100px] h-[100px] md:w-[208px] md:h-[154px]"/>
        <div className="flex flex-col">
          <h2 className="text-2xl md:text-5xl font-[Montserrat] font-extrabold text-[#7a76f3] leading-[30px] md:leading-[57.6px] mb-3 md:mb-5">
            What clients say...
          </h2>
          <p 
            className="font-[Montserrat] font-medium text-sm md:text-lg leading-[24px] md:leading-[30.6px] text-white">
            {quote}
          </p>
        </div>

        {/* Speech Bubble Tail */}
        <div className="md:block absolute bottom-[-10px] left-[200px] md:left-[300px] transform -translate-x-1/2 w-5 h-5 bg-[#3c3c3c] rotate-45"></div>
      </div>

      {/* Author Info */}
      <div className="flex flex-col md:flex-row items-center gap-4 mt-10 md:mt-10">
        <motion.img
          src={image}
          alt={name}
          className="w-[120px] h-[120px] md:w-[210px] md:h-[210px] rounded-full object-cover"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}/>
        <div className="text-center md:text-left">
          <motion.h3
            className="font-[Arial] font-black text-[24px] md:text-[41.06px] leading-[30px] md:leading-[55px] tracking-[0.2px] text-white"
            initial={{ opacity: 0, y:- 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}>
            {name}
          </motion.h3>
          <motion.p 
            className="font-[Inter] font-normal text-[18px] md:text-[32px] leading-[24px] md:leading-[28px] text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}>
            {role}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;