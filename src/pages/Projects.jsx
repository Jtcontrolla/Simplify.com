import Circles from "../assets/Circles.svg";
import Vector from "../assets/Vector.svg";
import Work1 from '../assets/Work1.png'
import Work2 from '../assets/Work2.png'
import Work3 from '../assets/Work3.png'

export default function Projects () {
    return (
        <section className="bg-[#19191B]" id="services">
            <h2 className="text-white font-[Roboto] text-5xl font-[600] leading-[70.6px] pt-[44px] w-[593px] ml-15 text-center mt-35">Our Awesome Portfolio</h2>

            <div className="absolute top-[2400px] right-[130px]">
                <img src={Circles} alt="Circles" width={50}/>
            </div>

            <div className="absolute top-[2899px] right-[1090px]">
                <img src={Vector} alt="Vector" width={50}/>
            </div>

            <div className="flex gap-7 justify-center mt-20">
                <div className="">
                    <a href=""><img src={Work1} alt=""  width={300}/></a>
                </div>

                <div className="mt-10">
                    <a href=""><img src={Work2} alt="" width={300}/></a>
                </div>

                <div className="mt-20">
                    <a href=""><img src={Work3} alt="" width={300}/></a>
                </div>
            </div>

            <div className="flex gap-7 justify-center">
                <div className="">
                    <a href=""><img src={Work2} alt=""  width={300}/></a>
                </div>

                <div className="mt-10">
                    <a href=""><img src={Work1} alt="" width={300}/></a>
                </div>

                <div className="mt-20">
                    <a href=""><img src={Work3} alt="" width={300}/></a>
                </div>
            </div>
        </section>
    )
}