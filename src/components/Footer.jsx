import React from "react";
import logo from "../assets/images/logo.webp";

function Footer() {
  return (
    <>
      <div className="relative min-[1200px]:absolute min-[1441px]:relative bottom-0 w-full min-h-[400px] bg-black">
        <div className="min-h-[334px] max-w-[1164px] w-full px-3 mx-auto flex flex-wrap gap-y-6">
          <div className="w-full lg:w-[39%]">
            <div className="max-w-[369px] w-full pt-[64px]">
              <a href="#">
                <img className="w-[210px] h-[43px]" src={logo} alt="logo" />
              </a>
              <p className="font-inter font-medium text-base leading-[25.6px] text-[rgba(255,255,255,0.8)] mt-4 mb-6">
                En Exclusive Games somos un equipo apasionado de personas
                dedicadas al desarrollo de multiplataformas para juegos de azar
              </p>
              <div className="flex gap-3">
                <div className="w-[32px] h-[32px] rounded-[16px] bg-[rgba(254,254,254,0.16)] flex justify-center items-center">
                  <a href="https://www.instagram.com/" target="_blank">
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.92538 0.653451C10.5821 0.650931 11.2389 0.657531 11.8954 0.67325L12.07 0.67955C12.2716 0.68675 12.4705 0.69575 12.7108 0.706549C13.6684 0.751548 14.3217 0.902743 14.895 1.12504C15.489 1.35363 15.9894 1.66322 16.4898 2.1636C16.9473 2.61323 17.3014 3.15712 17.5274 3.75745C17.7497 4.33073 17.9009 4.985 17.9459 5.94257C17.9567 6.18196 17.9657 6.38176 17.9729 6.58335L17.9783 6.75794C17.9943 7.41419 18.0012 8.07063 17.999 8.72708L17.9999 9.39845V10.5774C18.0021 11.2342 17.9952 11.8909 17.9792 12.5474L17.9738 12.722C17.9666 12.9236 17.9576 13.1225 17.9468 13.3628C17.9018 14.3204 17.7488 14.9738 17.5274 15.547C17.3021 16.148 16.9479 16.6923 16.4898 17.1418C16.0397 17.5993 15.4956 17.9533 14.895 18.1795C14.3217 18.4017 13.6684 18.5529 12.7108 18.5979C12.4705 18.6087 12.2716 18.6177 12.07 18.6249L11.8954 18.6303C11.2389 18.6463 10.5821 18.6532 9.92538 18.651L9.254 18.6519H8.07594C7.4192 18.6542 6.76246 18.6473 6.10591 18.6312L5.93132 18.6258C5.71767 18.6181 5.50408 18.6091 5.29054 18.5988C4.33297 18.5538 3.67959 18.4008 3.10541 18.1795C2.50485 17.9539 1.96087 17.5997 1.51157 17.1418C1.05352 16.6921 0.699097 16.1478 0.473003 15.547C0.250711 14.9738 0.0995159 14.3204 0.0545174 13.3628C0.0444944 13.1493 0.0354946 12.9357 0.0275183 12.722L0.0230186 12.5474C0.00642639 11.8909 -0.00107416 11.2342 0.000519283 10.5774V8.72708C-0.0019925 8.07064 0.00460798 7.4142 0.0203187 6.75794L0.0266184 6.58335C0.0338182 6.38176 0.0428179 6.18196 0.0536175 5.94257C0.098616 4.9841 0.249811 4.33163 0.472103 3.75745C0.698331 3.15682 1.05345 2.61308 1.51247 2.1645C1.96146 1.70619 2.5051 1.35144 3.10541 1.12504C3.67959 0.902743 4.33207 0.751548 5.29054 0.706549L5.93132 0.67955L6.10591 0.67505C6.76215 0.658467 7.41859 0.650966 8.07504 0.652551L9.92538 0.653451ZM9.00021 5.1533C8.40399 5.14487 7.81203 5.25502 7.25875 5.47735C6.70547 5.69968 6.20189 6.02976 5.77728 6.4484C5.35268 6.86705 5.01551 7.36591 4.78538 7.91599C4.55524 8.46607 4.43673 9.05641 4.43673 9.65269C4.43673 10.249 4.55524 10.8393 4.78538 11.3894C5.01551 11.9395 5.35268 12.4383 5.77728 12.857C6.20189 13.2756 6.70547 13.6057 7.25875 13.828C7.81203 14.0504 8.40399 14.1605 9.00021 14.1521C10.1936 14.1521 11.3382 13.678 12.1821 12.8341C13.026 11.9902 13.5001 10.8457 13.5001 9.65224C13.5001 8.45881 13.026 7.31426 12.1821 6.47037C11.3382 5.62649 10.1936 5.1533 9.00021 5.1533ZM9.00021 6.95324C9.35886 6.94663 9.71522 7.01155 10.0485 7.14422C10.3818 7.27688 10.6853 7.47463 10.9412 7.7259C11.1972 7.97717 11.4006 8.27694 11.5394 8.60769C11.6783 8.93843 11.7498 9.29353 11.7499 9.65224C11.7499 10.0109 11.6785 10.3661 11.5398 10.6969C11.401 11.0276 11.1978 11.3275 10.9419 11.5788C10.686 11.8302 10.3826 12.028 10.0493 12.1608C9.7161 12.2936 9.35976 12.3586 9.00111 12.3522C8.28505 12.3522 7.59832 12.0677 7.09199 11.5614C6.58566 11.055 6.30121 10.3683 6.30121 9.65224C6.30121 8.93618 6.58566 8.24945 7.09199 7.74312C7.59832 7.23679 8.28505 6.95234 9.00111 6.95234L9.00021 6.95324ZM13.7251 3.80334C13.4347 3.81496 13.1601 3.93847 12.9588 4.14801C12.7575 4.35754 12.6451 4.63684 12.6451 4.92741C12.6451 5.21797 12.7575 5.49727 12.9588 5.7068C13.1601 5.91634 13.4347 6.03985 13.7251 6.05147C14.0234 6.05147 14.3096 5.93294 14.5205 5.72197C14.7315 5.511 14.85 5.22486 14.85 4.92651C14.85 4.62815 14.7315 4.34201 14.5205 4.13104C14.3096 3.92007 14.0234 3.80154 13.7251 3.80154V3.80334Z"
                        fill="#FEFEFE"
                      />
                    </svg>
                  </a>
                </div>

                <div className="w-[32px] h-[32px] rounded-[16px] bg-[rgba(254,254,254,0.16)] flex justify-center items-center">
                  <a href="https://www.facebook.com/" target="_blank">
                    <svg
                      width="11"
                      height="21"
                      viewBox="0 0 11 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 12.1523H9.5L10.5 8.15234H7V6.15234C7 5.12234 7 4.15234 9 4.15234H10.5V0.792344C10.174 0.749344 8.943 0.652344 7.643 0.652344C4.928 0.652344 3 2.30934 3 5.35234V8.15234H0V12.1523H3V20.6523H7V12.1523Z"
                        fill="#FEFEFE"
                      />
                    </svg>
                  </a>
                </div>

                <div className="w-[32px] h-[32px] rounded-[16px] bg-[rgba(254,254,254,0.16)] flex justify-center items-center">
                  <a href="https://in.linkedin.com/" target="_blank">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.14352 0C1.60247 0 1.08359 0.214928 0.701018 0.597502C0.318444 0.980076 0.103516 1.49896 0.103516 2.04C0.103516 2.58104 0.318444 3.09992 0.701018 3.4825C1.08359 3.86507 1.60247 4.08 2.14352 4.08C2.68456 4.08 3.20344 3.86507 3.58601 3.4825C3.96859 3.09992 4.18352 2.58104 4.18352 2.04C4.18352 1.49896 3.96859 0.980076 3.58601 0.597502C3.20344 0.214928 2.68456 0 2.14352 0ZM0.223516 5.76C0.19169 5.76 0.161167 5.77264 0.138663 5.79515C0.116158 5.81765 0.103516 5.84817 0.103516 5.88V18.36C0.103516 18.4262 0.157276 18.48 0.223516 18.48H4.06352C4.09534 18.48 4.12586 18.4674 4.14837 18.4449C4.17087 18.4223 4.18352 18.3918 4.18352 18.36V5.88C4.18352 5.84817 4.17087 5.81765 4.14837 5.79515C4.12586 5.77264 4.09534 5.76 4.06352 5.76H0.223516ZM6.46352 5.76C6.43169 5.76 6.40117 5.77264 6.37866 5.79515C6.35616 5.81765 6.34352 5.84817 6.34352 5.88V18.36C6.34352 18.4262 6.39728 18.48 6.46352 18.48H10.3035C10.3353 18.48 10.3659 18.4674 10.3884 18.4449C10.4109 18.4223 10.4235 18.3918 10.4235 18.36V11.64C10.4235 11.1626 10.6132 10.7048 10.9507 10.3672C11.2883 10.0296 11.7461 9.84 12.2235 9.84C12.7009 9.84 13.1587 10.0296 13.4963 10.3672C13.8339 10.7048 14.0235 11.1626 14.0235 11.64V18.36C14.0235 18.4262 14.0773 18.48 14.1435 18.48H17.9835C18.0153 18.48 18.0459 18.4674 18.0684 18.4449C18.0909 18.4223 18.1035 18.3918 18.1035 18.36V10.0848C18.1035 7.75488 16.0779 5.9328 13.7595 6.14304C13.0422 6.20834 12.3395 6.38586 11.6773 6.66912L10.4235 7.20672V5.88C10.4235 5.84817 10.4109 5.81765 10.3884 5.79515C10.3659 5.77264 10.3353 5.76 10.3035 5.76H6.46352Z"
                        fill="#FEFEFE"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[61%] lg:pt-[74px] flex flex-wrap gap-y-6">
            <div className="w-full min-[400px]:w-[50%] sm:w-[30%] md:w-[33.33%] lg:w-[28%] xl:w-[31%]">
              <ul>
                <li className="font-inter font-bold text-base leading-[25.6px] text-white mb-4">
                  Menú principal
                </li>
                <li className="mb-3">
                  <a
                    className="relative after:absolute after:w-0 after:bg-[rgba(255,255,255,0.8)] after:left-[50%] after:bottom-[-2px] after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px] font-inter font-medium text-base leading-[25.6px] text-[rgba(255,255,255,0.8)]"
                    href="#"
                  >
                    Hogar
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="relative after:absolute after:w-0 after:bg-[rgba(255,255,255,0.8)] after:left-[50%] after:bottom-[-2px] after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px] font-inter font-medium text-base leading-[25.6px] text-[rgba(255,255,255,0.8)]"
                    href="#"
                  >
                    Misión
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="relative after:absolute after:w-0 after:bg-[rgba(255,255,255,0.8)] after:left-[50%] after:bottom-[-2px] after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px] font-inter font-medium text-base leading-[25.6px] text-[rgba(255,255,255,0.8)]"
                    href="#"
                  >
                    Tragamonedas
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="relative after:absolute after:w-0 after:bg-[rgba(255,255,255,0.8)] after:left-[50%] after:bottom-[-2px] after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px] font-inter font-medium text-base leading-[25.6px] text-[rgba(255,255,255,0.8)]"
                    href="#"
                  >
                    Por qué elegirnos
                  </a>
                </li>
                <li>
                  <a
                    className="relative after:absolute after:w-0 after:bg-[rgba(255,255,255,0.8)] after:left-[50%] after:bottom-[-2px] after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px] font-inter font-medium text-base leading-[25.6px] text-[rgba(255,255,255,0.8)]"
                    href="#"
                  >
                    Ofertas
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full min-[400px]:w-[50%] sm:w-[30%] md:w-[33.33%] lg:w-[32%] xl:w-[34%]">
              <ul>
                <li className="font-inter font-bold text-base leading-[25.6px] text-white mb-4">
                  Atención al cliente
                </li>
                <li className="mb-3">
                  <a
                    className="relative after:absolute after:w-0 after:bg-[rgba(255,255,255,0.8)] after:left-[50%] after:bottom-[-2px] after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px] font-inter font-medium text-base leading-[25.6px] text-[rgba(255,255,255,0.8)]"
                    href="#"
                  >
                    ¿Necesitas ayuda?
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="relative after:absolute after:w-0 after:bg-[rgba(255,255,255,0.8)] after:left-[50%] after:bottom-[-2px] after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px] font-inter font-medium text-base leading-[25.6px] text-[rgba(255,255,255,0.8)]"
                    href="#"
                  >
                    política de privacidad
                  </a>
                </li>
                <li>
                  <a
                    className="relative after:absolute after:w-0 after:bg-[rgba(255,255,255,0.8)] after:left-[50%] after:bottom-[-2px] after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px] font-inter font-medium text-base leading-[25.6px] text-[rgba(255,255,255,0.8)]"
                    href="#"
                  >
                    Términos de servicios
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-[40%] md:w-[33.33%] lg:w-[40%] xl:w-[35%]">
              <ul>
                <li className="font-inter font-bold text-base leading-[25.6px] text-white mb-4">
                  Ponerse en contacto
                </li>
                <li className="mb-3">
                  <ul className="flex gap-2 items-center justify-start">
                    <svg
                      className="shrink-0"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.668 3.33301H3.33464C2.41797 3.33301 1.6763 4.08301 1.6763 4.99967L1.66797 14.9997C1.66797 15.9163 2.41797 16.6663 3.33464 16.6663H16.668C17.5846 16.6663 18.3346 15.9163 18.3346 14.9997V4.99967C18.3346 4.08301 17.5846 3.33301 16.668 3.33301ZM16.3346 6.87467L10.443 10.558C10.1763 10.7247 9.8263 10.7247 9.55964 10.558L3.66797 6.87467C3.58441 6.82777 3.51123 6.76439 3.45288 6.68839C3.39452 6.61238 3.35219 6.52532 3.32845 6.43248C3.30471 6.33964 3.30005 6.24295 3.31477 6.14826C3.32948 6.05357 3.36325 5.96285 3.41404 5.88159C3.46482 5.80033 3.53157 5.73022 3.61024 5.6755C3.68891 5.62079 3.77786 5.5826 3.87171 5.56326C3.96557 5.54391 4.06237 5.54381 4.15626 5.56296C4.25016 5.58212 4.33919 5.62012 4.41797 5.67467L10.0013 9.16634L15.5846 5.67467C15.6634 5.62012 15.7524 5.58212 15.8463 5.56296C15.9402 5.54381 16.037 5.54391 16.1309 5.56326C16.2247 5.5826 16.3137 5.62079 16.3924 5.6755C16.471 5.73022 16.5378 5.80033 16.5886 5.88159C16.6394 5.96285 16.6731 6.05357 16.6878 6.14826C16.7025 6.24295 16.6979 6.33964 16.6742 6.43248C16.6504 6.52532 16.6081 6.61238 16.5497 6.68839C16.4914 6.76439 16.4182 6.82777 16.3346 6.87467Z"
                        fill="white"
                      />
                    </svg>
                    <li>
                      <a
                        className="relative after:absolute after:w-0 after:bg-[rgba(255,255,255,0.8)] after:left-[50%] after:bottom-[-2px] after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px] font-inter font-medium text-base leading-[25.6px] text-[rgba(255,255,255,0.8)]"
                        href="mailto:juegosexclusivos@gmail.com"
                      >
                        juegosexclusivos@gmail.com
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="flex gap-2 justify-start items-center">
                    <svg
                      className="shrink-0"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5 13.6833V16.63C17.5001 16.841 17.4202 17.0441 17.2763 17.1985C17.1325 17.3528 16.9355 17.4469 16.725 17.4617C16.3608 17.4867 16.0633 17.5 15.8333 17.5C8.46917 17.5 2.5 11.5308 2.5 4.16667C2.5 3.93667 2.5125 3.63917 2.53833 3.275C2.5531 3.06454 2.64715 2.86751 2.8015 2.72367C2.95585 2.57984 3.15902 2.4999 3.37 2.5H6.31667C6.42003 2.4999 6.51975 2.53822 6.59644 2.60752C6.67313 2.67682 6.72133 2.77215 6.73167 2.875C6.75083 3.06667 6.76833 3.21917 6.785 3.335C6.95061 4.49077 7.29 5.61486 7.79167 6.66917C7.87083 6.83583 7.81917 7.035 7.66917 7.14167L5.87083 8.42667C6.97038 10.9887 9.01212 13.0305 11.5742 14.13L12.8575 12.335C12.91 12.2617 12.9865 12.2091 13.0737 12.1864C13.161 12.1637 13.2535 12.1723 13.335 12.2108C14.3892 12.7116 15.513 13.0501 16.6683 13.215C16.7842 13.2317 16.9367 13.2492 17.1267 13.2683C17.2294 13.2789 17.3245 13.3271 17.3936 13.4038C17.4628 13.4805 17.5001 13.5801 17.5 13.6833Z"
                        fill="white"
                      />
                    </svg>
                    <li>
                      <a
                        className="relative after:absolute after:w-0 after:bg-[rgba(255,255,255,0.8)] after:left-[50%] after:bottom-[-2px] after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px] font-inter font-medium text-base leading-[25.6px] text-[rgba(255,255,255,0.8)]"
                        href="tel:(101)342-7873"
                      >
                        (101)342-7873
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="min-h-[66px] w-full border-t border-solid border-t-[rgba(255,255,255,0.1)] flex justify-center items-center mt-6 lg:mt-0">
          <p className="font-inter font-medium text-base leading-[25.6px] text-center text-[rgba(255,255,255,0.5)]">
            © Juegos exclusivos - Todos los derechos reservados 2023
          </p>
        </div>
      </div>
      <div className="w-[100px] sm:w-[180px] h-[100px] sm:h-[180px] absolute rounded-[50%] bg-button2bg opacity-50 bottom-0 min-[1200px]:bottom-[1%] right-[-7%] blur-[60px] z-0"></div>
      <div className="w-[100px] hidden lg:block sm:w-[170px] h-[100px] sm:h-[170px] absolute rounded-[50%] bg-button2bg opacity-50 bottom-0 left-[-80px] blur-[60px] z-0"></div>
    </>
  );
}

export default Footer;
