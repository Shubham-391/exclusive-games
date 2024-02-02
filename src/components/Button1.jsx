import React from 'react'

function Button1(props) {
  return (
    <>
      <div className="relative">
        <button
          className="group bubble-btn font-inter font-bold text-base leading-[25.6px] text-white border border-solid border-white rounded-[41px] px-[46px] py-[13px] relative overflow-hidden duration-500 z-[1] hover:text-black"
          onClick={() => setOpen(false)}
        >
          {props.text}
          <span className="absolute w-[25%] h-full bg-white translate-y-[150%] rounded-[41px] duration-500 z-[-1] group-hover:translate-y-0 group-hover:scale-[2]"></span>
          <span className="absolute w-[25%] h-full bg-white translate-y-[150%] rounded-[41px] duration-500 z-[-1] group-hover:translate-y-0 group-hover:scale-[2]"></span>
          <span className="absolute w-[25%] h-full bg-white translate-y-[150%] rounded-[41px] duration-500 z-[-1] group-hover:translate-y-0 group-hover:scale-[2]"></span>
          <span className="absolute w-[25%] h-full bg-white translate-y-[150%] rounded-[41px] duration-500 z-[-1] group-hover:translate-y-0 group-hover:scale-[2]"></span>
        </button>
        <svg
          className="absolute bottom-[-7px] left-[-6px]"
          width="106"
          height="28"
          viewBox="0 0 106 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1C1 15.3594 12.6406 27 27 27H105"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </>
  );
}

export default Button1