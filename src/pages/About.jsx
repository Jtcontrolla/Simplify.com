/* eslint-disable no-unused-vars */
import UI_UX from '../assets/representations-user-experience-interface-design 3.svg'
import AdobeIllust from '../assets/adobeillustrator.svg'
import Figma from '../assets/figma.svg'
import React from '../assets/react.svg'
import NodeJS from '../assets/NodeJS.svg'
import JQuery from '../assets/JQuery.svg'
import HTML from '../assets/HTML.svg'
import CSS from '../assets/CSS.svg'
import Tailwind from '../assets/Tailwind.svg'
import Python from '../assets/Python.svg'
import Development from '../assets/Development.svg'
import CustomerService from '../assets/CustomerService.svg'
import AdobeID from '../assets/AdobeID.svg'
import Flutter from '../assets/Flutter.svg'
import Swift from '../assets/Swift.svg'
import Java from '../assets/Java.svg'
import Framer from '../assets/Framer.svg'
import AdobeXD from '../assets/AdobeXD.svg'
import { motion } from "motion/react"

export default function About() {
    return (
        <section className="bg-[#19191B] lg:pt-[240px] pt-[100px]" id="about">
            <div className="flex flex-col lg:flex-row justify-center gap-6 w-full lg:max-h-[140px] lg:px-[120px] px-[30px] mb-[50px]">
                <motion.div 
                    className="lg:min-w-[588px] lg:max-h-[140px]"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}>
                    <h2 className="text-white font-[Poppins] text-4xl lg:text-6xl font-bold lg:leading-[70px] lg:tracking-[0px] text-center lg:text-left">
                        Why Simplify Is The Best Choice?
                    </h2>
                </motion.div>
                <motion.div 
                    className="lg:max-w-[588px] lg:max-h-[117px]"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}>
                    <p className="text-[#ccc] font-[Nunito_Sans] font-normal lg:leading-[39px] lg:tracking-[-0.66px] text-[18px] text-center lg:text-left">
                        We're Simplify, a global design, branding, and development
                       agency. We craft thoughtful digital experiences, stunning brand
                       aesthetics, and innovative solutions.</p>
                </motion.div>
            </div>

            <motion.div 
                className='flex justify-center items-center bg-[#636AE8]/10 rounded-3xl lg:ml-[205px] lg:mr-[188px] lg:mt-[101px] py-5 px-5 mx-[30px]'
                initial={{ opacity: 0 , y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0.2 }}
                viewport={{ once: true }}>
                <motion.p 
                    className='font-[Poppins] text-3xl leading-[30px] text-white font-medium lg:px-[33px] lg:py-[77px] text-center'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4}}
                    viewport={{ once: true }}>
                    At Simplify, we provide exceptional technology solutions and services. 
                    We leverage our large knowledge base to deliver solutions that meet customers needs, business and budget <br/>expectations.<br/> 
                    We firmly believe in delivering customized solutions for all your needs. 
                    We make custom Website Development, Designing, Branding, Android/iOS App Development, Software Development & Printing possible.
                </motion.p>            
            </motion.div>
            {/* Images */}
            <img src={UI_UX} alt="UI/UX" 
                className="absolute top-[1189px] left-[-45px] w-[219px] h-[219px] hidden lg:block"/>
            <img src={AdobeIllust} alt="Adobe Illustrator" 
                className="absolute top-[1257px] left-[187px] w-[112px] h-[112px] opacity-40 hidden lg:block"/>
            <img src={Figma} alt="Figma" 
                className="absolute top-[1115px] left-[747px] w-[135px] h-[135px] opacity-60 hidden lg:block"/>
            <img src={React} alt="React" 
                className="absolute top-[1179px] left-[1080px] w-[84px] h-[84px] opacity-50 hidden lg:block"/>
            <img src={NodeJS} alt="NodeJS" 
                className="absolute top-[1263px] left-[950px] w-[84px] h-[84px] opacity-40 hidden lg:block"/>
            <img src={JQuery} alt="JQuery" 
                className="absolute top-[1373px] left-[950px] w-[84px] h-[84px] opacity-50 hidden lg:block"/>
            <img src={HTML} alt="HTML" 
                className="absolute top-[1481px] left-[1030px] w-[80px] h-[80px] opacity-50 hidden lg:block"/>
            <img src={CSS} alt="CSS" 
                className="absolute top-[1471px] left-[1123px] w-[92px] h-[92px] opacity-50 hidden lg:block"/>
            <img src={Tailwind} alt="Tailwind" 
                className="absolute top-[1373px] left-[1230px] w-[34px] h-[84px] opacity-50 hidden lg:block"/>
            <img src={Python} alt="Python" 
                className="absolute top-[1244px] left-[1230px] w-[34px] h-[86px] opacity-50 hidden lg:block"/>
            <img src={Development} alt="Development" 
                className="absolute top-[1335px] left-[1100px] w-[84px] h-[83px] opacity-50 hidden lg:block"/>
            <img src={CustomerService} alt="CustomerService" 
                className="absolute top-[1596px] left-[900px] w-[80px] h-[80px] opacity-50 hidden lg:block"/>
            <img src={AdobeID} alt="AdobeID" 
                className="absolute top-[1613px] left-[600px] w-[112px] h-[112px] opacity-50 hidden lg:block"/>
            <img src={Framer} alt="Framer" 
                className="absolute top-[1668px] left-[1090px] w-[112px] h-[112px] hidden lg:block"/>
            <img src={Java} alt="Java" 
                className="absolute top-[1701px] left-[308px] w-[84px] h-[83px] opacity-50 hidden lg:block"/>
            <img src={Swift} alt="Swift" 
                className="absolute top-[1701px] left-[405px] w-[84px] h-[84px] opacity-50 hidden lg:block"/>
            <img src={Flutter} alt="Flutter" 
                className="absolute top-[1701px] left-[490px] w-[84px] h-[84px] opacity-50 hidden lg:block"/>
            <img src={AdobeXD} alt="Flutter" 
                className="absolute top-[1634px] left-[82.59px] w-[100.69px] h-[100.69px] hidden lg:block"/>
        </section>
    );
}