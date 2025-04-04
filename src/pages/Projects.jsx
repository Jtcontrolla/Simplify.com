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

export default function Projects () {
    return (
        <section className="bg-[#19191B]" id="projects">
            <h2 className="text-white font-[Nunito_Sans] text-5xl font-extrabold leading-[70.6px] pt-[44px] w-[593px] ml-15 text-center mt-35">Our Awesome Portfolio</h2>

            <div className="absolute top-[2920px] right-[130px] z-10">
                <img src={Circles} alt="Circles" width={50}/>
            </div>

            <div className="absolute top-[3500px] left-[113px]">
                <img src={Vector} alt="Vector" width={50}/>
            </div>

            {/* Gradient */}
            <div 
                className="absolute left-[900px] top-[2830px] h-[300px] w-[300px] rounded-[233.5px] bg-gradient-to-b from-[rgba(84,84,212,1)] to-[rgba(84,84,212,0.42)] blur-[150px] opacity-30 -rotate-[125.63deg]">
            </div>

            {/* portfolios */}
            <div className="flex gap-7 justify-center mt-20 px-[120px]">
                <div className="border border-solid border-[#1E1E20] rounded-[14px] p-6 w-[384px] h-[255px] bg-[#1E1E20] shadow-xs">
                    <a href=""><img src={Work1} alt=""  width={336} height={253}/></a>
                </div>

                <div className="mt-10 border border-solid border-[#1E1E20] rounded-[14px] p-6 w-[384px] h-[255px] bg-[#1E1E20] shadow-xs">
                    <a href=""><img src={Work2} alt="" width={336} height={253}/></a>
                </div>

                <div className="mt-20 border border-solid border-[#1E1E20] rounded-[14px] p-6 w-[384px] h-[255px] bg-[#1E1E20] shadow-xs">
                    <a href=""><img src={Work3} alt="" width={336} height={253}/></a>
                </div>
            </div>

            <div className="flex gap-7 justify-center px-[120px]">
                <div className="border border-solid border-[#1E1E20] rounded-[14px] p-6 w-[384px] h-[255px] bg-[#1E1E20] shadow-xs">
                    <a href=""><img src={Work2} alt=""  width={336} height={253}/></a>
                </div>

                <div className="mt-10 border border-solid border-[#1E1E20] rounded-[14px] p-6 w-[384px] h-[255px] bg-[#1E1E20] shadow-xs">
                    <a href=""><img src={Work1} alt="" width={336} height={253}/></a>
                </div>

                <div className="mt-20 border border-solid border-[#1E1E20] rounded-[14px] p-6 w-[384px] h-[255px] bg-[#1E1E20] shadow-xs">
                    <a href=""><img src={Work3} alt="" width={336} height={253}/></a>
                </div>
            </div>

            {/* portfolio text */}
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-white font-[Montserrat] text-[48px] font-extrabold leading-[57.6px] pt-[44px] w-[672px] text-center mt-10">
                    100+ Projects Delivered
                </h2>
                <p className="text-[#E7E7F0] font-[Montserrat] text-3xl text-center mt-[17px]">
                    and counting more...
                </p>
                <p className="text-[#5454D4] font-[Arial] text-[41.06px] font-black w-[1058px] text-center mt-[70px] tracking-[0.2px] leading-[55px]">
                    Simplify is a one-of-a-kind design platform trusted by 300+ innovative design teams.
                </p>
            </div>

            <div className="absolute top-[3280px] right-[960px]">
                <img src={Circles} alt="Circles" width={50}/>
            </div>

            <div className="absolute top-[3675px] right-[130px]">
                <img src={Plus} alt="Plus" width={42} height={42}/>
            </div>


            {/* why choose us */}
            <div className="flex justify-center items-center text-white w-full gap-5 mt-20 px-[120px] ">
                <div className="flex gap-2">
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
                </div>

                <div className="flex gap-2">
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
                </div>

                <div className="flex gap-2">
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
                    
                </div>
            </div>
            
            <div className="flex bg-[#5454D4] text-white rounded-3xl mt-20 h-95 justify-center gap-35 mx-[120px]">
                <div className="mt-28">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="bg-linear-to-b from-[#9864FD] to-[#EDC2F1] w-2 h-[58px] mt-1.5"></div>
                        <div className="w-[255px]">
                            <p className="font-[Montserrat] font-semibold text-[26px] leading-[26px] tracking-[0px]">
                                But without any of the headaches
                            </p>
                        </div>
                    </div>
                    
                    <a href="">
                        <button 
                            className="text-white font-[Arial] text-[15px] leading-[28px] font-bold px-[22px] py-6 bg-transparent border-4 border-[#E8618C] rounded-[10px] cursor-pointer hover:bg-[#E8618C]">
                            Get Started With Simplify
                        </button>
                    </a>
                </div>

                <div className="mt-20">
                    <div className="flex gap-15 mb-20">
                        <div>
                            <h2 className="text-white font-[Arial] text-[50.86px] font-black leading-[64px] tracking-[0.2px]">
                                100+
                            </h2>
                            <p className="text-white text-[16px] font-normal leading-[24px] font-[Inter]">
                                Designs delivered worldwide
                            </p>
                        </div>

                        <div>
                            <h2 className="text-white font-[Arial] text-[50.86px] font-black leading-[64px] tracking-[0.2px]">
                                95+
                            </h2>
                            <p className="text-white text-[16px] font-normal leading-[24px] font-[Inter]">
                                Designs categories available
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-29">
                        <div>
                            <h2 className="text-white font-[Arial] text-[50.86px] font-black leading-[64px] tracking-[0.2px]">
                                50+
                            </h2>
                            <p className="text-white text-[16px] font-normal leading-[24px] font-[Inter]">
                                Less in design costs
                            </p>
                        </div>

                        <div>
                            <h2 className="text-white font-[Arial] text-[50.86px] font-black leading-[64px] tracking-[0.2px]">
                                99+
                            </h2>
                            <p className="text-white text-[16px] font-normal leading-[24px] font-[Inter]">
                                Customer satisfaction rate
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center gap-[60px] mt-28 mx-[120px]">
                <div className="flex items-center gap-4">
                    <div className="w-32 h-[94px]">
                        <img src={Trustpilot} alt="Trustpilot"/>
                    </div>
                    <div className="w-[150px]">
                        <p className="font-[Inter] font-semibold text-[16px] leading-[24px] text-white">
                            Highest rated design service
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="">
                        <img src={Goldstar} alt="Goldstar"/>
                    </div>
                    <div className="w-[150px]">
                        <p className="font-[Inter] font-semibold text-[16px] leading-[24px] text-white">
                            Trusted by over 4000 agencies
                        </p>  
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="">
                        <img src={Inc5000} alt="Inc5000"/>
                    </div>
                    <div className="w-[151px]">
                        <p className="font-[Inter] font-semibold text-[16px] leading-[24px] text-white">
                            One of the fastest growing companies in America
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}