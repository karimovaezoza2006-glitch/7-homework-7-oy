import { useState } from "react";
import { Button } from "antd";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper style
import "swiper/css";

import flower1 from "../../assets/img/flower1.png";
import heroflower1 from "../../assets/img/heroflower1.png";
import heroflower2 from "../../assets/img/heroflower2.png";

const Showcase = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      subTitle: "WELCOME TO GREENSHOP",
      title: "LET'S MAKE A BETTER",
      highlight: "PLANET",
      description:
        "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
      buttonText: "SHOP NOW",
      image: flower1,
    },
    {
      id: 2,
      subTitle: "WELCOME TO GREENSHOP",
      title: "LET'S LIVE IN A BETTER",
      highlight: "PLANET",
      description:
        "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
      buttonText: "LET'S START",
      image: heroflower1,
    },
    {
      id: 3,
      subTitle: "WELCOME TO GREENSHOP",
      title: "LET'S OBSERVE A BETTER",
      highlight: "PLANET",
      description:
        "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
      buttonText: "GET CREDITS",
      image: heroflower2,
    },
  ];

  return (
    <div className="w-[95%] md:w-[90%] m-auto mt-4 rounded-3xl overflow-hidden relative bg-[#F5F5F5]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        className="min-h-[450px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 md:px-16 min-h-[450px]">
              {/* TEXT */}
              <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left w-full md:max-w-[60%]">
                <p className="font-medium text-[14px] uppercase tracking-widest text-[#3d3d3d]">
                  {slide.subTitle}
                </p>

                <h1 className="text-[#3d3d3d] font-black text-[28px] sm:text-[50px] xl:text-[70px] uppercase leading-tight">
                  {slide.title}{" "}
                  <span className="text-[#46A358]">{slide.highlight}</span>
                </h1>

                <p className="text-[#727272] text-[14px] w-[90%] mb-4">
                  {slide.description}
                </p>

                <Button
                  type="primary"
                  className="bg-[#46A358] hover:bg-[#357a40]"
                >
                  {slide.buttonText}
                </Button>
              </div>

              {/* IMAGE */}
              <div className="w-full md:w-[40%] flex justify-center mt-6 md:mt-0">
                <img
                  src={slide.image}
                  alt="Flower"
                  className="max-h-[400px] object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-[10px] h-[10px] rounded-full transition-all ${
              activeSlide === index
                ? "bg-[#46A358]"
                : "bg-gray-400 opacity-40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Showcase;
