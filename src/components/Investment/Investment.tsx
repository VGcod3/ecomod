import Image from "next/image";
import AnimationWrapper from "@/components/Animations/AnimationWrapper";
import useSmoothScrollTo from "@/utils/useSmoothScrollTo";

const Investment = () => {
  const handleScrollClick = useSmoothScrollTo();

  return (
    <div
      className="grid col-span-4 lg:grid-cols-6 gap-x-16 p-6 lg:p-0"
      id="investment"
    >
      <AnimationWrapper
        duration={0.2}
        animationType="slideUp"
        delay={0.2}
        className="col-span-4 lg:col-span-6 text-neutral-100 w-full text-center text-4xl font-medium lg:hidden"
      >
        <h2>Для вашого бізнесу</h2>
      </AnimationWrapper>

      <AnimationWrapper
        duration={0.4}
        delay={0.6}
        animationType="slideRight"
        className="flex gap-4 flex-col flex-grow my-16 col-span-4"
      >
        <div className="bg-neutral-100 lg:rounded-l-none flex flex-col justify-center gap-4 rounded-3xl min-h-80 p-10 lg:pl-48 text-gray-700">
          <h3 className="text-3xl font-bold mb-6 text-gray-800">
            ECOMOD - це впершу чергу про розумні інвестиції.
          </h3>
          <p>
            Ви не витрачаєте часу та сил на облаштування будинку. Наші дизайнери
            та інженери повністю продумали все за вас!
          </p>
          <p>Саме тому ECOMOD - це швидкий старт Вашого бізнесу.</p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => handleScrollClick("#projects")}
            className={
              "border-2 border-cyan-300 lg:py-[1.4vw] py-4 px-2 lg:px-[1.6vw] rounded-lg h-fit leading-none lg:w-auto w-full text-cyan-300 backdrop-blur-sm hover:scale-105 transition-all duration-500"
            }
          >
            ПЕРЕГЛЯНУТИ ПРОЄКТИ
          </button>
        </div>
      </AnimationWrapper>

      <AnimationWrapper
        duration={0.4}
        delay={0.2}
        animationType="slideLeft"
        className="hidden lg:block col-span-2"
      >
        <Image
          alt="ecomod"
          width={400}
          height={440}
          src="/investments.png"
          className="w-full h-full object-contain object-center"
        />
      </AnimationWrapper>
    </div>
  );
};

export default Investment;
