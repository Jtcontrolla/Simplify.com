/* eslint-disable no-unused-vars */
import { motion } from "motion/react"

export default function Contact () {
    return (
        <section className="bg-[#1E1E20]/50 mt-[150px]" id="contact">
            <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-[173px] gap-10 lg:px-[120px] px-[30px] lg:py-[223px] py-10 lg:w-full lg:h-[506px]">
                <motion.h1 
                    className="font-[Inter] font-bold lg:text-6xl text-4xl text-white text-center lg:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}>
                    Contact us for the service you want to use
                </motion.h1>
                <motion.a 
                    href=""
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}>
                    <button className="bg-[#E8618C] hover:bg-[#E8618C]/60 border border-[#E8618C] rounded-sm py-[17px] w-[201px] font-[Nunito_Sans] font-bold text-[21px] text-white cursor-pointer">
                        Contact us
                    </button>
                </motion.a>
            </div>
        </section>
    )
}