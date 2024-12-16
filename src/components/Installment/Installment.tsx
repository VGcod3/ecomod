import ModuleSwiper from "@/components/ModuleSwiper";
import AnimationWrapper from "../Animations/AnimationWrapper";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const PlanPhotos = () => {
  const paths = [
    "/Installment/img2.jpg",
    "/Installment/img3.jpg",
    "/Installment/img5.jpg",
    "/Installment/img4.jpg",
    "/Installment/img1.jpg",
  ];

  const t = useTranslations("installing");

  return (
    <div
      className="flex flex-col min-h-screen w-full align-middle mt-20 justify-center relative gap-8"
      id="installment"
    >
      <AnimationWrapper duration={0.2} animationType="slideUp" delay={0.2}>
        <h1 className=" text-neutral-100 w-full text-center text-4xl font-medium">
          {t("title")}
        </h1>
      </AnimationWrapper>
      <AnimationWrapper duration={0.4} animationType="fadeIn" delay={0.5}>
        <p className="max-w-5xl mx-auto w-full text-my-label text-center p-4">
          {t("description")}
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

export default PlanPhotos;
