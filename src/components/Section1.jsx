import React from "react";
import section1poker from "../assets/images/section1poker.webp";
import section1aviator from "../assets/images/section1aviator.webp";
import section1arrow1 from "../assets/images/section1arrow1.webp";

function Section1() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="max-w-[1164px] mx-auto px-3 mt-12 sm:mt-[75px] mb-12 sm:mb-[100px] flex flex-wrap gap-6 min-[1150px]:gap-0 relative z-[3]">
          <div className="w-full min-[1150px]:w-1/2 flex flex-col items-center min-[1150px]:items-start">
            <div className="max-w-[538px] w-full flex flex-col items-center min-[1150px]:items-start">
              <div
                className="overflow-hidden rounded-[16px]"
                data-aos="zoom-in"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                <img
                  className="max-w-[538px] w-full max-h-[536px] rounded-[16px] hover:scale-105 duration-300"
                  src={section1poker}
                  alt="poker image"
                />
              </div>
              <div className="max-w-[448px] mt-6 sm:mt-[60px] flex flex-col items-center min-[1150px]:items-start">
                <h2
                  className="font-anton font-normal text-[30px] sm:text-[48px] leading-[57.6px] text-white mb-4"
                  data-aos="fade-right"
                  data-aos-once="true"
                  data-aos-duration="1000"
                >
                  Nuestra Visión
                </h2>
                <p
                  className="font-inter text-center min-[1150px]:text-start font-medium text-base leading-[25.6px] text-white opacity-80 mb-6"
                  data-aos="fade-right"
                  data-aos-once="true"
                  data-aos-duration="1000"
                >
                  Nuestra visión es ser líderes indiscutibles en la industria de
                  los juegos de azar y llevar nuestra pasión por el
                  entretenimiento más allá de las fronteras. Imagina un mundo
                  donde la emoción y la diversión no tengan límites, y ese es el
                  mundo que queremos crear contigo.
                </p>
                <a
                  className="group"
                  href=""
                  data-aos="fade-right"
                  data-aos-once="true"
                  data-aos-duration="1000"
                >
                  <p className="font-inter font-bold text-base leading-[25.6px] text-[#7AF57A] flex items-center gap-[6px]">
                    Aprende más{" "}
                    <img
                      className="w-[18px] h-[12px] group-hover:translate-x-1 duration-300 shrink-0"
                      src={section1arrow1}
                      alt="arrow"
                    />{" "}
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full min-[1150px]:w-1/2 flex flex-col items-center min-[1150px]:items-end">
            <div className="max-w-[538px] w-full flex flex-col items-center min-[1150px]:items-start">
              <div className="max-w-[444px] mb-6 sm:mb-[60px] flex flex-col items-center min-[1150px]:items-start">
                <h2
                  className="font-anton font-normal text-[30px] sm:text-[48px] leading-[57.6px] text-white mb-4"
                  data-aos="fade-left"
                  data-aos-once="true"
                  data-aos-duration="1000"
                >
                  Nuestra Visión
                </h2>
                <p
                  className="font-inter text-center min-[1150px]:text-start font-medium text-base leading-[25.6px] text-white opacity-80 mb-6"
                  data-aos="fade-left"
                  data-aos-once="true"
                  data-aos-duration="1000"
                >
                  Nuestra misión es simple pero poderosa: proporcionarte la más
                  amplia gama de soluciones de entretenimiento de alta calidad y
                  rentabilidad. Estamos comprometidos a elevar tus expectativas
                  y brindarte experiencias inigualables.
                </p>
                <a
                  className="group"
                  href=""
                  data-aos="fade-left"
                  data-aos-once="true"
                  data-aos-duration="1000"
                >
                  <p className="font-inter font-bold text-base leading-[25.6px] text-[#7AF57A] flex items-center gap-[6px]">
                    Aprende más{" "}
                    <img
                      className="w-[18px] h-[12px] group-hover:translate-x-1 duration-300 shrink-0"
                      src={section1arrow1}
                      alt="arrow"
                    />{" "}
                  </p>
                </a>
              </div>
              <div
                className="overflow-hidden rounded-[16px]"
                data-aos="zoom-in"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                <img
                  className="max-w-[538px] w-full max-h-[536px] rounded-[16px] duration-300 hover:scale-105"
                  src={section1aviator}
                  alt="aeroplane photo"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[242px] blur-[360px] sm:w-[484px] h-[242px] sm:h-[484px] rounded-[50%] bg-button2bg opacity-50 top-[5%] left-[-22%] "></div>
        <div className="absolute w-[50px] sm:w-[100px] h-[50px] sm:h-[100px] opacity-70 rounded-[50%] bg-button2bg top-[45%] left-[48%] blur-[55px]"></div>
      </div>
    </>
  );
}

export default Section1;
