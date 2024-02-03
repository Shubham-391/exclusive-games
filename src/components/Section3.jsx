import React from "react";
import jackpot from "../assets/images/jackpot.webp";
import zugi from "../assets/images/zugi.webp";
import roulette from "../assets/images/roulette.webp";
import betting from "../assets/images/betting.webp";
import Button1 from "./Button1";

function Section3() {
  const section3data = [{
    image: zugi,
  alt:"zugi"}, { image: roulette, alt:"roulette", }, { image: betting, alt:"betting" },];
  return (
    <>
      <div className="bg-section3bg2 min-[1200px]:bg-section3bg min-[1441px]:bg-section3bg2 bg-no-repeat bg-cover bg-center min-[1200px]:min-h-[2068px] min-[1441px]:min-h-[0px] w-full translate-y-0 min-[1200px]:translate-y-[-238px] min-[1441px]:translate-y-0 py-12 sm:py-[100px] min-[1200px]:py-0 min-[1441px]:py-[100px] relative z-[1]">
        <div className="relative max-w-[1164px] mx-auto px-3 w-full min-[1200px]:pt-[327px] min-[1441px]:pt-0 flex items-center flex-wrap gap-y-6">
          <div
            className="w-full min-[1150px]:w-1/2 flex justify-center min-[1150px]:jusitfy-start"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <div className="max-w-[558px] w-full overflow-hidden">
              <img
                className="w-full hover:scale-105 duration-300"
                src={jackpot}
                alt="jackpot"
              />
            </div>
          </div>
          <div className="w-full min-[1150px]:w-1/2 flex justify-center min-[1150px]:justify-end">
            <div className="max-w-[543px]">
              <h2
                className="font-anton font-normal text-[30px] sm:text-[48px] sm:leading-[57.6px] text-white mb-4"
                data-aos="fade-left"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                Potenciando sus elecciones
              </h2>
              <p
                className="font-inter font-medium text-base leading-[25.6px] text-[rgba(255,255,255,0.8)] mb-6"
                data-aos="fade-left"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                Con Exclusive Game lo mejor está de tu lado.
              </p>
              <ul
                className="flex flex-col gap-3 max-w-[412px] w-full mb-6"
                data-aos="fade-left"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                <li className="bg-bgtick bg-no-repeat bg-left pl-9 font-inter font-medium text-base leading-[25.6px] text-[rgba(255,255,255,0.8)]">
                  Tecnología HTML5
                </li>
                <li className="bg-bgtick bg-no-repeat bg-left pl-9 font-inter font-medium text-base leading-[25.6px] text-[rgba(255,255,255,0.8)]">
                  Versión PC y móvil
                </li>
                <li className="bg-bgtick bg-no-repeat bg-left pl-9 font-inter font-medium text-base leading-[25.6px] text-[rgba(255,255,255,0.8)]">
                  Control de RTP (controlás qué porcentaje pagar)
                </li>
                <li className="bg-bgtick bg-no-repeat bg-[0%_18%] pl-9 font-inter font-medium text-base leading-[25.6px] text-[rgba(255,255,255,0.8)]">
                  Bonos editables, happy hours, Jackpots, códigos promocionales.
                </li>
                <li className="bg-bgtick bg-no-repeat bg-left pl-9 font-inter font-medium text-base leading-[25.6px] text-[rgba(255,255,255,0.8)]">
                  Aplicación para android y windows de regalo.
                </li>
              </ul>
              <p
                className="font-inter font-medium text-base leading-[25.6px] text-[rgba(255,255,255,0.8)]"
                data-aos="fade-left"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                Te reintegramos todo lo invertido en fichas en la moneda que
                elijas.
              </p>
            </div>
          </div>
          <div className="absolute w-[160px] h-[160px] bg-button2bg rounded-[50%] opacity-15 bottom-[-7%] right-[37%] blur-[50px] z-[-1]"></div>
        </div>
        <div
          className="max-w-[1068px] w-full px-3 mx-auto my-6 sm:my-12 min-[1200px]:my-[150px]"
          data-aos="zoom-in-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <div className="w-full rounded-[16px] border-[0.5px] border-solid border-white min-h-[308px] bg-section3bg3 bg-no-repeat bg-center bg-cover flex justify-center items-center">
            <p className="max-w-[520px] font-anton font-normal text-[30px] sm:text-[48px] leading-[57.6px] text-center text-white">
              lanza tu propia plataforma en sólo 2 semanas
            </p>
          </div>
        </div>
        <div className="max-w-[1164px] mx-auto px-3 w-full">
          <h2
            className="font-anton font-normal text-[30px] sm:text-[48px] sm:leading-[57.6px] text-white mb-[30px] sm:mb-[60px] text-center"
            data-aos="zoom-in"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            Juegos en vivo
          </h2>
          <div className="flex justify-center flex-wrap gap-6">
            {section3data.map((data, index) => (
              <div
                data-aos="zoom-in"
                data-aos-once="true"
                data-aos-duration="1000"
                key={index}
                className="max-w-[364px] w-full sm:min-h-[256px] rounded-[8px] relative group/item duration-300 hover:shadow-[7px_9px_15px_0px_rgba(0,0,0,0.2)]"
              >
                <img
                  className="w-full h-full rounded-[8px]"
                  src={data.image}
                  alt={data.alt}
                />
                <div className="absolute w-full h-full opacity-0 duration-300 group-hover/item:opacity-100 bg-[rgba(0,0,0,0.7)] rounded-[8px] top-0 bottom-0 left-0 right-0 flex justify-center items-center">
                  <Button1 text="Reproducir ahora" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute w-[242px] sm:w-[484px] h-[242px] sm:h-[484px] opacity-50 bg-button2bg rounded-[50%] top-[-9%] left-[-13%] z-[-1] blur-[190px]"></div>
        <div className="absolute w-[242px] sm:w-[484px] h-[242px] sm:h-[484px] opacity-50 bg-button2bg rounded-[50%] bottom-[8%] right-[-22%] z-[-1] blur-[190px]"></div>
      </div>
    </>
  );
}

export default Section3;
