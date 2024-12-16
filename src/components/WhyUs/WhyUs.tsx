import Image from "next/image";
import AnimationWrapper from "../Animations/AnimationWrapper";
import { useTranslations } from "next-intl";

type PointType = {
  link: string;
  title: string;
  description: string;
  className?: string;
};

const Comp = ({ link, title, description, className }: PointType) => (
  <div className={`${className} flex gap-4 mx-auto align-middle w-64`}>
    <Image
      alt={link}
      width={40}
      height={40}
      src={link}
      className="col-span-1"
    />
    <div className="flex flex-col gap-2">
      <h3 className="text-neutral-100 text-lg col-span-1 mt-2">{title}</h3>
      <p className=" text-neutral-400 col-span-2">{description}</p>
    </div>
  </div>
);

const WhyUs = () => {
  const t = useTranslations();

  const props: PointType[] = [
    {
      link: "/StarIcon.svg",
      title: t("whyUs.features.0.label"),
      description: t("whyUs.features.0.description"),
      className: "col-span-2 md:col-span-1",
    },
    {
      link: "/GeoIcon.svg",
      title: t("whyUs.features.1.label"),
      description: t("whyUs.features.1.description"),
      className: "col-span-2 md:col-span-1",
    },
    {
      link: "/TimeIcon.svg",
      title: t("whyUs.features.2.label"),
      description: t("whyUs.features.2.description"),
      className: "col-span-2 md:col-span-1",
    },
    {
      link: "/ProtectIcon.svg",
      title: t("whyUs.features.3.label"),
      description: t("whyUs.features.3.description"),
      className: "col-span-2 md:col-span-1",
    },
    {
      link: "/StatsIcon.svg",
      title: t("whyUs.features.3.label"),
      description: t("whyUs.features.3.description"),
      className: "col-span-2",
    },
  ];

  return (
    <div
      className="flex flex-col min-h-screen w-full align-middle mt-20 justify-center relative"
      id="whyUs"
    >
      <AnimationWrapper duration={0.4} animationType="slideUp" delay={0.2}>
        <h2 className=" text-neutral-100 w-full text-center text-4xl font-medium mb-10 lg:mb-28">
          {t("whyUs.title")}
        </h2>
      </AnimationWrapper>
      <div className="flex lg:flex-row flex-col gap-8 h-full">
        <AnimationWrapper
          animationType="slideLeft"
          className="flex flex-col justify-evenly bg-gray-100 rounded-3xl lg:rounded-r-none lg:rounded-l-3xl p-8 md:p-12  m-6 lg:m-0 col-span-12 lg:order-2 flex-1"
        >
          <p>{t("whyUs.description1")}</p>
          <p className="mt-4 ">{t("whyUs.description2")}</p>
        </AnimationWrapper>
        <AnimationWrapper
          animationType="slideRight"
          className="grid m-6 gap-y-6 gap-x-3 grid-cols-2 justify-center content-center flex-1"
        >
          {props.map((p) => (
            <Comp
              link={p.link}
              description={p.description}
              title={p.title}
              className={`${p.className}`}
            />
          ))}
        </AnimationWrapper>
      </div>
    </div>
  );
};

export default WhyUs;
