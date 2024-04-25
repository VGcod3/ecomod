import Image from "next/image";
import AnimationWrapper from "../Animations/AnimationWrapper";

type advatageType = {
  text: string;
  className?: string;
};

const advantages: advatageType[] = [
  {
    text: "жодних лишніх деталей. максимум простоти та комфорту",
    className: "top-12 -left-48 order-first",
  },
  {
    text: "якісні довговічні  матеріали, які не бояться жодної негоди",
    className: "top-12 -right-48 order-first",
  },
  {
    text: "мобільність модуля, яка дозволятиме легко змінити місце розташування",
    className: "bottom-12 -left-48",
  },
  {
    text: "затишне місце для життя та відпочинку з краєвидом на Ваш вибір",
    className: "bottom-12 -right-48",
  },
];

const AdvantageCard = ({ text, className }: advatageType) => {
  return (
    <AnimationWrapper
      duration={0.4}
      delay={0.2}
      animationType="fadeIn"
      className={`${className} flex items-center justify-center border-2 min-h-32 lg:max-w-72 border-my-cyan rounded-3xl backdrop-blur-md text-gray-100 text-center p-6 lg:absolute `}
    >
      {text}
    </AnimationWrapper>
  );
};

const Advantages = () => (
  <div
    className="flex flex-col min-h-screen mx-auto max-w-2xl w-full align-middle mt-20 justify-center p-6 gap-10 lg:gap-28"
    id="advantages"
  >
    <AnimationWrapper duration={0.4} animationType="fadeIn">
      <h1 className=" text-neutral-100 uppercase w-full text-center text-4xl font-medium order-first ">
        Переваги модульного дому
      </h1>
    </AnimationWrapper>

    <div className="flex flex-col gap-4 relative">
      <AnimationWrapper duration={0.4} animationType="zoomIn">
        <Image
          alt={"advantages image"}
          src={"/advantage.png"}
          className={"max-w-2xl mx-auto w-full"}
          width={628}
          height={503}
        />
      </AnimationWrapper>
      {advantages.map((adv) => (
        <AdvantageCard text={adv.text} className={adv.className} />
      ))}
    </div>
  </div>
);

export default Advantages;
