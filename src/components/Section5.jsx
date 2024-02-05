import React from "react";
import seven from "../assets/images/seven.webp";
import section5bulb from "../assets/images/section5bulb.webp";
import client from "../assets/images/client.webp";
import currency from "../assets/images/currency.webp";
import casinowheel from "../assets/images/casinowheel.webp";
import Button1 from "./Button1";
import Button2 from "./Button2";
import platinum from "../assets/images/platinum.webp";
import giros from "../assets/images/giros.webp";
import todos from "../assets/images/todos.webp";
import casin from "../assets/images/casin.webp";
import Accordian from "./Accordian";

function Section5() {
  const sevendata = [
    { image: section5bulb, alt: "bulb", num: "200", para: "Páginas creadas" },
    {
      image: client,
      alt: "client",
      num: "98%",
      para: "Clientes Satisfechas",
    },
    {
      image: currency,
      alt: "currency",
      num: "200",
      para: "Divisas Disponibles",
    },
  ];
  const carddata = [
    {
      image: giros,
      alt: "giros",
    },
    { image: todos, alt: "todos" },
    { image: casin, alt: "casin" },
  ];
  return (
    <>
      <div className="min-[1200px]:translate-y-[-455px] min-[1441px]:translate-y-0 mt-12 md:mt-[100px] mb-12 sm:mb-[150px] min-[1200px]:mb-[100px] min-[1441px]:mb-[150px] relative" id="section5">
        {/* part1 */}
        <div className="max-w-[1164px] mx-auto px-3 w-full flex flex-wrap gap-y-6 relative z-[1]">
          <div
            className="w-full min-[1150px]:w-1/2 justify-center flex min-[1150px]:justify-start"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <div className="max-w-[558px] w-full overflow-hidden rounded-[16px]">
              <img
                className="w-full h-full rounded-[16px] hover:scale-105 duration-300"
                src={seven}
                alt="casino machine"
              />
            </div>
          </div>
          <div
            className="w-full min-[1150px]:w-1/2 justify-center flex min-[1150px]:justify-end"
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <div className="max-w-[537px] w-full ">
              <h2 className="font-anton font-normal text-[35px] sm:text-[48px] sm:leading-[57.6px] text-center text-white mb-[30px] md:mb-[60px]">
                Más razones para elegirnos
              </h2>
              <div className="flex flex-col items-center min-[1150px]:items-start gap-6">
                {sevendata.map((data, index) => (
                  <div
                    key={index}
                    className="w-[290px] min-[400px]:w-[374px] h-[116px] rounded-[16px] bg-section5bg2 relative"
                  >
                    <div className="rounded-[16px] bg-[#00141B] absolute top-[0.8px] bottom-[0.8px] right-[0.8px] left-[0.8px]">
                      <div className="pl-4 min-[400px]:pl-[56px] py-[24px] gap-[37px] bg-section5bg1 rounded-[16px] flex">
                        <div className="w-[68px] h-[68px] rounded-[50%] bg-[rgba(122,245,122,0.08)] flex justify-center items-center">
                          <img
                            className="w-[37px] h-[37px]"
                            src={data.image}
                            alt={data.alt}
                          />
                        </div>
                        <div>
                          <p className="font-anton font-normal text-[32px] leading-[41.6px] text-white">
                            {data.num}
                          </p>
                          <p className="font-inter font-medium text-base leading-[25.6px] text-white">
                            {data.para}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/*part2  */}
        <div className="my-6 sm:my-12 md:my-[150px] relative z-[1]">
          <div className="max-w-[1164px] mx-auto px-3 w-full">
            <h2
              className="font-anton font-normal text-[30px] sm:text-[48px] sm:leading-[57.6px] text-center text-white mb-4"
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              Nuestras ofertas
            </h2>
            <p
              className="font-inter font-medium text-base leading-[25.6px] text-center text-white mb-[30px] md:mb-[60px]"
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              Te ofrecemos las mejores experiencias de juegos para tus clientes.
            </p>
            <div className="w-full min-h-[627px] rounded-[16px] border-[0.5px] border-solid border-[rgba(255,255,255,0.5)] bg-section5bg1 flex flex-wrap p-4 lg:p-0">
              <div className="w-full lg:w-[59%] flex justify-center lg:justify-start relative">
                <div
                  className="max-w-[650px] max-h-[471px] overflow-hidden lg:mt-[77px]"
                  data-aos="fade-right"
                  data-aos-once="true"
                  data-aos-duration="1000"
                >
                  <img
                    className="w-full h-full duration-300 hover:scale-95 object-cover"
                    src={casinowheel}
                    alt="casino wheel"
                  />
                </div>
                <div className="w-[81px] sm:w-[162px] h-[81px] sm:h-[162px] rounded-[50%] bg-button2bg absolute top-[14%] left-[21%] z-[-1] blur-[50px]"></div>
              </div>
              <div className="w-full lg:w-[41%] flex justify-center lg:justify-start">
                <div
                  className="max-w-[426px] w-full lg:mt-[57px]"
                  data-aos="fade-left"
                  data-aos-once="true"
                  data-aos-duration="1000"
                >
                  <h2 className="font-anton font-normal text-[22px] sm:text-[32px] sm:leading-[41.6px] text-white mb-4">
                    Silver
                  </h2>
                  <p className="font-inter font-medium text-base leading-[25.6px] text-[rgba(255,255,255,0.8)] mb-6 sm:mb-[32px]">
                    Diseño predeterminado, atractivo y fácil de navegar,
                    tecnología HTLM5.
                  </p>
                  <h2 className="font-anton font-normal text-[30px] sm:text-[48px] sm:leading-[57.6px] text-white mb-4">
                    $5000
                  </h2>
                  <ul className="flex flex-col gap-3 mb-6 sm:mb-10">
                    <li className="bg-bgtick bg-no-repeat font-inter font-medium text-base leading-[25.6px] text-[rgba(255,255,255,0.8)] pl-[30px] bg-[3px_7px] bg-[length:18px_10px]">
                      Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas,
                      Cargas manuales
                    </li>
                    <li className="bg-bgtick bg-no-repeat font-inter font-medium text-base leading-[25.6px] text-[rgba(255,255,255,0.8)] pl-[30px] bg-[3px_7px] bg-[length:18px_10px]">
                      Control de RTP (controlás qué porcentaje pagar)
                    </li>
                    <li className="bg-bgtick bg-no-repeat font-inter font-medium text-base leading-[25.6px] text-[rgba(255,255,255,0.8)] pl-[30px] bg-[3px_7px] bg-[length:18px_10px]">
                      Bonos Editables, Happy Hours, Jackpots, Códigos
                      Promocionales Regalo
                    </li>
                    <li className="bg-bgtick bg-no-repeat font-inter font-medium text-base leading-[25.6px] text-[rgba(255,255,255,0.8)] pl-[30px] bg-[3px_7px] bg-[length:18px_10px]">
                      Aplicación para Android y Windows de regalo.
                    </li>
                    <li className="bg-bgtick bg-no-repeat font-inter font-medium text-base leading-[25.6px] text-[rgba(255,255,255,0.8)] pl-[30px] bg-[3px_7px] bg-[length:18px_10px]">
                      Tiempo de creación 2 a 3 semanas
                    </li>
                  </ul>
                  <Button1 text="Comprar ahora" />
                </div>
              </div>
            </div>

            <div className="w-full min-h-[651px] rounded-[16px] border-[0.5px] border-solid border-[rgba(255,255,255,0.5)] bg-luxury bg-center bg-cover flex flex-wrap p-3 sm:p-4 lg:p-0 justify-center items-center my-6 sm:my-12 md:my-[64px]">
              <div
                className="max-w-[419px] w-full flex flex-col items-center"
                data-aos="zoom-in"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                <h3 className="font-anton font-normal text-[22px] sm:text-[32px] sm:leading-[41.6px] text-center text-white mb-4">
                  Luxury
                </h3>
                <p className="font-inter font-medium text-base leading-[25.6px] text-center text-[rgba(255,255,255,0.8)] mb-6 sm:mb-[32px]">
                  lleva tu experiencia de juego al siguiente nivel. Con todas
                  las características de la versión Silver y la potencia
                  adicional de la tecnología React .
                </p>
                <h2 className="font-anton font-normal text-[30px] sm:text-[48px] sm:leading-[57.6px] text-center text-white mb-4">
                  $9000
                </h2>
                <ul className="flex flex-col gap-3 mb-6 sm:mb-9">
                  <li className="font-inter pl-8 font-medium text-base leading-[25.6px] text-center text-[rgba(255,255,255,0.8)] bg-bgtick bg-no-repeat bg-[3px_8px] bg-[length:18px_10px]">
                    Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas,
                    Cargas manuales
                  </li>
                  <li className="font-inter pl-8 font-medium text-base leading-[25.6px] text-center text-[rgba(255,255,255,0.8)] bg-bgtick bg-no-repeat bg-[3px_8px] bg-[length:18px_10px]">
                    Control de RTP (controlás qué porcentaje pagar)
                  </li>
                  <li className="font-inter pl-8 font-medium text-base leading-[25.6px] text-center text-[rgba(255,255,255,0.8)] bg-bgtick bg-no-repeat bg-[3px_8px] bg-[length:18px_10px]">
                    Bonos Editables, Happy Hours, Jackpots, Códigos
                    Promocionales Regalo
                  </li>
                  <li className="font-inter pl-8 font-medium text-base leading-[25.6px] text-center text-[rgba(255,255,255,0.8)] bg-bgtick bg-no-repeat bg-[3px_8px] bg-[length:18px_10px]">
                    Aplicación para Android y Windows de regalo.
                  </li>
                  <li className="font-inter pl-8 font-medium text-base leading-[25.6px] text-center text-[rgba(255,255,255,0.8)] bg-bgtick bg-no-repeat bg-[3px_8px] bg-[length:18px_10px]">
                    Tiempo de creación 2 a 3 semanas
                  </li>
                </ul>
                <Button2 text="Comprar ahora" />
              </div>
            </div>

            <div className="w-full min-h-[575px] rounded-[16px] border-[0.5px] border-solid border-[rgba(255,255,255,0.5)] bg-section5bg1 flex items-center flex-col-reverse min-[900px]:flex-row p-5 min-[400px]:p-4 min-[1200px]:p-0 gap-y-6">
              <div
                className="w-full min-[900px]:w-[43%] min-[1200px]:pl-[50px] flex justify-center min-[900px]:justify-start"
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                <div className="max-w-[364px] w-full">
                  <h3 className="font-anton font-normal text-[22px] sm:text-[32px] sm:leading-[41.6px] text-white mb-4">
                    Platinum
                  </h3>
                  <p className="font-inter font-medium text-base leading-[25.6px] text-[rgba(255,255,255,0.8)] mb-6 sm:mb-[32px]">
                    Diseño totalmente personalizado. Contáctanos para un
                    presupuesto.
                  </p>
                  <h2 className="font-anton font-normal text-[30px] sm:text-[48px] sm:leading-[57.6px] text-white mb-4">
                    Consultar precio
                  </h2>
                  <ul className="mb-6 sm:mb-10">
                    <li className="font-inter pl-[30px] font-medium text-base leading-[25.6px] text-[rgba(255,255,255,0.8)] bg-bgtick bg-no-repeat bg-[3px_8px] bg-[length:18px_10px]">
                      Personalizable
                    </li>
                  </ul>
                  <Button1 text="Comprar ahora" />
                </div>
              </div>
              <div
                className="w-full min-[900px]:w-[57%] flex justify-center min-[900px]:justify-start relative"
                data-aos="fade-left"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                <div className="max-w-[602px] w-full max-h-[419px] h-full overflow-hidden">
                  <img
                    className="w-full object-cover duration-300 hover:scale-95"
                    src={platinum}
                    alt="casino"
                  />
                </div>
                <div className="absolute w-[81px] sm:w-[162px] h-[81px] sm:h-[162px] rounded-[50%] bg-button2bg top-[3%] right-[19%] z-[-1] blur-[50px]"></div>
              </div>
            </div>
          </div>
        </div>
        {/* part3 */}
        <div className="max-w-[1164px] mx-auto px-3 w-full mb-6 sm:mb-12 md:mb-[150px] flex flex-col items-center relative z-[1]">
          <h2
            className="font-anton font-normal text-[30px] sm:text-[48px] sm:leading-[57.6px] text-white text-center mb-[30px] sm:mb-[60px]"
            data-aos="zoom-in"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            Ellos eligieron apostar con nosotros
          </h2>
          <div
            className="w-full flex gap-6 flex-wrap justify-center mb-6 sm:mb-[38px]"
            data-aos="zoom-in"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            {carddata.map((data, index) => (
              <div
                key={index}
                className="max-w-[364px] w-full sm:min-h-[256px] rounded-[8px] relative group/item duration-300 hover:shadow-[7px_9px_15px_0px_rgba(0,0,0,0.2)]"
              >
                <img
                  className="w-full h-full rounded-[8px]"
                  src={data.image}
                  alt={data.alt}
                />
                <div className="absolute w-full h-full opacity-0 duration-300 group-hover/item:opacity-100 bg-[rgba(0,0,0,0.7)] rounded-[8px] top-0 bottom-0 left-0 right-0 flex justify-center items-center">
                  <Button1 text="Rcasinovip" />
                </div>
              </div>
            ))}
          </div>
          <p
            className="max-w-[883px] w-full text-center font-inter font-semibold text-base leading-[25.6px] text-white sm:mb-5"
            data-aos="zoom-in"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            Clientes satisfechos que confiaron en Exclusive Games y han
            disfrutado de emocionantes experiencias de juego.
            <br /> Ahora, la próxima apuesta está en tus manos.
            <br /> Elige ganar. Elige exclusive game.
          </p>
        </div>
        {/* part4 */}
        <div className="max-w-[994px] mx-auto px-3 w-full mb-6 sm:mb-12 md:mb-[150px] relative z-[1]">
          <h2
            className="font-anton font-normal text-[30px] sm:text-[48px] sm:leading-[57.6px] text-center text-white mb-[30px] sm:mb-[60px]"
            data-aos="zoom-out"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            Preguntas más frecuentes
          </h2>
          <div
            className="flex w-full flex-col gap-y-[32px]"
            data-aos="zoom-out"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <Accordian
              heading="¿Cuáles son las ventajas de elegir Juegos Exclusivos para mis plataformas de juegos?"
              content="En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar."
            />
            <Accordian
              heading="¿Cómo garantizan la seguridad de las operaciones en sus juegos?"
              content="En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar."
            />
            <Accordian
              heading="¿Cuáles son las opciones de juego disponibles en las versiones Silver, Luxury y Platinum?"
              content="En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar."
            />
            <Accordian
              heading="¿Cuánto tiempo lleva crear una plataforma con Juegos Exclusivos?"
              content="En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar."
            />
            <Accordian
              heading="¿Qué métodos de pago aceptan?"
              content="En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar."
            />
            <Accordian
              heading="¿Puedo probar sus juegos antes de comprometerme?"
              content="En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar."
            />
          </div>
        </div>
        {/* part5 */}
        <div className="max-w-[1164px] mx-auto px-3 w-full relative z-[1]">
          <div className="w-full bg-final border-[0.5px] border-solid border-[rgba(255,255,255,0.5)] rounded-[16px] min-h-[341px] flex justify-center items-center">
            <div
              className="max-w-[593px] p-1 w-full flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <p className="font-anton font-normal text-[25px] text-center sm:text-[32px] sm:leading-[41.6px] text-white mb-10">
                Lanza tu propia plataforma en sólo 2 semanas
              </p>
              <Button2 text="Leer más" />
            </div>
          </div>
        </div>
        {/* ellipse */}
        <div className="bg-button2bg w-[220px] sm:w-[440px] blur-[150px] h-[220px] sm:h-[440px] rounded-[50%] opacity-50 absolute top-[0%] min-[1200px]:top-[-9%] left-[-18%] z-0"></div>
        <div className="bg-button2bg w-[242px] sm:w-[484px] blur-[150px] h-[242px] sm:h-[484px] rounded-[50%] opacity-50 absolute top-[5%] right-[-26%] z-0"></div>
        <div className="bg-button2bg w-[242px] sm:w-[484px] blur-[150px] h-[242px] sm:h-[484px] rounded-[50%] opacity-50 absolute top-[44%] left-[-22%] z-0"></div>
        <div className="bg-button2bg w-[242px] sm:w-[484px] blur-[150px] h-[242px] sm:h-[484px] rounded-[50%] opacity-50 absolute top-[56%] right-[-31%] z-0"></div>
        <div className="bg-button2bg w-[198px] sm:w-[396px] blur-[150px] h-[197px] sm:h-[394px] rounded-[50%] opacity-50 absolute bottom-[20%] left-[-12%] z-0"></div>
      </div>
    </>
  );
}

export default Section5;
