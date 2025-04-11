import { BsArrowUpRight } from "react-icons/bs";
import HeroImg from "../assets/hero-image.svg";
import RectangleImg from "../assets/Rectangle.svg";
import Plus from "../assets/Plus.svg"
import Triangles from "../assets/Triangles.svg";
import Circles from "../assets/Circles.svg";
import Vector from "../assets/Vector.svg";

export default function Hero() {
    return (
        <section className="bg-[#19191B]" id="home">
            <div className="flex flex-col-reverse justify-center lg:flex-row lg:justify-between items-center">
                <div className="lg:pl-[123px] lg:pt-[181px] relative">
                    {/* Gradient */}
                    <div 
                        className="absolute bottom-auto right-auto -left-[100px] -top-[370px] h-[1233px] w-[467px] rounded-[233.5px] 
                        bg-gradient-to-b from-[rgba(84,84,212,1)] to-[rgba(84,84,212,0.42)] blur-[300px] opacity-30 -rotate-[53deg]
                        hidden lg:block">
                    </div>
                    {/* Hero Text */}
                    <h2 className="text-white font-[Montserrat] text-[22px] font-semibold lg:w-[336px] lg:h-[29px] relative z-20 lg:text-left text-center">
                        WELCOME TO SIMPLIFY
                    </h2>
                    <h1 className="text-white font-[Roboto] text-4xl md:text-7xl lg:text-7xl font-[600] lg:leading-[110.6px] pt-[44px] lg:w-[553px] lg:h-[256px] relative z-20 lg:text-left text-center">
                        Strategy Design Technology
                    </h1>
                    <h2 className="text-white font-[Montserrat] text-[22px] font-semibold lg:w-[680.94px] pt-[40px] relative z-20 lg:text-left text-center">
                        Crafting Brands And Beautiful <br/>Digital Experiences
                    </h2>
                    <div className="pt-[94px] text-center lg:text-left">
                        <a href="#services">
                            <button 
                                className="text-white font-[Nunito_Sans] text-[20px] font-[700] px-[27px] pt-[15px] pb-[15px] bg-[#E8618C] rounded-sm cursor-pointer hover:bg-[#E8618C]/60">
                                Our Services <BsArrowUpRight className="inline"/>
                            </button>
                        </a>
                    </div>
                    <div className="absolute top-[510px] right-[120px] hidden lg:block">
                        <img src={Triangles} alt="Triangles" width={60}/>
                    </div>
                    <div className="absolute top-[180px] right-[100px] hidden lg:block">
                        <img src={Vector} alt="Vector" width={50}/>
                    </div>
                </div>
                <div className="relative lg:mr-15 pt-9">
                    {/* Gradient */}
                    <div 
                        className="absolute bottom-auto left-auto right-[150px] top-[120px] h-[650px] w-[600px] rounded-[233.5px] 
                        bg-gradient-to-b from-[rgba(251,168,28,0.26)] to-[rgba(224,86,136,0.15)] blur-[150px] opacity-60 rotate-[65deg]
                        hidden lg:block">
                    </div>
                    {/* Hero Image */}
                    <div className="relative z-20 flex justify-center items-center">
                        <img src={HeroImg} alt="Hero Image"/>
                    </div>
                    <div className="absolute top-[140px] right-[65px] z-10 hidden lg:block">
                        <img src={RectangleImg} width={300} height={300} alt="Rectangle Image"/>
                    </div>
                    <div className="z-10">
                        <div className="absolute top-[420px] right-[50px] hidden lg:block">
                            <img src={Plus} alt="Plus" width={50}/>
                        </div>
                        <div className="absolute top-[30px] right-[50px] hidden lg:block">
                            <img src={Circles} alt="Circles" width={50}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}