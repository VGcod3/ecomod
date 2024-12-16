import Image from "next/image";
import AnimationWrapper from "../Animations/AnimationWrapper";
import { useTranslations } from "next-intl";

type advatageType = {
  text: string;
  className?: string;
};

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

const Advantages = () => {
  const t = useTranslations();

  const advantages: advatageType[] = [
    {
      text: t("advantages.list.0"),
      className: "top-12 -left-48 order-first",
    },
    {
      text: t("advantages.list.1"),
      className: "top-12 -right-48 order-first",
    },
    {
      text: t("advantages.list.2"),
      className: "bottom-12 -left-48",
    },
    {
      text: t("advantages.list.3"),
      className: "bottom-12 -right-48",
    },
  ];

  return (
    <div
      className="flex flex-col min-h-screen mx-auto max-w-2xl w-full align-middle mt-20 justify-center p-6 gap-10 lg:gap-28"
      id="advantages"
    >
      <AnimationWrapper duration={0.4} animationType="fadeIn">
        <h1 className=" text-neutral-100 uppercase w-full text-center text-4xl font-medium order-first ">
          {t("advantages.title")}
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
};

export default Advantages;
