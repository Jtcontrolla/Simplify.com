/* eslint-disable no-unused-vars */
import Plus from "../assets/Plus.svg"
import Triangles from "../assets/Triangles.svg";
import { MdOutlineDeveloperMode, MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineAntDesign, AiOutlineProduct } from "react-icons/ai";
import { FaBrain } from "react-icons/fa";
import { GrVmMaintenance } from "react-icons/gr";
import { motion } from "motion/react"

export default function Services () {
    return (
        <section className="bg-[#19191B mt-35" id="services">
            <div className="flex justify-center">
                <motion.h2 
                    className="text-white font-[Poppins] text-5xl lg:text-[60px] font-[600] lg:leading-[70.6px] text-center md:w-[695px] lg:h-[140px] lg:mt-15 px-[30px] relative z-20"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}>
                    The Service We Provide
                    For You
                </motion.h2>
            </div>

            <motion.div 
                className="absolute top-[1848px] right-[1060px] z-10 hidden lg:block"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "linear" 
                }}>
                <img src={Triangles} alt="Triangles" width={60}/>
            </motion.div>
            <motion.div 
                className="absolute top-[1950px] right-[110px] rotate-[31.42deg] hidden lg:block"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "linear" 
                }}>
                <img src={Plus} alt="Plus" width={40}/>
            </motion.div>
            <motion.div 
                className="absolute top-[2660px] right-[1120px] -rotate-[25.34deg] hidden lg:block"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "linear" 
                }}>
                <img src={Plus} alt="Plus" width={40}/>
            </motion.div>

             {/* Gradient */}
             <motion.div 
                className="absolute lg:left-[-50px] lg:top-[1700px] h-[300px] lg:h-[508.5px] w-[300px] lg:w-[467px] rounded-[233.5px] 
                bg-gradient-to-b from-[rgba(84,84,212,1)] to-[rgba(84,84,212,0.42)] lg:blur-[180px] blur-[250px] 
                opacity-30 -rotate-[125.63deg]"
                initial={{ opacity: 1 }}
                animate={{
                    scale: [1, 1.01, 1], //Scaling for pulsing effect
                }}
                transition={{
                    duration:2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}>
            </motion.div>
            <motion.div 
                className="absolute lg:left-[22px] top-[3000px] lg:top-[1960px] h-[300px] lg:h-[1400px] w-[300px] lg:w-[660px] rounded-[233.5px] 
                bg-gradient-to-b from-[rgba(251,168,28,0.4)] to-[rgba(224,86,136,0.15)] blur-[300px] 
                opacity-30 rotate-[67.1deg]"
                initial={{ opacity: 1 }}
                animate={{
                    scale: [1, 1.01, 1], //Scaling for pulsing effect
                }}
                transition={{
                    duration:2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}>
            </motion.div>

            <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-[24px] mt-20 lg:px-[120px] text-center text-white relative z-20">
                <motion.div 
                    className="flex flex-col justify-center items-center w-[384px] h-[300px]"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}>
                    <div className="hover:bg-[#46465c] w-12 h-12 rounded-3xl">
                        <MdOutlineDeveloperMode className="text-[#5454D4] text-2xl rounded-3xl relative top-3 left-3"/>
                    </div>
                    <h3 className="text-[28px] font-[Nunito_Sans] font-semibold tracking-[-0.75px]">
                        Development
                    </h3>
                    <p className="text-white/70 font-[Nunito_Sans] font-normal w-[299px] tracling-[-0.5px] text-[20px] leading-[28px] mt-[20px]">
                        Create a platform with the best and coolest quality from us.
                    </p>
                </motion.div>

                <motion.div 
                    className="flex flex-col justify-center items-center w-[384px] h-[300px]"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}>
                    <div className="hover:bg-[#483332] w-12 h-12 rounded-3xl">
                        <MdOutlineDesignServices className="text-[#F04037] text-2xl rounded-3xl relative top-3 left-3"/>
                    </div>
                    <h3 className="text-[28px] font-[Nunito_Sans] font-semibold tracking-[-0.75px]">
                        UI/UX Design
                    </h3>
                    <p className="text-white/70 font-[Nunito_Sans] font-normal w-[299px] tracling-[-0.5px] text-[20px] leading-[28px] mt-[20px]">
                        We provide UI/UX Design / Product Design services, and of course with the best quality
                    </p>
                </motion.div>

                <motion.div 
                    className="flex flex-col justify-center items-center w-[384px] h-[300px]"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    viewport={{ once: true }}>
                    <div className="hover:bg-[#59564b] w-12 h-12 rounded-3xl">
                        <AiOutlineAntDesign className="text-[#FEDC5A] text-2xl rounded-3xl relative top-3 left-3"/>
                    </div>
                    <h3 className="text-[28px] font-[Nunito_Sans] font-semibold tracking-[-0.75px]">
                        Graphic Design
                    </h3>
                    <p className="text-white/70 font-[Nunito_Sans] font-normal w-[299px] tracling-[-0.5px] text-[20px] leading-[28px] mt-[20px]">
                        We provide Graphic Design services, with the best designers
                    </p>
                </motion.div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-5 mt-[24px] lg:px-[120px] text-center text-white relative z-20">
                <motion.div 
                    className="flex flex-col justify-center items-center w-[384px] h-[300px]"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    viewport={{ once: true }}>
                    <div className="hover:bg-[#59564b] w-12 h-12 rounded-3xl">
                        <FaBrain className="text-[#FEDC5A] text-2xl rounded-3xl relative top-3 left-3"/>
                    </div>
                    <h3 className="text-[28px] font-[Nunito_Sans] font-semibold tracking-[-0.75px]">
                        AI Integration
                    </h3>
                    <p className="text-white/70 font-[Nunito_Sans] font-normal w-[299px] tracling-[-0.5px] text-[20px] leading-[28px] mt-[20px]">
                        Create a platform with the best and coolest quality from us.
                    </p>
                </motion.div>

                <motion.div 
                    className="flex flex-col justify-center items-center w-[384px] h-[300px]"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.4 }}
                    viewport={{ once: true }}>
                    <div className="hover:bg-[#46465c] w-12 h-12 rounded-3xl">
                        <AiOutlineProduct className="text-[#5454D4] text-2xl rounded-3xl relative top-3 left-3"/>
                    </div>
                    <h3 className="text-[28px] font-[Nunito_Sans] font-semibold tracking-[-0.75px]">
                        Product Design
                    </h3>
                    <p className="text-white/70 font-[Nunito_Sans] font-normal w-[299px] tracling-[-0.5px] text-[20px] leading-[28px] mt-[20px]">
                        We provide photography services, and of course with the best quality
                    </p>
                </motion.div>

                <motion.div 
                    className="flex flex-col justify-center items-center w-[384px] h-[300px]"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    viewport={{ once: true }}>
                    <div className="hover:bg-[#483332] w-12 h-12 rounded-3xl">
                        <GrVmMaintenance className="text-[#F04037] text-2xl rounded-3xl relative top-3 left-3"/>
                    </div>
                    <h3 className="text-[28px] font-[Nunito_Sans] font-semibold tracking-[-0.75px]">
                        Maintenance
                    </h3>
                    <p className="text-white/70 font-[Nunito_Sans] font-normal w-[299px] tracling-[-0.5px] text-[20px] leading-[28px] mt-[20px]">
                        Hands on approach to fix any bug you may encounter
                    </p>
                </motion.div>
            </div>
        </section>
    )
}