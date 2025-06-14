/* eslint-disable no-unused-vars */
import { MdOutlineDeveloperMode } from 'react-icons/md';
import { GiConversation } from "react-icons/gi";
import { TbBusinessplan } from "react-icons/tb";
import { GrTest, GrDeploy } from "react-icons/gr";
import { motion } from "motion/react"

export default function Process() {
    return (
        <section className="bg-[#19191B] mt-35" id="process">
            <motion.h2 
                className="text-white font-[Poppins] font-bold text-5xl text-center mb-[25px] relative z-20"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}>
                Our Process at Simplify
            </motion.h2>
            <div className="flex flex-col gap-y-20 mt-[80px] lg:px-[120px] mx-[30px] lg:mx-0 relative z-20">
                
                <div className="flex flex-col lg:flex-row justify-evenly items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}>
                        <GiConversation className="text-white" size={200}/>
                    </motion.div>
                    <motion.div 
                        className="w-[450px]"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}>
                        <h3 className="text-[28px] text-white font-[Nunito_Sans] font-semibold mt-[20px] text-right">
                            01<br/>Consultation & Discovery
                        </h3>
                        <p className="text-white/70 font-[Nunito_Sans] font-normal mt-[5px] text-right">
                            We begin by understanding your needs and goals, conducting thorough research to inform our approach.
                        </p>
                    </motion.div> 
                </div>

                <div className="flex flex-col lg:flex-row-reverse justify-evenly items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}>
                        <TbBusinessplan className="text-white" size={200}/>
                    </motion.div>
                    <motion.div 
                        className="w-[450px]"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}>
                        <h3 className="text-[28px] text-white font-[Nunito_Sans] font-semibold mt-[20px] text-left">
                            02<br/>Proposal & Planning
                        </h3>
                        <p className="text-white/70 font-[Nunito_Sans] font-normal mt-[5px] text-left">
                            We present a detailed proposal outlining our strategy, timeline, and budget, ensuring alignment with your expectations.
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row justify-evenly items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}>
                        <MdOutlineDeveloperMode className="text-white" size={200}/>
                    </motion.div>
                    <motion.div 
                        className="w-[450px]"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}>
                        <h3 className="text-[28px] text-white font-[Nunito_Sans] font-semibold mt-[20px] text-right">
                            03<br/>Development & Execution
                        </h3>
                        <p className="text-white/70 font-[Nunito_Sans] font-normal mt-[5px] text-right">
                            Our team executes the project with precision, adhering to best practices and maintaining open communication throughout the process.
                        </p>
                    </motion.div> 
                </div>

                <div className="flex flex-col lg:flex-row-reverse justify-evenly items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}>
                        <GrTest className="text-white" size={200}/>
                    </motion.div>
                    <motion.div 
                        className="w-[450px]"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}>
                        <h3 className="text-[28px] text-white font-[Nunito_Sans] font-semibold mt-[20px] text-left">
                            04<br/>Testing & Quality Assurance
                        </h3>
                        <p className="text-white/70 font-[Nunito_Sans] font-normal mt-[5px] text-left">
                            Rigorous testing ensures the final product meets our high standards and your expectations, with thorough quality assurance checks.
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row justify-evenly items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}>
                        <GrDeploy className="text-white" size={200}/>
                    </motion.div>
                    <motion.div 
                        className="w-[450px]"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}>
                        <h3 className="text-[28px] text-white font-[Nunito_Sans] font-semibold mt-[20px] text-right">
                            05<br/>Deployment & Launch
                        </h3>
                        <p className="text-white/70 font-[Nunito_Sans] font-normal mt-[5px] text-right">
                            We deploy the final product, ensuring a smooth launch and providing support to address any immediate concerns or adjustments.
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}