import Image from "next/image";
import Link from "next/link";
import { interaco } from "@/fonts";
import Menu from "@/components/Menu";

import style from "./Hero.module.scss";
import AnimationWrapper from "../Animations/AnimationWrapper";
import { Phone } from "lucide-react";
import useSmoothScrollTo from "@/utils/useSmoothScrollTo";
import { useTranslations } from "next-intl";

const Hero = () => {
  const handleScroll = useSmoothScrollTo();

  const t = useTranslations();

  const slogans = [
    {
      icon: "/innovative.svg",
      text: "Інноваційно",
    },
    {
      icon: "/recycle.svg",
      text: "Екологічно",
    },
    {
      icon: "/speedometer.svg",
      text: "Швидко",
    },
  ];

  return (
    <>
      <Menu />
      <section className={style.wrapper}>
        <div className="col-span-2 row-span-2 w-full overflow-visible">
          <Image
            src="/heroImage.png"
            alt="hero image module house"
            width={714}
            height={503}
            className="absolute z-0 right-1/2 w-full h-full sm:h-1/2 object-contain object-right-top pointer-events-none"
          />
        </div>

        <div className="col-span-4 sm:order-none order-first sm:col-span-2 w-full h-full p-10 flex flex-col justify-center sm:items-start items-center sm:row-span-2">
          <AnimationWrapper delay={0.1} duration={1} animationType="slideUp">
            <h1
              className={`${interaco.className} text-neutral-50 text-[7vw] leading-none`}
            >
              ECOMOD
            </h1>
          </AnimationWrapper>
          <AnimationWrapper delay={0.3} duration={1} animationType="slideUp">
            <p className="text-neutral-200 text-2xl max-w-70 sm:text-[3vw] leading-snug text-center sm:text-start">
              {t("slogan")}
            </p>
          </AnimationWrapper>
        </div>

        <div className="col-span-4 sm:col-span-2 w-full h-full p-6 order-last sm:order-none flex flex-col lg:flex-row items-center gap-6 row-span-1">
          <button className={style.button}>
            <Link
              href="tel:+380669913454"
              className="flex justify-center min-w-56"
            >
              {t("actions.call")}
              <Phone size={24} className="ml-2" />
            </Link>
          </button>
          <button
            style={{ backgroundColor: "transparent" }}
            className={`${style.button} backdrop-blur-sm text-neutral-100 hover:text-my-cyan hover:border-my-cyan min-w-56`}
            onClick={() => handleScroll("#innerPlanning")}
          >
            {t("actions.see")}
          </button>
        </div>

        <div className="col-span-2 w-full h-full sm:row-span-1 row-span-2">
          <div className="slogans flex flex-col justify-center gap-4 h-full w-full sm:p-10">
            {slogans.map((slogan, index) => (
              <AnimationWrapper
                duration={0.3}
                animationType="slideLeft"
                delay={(index + 1) / 2}
              >
                <div className={style.slogan_item}>
                  <img
                    src={slogan.icon}
                    alt={slogan.text}
                    height={48}
                    width={48}
                  />
                  <p>{t(`features.list.${index}`)}</p>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
