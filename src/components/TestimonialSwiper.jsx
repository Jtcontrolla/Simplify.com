import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import TestimonialCard from './TestimonialCard';
import Testimonial1 from '../assets/testimonial1.jpg'; // Adjust path if needed

const testimonials = [
  {
    id: 1,
    quote:
      "Simplify did an amazing job on our website! The UI/UX design is clean, elegant, and easy to navigate exactly what I envisioned for Seiya Fashion Academy. Their team was professional, fast, and truly understood our brand. I highly recommend them.",
    name: "Seiya Founder",
    role: "Seiya Fashion Academy",
    image: Testimonial1,
  },
  {
    id: 2,
    quote:
      "Simplify did an amazing job on our website! The UI/UX design is clean, elegant, and easy to navigate exactly what I envisioned for Seiya Fashion Academy. Their team was professional, fast, and truly understood our brand. I highly recommend them.",
    name: "Seiya Founder",
    role: "Seiya Fashion Academy",
    image: Testimonial1,
  },
  {
    id: 3,
    quote:
      "Simplify did an amazing job on our website! The UI/UX design is clean, elegant, and easy to navigate exactly what I envisioned for Seiya Fashion Academy. Their team was professional, fast, and truly understood our brand. I highly recommend them.",
    name: "Seiya Founder",
    role: "Seiya Fashion Academy",
    image: Testimonial1,
  },
];

const TestimonialSwiper = () => {
    return (
      <div className="mt-20">
        <Swiper
          modules={[EffectCube, Autoplay]}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1, // Mobile view
            },
            768: {
              slidesPerView: 1, // Tablet view
            },
            1024: {
              slidesPerView: 1, // Desktop view
            },
          }}
          className='w-full h-full xl:mx-[120px] lg:mx-[120px] mx-[30px] px-5 py-5'>
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  
  export default TestimonialSwiper;