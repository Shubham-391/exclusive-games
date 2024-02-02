import React from 'react'

function Button2(props) {
  return (
    <>
      <div className={`relative ${props.className}`} >
        <button className="group button2 bubble-btn font-inter font-bold text-base leading-[25.6px] text-black bg-button2bg rounded-[41px] px-[46px] py-[13px] relative overflow-hidden duration-500 z-[1] hover:text-black">
          {props.text}
          <span className="absolute w-[25%] h-full bg-button2bg2 translate-y-[150%] rounded-[41px] duration-500 z-[-1] group-hover:translate-y-0 group-hover:scale-[2]"></span>
          <span className="absolute w-[25%] h-full bg-button2bg2 translate-y-[150%] rounded-[41px] duration-500 z-[-1] group-hover:translate-y-0 group-hover:scale-[2]"></span>
          <span className="absolute w-[25%] h-full bg-button2bg2 translate-y-[150%] rounded-[41px] duration-500 z-[-1] group-hover:translate-y-0 group-hover:scale-[2]"></span>
          <span className="absolute w-[25%] h-full bg-button2bg2 translate-y-[150%] rounded-[41px] duration-500 z-[-1] group-hover:translate-y-0 group-hover:scale-[2]"></span>
        </button>
        <svg
          className="absolute bottom-[-7px] left-[-6px] button2-hover-gradient"
          width="107"
          height="28"
          viewBox="0 0 107 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 1C1.5 15.3594 13.1406 27 27.5 27H105.5"
            stroke="url(#paint0_linear_1867_11)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1867_11"
              x1="134.466"
              y1="25.6913"
              x2="113.531"
              y2="-37.3975"
              gradientUnits="userSpaceOnUse"
            >
              <stop className="duration-500" stopColor="#51C8EF" />
              <stop className="duration-500 stop2" offset="1" stopColor="#7AF57A" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}

export default Button2