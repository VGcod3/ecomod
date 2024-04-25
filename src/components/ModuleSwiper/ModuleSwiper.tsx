"use client";
import { useEffect, useState } from "react";

import { Swiper } from "swiper/react";
import { EffectCoverflow, Keyboard } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";

import "swiper/css";
import "./ModuleSwiper.scss";

const SwiperWrapper = ({
  children,
  numberOfSlides,
}: {
  children: React.ReactNode;
  numberOfSlides: number;
}) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [swiper, setSwiper] = useState<SwiperType>();

  const handleChangeSlide = (slideIndex: number) => {
    const newIndex = (slideIndex + numberOfSlides) % numberOfSlides;

    swiper?.slideTo(newIndex);
    setActiveSlide(newIndex);
  };

  useEffect(() => {
    handleChangeSlide(0);
  }, []);

  return (
    <>
      <ModuleSwiper
        activeSlide={activeSlide}
        swiper={swiper}
        setSwiper={setSwiper}
        setActiveSlide={setActiveSlide}
        children={children}
      />

      <div className="flex gap-1 mx-auto items-center mb-6">
        <button onClick={() => handleChangeSlide(activeSlide - 1)}>
          <img src="/swiperArrow.svg" alt="arrow" className="px-3" />
        </button>

        {Array(numberOfSlides)
          .fill(0)
          .map((_, index) => (
            <button
              onClick={() => handleChangeSlide(index)}
              className={`${
                index === activeSlide ? "bg-my-cyan w-4" : "w-2 bg-neutral-200"
              } h-2  rounded-full `}
            />
          ))}

        <button onClick={() => handleChangeSlide(activeSlide + 1)}>
          <img src="/swiperArrow.svg" alt="arrow" className="rotate-180 px-3" />
        </button>
      </div>
    </>
  );
};

const ModuleSwiper = ({
  children,
  activeSlide,
  setActiveSlide,
  setSwiper,
  swiper,
}: {
  children: React.ReactNode;
  activeSlide: number;
  setActiveSlide: (slideIndex: number) => void;
  swiper?: SwiperType;
  setSwiper: ((swiper: SwiperType) => void) | undefined;
}) => {
  return (
    <Swiper
      initialSlide={activeSlide}
      onSlideChange={() => setActiveSlide(swiper?.realIndex as number)}
      onSwiper={setSwiper}
      slidesPerView={1.2}
      effect={"coverflow"}
      loop={true}
      keyboard={true}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 1,
        depth: 1200,
        modifier: 0,
        slideShadows: true,
      }}
      breakpoints={{
        768: {
          coverflowEffect: {
            modifier: 1,
          },
          slidesPerView: 2,
        },
      }}
      modules={[EffectCoverflow, Keyboard]}
      className="h-full w-full flex"
    >
      {children}
    </Swiper>
  );
};

export default SwiperWrapper;
