import ModuleSwiper from "@/components/ModuleSwiper";
import AnimationWrapper from "../Animations/AnimationWrapper";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

const PlanPhotos = () => {
  const paths = [
    "/Installment/img1.jpeg",
    "/Installment/img2.jpeg",
    "/Installment/img3.jpeg",
    "/Installment/img4.jpeg",
    "/Installment/img5.jpeg",
  ];

  return (
    <div
      className="flex flex-col min-h-screen w-full align-middle mt-20 justify-center relative gap-8"
      id="installment"
    >
      <AnimationWrapper duration={0.2} animationType="slideUp" delay={0.2}>
        <h1 className=" text-neutral-100 w-full text-center text-4xl font-medium">
          Встановлення
        </h1>
      </AnimationWrapper>
      <AnimationWrapper duration={0.4} animationType="fadeIn" delay={0.5}>
        <p className="max-w-5xl mx-auto w-full text-my-label text-center p-4">
          Після оформлення замовлення ми починаємо збірку Вашого будинку! Це
          займає від 2 до 4 місяців. Збірка відбувається за найкращими новітніми
          технологіями, які роблять доступними легкість, комфорт та безпеку.
          Після виготовлення, ми доставляємо будинок та встановлюємо його на
          ділянці.
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
