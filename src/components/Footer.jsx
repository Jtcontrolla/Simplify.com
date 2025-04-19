import { BiEnvelope } from "react-icons/bi"
import { BsTwitter } from "react-icons/bs"
import { BsFacebook } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { BsYoutube } from "react-icons/bs"
import Logo from "../assets/Logo.svg"

export default function Footer () {
    return (
        <section className="bg-[#1D2128] lg:px-[120px] px-[30px]">
            <div className="flex flex-col justify-center items-center">
                <h5 className="font-semibold text-xl leading-[30px] text-white mt-24">Subscribe to our newsletter</h5>
                <form className="flex items-center mt-2">
                    <div>
                        <input 
                            className="border border-[#BCC1CA] rounded-l-[22px] pl-4 py-2 text-[#DEE1E6] font-normal font-[Inter] leading-[26px]"
                            id="email"
                            type="email"
                            placeholder="Input your email"
                        /> 
                    </div>
                    <div>
                        <button className="border border-[#E8618C] bg-[#E8618C] hover:bg-[#E8618C]/60 cursor-pointer rounded-r-[22px] px-[18px] py-2 text-[16px] leading-[26px] font-normal text-white">
                            Subscribe
                        </button>
                    </div>
                </form>
                <div className="flex flex-col lg:flex-row justify-between mt-[83px] items-center lg:gap-[253px] gap-10">
                    <div>
                        <img src={Logo} alt="Simplify Logo"/>
                    </div>
                    <div>
                        <ul className="flex flex-col lg:flex-row md:flex-row gap-10 font-[Inter] lg:text-[12px] text-md font-normal text-white leading-[28px]">
                            <li><a className="hover:text-[#5454D4] hover:font-semibold" href="#">Pricing</a></li>
                            <li><a className="hover:text-[#5454D4] hover:font-semibold" href="#about">About us</a></li>
                            <li><a className="hover:text-[#5454D4] hover:font-semibold" href="#">Features</a></li>
                            <li><a className="hover:text-[#5454D4] hover:font-semibold" href="#">Help Center</a></li>
                            <li><a className="hover:text-[#5454D4] hover:font-semibold" href="#contact">Contact us</a></li>
                            <li><a className="hover:text-[#5454D4] hover:font-semibold" href="#">FAQs</a></li>
                            <li><a className="hover:text-[#5454D4] hover:font-semibold" href="#">Careers</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border border-[#DEE1E6] w-full mt-[34px]"></div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center py-6 gap-10">
                <div>
                    <button className="border border-[#BCC1CA] hover:border-[#5454D4] font-[Inter] font-normal text-sm leading-[22px] text-[#DEE1E6] hover:text-[#5454D4] px-3 py-1.5 rounded-md cursor-pointer">English</button>
                </div>
                <div>
                    <ul className="flex items-center list-disc font-[Inter] font-normal text-sm leading-[22px] text-white gap-4">
                        <li className="list-none">© {new Date().getFullYear()} Brand, Inc.</li>
                        <li><a className="hover:text-[#5454D4] hover:font-semibold" href="#">Privacy</a></li>
                        <li><a className="hover:text-[#5454D4] hover:font-semibold" href="#">Terms</a></li>
                        <li><a className="hover:text-[#5454D4] hover:font-semibold" href="#">Sitemap</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="flex gap-6">
                        <li className="text-[#4CD2FF] w-6 h-6 cursor-pointer transition hover:scale-110"><a href=""></a><BsTwitter/></li>
                        <li className="text-[#4C8AFF] w-6 h-6 cursor-pointer transition hover:scale-110"><a href=""></a><BsFacebook/></li>
                        <li className="text-[#5378D0] w-6 h-6 cursor-pointer transition hover:scale-110"><a href=""></a><BsLinkedin/></li>
                        <li className="text-[#FF4C4C] w-6 h-6 cursor-pointer transition hover:scale-110"><a href=""></a><BsYoutube/></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}