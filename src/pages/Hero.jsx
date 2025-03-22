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
            <div className="flex justify-between items-center">
                <div className="pl-[123px] pt-[181px] relative">
                    <div 
                        className="absolute bottom-auto right-auto -left-[100px] -top-[370px] h-[1233px] w-[467px] rounded-[233.5px] bg-gradient-to-b from-[rgba(84,84,212,1)] to-[rgba(84,84,212,0.42)] blur-[150px] opacity-30 -rotate-[53deg]">
                    </div>
                    <h2 className="text-white font-[Montserrat] text-[22px] font-semibold w-[336px] h-[29px] relative z-20">WELCOME TO SIMPLIFY</h2>
                    <h1 className="text-white font-[Roboto] text-8xl font-[800] leading-[127.6px] pt-[44px] w-[663px] h-[256px] relative z-20">Strategy Design Technology</h1>
                    <h2 className="text-white font-[Montserrat] text-[22px] font-semibold w-[680.94px] pt-[40px] relative z-20">Crafting Brands And Beautiful <br/>Digital Experiences</h2>
                    <div className="pt-[94px]">
                        <a href="/Services">
                            <button 
                                className="text-white font-[Nunito_Sans] text-[20px] font-[700] px-[27px] pt-[15px] pb-[15px] bg-[#E8618C] rounded-sm cursor-pointer hover:bg-[#E8618C]/60">
                                Our Services <BsArrowUpRight className="inline"/>
                            </button>
                        </a>
                    </div>
                    <div className="absolute top-[510px] right-[120px]">
                        <img src={Triangles} alt="Triangles"/>
                    </div>
                    <div className="absolute top-[180px] right-[100px]">
                        <img src={Vector} alt="Vector"/>
                    </div>
                </div>
                <div className="relative">
                    <div 
                        className="absolute bottom-auto left-auto right-[150px] top-[120px] h-[650px] w-[600px] rounded-[233.5px] bg-gradient-to-b from-[rgba(251,168,28,0.26)] to-[rgba(224,86,136,0.15)] blur-[150px] opacity-60 rotate-[65deg]">
                    </div>
                    <div className="relative z-20">
                        <img src={HeroImg} alt="Hero Image"/>
                    </div>
                    <div className="absolute top-[110px] right-[65px] z-10">
                        <img src={RectangleImg} width={350} height={350} alt="Rectangle Image"/>
                    </div>
                    <div className="z-10">
                        <div className="absolute top-[420px] right-[50px]">
                            <img src={Plus} alt="Plus"/>
                        </div>
                        <div className="absolute top-[30px] right-[50px]">
                            <img src={Circles} alt="Circles"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}