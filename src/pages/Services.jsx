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
        <section className="bg-[#19191B]" id="services">
            <h2 className="text-white font-[Roboto] text-5xl font-[600] leading-[70.6px] pt-[44px] w-[593px] ml-85 text-center mt-35">The Service We Provide
            For You</h2>

            <div className="absolute top-[1610px] right-[1060px]">
                <img src={Triangles} alt="Triangles" width={60}/>
            </div>
            <div className="absolute top-[1700px] right-[110px]">
                <img src={Plus} alt="Plus" width={40}/>
            </div>
            <div className="absolute top-[2190px] right-[1120px]">
                <img src={Plus} alt="Plus" width={40}/>
            </div>

            <div className="flex text-white w-[1010px] gap-5 mt-20 text-center ml-32">
                <div>
                    <div className="hover:bg-[#46465c] w-12 h-12 rounded-3xl ml-30">
                        <MdOutlineDeveloperMode className="text-[#5454D4] text-2xl rounded-3xl relative top-3 left-3"/>
                    </div>
                    <h3 className="text-[20px]">Development</h3>
                    <p className="text-[#ccc]">Create a platform with the best and coolest quality from us.</p>
                </div>

                <div>
                    <div className="hover:bg-[#483332] w-12 h-12 rounded-3xl ml-47">
                        <MdOutlineDesignServices className="text-[#F04037] text-2xl rounded-3xl relative top-3 left-3"/>
                    </div>
                    <h3 className="text-[20px]">UI/UX Design</h3>
                    <p className="text-[#ccc]">We provide UI/UX Design / Product Design services, and of course with the best quality</p>
                </div>

                <div>
                    <div className="hover:bg-[#59564b] w-12 h-12 rounded-3xl ml-30">
                        <AiOutlineAntDesign className="text-[#FEDC5A] text-2xl rounded-3xl relative top-3 left-3"/>
                    </div>
                    <h3 className="text-[20px]">Graphic Design</h3>
                    <p className="text-[#ccc]">We provide Graphic Design services, with the best designers</p>
                </div>
            </div>

            <div className="flex text-white w-[1010px] gap-5 mt-20 text-center ml-32">
                <div>
                    <div className="hover:bg-[#59564b] w-12 h-12 rounded-3xl ml-30">
                        <FaBrain className="text-[#FEDC5A] text-2xl rounded-3xl relative top-3 left-3"/>
                    </div>
                    <h3 className="text-[20px]">AI Integration</h3>
                    <p className="text-[#ccc]">Create a platform with the best and coolest quality from us.</p>
                </div>

                <div>
                    <div className="hover:bg-[#46465c] w-12 h-12 rounded-3xl ml-47">
                        <AiOutlineProduct className="text-[#5454D4] text-2xl rounded-3xl relative top-3 left-3"/>
                    </div>
                    <h3 className="text-[20px]">UI/UX Design</h3>
                    <p className="text-[#ccc]">We provide UI/UX Design / Product Design services, and of course with the best quality</p>
                </div>

                <div>
                    <div className="hover:bg-[#483332] w-12 h-12 rounded-3xl ml-30">
                        <GrVmMaintenance className="text-[#F04037] text-2xl rounded-3xl relative top-3 left-3"/>
                    </div>
                    <h3 className="text-[20px]">Graphic Design</h3>
                    <p className="text-[#ccc]">We provide Graphic Design services, with the best designers</p>
                </div>
            </div>
        </section>
    )
}