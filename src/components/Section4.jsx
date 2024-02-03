import React from "react";
import Button2 from "./Button2";
import night from "../assets/images/night.webp";

function Section4() {
  return (
    <>
      <div className="bg-white min-[1200px]:bg-section4bg min-[1200px]:bg-transparent min-[1441px]:bg-white bg-center bg-no-repeat bg-cover min-[1200px]:min-h-[1067px] min-[1441px]:min-h-[0px] min-[1441px]:py-[100px] py-12 sm:py-[100px] min-[1200px]:py-0 w-full translate-y-0 min-[1200px]:translate-y-[-455px] min-[1441px]:translate-y-0 flex justify-center flex-col">
        <div className="max-w-[1164px] mx-auto px-3 w-full flex items-center flex-wrap gap-y-8">
          <div className="w-full min-[1100px]:w-1/2 flex justify-center min-[1100px]:justify-start">
            <div
              className="max-w-[526px] w-full flex flex-col items-center min-[1100px]:items-start"
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <h2
                className="font-anton font-normal text-[30px] sm:text-[48px] sm:leading-[57.6px] text-[#00141B] mb-4"
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                Por qué elegirnos
              </h2>
              <p
                className="font-inter font-medium text-base leading-[25.6px] text-[rgba(0,20,27,0.8)] mb-6 text-center min-[1100px]:text-start"
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos
                todo lo invertido en fichas en la moneda que elijas. En
                Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los
                juegos interactivos que más pide la gente. Con Exclusive Games
                empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.
              </p>
              <Button2 text="Aprende más" />
            </div>
          </div>
          <div className="w-full min-[1100px]:w-1/2 flex justify-center min-[1100px]:justify-end">
            <div
              className="max-w-[558px] w-full rounded-[16px] overflow-hidden"
              data-aos="fade-left"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <img
                className="w-full h-full hover:scale-105 duration-300"
                src={night}
                alt="casino night"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
