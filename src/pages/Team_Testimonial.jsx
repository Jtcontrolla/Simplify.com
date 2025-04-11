import Team1 from "../assets/Team1.png"
import Team2 from "../assets/Team2.png"
import Team3 from "../assets/Team3.png"
import Team4 from "../assets/Team4.JPG"
import InvertedCommas from "../assets/inverted-commas.svg"
import Testimonial1 from "../assets/Testimonial1.JPG"

export default function Team_Testimonial () {
    return (
        <section className="mt-28">
            {/* Team */}
            <div className="flex flex-col justify-center items-center bg-[#636AE8] rounded-[20px] mx-[120px]">
                <h2 className="font-[Inter] font-black text-white text-[42.45px] leading-[46.2px] tracking-[-0.18px] text-center pt-[38px] w-[918px]">
                    Elevate your team with extraordinary talent through Simplify—where innovation meets design excellence.
                </h2>
                <div className="flex gap-[38px] mt-14 mb-[98px]">
                    <div className="flex items-center">
                        <img src={Team1} alt="Team1" className="rounded-l-[15px] h-[94px]" width={102} height={94}/>
                        <div className="bg-white w-[167px] h-[94px] rounded-r-xl flex flex-col items-center justify-center">
                            <h5 className="font-[Arial] font-bold text-[17.02px] leading-[20px] tracking-[0.2px]">
                                Sarah A
                            </h5>
                            <p className="font-[Inter] text-[16px] font-normal leading-[24px]">
                                UI/UX Designer
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src={Team2} alt="Team2" className="rounded-l-[15px] h-[94px]" width={102} height={94}/>
                        <div className="bg-white w-[167px] h-[94px] rounded-r-[15px] flex flex-col items-center justify-center">
                            <h5 className="font-[Arial] font-bold text-[17.02px] leading-[20px] tracking-[0.2px]">
                                Timohty-J M.M
                            </h5>
                            <p className="font-[Inter] text-[16px] font-normal leading-[24px]">
                                Founder
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src={Team3} alt="Team3" className="rounded-l-[15px] h-[94px]" width={102} height={94}/>
                        <div className="bg-white w-[167px] h-[94px] rounded-r-[15px] flex flex-col items-center justify-center">
                            <h5 className="font-[Arial] font-bold text-[17.02px] leading-[20px] tracking-[0.2px]">
                                Fejiro dev
                            </h5>
                            <p className="font-[Inter] text-[16px] font-normal leading-[24px] text-center">
                                Full-Stack Developer
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src={Team4} alt="Team4" className="rounded-l-[15px] h-[94px]" width={102} height={94}/>
                        <div className="bg-white w-[167px] h-[94px] rounded-r-[15px] flex flex-col items-center justify-center">
                            <h5 className="font-[Arial] font-bold text-[17.02px] leading-[20px] tracking-[0.2px]">
                                Otonbara Okolai
                            </h5>
                            <p className="font-[Inter] text-[16px] font-normal leading-[24px] text-center">
                                Front-End Developer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial */}
            <div className="relative flex flex-col justify-center item-center mt-28 mx-[120px]">
                <div className="bg-zinc-600 w-full h-[414px] rounded-[12px] flex justify-center gap-[77px] pl-[67px] pr-[20px]">
                    <img src={InvertedCommas} alt="Inverted Commas" width={208} height={154}/>
                    <div className="flex flex-col justify-center">
                        <h1 className="font-[Montserrat] font-extrabold text-5xl text-[#636AE8] leading-[57.6px] text-left">
                            What clients say...
                        </h1>
                        <p className="font-[Montserrat] font-medium text-[18px] text-[#FFFFFF] leading-[30.6px] text-left">
                        Simplify did an amazing job on our website! The UI/UX design is clean, elegant, and easy to navigate exactly 
                        what I envisioned for Seiya Fashion Academy. Their team was professional, fast, and truly understood our brand. 
                        I highly recommend them
                        </p>
                    </div>
                </div>
                <div className="absolute top-[385px] right-[600px] bg-zinc-600 w-[50px] h-[50px] rotate-[50deg]"></div>
                <div className="absolute top-[450px] left-[150px] flex items-center gap-8">
                    <img src={Testimonial1} alt="Testimonial 1" className="rounded-full w-[210px] h-[210px] "/>
                    <div className="flex flex-col justify-center items center">
                        <h4 className="w-[215px]font-[Arial] font-black text-[41.06px] leading-[55px] tracking-[0.2px] text-left text-white">
                            Seiya Founder
                        </h4>
                        <p className="font-[Inter] font-normal text-[32px] leading-[28px] text-left text-white">
                            Seiya Fashion Academy
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
};