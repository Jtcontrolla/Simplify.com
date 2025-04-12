import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Team1 from "../assets/Team1.png";
import Team2 from "../assets/Team2.png";
import Team3 from "../assets/Team3.png";
import Team4 from "../assets/Team4.JPG";

export default function Team_Carousel() {
  const carouselRef = useRef();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1920 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const teamMembers = [
    { id: 1, name: "Sarah A", role: "UI/UX Designer", image: Team1 },
    { id: 2, name: "Timohty-J M.M", role: "Founder", image: Team2 },
    { id: 3, name: "Fejiro Dev", role: "Full-Stack Developer", image: Team3 },
    { id: 4, name: "Otonbara . O", role: "Front-End Developer", image: Team4 },
  ];

  return (
    <div className="mt-14 mb-[98px] w-full h-full relative">
      <div className="relative">
        {/* Carousel */}
        <Carousel
          ref={carouselRef} // Attach the ref to the carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={2000}
          arrows={false}
          containerClass="carousel-container"
          itemClass="px-[38px]">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex items-center">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-l-[15px] w-[102px] h-[94px] object-fit"
              />
              <div className="bg-white w-[167px] h-[94px] rounded-r-[15px] flex flex-col items-center justify-center">
                <h3 className="font-[Arial] font-bold text-[17.02px] leading-[20px] tracking-[0.2px] text-center">
                  {member.name}
                </h3>
                <p className="font-[Inter] text-[16px] font-normal leading-[24px] text-center">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </Carousel>

        {/* Custom Arrows */}
        <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={() => carouselRef.current.previous()} // Use ref to navigate to the previous slide
            className="bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 cursor-pointer">
            <FaChevronLeft className="text-xl text-gray-700"/>
          </button>
          <button
            onClick={() => carouselRef.current.next()} // Use ref to navigate to the next slide
            className="bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 cursor-pointer">
            <FaChevronRight className="text-xl text-gray-700"/>
          </button>
        </div>
      </div>
    </div>
  );
}