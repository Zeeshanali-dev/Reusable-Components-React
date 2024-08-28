import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import card from "../../assets/images/imgage-card.png";

// Register the plugin
gsap.registerPlugin(ScrollToPlugin);

const Categories = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];

  const galleryImageRef = useRef(null);
  const cardRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlideHandler = () => {
    const tl = gsap.timeline();

    tl.to(cardRef.current, {
      scrollTo: {
        y: 0, // No horizontal movement
        x: "+=" + (galleryImageRef.current.clientWidth + 10) + "px",
      },
      duration: 0.3,
      ease: "linear",
    });
  };
  const prevSlideHandler = () => {
    const tl = gsap.timeline();

    tl.to(cardRef.current, {
      scrollTo: {
        y: 0, // No horizontal movement
        x: "-=" + (galleryImageRef.current.clientWidth + 10) + "px",
      },
      duration: 0.3,
      ease: "linear",
    });
  };

  return (
    <div>
      <div className="relative">
        <div
          ref={cardRef}
          className="w-[80%] overflow-x-auto m-auto flex items-center gap-3 no-scrollbar mt-10 sm:mt-[100px]"
        >
          {items.map((i) => (
            <div
              ref={galleryImageRef}
              key={i}
              className="flex-shrink-0  w-[270px]"
            >
              <div className="relative ">
                <img className="h-[320px] w-[300px]" src={card} alt="" />
                <div className="text-light text-center z-10 absolute top-5 left-1/2 transform -translate-x-1/2 w-full">
                  <p className="text-xs">Party Venues</p>
                  <h1 className=" text-lg font-bold">Wedding Locations</h1>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h1
          onClick={prevSlideHandler}
          className="size-[40px] rounded-full border border-mid-gray hidden sm:flex items-center justify-center cursor-pointer absolute top-1/2 transform left-[6%] z-10 -translate-y-1/2 select-none"
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.88 12.76L1.12 6.99999L6.88 1.23999"
              stroke="#B3B3B3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </h1>
        <h1
          className="size-[40px] rounded-full border border-mid-gray hidden sm:flex items-center rotate-180 justify-center cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-[6%] select-none"
          onClick={nextSlideHandler}
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.88 12.76L1.12 6.99999L6.88 1.23999"
              stroke="#B3B3B3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </h1>
      </div>

      <div className="flex justify-center items-center mt-7 sm:mt-10">
        <button className="text-sm font-semibold w-[137px] h-[41px] border border-[#A8A8A8] rounded hover:bg-secondary hover:border-secondary duration-300 hover:text-secondary-dark">
          More Locations
        </button>
      </div>
    </div>
  );
};

export default Categories;
