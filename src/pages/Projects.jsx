import Circles from "../assets/Circles.svg";
import Vector from "../assets/Vector.svg";
import Plus from "../assets/Plus.svg"
import Work1 from '../assets/Work1.png'
import Work2 from '../assets/Work2.png'
import Work3 from '../assets/Work3.png'
import { GiAlliedStar } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { MdUnsubscribe } from "react-icons/md";

export default function Projects () {
    return (
        <section className="bg-[#19191B]" id="projects">
            <h2 className="text-white font-[Nunito_Sans] text-5xl font-extrabold leading-[70.6px] pt-[44px] w-[593px] ml-15 text-center mt-35">Our Awesome Portfolio</h2>

            <div className="absolute top-[2650px] right-[130px]">
                <img src={Circles} alt="Circles" width={50}/>
            </div>

            <div className="absolute top-[2899px] right-[1090px]">
                <img src={Vector} alt="Vector" width={50}/>
            </div>

            {/* Gradient */}
            <div 
                className="absolute left-[900px] top-[2530px] h-[300px] w-[300px] rounded-[233.5px] bg-gradient-to-b from-[rgba(84,84,212,1)] to-[rgba(84,84,212,0.42)] blur-[180px] opacity-30 -rotate-[125.63deg]">
            </div>

            {/* portfolios */}
            <div className="flex gap-7 justify-center mt-20">
                <div className="border-1 border-[#1E1E20] rounded-[14px]">
                    <a href=""><img src={Work1} alt=""  width={336} height={253}/></a>
                </div>

                <div className="mt-10">
                    <a href=""><img src={Work2} alt="" width={336} height={253}/></a>
                </div>

                <div className="mt-20">
                    <a href=""><img src={Work3} alt="" width={336} height={253}/></a>
                </div>
            </div>

            <div className="flex gap-7 justify-center">
                <div className="">
                    <a href=""><img src={Work2} alt=""  width={336} height={253}/></a>
                </div>

                <div className="mt-10">
                    <a href=""><img src={Work1} alt="" width={336} height={253}/></a>
                </div>

                <div className="mt-20">
                    <a href=""><img src={Work3} alt="" width={336} height={253}/></a>
                </div>
            </div>

            {/* portfolio text */}
            <h2 className="text-white font-[Roboto] text-4xl font-[600] leading-[70.6px] pt-[44px] w-[593px] ml-85 text-center mt-10">100+ Projects Delivered</h2>
            <p className="text-[#ccc] font-[Roboto] text-2xl text-center">and counting more...</p>
            <p className="text-[#5454D4] font-[Roboto] text-4xl font-[500] w-[693px] ml-75 text-center mt-10">Simplify is a one-of-a-kind design platform 
            trusted by 300+ innovative design teams.</p>

            <div className="absolute top-[3280px] right-[960px]">
                <img src={Circles} alt="Circles" width={50}/>
            </div>

            <div className="absolute top-[3100px] right-[130px]">
                <img src={Plus} alt="Plus" width={50}/>
            </div>


            {/* why choose us */}
            <div className="flex text-white w-[1010px] gap-5 mt-20 ml-32">
                <div className="flex gap-2">
                    <div className="w-10 h-10 rounded-3xl ">
                        <GiAlliedStar className="text-[#5454D4] text-3xl rounded-3xl"/>
                    </div>

                    <div>
                        <h3 className="text-[15px] text-[#5454D4]">Top 2% of Talents</h3>
                        <p className="text-[#ccc] text-[14px]">
                            Have the same caliber talents from major brands such as Nike and Lyft also work on your or your client’s projects.
                        </p>
                    </div>  
                </div>

                <div className="flex gap-2">
                    <div className="w-10 h-10 rounded-3xl ">
                        <RiTeamFill className="text-[#F04037] text-3xl rounded-3xl"/>
                    </div>

                    <div>
                        <h3 className="text-[15px] text-[#5454D4]">Dedicated Team</h3>
                        <p className="text-[#ccc] text-[14px]">
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
                        <h3 className="text-[15px] text-[#5454D4]">Inclusive Subscriptions</h3>
                        <p className="text-[#ccc] text-[14px]">
                            No hourly billing, credits, or complex
                            pricing. Our inclusive plans has
                            everything you need to grow and scale.
                        </p>
                    </div>
                    
                </div>
            </div>
            
            <div className="flex bg-[#5454D4] text-white w-250 rounded-3xl ml-34 mt-20 h-95 justify-center gap-35">
                <div className="mt-28">
                    <div className="flex gap-4 mb-10">
                        <div className="bg-[#EDC2F1] w-1.5 h-10 mt-1.5"></div>
                        <div className="w-32">
                            <p>But without any of the headaches</p>
                        </div>
                    </div>
                    
                    <a href="">
                        <button 
                            className="text-white font-[Nunito_Sans] text-[15px] font-[500] px-[27px] pt-[15px] pb-[15px] bg-[#E8618C] rounded-sm cursor-pointer hover:bg-[#E8618C]/60">
                            Get Started With Simplify
                        </button>
                    </a>
                </div>

                <div className="mt-20">
                    <div className="flex gap-15 mb-20">
                        <div>
                            <h2 className="text-white font-[Roboto] text-4xl font-[600]">100+</h2>
                            <p className="text-[#ccc] text-[14px]">
                                Designs delivered worldwide
                            </p>
                        </div>

                        <div>
                            <h2 className="text-white font-[Roboto] text-4xl font-[600]">95+</h2>
                            <p className="text-[#ccc] text-[14px]">
                                Designs categories available
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-29">
                        <div>
                            <h2 className="text-white font-[Roboto] text-4xl font-[600]">50+</h2>
                            <p className="text-[#ccc] text-[14px]">
                                Less in design costs
                            </p>
                        </div>

                        <div>
                            <h2 className="text-white font-[Roboto] text-4xl font-[600]">99+</h2>
                            <p className="text-[#ccc] text-[14px]">
                                Customer satisfaction rate
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}