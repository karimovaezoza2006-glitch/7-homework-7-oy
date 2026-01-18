import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import plant1 from "../../assets/img/plant1.png";
import plant2 from "../../assets/img/plant2.png";
import plant3 from "../../assets/img/plant3.png";

const slides = [
  {
    title: "LET'S MAKE A BETTER",
    highlight: "PLANET",
    desc: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle.",
    img: plant1,
  },
  {
    title: "GREEN LIFE FOR",
    highlight: "HOME",
    desc: "Bring nature closer to your home with our fresh and modern plants collection.",
    img: plant2,
  },
  {
    title: "NATURE MAKES",
    highlight: "BETTER LIFE",
    desc: "Choose eco-friendly plants and make your environment healthier.",
    img: plant3,
  },
];

export default function HeroSlider() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="py-10 sm:py-16"
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col-reverse md:flex-row items-center gap-8">
                
                {/* TEXT */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <p className="text-xs sm:text-sm uppercase text-gray-500 mb-2">
                    Welcome to Greenshop
                  </p>

                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    {item.title}{" "}
                    <span className="text-green-600">{item.highlight}</span>
                  </h1>

                  <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-md mx-auto md:mx-0">
                    {item.desc}
                  </p>

                  <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
                    SHOP NOW
                  </button>
                </div>

                {/* IMAGE */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src={item.img}
                    alt="plant"
                    className="w-[280px] sm:w-[240px] lg:w-[320px] object-contain"
                  />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
