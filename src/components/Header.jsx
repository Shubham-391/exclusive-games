import React, { useState } from 'react';
import logo from '../assets/images/logo.webp';
import Button1 from './Button1';
import Button2 from "./Button2";

function Header() {
  const [open, setOpen] = useState(false);
  {
    open
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="min-h-screen min-[1200px]:min-h-[810px] min-[1441px]:min-h-screen w-full headerbg bg-cover bg-no-repeat bg-center flex flex-col">
        {/* navbar */}
        <div className="bg-[rgba(255,255,255,0.1)] w-full h-[60px] sm:h-[90px]">
          <nav className="max-w-[1164px] mx-auto px-3 flex items-center justify-between h-full">
            <a className="shrink-0 z-10" href="#" onClick={() => setOpen(false)}>
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
              className={`bg-[#00141B] duration-300 min-[992px]:bg-transparent max-w-full min-[992px]:max-w-[829px] w-full flex flex-col top-0 bottom-0 fixed min-[992px]:relative min-[992px]:flex-row gap-7 min-[1200px]:gap-0 justify-center min-[992px]:justify-end min-[1200px]:justify-between items-center left-[-100%] min-[992px]:left-0 z-[5] ${
                open == false ? "" : "left-[0%]"
              }`}
            >
              <ul className="flex flex-col items-center min-[992px]:flex-row gap-7">
                <li>
                  <a
                    className="font-inter font-medium text-base leading-[25.6px] text-white relative after:absolute after:w-0 after:bg-white after:left-[50%] after:bottom-[-2px] after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px]"
                    href="#section1"
                    onClick={() => setOpen(false)}
                  >
                    Hogar
                  </a>
                </li>
                <li>
                  <a
                    className="font-inter font-medium text-base leading-[25.6px] text-white relative after:absolute after:w-0 after:bg-white after:left-[50%] after:bottom-[-2px] after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px]"
                    href="#section2"
                    onClick={() => setOpen(false)}
                  >
                    Misión
                  </a>
                </li>
                <li>
                  <a
                    className="font-inter font-medium text-base leading-[25.6px] text-white relative after:absolute after:w-0 after:bg-white after:left-[50%] after:bottom-[-2px] after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px]"
                    href="#section3"
                    onClick={() => setOpen(false)}
                  >
                    Tragamonedas
                  </a>
                </li>
                <li>
                  <a
                    className="font-inter font-medium text-base leading-[25.6px] text-white relative after:absolute after:w-0 after:bg-white after:left-[50%] after:bottom-[-2px] after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px]"
                    href="#section4"
                    onClick={() => setOpen(false)}
                  >
                    Por qué elegirnos
                  </a>
                </li>
                <li>
                  <a
                    className="font-inter font-medium text-base leading-[25.6px] text-white relative after:absolute after:w-0 after:bg-white after:left-[50%] after:bottom-[-2px] after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px]"
                    href="#section5"
                    onClick={() => setOpen(false)}
                  >
                    Ofertas
                  </a>
                </li>
              </ul>
              <Button1 click={() => setOpen(false)} text="Acceso" />
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
            <Button2 text="Empezar" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header