import React from "react";
import Image1 from "../images/Hero/women-NhG2D3pl.png";
import Image2 from "../images/Hero/shopping-vpNvhQDE.png";
import Image3 from "../images/Hero/sale-cnpHUeHf.png";
import Slider from "react-slick";
const Imagelist = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti ex
      perferendis, sed, eos doloribus temporibus labore suscipit distinctio
      veritatis quibusdam id ipsum odio minima nulla. Ad modi explicabo officia
      numquam.`,
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti ex
      perferendis, sed, eos doloribus temporibus labore suscipit distinctio
      veritatis quibusdam id ipsum odio minima nulla. Ad modi explicabo officia
      numquam.`,
  },
  {
    id: 3,
    img: Image3,
    title: "70% off all Products Sale",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti ex
      perferendis, sed, eos doloribus temporibus.`,
  },
];
function Hero({ handleOrderPopup }) {
  var settings = {
    dots: false,
    arrows: false,
    Infinite: true,
    speed: 800,
    slidesToscroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* Background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 -z-9 rounded-3xl right-0 rotate-45"></div>
      {/* Hero Section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {Imagelist.map((item) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content secrion */}
                <div className="flex flex-col gap-4 justify-center text-center pt-12 sm:pt-0 sm:text-left order-2 sm:order-1 z-10 relative">
                  <h1
                    data-aos="zoom-out"
                    data-aos-once="true"
                    data-aos-duration="500"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {item.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {item.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={() => handleOrderPopup()}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 px-4 py-2 text-white rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* Img Section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="z-10 relative"
                  >
                    <img
                      src={item.img}
                      className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-150 lg:scale-125 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
