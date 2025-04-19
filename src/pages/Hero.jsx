/* eslint-disable no-unused-vars */
import { BsArrowUpRight } from "react-icons/bs";
import HeroImg from "../assets/hero-image.svg";
import RectangleImg from "../assets/Rectangle.svg";
import Plus from "../assets/Plus.svg"
import Triangles from "../assets/Triangles.svg";
import Circles from "../assets/Circles.svg";
import Vector from "../assets/Vector.svg";
import { motion } from "motion/react"

export default function Hero() {
    return (
        <section className="bg-[#19191B]" id="home">
            <div className="flex flex-col-reverse justify-center lg:flex-row lg:justify-between items-center">
                <motion.div 
                  className="lg:pl-[123px] lg:pt-[181px] relative"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}>
                    {/* Gradient */}
                    <motion.div 
                        className="absolute lg:bottom-auto lg:right-auto lg:-left-[100px] lg:-top-[370px] h-[300px] lg:h-[1233px] w-[200px] lg:w-[467px] rounded-[233.5px] 
                        bg-gradient-to-b from-[rgba(84,84,212,1)] to-[rgba(84,84,212,0.42)] blur-[300px] opacity-30 -rotate-[53deg]"
                        initial={{ opacity: 1 }}
                        animate={{
                          scale: [1, 1.05, 1], //scaling for pulsing effect
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}>
                    </motion.div>
                    {/* Hero Text */}
                    <motion.h2 
                      className="text-white font-[Montserrat] text-[22px] font-semibold lg:w-[336px] lg:h-[29px] md:pt-10 pt-10 relative z-20 lg:text-left text-center"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}>
                        WELCOME TO SIMPLIFY
                    </motion.h2>
                    <motion.h1 
                      className="text-white font-[Roboto] text-4xl md:text-7xl lg:text-7xl font-[600] lg:leading-[110.6px] pt-[44px] lg:w-[553px] lg:h-[256px] relative z-20 lg:text-left text-center"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.6 }}
                      viewport={{ once: true }}>
                        Strategy Design Technology
                    </motion.h1>
                    <motion.h2 
                      className="text-white font-[Montserrat] text-[22px] font-semibold lg:w-[680.94px] pt-[40px] relative z-20 lg:text-left text-center"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.9 }}
                      viewport={{ once: true }}>
                        Crafting Brands And Beautiful <br/>Digital Experiences
                    </motion.h2>
                    <motion.div 
                      className="pt-[94px] text-center lg:text-left"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, delay: 1.2 }}
                      viewport={{ once: true }}>
                        <a href="#services">
                            <button 
                                className="text-white font-[Nunito_Sans] text-[20px] font-[700] px-[27px] pt-[15px] pb-[15px] bg-[#E8618C] rounded-sm cursor-pointer hover:bg-[#E8618C]/60">
                                Our Services <BsArrowUpRight className="inline"/>
                            </button>
                        </a>
                    </motion.div>
                    <motion.div 
                      className="absolute top-[510px] right-[120px] hidden lg:block"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, delay: 0.6 }}
                      viewport={{ once: true }}>
                        <img src={Triangles} alt="Triangles" width={60}/>
                    </motion.div>
                    <motion.div 
                      className="absolute top-[180px] right-[100px] hidden lg:block"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, delay: 0.6 }}
                      viewport={{ once: true }}>
                        <img src={Vector} alt="Vector" width={50}/>
                    </motion.div>
                </motion.div>
                <motion.div 
                  className="relative lg:mr-15 pt-9"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}>
                    {/* Gradient */}
                    <motion.div 
                        className="absolute lg:bottom-auto lg:left-auto lg:right-[150px] lg:top-[120px] h-[300px] lg:h-[650px] w-[300px] lg:w-[600px] rounded-[233.5px] 
                        bg-gradient-to-b from-[rgba(251,168,28,0.26)] to-[rgba(224,86,136,0.15)] blur-[150px] opacity-60 rotate-[65deg]"
                        initial={{ opacity: 1 }}
                        animate={{
                          scale: [1, 1.05, 1], //scaling for pulsing effect
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}>
                    </motion.div>
                    {/* Hero Image */}
                    <div className="relative z-20 flex justify-center items-center">
                        <img src={HeroImg} alt="Hero Image"/>
                    </div>
                    <div className="absolute top-[140px] right-[65px] z-10 hidden lg:block">
                        <img src={RectangleImg} width={300} height={300} alt="Rectangle Image"/>
                    </div>
                    <div className="z-10">
                        <motion.div 
                          className="absolute top-[420px] right-[50px] hidden lg:block"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 1, delay: 0.6 }}
                          viewport={{ once: true }}>
                            <img src={Plus} alt="Plus" width={50}/>
                        </motion.div>
                        <motion.div 
                          className="absolute top-[30px] right-[50px] hidden lg:block"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 1, delay: 0.6 }}
                          viewport={{ once: true }}>
                            <img src={Circles} alt="Circles" width={50}/>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}