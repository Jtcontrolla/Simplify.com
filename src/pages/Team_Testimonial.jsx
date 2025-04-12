import React from 'react'
import Team_Carousel from "../components/Team_Carousel"
import TestimonialSwiper from '../components/TestimonialSwiper'

export default function Team_Testimonial () {
    return (
        <section className="mt-28">
            {/* Team */}
            <div className="flex flex-col justify-center items-center bg-[#636AE8] rounded-[20px] lg:mx-[120px] mx-[30px] px-5 py-5">
                <h2 className="font-[Inter] font-black text-white text-[42.45px] leading-[46.2px] tracking-[-0.18px] text-center pt-[38px] lg:w-[918px]">
                    Elevate your team with extraordinary talent through Simplify—where innovation meets design excellence.
                </h2>
                <Team_Carousel/>
            </div>
            {/* Testimonial */}
            <TestimonialSwiper/>
        </section>
    )
};