'use client';
import { useEffect, useState } from 'react';

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Keyboard } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';

import 'swiper/css';
import './ModuleSwiper.scss';

const SwiperWrapper = ({
    pathsToImages
}: {
    pathsToImages: string[]
}) => {

    const [activeSlide, setActiveSlide] = useState<number>(0);
    const [swiper, setSwiper] = useState<SwiperType>();

    const handleChangeSlide = (slideIndex: number) => {
        const newIndex = (slideIndex + pathsToImages.length) % pathsToImages.length;

        swiper?.slideTo(newIndex);
        setActiveSlide(newIndex)
    }

    useEffect(() => {
        handleChangeSlide(0);
    }, [])

    return <>
        <ModuleSwiper pathsToImages={pathsToImages} activeSlide={activeSlide} swiper={swiper} setSwiper={setSwiper} setActiveSlide={setActiveSlide} />;
        <div className="flex gap-1 mx-auto items-center mb-6">
            <button onClick={() => handleChangeSlide((activeSlide - 1))}>
                <img src="/swiperArrow.svg" alt="arrow" className="px-3" />
            </button>

            {
                pathsToImages.map((_, index) => (
                    <button
                        onClick={() => handleChangeSlide(index)}
                        className={`${index === activeSlide ? "bg-my-cyan w-4" : "w-2 bg-neutral-200"} h-2  rounded-full `} />
                ))
            }

            <button onClick={() => handleChangeSlide((activeSlide + 1))}>
                <img src="/swiperArrow.svg" alt="arrow" className="rotate-180 px-3" />
            </button>
        </div>
    </>
}

const ModuleSwiper = ({
    pathsToImages,
    activeSlide,
    setActiveSlide,
    setSwiper,
    swiper
}: {
    pathsToImages: string[],
    activeSlide: number,
    setActiveSlide: (slideIndex: number) => void,
    swiper?: SwiperType,
    setSwiper: ((swiper: SwiperType) => void) | undefined
}) => {


    return (
        <Swiper
            initialSlide={activeSlide}
            onSlideChange={() => setActiveSlide(swiper?.realIndex as number)}
            onSwiper={setSwiper}
            slidesPerView={1.2}
            effect={'coverflow'}
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
                    slidesPerView: 2
                }
            }}
            modules={[EffectCoverflow, Keyboard]}
            className="h-full w-full flex"
        >

            {pathsToImages.map(path => (
                <SwiperSlide>
                    <Image src={path} width={864} height={650} alt="slider image" className="rounded-3xl w-full h-full  object-cover border-4 border-my-bg" />
                </SwiperSlide>
            ))}

        </Swiper>
    );
};


export default SwiperWrapper;