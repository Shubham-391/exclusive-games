import React, { useState } from "react";
import plus from "../assets/images/plus.webp";
import minus from "../assets/images/minus.webp";

function Accordian({ heading, content }) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <>
      <div className="relative border-[0.5px] border-solid border-[rgba(255,255,255,0.5)] rounded-[6px] py-4 px-5">
        <div onClick={() => setAccordionOpen(!accordionOpen)}
          className="flex justify-between w-full items-center cursor-pointer duration-300">
          <p className="font-anton font-normal text-base sm:text-xl sm:leading-[26px] text-white">
            {heading}
          </p>
          {accordionOpen ? (
            <img className="w-[24px] h-[24px]" src={minus} alt="minus" />
          ) : (
            <img className="w-[24px] h-[24px]" src={plus} alt="plus" />
          )}
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ease-linear ${
            accordionOpen
              ? "min-h-[52px] pt-2 opacity-1"
              : "h-0 min-h-0 opacity-0 pt-0"
          } `}
        >
          <p className="font-inter font-medium text-base leading-[25.6px] text-[rgba(255,255,255,0.8)] max-w-[880px] w-full">
            {content}
          </p>
        </div>
      </div>
    </>
  );
}

export default Accordian;
