import AnimationWrapper from "@/components/Animations/AnimationWrapper";
import Image from "next/image";
import Video from "next-video";
import winter from "/videos/winter.mp4";
import lake from "/videos/lake.mp4";
import { SwiperSlide } from "swiper/react";
import ModuleSwiper from "../ModuleSwiper";

const Projects = () => {
  return (
    <div
      className="flex flex-col min-h-screen w-full align-middle mt-20 justify-center relative gap-8"
      id="projects"
    >
      <AnimationWrapper duration={0.2} animationType="slideUp" delay={0.2}>
        <h1 className=" text-neutral-100 w-full text-center text-4xl font-medium">
          Проєкти
        </h1>
      </AnimationWrapper>
      <AnimationWrapper duration={0.4} animationType="fadeIn" delay={0.5}>
        <p className="max-w-5xl mx-auto w-full text-my-label text-center p-4">
          Повністю готові будинки надають змогу легко створити комплекс у
          будь-якій точці України. Саме це дозволяє швидко розпочати власну
          справу. Готельний бізнес, комплекс будинків або ж будь-який інший
          проєкт стає ближчим та доступнішим з ECOMOD.
        </p>
      </AnimationWrapper>

      <ModuleSwiper numberOfSlides={3}>
        <>
          <SwiperSlide>
            <Video
              src={winter}
              accentColor="#7EFFFF"
              className="rounded-3xl w-full h-full  object-cover border-4 border-my-bg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Video
              src={lake}
              accentColor="#7EFFFF"
              className="rounded-3xl w-full h-full  object-cover border-4 border-my-bg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/lake_photo.jpeg"}
              width={864}
              height={650}
              alt="slider image"
              className="rounded-3xl w-full h-full  object-cover border-4 border-my-bg"
            />
          </SwiperSlide>
        </>
      </ModuleSwiper>
    </div>
  );
};

export default Projects;
