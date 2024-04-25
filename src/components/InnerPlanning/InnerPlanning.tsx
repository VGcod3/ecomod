import ModuleSwiper from "@/components/ModuleSwiper";
import AnimationWrapper from "@/components/Animations/AnimationWrapper";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

const InnerPlanning = () => {
  const paths = [
    "/innerPlanning/img1.jpeg",
    "/innerPlanning/img2.jpeg",
    "/innerPlanning/img3.jpeg",
    "/innerPlanning/img4.jpeg",
    "/innerPlanning/img5.jpeg",
  ];

  return (
    <div
      className="flex flex-col min-h-screen w-full align-middle mt-20 justify-center relative gap-8"
      id="innerPlanning"
    >
      <AnimationWrapper duration={0.2} animationType="slideUp" delay={0.2}>
        <h1 className=" text-neutral-100 w-full text-center text-4xl font-medium">
          Внутрішнє планування
        </h1>
      </AnimationWrapper>
      <AnimationWrapper duration={0.4} animationType="fadeIn" delay={0.5}>
        <p className="max-w-5xl mx-auto w-full text-my-label text-center p-4">
          Основне, що створює затишну атмосферу в домі - його інтер’єр. Наші
          будинки виконані в стилі люкс та створені для максимального комфорту
          та функціональності в кожному сантиметрі.
        </p>
      </AnimationWrapper>
      <ModuleSwiper numberOfSlides={paths.length}>
        <>
          {paths.map((path) => (
            <SwiperSlide>
              <Image
                src={path}
                width={864}
                height={650}
                alt="slider image"
                className="rounded-3xl w-full h-full  object-cover border-4 border-my-bg"
              />
            </SwiperSlide>
          ))}
        </>
      </ModuleSwiper>
    </div>
  );
};

export default InnerPlanning;
