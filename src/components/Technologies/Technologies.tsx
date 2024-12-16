import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import AnimationWrapper from "../Animations/AnimationWrapper";
import { useTranslations } from "next-intl";

const Technologies = () => {
  const t = useTranslations("smartHouse");

  const technologies = [
    {
      name: t("list.0.label"),
      description: t("list.0.description"),
    },
    {
      name: t("list.1.label"),
      description: t("list.1.description"),
    },
    {
      name: t("list.2.label"),
      description: t("list.2.description"),
    },
    {
      name: t("list.3.label"),
      description: t("list.3.description"),
    },
  ];

  return (
    <div
      className="grid grid-cols-12 lg:p-0 p-6 gap-y-16 mt-10"
      id="technologies"
    >
      <div className="col-span-12 lg:col-span-6 flex flex-col items-center gap-10">
        <AnimationWrapper duration={0.4} animationType="slideUp">
          <h2 className="text-3xl font-bold text-center text-gray-100">
            {t("title")}
          </h2>
        </AnimationWrapper>
        <AnimationWrapper duration={0.2} animationType="zoomIn" delay={0.4}>
          <Image
            src="/mock-phone.png"
            alt="Technologies"
            width={240}
            height={500}
          />
        </AnimationWrapper>
      </div>
      <div className="col-span-12 lg:col-span-6 flex flex-col lg:items-center gap-10">
        <AnimationWrapper
          duration={0.2}
          animationType="slideLeft"
          delay={0.4}
          className="bg-gray-100 rounded-3xl lg:rounded-r-none p-5 lg:p-10"
        >
          {technologies.map((technology) => (
            <div key={technology.name} className="flex flex-col gap-4 p-4">
              <h3 className="text-2xl font-bold text-gray-800">
                {technology.name}
              </h3>
              <p className="text-gray-700 text-sm lg:text-base">
                {technology.description}
              </p>
            </div>
          ))}
        </AnimationWrapper>

        <Dialog>
          <DialogTrigger asChild>
            <AnimationWrapper animationType="scaleIn">
              <button
                className={
                  "border-2 border-cyan-300 lg:py-[1.4vw] py-4 px-2 lg:px-[1.6vw] rounded-lg h-fit leading-none w-auto text-cyan-300 backdrop-blur-sm hover:scale-105 transition-all duration-500"
                }
              >
                {t("dialog.action")}
              </button>
            </AnimationWrapper>
          </DialogTrigger>
          <TecрDialog />
        </Dialog>
      </div>
    </div>
  );
};

const TecрDialog = () => {
  const t = useTranslations("smartHouse.dialog");

  const otherTechnologies = [
    "Електроштори",

    "Аудіо світильник з діско",
    "Робот-пилосос",

    "Пральна машина з функцією сушки",
    "Кондиціонер",

    "Вбудована духова піч",
    "Сенсорна та з датчиком руху витяжка",

    "Вбудований холодильник",

    "Датчик затоплення",

    "Датчик диму, пожежна безпека",

    "Відеонагляд",

    "Електроплита",

    "USB розетки",

    "телевізор",

    "Підсвітка в шафах",

    "Ліжко-трансформер",

    "Шафа-трансформер",
  ];

  return (
    <DialogContent className="bg-gray-100 rounded-3xl p-5 lg:p-10">
      <h3 className="text-2xl font-bold text-gray-800">{t("title")}</h3>

      <ul className="flex flex-col gap-0.5 list-disc">
        {otherTechnologies.map((_, i) => (
          <li key={i} className="text-gray-700 lg:text-md ">
            {t(`list.${i}`).charAt(0).toUpperCase() + t(`list.${i}`).slice(1)}
          </li>
        ))}
      </ul>
    </DialogContent>
  );
};

export default Technologies;
