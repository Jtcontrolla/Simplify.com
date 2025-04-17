/* eslint-disable no-unused-vars */
import Circles from "../assets/Circles.svg";
import Vector from "../assets/Vector.svg";
import Plus from "../assets/Plus.svg"
import Work1 from '../assets/Work1.png'
import Work2 from '../assets/Work2.png'
import Work3 from '../assets/Work3.png'
import { GiAlliedStar } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { MdUnsubscribe } from "react-icons/md";
import Trustpilot from "../assets/Trustpilot.svg"
import Goldstar from "../assets/Goldstar.svg"
import Inc5000 from "../assets/Inc5000.svg"
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const Counter = ({ target, duration }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = target / (duration / 10);
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          clearInterval(interval);
          setCount(target);
        } else {
          setCount(Math.ceil(start));
        }
      }, 10);
      return () => clearInterval(interval);
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>{count}+</span>
  );
};

export default function Projects () {
    return (
        <section className="bg-[#19191B]" id="projects">
            <motion.h2 
                className="text-white font-[Nunito_Sans] text-5xl font-extrabold leading-[70.6px] pt-[44px] lg:w-[593px] lg:ml-15 text-center mt-35"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x:0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}>
                Our Awesome Portfolio
            </motion.h2>

            <div className="absolute top-[2920px] right-[130px] z-10 hidden lg:block">
                <img src={Circles} alt="Circles" width={50}/>
            </div>

            <div className="absolute top-[3500px] left-[113px] hidden lg:block">
                <img src={Vector} alt="Vector" width={50}/>
            </div>

            {/* Gradient */}
            <motion.div 
                className="absolute left-[900px] top-[2830px] h-[300px] w-[200px] rounded-[233.5px] 
                bg-gradient-to-b from-[rgba(84,84,212,1)] to-[rgba(84,84,212,0.42)] blur-[150px] 
                opacity-30 -rotate-[125.63deg] hidden lg:block"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.6, 0.8, 0.6], //Keyframes for pulsing effect
                    scale: [1, 1.05, 1], //scaling for pulsing effect
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}>
            </motion.div>

            {/* portfolios */}
            <div className="flex flex-col lg:flex-row items-center gap-7 justify-center mt-20 lg:px-[120px] mx-[30px]">
                <motion.div 
                    className="border border-solid border-[#1E1E20] rounded-[14px] p-6 lg:w-[384px] lg:h-[255px] bg-[#1E1E20] shadow-xs"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}>
                    <a href=""><img src={Work1} alt=""  width={336} height={253}/></a>
                </motion.div>

                <motion.div 
                    className="lg:mt-10 border border-solid border-[#1E1E20] rounded-[14px] p-6 lg:w-[384px] lg:h-[255px] bg-[#1E1E20] shadow-xs"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    viewport={{ once: true }}>
                    <a href=""><img src={Work2} alt="" width={336} height={253}/></a>
                </motion.div>

                <motion.div 
                    className="lg:mt-20 border border-solid border-[#1E1E20] rounded-[14px] p-6 lg:w-[384px] lg:h-[255px] bg-[#1E1E20] shadow-xs"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    viewport={{ once: true }}>
                    <a href=""><img src={Work3} alt="" width={336} height={253}/></a>
                </motion.div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-7 justify-center lg:px-[120px] mx-[30px] mt-5">
                <motion.div 
                    className="border border-solid border-[#1E1E20] rounded-[14px] p-6 lg:w-[384px] lg:h-[255px] bg-[#1E1E20] shadow-xs"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    viewport={{ once: true }}>
                    <a href=""><img src={Work2} alt=""  width={336} height={253}/></a>
                </motion.div>

                <motion.div 
                    className="lg:mt-10 border border-solid border-[#1E1E20] rounded-[14px] p-6 lg:w-[384px] lg:h-[255px] bg-[#1E1E20] shadow-xs"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    viewport={{ once: true }}>
                    <a href=""><img src={Work1} alt="" width={336} height={253}/></a>
                </motion.div>

                <motion.div 
                    className="lg:mt-20 border border-solid border-[#1E1E20] rounded-[14px] p-6 lg:w-[384px] lg:h-[255px] bg-[#1E1E20] shadow-xs"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 1.5, delay: 0.9 }}
                    viewport={{ once: true }}>
                    <a href=""><img src={Work3} alt="" width={336} height={253}/></a>
                </motion.div>
            </div>

            {/* portfolio text */}
            <div className="flex flex-col justify-center items-center">
                <motion.h2 
                    className="text-white font-[Montserrat] text-[48px] font-extrabold leading-[57.6px] pt-[44px] lg:w-[672px] text-center mt-10"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}>
                    <Counter target={100} duration={1500}/> Projects Delivered
                </motion.h2>
                <p className="text-[#E7E7F0] font-[Montserrat] text-3xl text-center mt-[17px]">
                    and counting more...
                </p>
                <motion.p 
                    className="text-[#5454D4] font-[Arial] text-[41.06px] font-black lg:w-[1058px] text-center mt-[70px] tracking-[0.2px] leading-[55px] mx-[30px]"
                    initial={{ opacity: 0, y: -55 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    viewport={{ once: true }}>
                    Simplify is a one-of-a-kind design platform trusted by <Counter target={300} duration={1500}/> innovative design teams.
                </motion.p>
            </div>

            <div className="absolute top-[3880px] left-[100px] hidden lg:block">
                <img src={Circles} alt="Circles" width={50}/>
            </div>

            <div className="absolute top-[3675px] right-[130px] hidden lg:block">
                <img src={Plus} alt="Plus" width={42} height={42}/>
            </div>


            {/* why choose us */}
            <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center text-white w-full gap-5 mt-20 lg:px-[120px]">
                <motion.div 
                    className="flex gap-2 mx-[30px]"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x:0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}>
                    <div className="w-10 h-10 rounded-3xl ">
                        <GiAlliedStar className="text-[#5454D4] text-3xl rounded-3xl"/>
                    </div>

                    <div>
                        <h3 className="text-[17.44px] text-[#5454D4] font-[Arial] font-bold leading-[20px] tracking-[0.2px]">
                            Top 2% of Talents
                        </h3>
                        <p className="text-[#7B8087] font-[Inter] text-[16px] leading-[24px] font-normal mt-2">
                            Have the same caliber talents from major brands such as Nike and Lyft also work on your or your client’s projects.
                        </p>
                    </div>  
                </motion.div>

                <motion.div 
                    className="flex gap-2 mx-[30px]"
                    initial={{ opacity: 0, x: -45 }}
                    whileInView={{ opacity: 1, x:0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    viewport={{ once: true }}>
                    <div className="w-10 h-10 rounded-3xl ">
                        <RiTeamFill className="text-[#F04037] text-3xl rounded-3xl"/>
                    </div>

                    <div>
                        <h3 className="text-[17.44px] text-[#5454D4] font-[Arial] font-bold leading-[20px] tracking-[0.2px]">
                            Dedicated Team
                        </h3>
                        <p className="text-[#7B8087] font-[Inter] text-[16px] leading-[24px] font-normal mt-2">
                        Matched with a dedicated team of
                        creatives to guarantee your projects are
                        always delivered on-brand and on-time.
                        </p>
                    </div>
                </motion.div>

                <motion.div 
                    className="flex gap-2 mx-[30px]"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x:0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    viewport={{ once: true }}>
                    <div className="w-10 h-10 rounded-3xl">
                        <MdUnsubscribe className="text-[#FEDC5A] text-3xl rounded-3xl" width={40}/>
                    </div>

                    <div>
                        <h3 className="text-[17.44px] text-[#5454D4] font-[Arial] font-bold leading-[20px] tracking-[0.2px]">
                            Inclusive Subscriptions
                        </h3>
                        <p className="text-[#7B8087] font-[Inter] text-[16px] leading-[24px] font-normal mt-2">
                            No hourly billing, credits, or complex
                            pricing. Our inclusive plans has
                            everything you need to grow and scale.
                        </p>
                    </div>
                    
                </motion.div>
            </div>
            
            <div className="flex flex-col lg:flex-row bg-[#5454D4] text-white rounded-3xl mt-20 lg:h-95 justify-center items-center lg:gap-35 gap-5 lg:mx-[120px] mx-[30px] px-5 py-5">
                <motion.div 
                    className="lg:mt-28 md:justify-items-center lg:justify-items-start"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x:0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}>
                    <div className="flex flex-col lg:flex-row items-center mb-10">
                        <div className="flex items-center gap-4">
                            <div className="bg-linear-to-b from-[#9864FD] to-[#EDC2F1] w-2 h-[58px] mt-1.5"></div>
                            <div className="lg:w-[255px]">
                                <p className="font-[Montserrat] font-semibold text-[26px] leading-[26px] tracking-[0px]">
                                    But without any of the headaches
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <a href="">
                        <button 
                            className="text-white font-[Arial] text-[15px] leading-[28px] font-bold px-[22px] py-6 bg-transparent border-4 border-[#E8618C] rounded-[10px] cursor-pointer hover:bg-[#E8618C]">
                            Get Started With Simplify
                        </button>
                    </a>
                </motion.div>

                <div className="lg:mt-20">
                    <div className="flex gap-15 mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}>
                            <h2 className="text-white font-[Arial] lg:text-[50.86px] text-4xl font-black leading-[64px] tracking-[0.2px]">
                                <Counter target={100} duration={2000}/>
                            </h2>
                            <p className="text-white lg:text-[16px] text-sm font-normal leading-[24px] font-[Inter]">
                                Designs delivered worldwide
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}>
                            <h2 className="text-white font-[Arial] lg:text-[50.86px] text-4xl font-black leading-[64px] tracking-[0.2px]">
                                <Counter target={95} duration={2000}/>
                            </h2>
                            <p className="text-white lg:text-[16px] text-sm font-normal leading-[24px] font-[Inter]">
                                Designs categories available
                            </p>
                        </motion.div>
                    </div>

                    <div className="flex gap-29">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            viewport={{ once: true }}>
                            <h2 className="text-white font-[Arial] lg:text-[50.86px] text-4xl font-black leading-[64px] tracking-[0.2px]">
                                <Counter target={50} duration={2000}/>
                            </h2>
                            <p className="text-white lg:text-[16px] text-sm font-normal leading-[24px] font-[Inter]">
                                Less in design costs
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            viewport={{ once: true }}>
                            <h2 className="text-white font-[Arial] lg:text-[50.86px] text-4xl font-black leading-[64px] tracking-[0.2px]">
                                <Counter target={99} duration={2000}/>
                            </h2>
                            <p className="text-white lg:text-[16px] text-sm font-normal leading-[24px] font-[Inter]">
                                Customer satisfaction rate
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-[60px] mt-28 lg:mx-[120px] mx-[30px]">
                <motion.div 
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x:0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}>
                    <div className="w-32 h-[94px]">
                        <img src={Trustpilot} alt="Trustpilot"/>
                    </div>
                    <div className="w-[150px]">
                        <p className="font-[Inter] font-semibold text-[16px] leading-[24px] text-white">
                            Highest rated design service
                        </p>
                    </div>
                </motion.div>
                    
                <motion.div 
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -45 }}
                    whileInView={{ opacity: 1, x:0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    viewport={{ once: true }}>
                    <div className="">
                        <img src={Goldstar} alt="Goldstar"/>
                    </div>
                    <div className="w-[150px]">
                        <p className="font-[Inter] font-semibold text-[16px] leading-[24px] text-white">
                            Trusted by over 4000 agencies
                        </p>  
                    </div>
                </motion.div>
                    
                <motion.div 
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x:0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    viewport={{ once: true }}>
                    <div className="">
                        <img src={Inc5000} alt="Inc5000"/>
                    </div>
                    <div className="w-[151px]">
                        <p className="font-[Inter] font-semibold text-[16px] leading-[24px] text-white">
                            One of the fastest growing companies in America
                        </p>
                    </div>
                </motion.div>  
            </div>
        </section>
    )
}