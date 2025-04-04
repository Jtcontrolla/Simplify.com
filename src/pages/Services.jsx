import Plus from "../assets/Plus.svg"
import Triangles from "../assets/Triangles.svg";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaBrain } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { GrVmMaintenance } from "react-icons/gr";


export default function Services () {
    return (
        <section className="bg-[#19191B mt-35" id="services">
            <div className="flex justify-center">
                <h2 className="text-white font-[Inter] text-[60px] font-[600] leading-[70.6px] text-center w-[695px] h-[140px] mt-15 relative z-20">The Service We Provide
                For You</h2>
            </div>

            <div className="absolute top-[1848px] right-[1060px] z-10">
                <img src={Triangles} alt="Triangles" width={60}/>
            </div>
            <div className="absolute top-[1950px] right-[110px] rotate-[31.42deg]">
                <img src={Plus} alt="Plus" width={40}/>
            </div>
            <div className="absolute top-[2660px] right-[1120px] -rotate-[25.34deg]">
                <img src={Plus} alt="Plus" width={40}/>
            </div>

             {/* Gradient */}
             <div 
                className="absolute left-[-50px] top-[1700px] h-[508.5px] w-[467px] rounded-[233.5px] bg-gradient-to-b from-[rgba(84,84,212,1)] to-[rgba(84,84,212,0.42)] blur-[180px] opacity-30 -rotate-[125.63deg]">
            </div>
            <div 
                className="absolute left-[22px] top-[1960px] h-[1400px] w-[860px] rounded-[233.5px] bg-gradient-to-b from-[rgba(251,168,28,0.4)] to-[rgba(224,86,136,0.15)] blur-[300px] opacity-30 rotate-[67.1deg]">
            </div>

            <div className="flex justify-center w-full gap-[24px] mt-20 px-[120px] text-center text-white relative z-20">
                <div className="flex flex-col justify-center items-center w-[384px] h-[300px]">
                    <div className="hover:bg-[#46465c] w-12 h-12 rounded-3xl">
                        <MdOutlineDeveloperMode className="text-[#5454D4] text-2xl rounded-3xl relative top-3 left-3"/>
                    </div>
                    <h3 className="text-[28px] font-[Nunito_Sans] font-semibold tracking-[-0.75px]">
                        Development
                    </h3>
                    <p className="text-white/70 font-[Nunito_Sans] font-normal w-[299px] tracling-[-0.5px] text-[20px] leading-[28px] mt-[20px]">
                        Create a platform with the best and coolest quality from us.
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center w-[384px] h-[300px]">
                    <div className="hover:bg-[#483332] w-12 h-12 rounded-3xl">
                        <MdOutlineDesignServices className="text-[#F04037] text-2xl rounded-3xl relative top-3 left-3"/>
                    </div>
                    <h3 className="text-[28px] font-[Nunito_Sans] font-semibold tracking-[-0.75px]">
                        UI/UX Design
                    </h3>
                    <p className="text-white/70 font-[Nunito_Sans] font-normal w-[299px] tracling-[-0.5px] text-[20px] leading-[28px] mt-[20px]">
                        We provide UI/UX Design / Product Design services, and of course with the best quality
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center w-[384px] h-[300px]">
                    <div className="hover:bg-[#59564b] w-12 h-12 rounded-3xl">
                        <AiOutlineAntDesign className="text-[#FEDC5A] text-2xl rounded-3xl relative top-3 left-3"/>
                    </div>
                    <h3 className="text-[28px] font-[Nunito_Sans] font-semibold tracking-[-0.75px]">
                        Graphic Design
                    </h3>
                    <p className="text-white/70 font-[Nunito_Sans] font-normal w-[299px] tracling-[-0.5px] text-[20px] leading-[28px] mt-[20px]">
                        We provide Graphic Design services, with the best designers
                    </p>
                </div>
            </div>

            <div className="flex justify-center w-full gap-5 mt-[24px] px-[120px] text-center text-white relative z-20">
                <div className="flex flex-col justify-center items-center w-[384px] h-[300px]">
                    <div className="hover:bg-[#59564b] w-12 h-12 rounded-3xl">
                        <FaBrain className="text-[#FEDC5A] text-2xl rounded-3xl relative top-3 left-3"/>
                    </div>
                    <h3 className="text-[28px] font-[Nunito_Sans] font-semibold tracking-[-0.75px]">
                        AI Integration
                    </h3>
                    <p className="text-white/70 font-[Nunito_Sans] font-normal w-[299px] tracling-[-0.5px] text-[20px] leading-[28px] mt-[20px]">
                        Create a platform with the best and coolest quality from us.
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center w-[384px] h-[300px]">
                    <div className="hover:bg-[#46465c] w-12 h-12 rounded-3xl">
                        <AiOutlineProduct className="text-[#5454D4] text-2xl rounded-3xl relative top-3 left-3"/>
                    </div>
                    <h3 className="text-[28px] font-[Nunito_Sans] font-semibold tracking-[-0.75px]">
                        Product Design
                    </h3>
                    <p className="text-white/70 font-[Nunito_Sans] font-normal w-[299px] tracling-[-0.5px] text-[20px] leading-[28px] mt-[20px]">
                        We provide photography services, and of course with the best quality
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center w-[384px] h-[300px]">
                    <div className="hover:bg-[#483332] w-12 h-12 rounded-3xl">
                        <GrVmMaintenance className="text-[#F04037] text-2xl rounded-3xl relative top-3 left-3"/>
                    </div>
                    <h3 className="text-[28px] font-[Nunito_Sans] font-semibold tracking-[-0.75px]">
                        Maintenance
                    </h3>
                    <p className="text-white/70 font-[Nunito_Sans] font-normal w-[299px] tracling-[-0.5px] text-[20px] leading-[28px] mt-[20px]">
                        Hands on approach to fix any bug you may encounter
                    </p>
                </div>
            </div>
        </section>
    )
}