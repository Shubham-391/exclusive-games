import React from "react";
import innovacion from "../assets/images/innovacion.webp";
import inteligencia from "../assets/images/inteligencia.webp";
import proactividad from "../assets/images/proactividad.webp";
import section2arrow1 from "../assets/images/section2arrow1.webp";
import section2arrow2 from "../assets/images/section2arrow2.webp";
import jet from "../assets/images/jet.webp";
import Button1 from "./Button1";
import joker from "../assets/images/joker.webp";
import rabbit from "../assets/images/rabbit.webp";
import lucky from "../assets/images/lucky.webp";
import jungle from "../assets/images/jungle.webp";
import casino from "../assets/images/casino.webp";
import Button2 from "./Button2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Section2() {
  const section2data1 = [
    {
      id: 1,
      image: inteligencia,
      alt: "inteligencia",
      heading: "Inteligencia",
      para: "Comprendemos a la perfección los gustos de las personas y el mundo del gaming.",
    },
    {
      id: 2,
      image: proactividad,
      alt: "proactividad",
      heading: "Proactividad",
      para: "Somos creadores de cambios que exploran nuevas formas de entretenimiento.",
    },
    {
      id: 3,
      image: innovacion,
      alt: "innovación",
      heading: "Innovación",
      para: "Pensamos fuera de la caja para estar siempre un paso adelante.",
    },
  ];
  const section2CardData = [
    { image: jet, alt: "jetx" },
    { image: joker, alt: "joker" },
    { image: rabbit, alt: "rabbit" },
    { image: lucky, alt: "lucky fortune" },
    { image: jungle, alt: "jungle delight" },
    { image: casino, alt: "casino" },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <>
      <div className="bg-white min-[1200px]:bg-section2bg min-[1200px]:bg-transparent min-[1441px]:bg-white bg-no-repeat bg-cover min-[1200px]:min-h-[1872px] min-[1441px]:min-h-[0px] min-[1441px]:py-[100px] py-12 sm:py-[100px] min-[1200px]:py-0 w-full flex justify-center flex-col relative">
        <div className="max-w-[1164px] mx-auto px-3 w-full mb-12 lg:mb-[150px]">
          <h2
            className="font-anton font-normal text-[30px] sm:text-[48px] sm:leading-[57.6px] text-[#00141B] mb-[30px] sm:mb-[60px] text-center"
            data-aos="zoom-in-up"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            Nuestros Atributos de Marca
          </h2>
          <div className="flex justify-between relative flex-col lg:flex-row gap-y-6 items-center lg:items-start">
            {section2data1.map((data, index) => (
              <div
                data-aos="zoom-in"
                data-aos-once="true"
                data-aos-duration="1000"
                key={index}
                className={`${
                  data.id == 1
                    ? "max-w-[263px]"
                    : data.id == 2
                    ? "max-w-[235px]"
                    : "max-w-[245px]"
                } flex flex-col items-center w-full`}
              >
                <div className="w-[100px] h-[100px] rounded-[50%] bg-[rgba(122,245,122,0.08)] mb-4 flex justify-center items-center">
                  <img src={data.image} alt={data.alt} />
                </div>
                <h3 className="font-anton font-normal text-xl leading-[26px] mb-[10px] text-[#00141B]">
                  {data.heading}
                </h3>
                <p className="font-inter font-medium text-base leading-[25.6px] text-[rgba(0,20,27,0.8)] text-center">
                  {data.para}
                </p>
              </div>
            ))}
            <img data-aos="zoom-in"
                data-aos-once="true"
                data-aos-duration="1000"
              className="absolute w-[273px] h-[42px] top-[25%] left-[45%] min-[400px]:left-[50%] lg:left-[19%] lg:top-[4%] rotate-[87deg]  lg:rotate-0"
              src={section2arrow1}
              alt="long arrow"
            />
            <img data-aos="zoom-in"
                data-aos-once="true"
                data-aos-duration="1000"
              className="absolute w-[273px] h-[42px] top-[68%] right-[45%] min-[400px]:right-[52%] lg:top-[34%] lg:right-[18%] rotate-[87deg]  lg:rotate-0"
              src={section2arrow2}
              alt="long arrow"
            />
          </div>
        </div>
        <div className="max-w-[1164px] mx-auto px-3 w-full flex flex-col items-center">
          <div className="max-w-[904px] mx-auto w-full mb-[30px] sm:mb-[60px]">
            <h3
              className="font-anton font-normal text-[30px] sm:text-[48px] leading-[57.6px] text-[#00141B] text-center mb-4"
              data-aos="zoom-in-up"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              Slots{" "}
            </h3>
            <p
              className="font-inter font-medium text-base leading-[25.6px] text-center text-[rgba(0,20,27,0.8)]"
              data-aos="zoom-in-up"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              En Exclusive Games, ofrecemos una selección de más de 600 juegos
              de los principales desarrolladores, como Aristocrat, Amatic, EGT,
              Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo
              trabaja incansablemente para innovar y ampliar nuestra oferta de
              experiencias, garantizando la máxima seguridad con operaciones
              protegidas por cifrado SSL de 256 bits.
            </p>
          </div>
          <div className="gap-6 flex-wrap justify-center hidden min-[775px]:flex">
            {section2CardData.map((data, index) => (
              <div
                data-aos="zoom-in"
                data-aos-once="true"
                data-aos-duration="1000"
                key={index}
                className="max-w-[364px] max-h-[265px] w-full h-full rounded-[8px] duration-300 bg-button2bg flex justify-center items-center group/card relative hover:p-[1px]"
              >
                <img
                  className="w-full h-full object-cover rounded-[8px]"
                  src={data.image}
                  alt={data.alt}
                />
                <div className="absolute bg-[rgba(0,0,0,0.72)] duration-300 opacity-0 group-hover/card:opacity-100 rounded-[8px] top-[1px] bottom-[1px] left-[1px] right-[1px] flex justify-center items-center">
                  <Button1 text="Jugar" />
                </div>
              </div>
            ))}
          </div>
          <Slider
            data-aos="zoom-in"
            data-aos-once="true"
            data-aos-duration="1000"
            className="min-[775px]:hidden w-full"
            {...settings}
          >
            {section2CardData.map((data, index) => (
              <div key={index} className="!flex justify-center">
                <div className="max-w-[364px] max-h-[265px] w-full h-full rounded-[8px] duration-300 bg-button2bg flex justify-center items-center group/card relative hover:p-[1px]">
                  <img
                    className="w-full h-full object-cover rounded-[8px]"
                    src={data.image}
                    alt={data.alt}
                  />
                  <div className="absolute bg-[rgba(0,0,0,0.72)] duration-300 opacity-0 group-hover/card:opacity-100 rounded-[8px] top-[1px] bottom-[1px] left-[1px] right-[1px] flex justify-center items-center">
                    <Button1 text="Jugar" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <Button2
            data-aos="zoom-in-up"
            data-aos-once="true"
            data-aos-duration="1000"
            text="Mostrar más"
            className="mt-10"
          />
        </div>
        <div className="absolute rounded-[50%] w-[484px] h-[484px] bg-button2bg opacity-50 top-0 right-[-21%] blur-[190px] z-[-1]"></div>
      </div>
    </>
  );
}

export default Section2;
