import React, { useState } from 'react';
import logo from '../assets/images/logo.webp';

function Header() {
  const [open, setOpen] = useState(false);
  {
    open
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="min-h-screen min-[1200px]:min-h-[810px] min-[1441px]:min-h-screen w-full bg-headerbg bg-cover bg-no-repeat bg-center flex flex-col">
        {/* navbar */}
        <div className="bg-[rgba(255,255,255,0.1)] w-full h-[60px] sm:h-[90px]">
          <nav className="max-w-[1164px] mx-auto px-3 flex items-center justify-between h-full">
            <a className="shrink-0 z-10" href="" onClick={() => setOpen(false)}>
              <img
                className="w-[120px] md:w-[209px] h-[30px] md:h-[43px]"
                src={logo}
                alt="logo"
              />
            </a>
            {/* open/close navbar button */}
            <div
              className={`flex w-[30px] min-[400px]:w-[35px] h-[25px] duration-300 flex-col min-[992px]:hidden items-center justify-between cursor-pointer relative z-10`}
              onClick={() => setOpen(!open)}
            >
              <span
                className={`w-full h-[5px] duration-300 bg-white rounded ${
                  open == false ? "" : "rotate-45 translate-y-[8px]"
                }`}
              ></span>
              <span
                className={`w-full h-[5px] duration-300 bg-white rounded ${
                  open == false ? "" : "rotate-[135deg] translate-y-[-12px]"
                }`}
              ></span>
              <span
                className={`w-full h-[5px] duration-300 bg-white rounded ${
                  open == false ? "" : "hidden"
                }`}
              ></span>
            </div>
            <div
              className={`bg-[#00141B] duration-300 min-[992px]:bg-transparent max-w-full min-[992px]:max-w-[829px] w-full flex flex-col top-0 bottom-0 absolute min-[992px]:relative min-[992px]:flex-row gap-7 min-[1200px]:gap-0 justify-center min-[992px]:justify-end min-[1200px]:justify-between items-center left-[-100%] min-[992px]:left-0 z-[5] ${
                open == false ? "" : "left-[0%]"
              }`}
            >
              <ul className="flex flex-col items-center min-[992px]:flex-row gap-7">
                <li>
                  <a
                    className="font-inter font-medium text-base leading-[25.6px] text-white relative after:absolute after:w-0 after:bg-white after:left-[50%] after:bottom-[-2px] after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px]"
                    href=""
                    onClick={() => setOpen(false)}
                  >
                    Hogar
                  </a>
                </li>
                <li>
                  <a
                    className="font-inter font-medium text-base leading-[25.6px] text-white relative after:absolute after:w-0 after:bg-white after:left-[50%] after:bottom-[-2px] after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px]"
                    href=""
                    onClick={() => setOpen(false)}
                  >
                    Misión
                  </a>
                </li>
                <li>
                  <a
                    className="font-inter font-medium text-base leading-[25.6px] text-white relative after:absolute after:w-0 after:bg-white after:left-[50%] after:bottom-[-2px] after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px]"
                    href=""
                    onClick={() => setOpen(false)}
                  >
                    Tragamonedas
                  </a>
                </li>
                <li>
                  <a
                    className="font-inter font-medium text-base leading-[25.6px] text-white relative after:absolute after:w-0 after:bg-white after:left-[50%] after:bottom-[-2px] after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px]"
                    href=""
                    onClick={() => setOpen(false)}
                  >
                    Por qué elegirnos
                  </a>
                </li>
                <li>
                  <a
                    className="font-inter font-medium text-base leading-[25.6px] text-white relative after:absolute after:w-0 after:bg-white after:left-[50%] after:bottom-[-2px] after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px]"
                    href=""
                    onClick={() => setOpen(false)}
                  >
                    Ofertas
                  </a>
                </li>
              </ul>
              <div className="relative">
                <button
                  className="group bubble-btn font-inter font-bold text-base leading-[25.6px] text-white border border-solid border-white rounded-[41px] px-[46px] py-[13px] relative overflow-hidden duration-500 z-[1] hover:text-black"
                  onClick={() => setOpen(false)}
                >
                  Acceso{" "}
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
            </div>
          </nav>
        </div>
        {/* herosection */}
        <div className="grow max-w-[1164px] mx-auto px-3 flex items-center min-[1200px]:items-start">
          <div
            className="max-w-[727px] w-full flex flex-col items-center min-[1200px]:mt-[140px]"
            data-aos="zoom-in"
            data-aos-once="true"
            data-aos-delay="2000"
            data-aos-duration="1000"
          >
            <h1 className="max-w-[505px] w-full font-anton font-normal text-[36px] md:text-[72px] md:leading-[86.4px] text-white mb-4 text-center">
              Exclusive Games. Pasión por ganar
            </h1>
            <p className="font-inter font-medium text-base leading-[25.6px] opacity-80 text-white text-center mb-10">
              En Exclusive Games somos un equipo apasionado de personas
              dedicados al desarrollo de multiplataformas para juegos de azar. A
              lo largo de nuestra vida consumimos todo tipo de juegos hasta que
              un día decidimos crear los propios.
            </p>
            <div className="relative ">
              <button className="group button2 bubble-btn font-inter font-bold text-base leading-[25.6px] text-black bg-button2bg border border-solid border-transparent rounded-[41px] px-[46px] py-[13px] relative overflow-hidden duration-500 z-[1] hover:text-black">
                Empezar
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
                    <stop
                      className="duration-500"
                      offset="1"
                      stopColor="#7AF57A"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header