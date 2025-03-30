import UI_UX from '../assets/representations-user-experience-interface-design 3.svg'
import AdobeIllust from '../assets/adobeillustrator.svg'
import Figma from '../assets/figma.svg'
import React from '../assets/react.svg'
import NodeJS from '../assets/NodeJS.svg'
import JQuery from '../assets/JQuery.svg'
import HTML from '../assets/HTML.svg'
import CSS from '../assets/CSS.svg'

export default function About() {
    return (
        <div className="bg-[#19191B] pt-[240px]" id="about">
            <div className="flex justify-center gap-6 max-w-[1200px] max-h-[140px]">
                <div className="min-w-[588px] max-h-[140px] pl-[50px]">
                    <h2 className="text-white font-[Poppins] text-6xl font-bold leading-[70px] tracking-[0px]">
                        Why Simplify Is The Best Choice?
                    </h2>
                </div>
                <div className="max-w-[588px] max-h-[117px] pr-[50px]">
                    <p className="text-[#ccc] font-[Nunito_Sans] font-normal leading-[39px] tracking-[-0.66px] text-[21px]">We're Simplify, a global design, branding, and development
                       agency. We craft thoughtful digital experiences, stunning brand
                       aesthetics, and innovative solutions.</p>
                </div>
            </div>

            <div className='flex justify-center items-center bg-[#636AE8]/10 rounded-3xl ml-[205px] mr-[188px] mt-[101px]'>
                <p className='font-[Poppins] text-3xl leading-[30px] text-white font-medium px-[33px] py-[77px] text-center'>
                    At Simplify, we provide exceptional technology solutions and services. 
                    We leverage our large knowledge base to deliver solutions that meet customers needs, business and budget <br/>expectations.<br/> 
                    We firmly believe in delivering customized solutions for all your needs. 
                    We make custom Website Development, Designing, Branding, Android/iOS App Development, Software Development & Printing possible.
                </p>            
            </div>
            {/* Images */}
            <div className='relative top-[-450px] left-[-45px] max-w-[219px]'>
                <img src={UI_UX} alt="UI/UX" className="w-[219px] h-[219px]"/>
            </div>
            <div className='relative top-[-600px] left-[187px] max-w-[112px]'>
                <img src={AdobeIllust} alt="Adobe Illustrator" className="w-[112px] h-[112px] opacity-40"/>
            </div>
            <div className='relative top-[-835px] left-[747px] max-w-[135px]'>
                <img src={Figma} alt="Figma" className="w-[135px] h-[135px] opacity-60"/>
            </div>
            <div className='relative top-[-932px] left-[1080px] max-w-[84px]'>
                <img src={React} alt="React" className="w-[84px] h-[84px] opacity-50"/>
            </div>
            <div className='relative top-[-932px] left-[920px] max-w-[84px]'>
                <img src={NodeJS} alt="NodeJS" className="w-[84px] h-[84px] opacity-40"/>
            </div>
            <div className='relative top-[-910px] left-[920px] max-w-[84px]'>
                <img src={JQuery} alt="JQuery" className="w-[84px] h-[84px] opacity-50"/>
            </div>
            <div className='relative top-[-880px] left-[1030px] max-w-[80px]'>
                <img src={HTML} alt="HTML" className="w-[80px] h-[80px] opacity-50"/>
            </div>
            <div className='relative top-[-967px] left-[1123px] max-w-[92px]'>
                <img src={CSS} alt="CSS" className="w-[92px] h-[92px] opacity-50"/>
            </div>
        </div>
    );
}