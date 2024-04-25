import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import AnimationWrapper from "../Animations/AnimationWrapper";

const technologies = [
  {
    name: "Google Home",
    description:
      "Вмикайте світло, коригуйте параметри термостата й отримуйте сповіщення, коли людина чи пакунок опиниться біля ваших дверей.",
  },
  {
    name: "Livolo Home",
    description:
      "Управління електро-шторами від Livolo Home. Відкривайте та закривайте штори віддалено, використовуючи мобільний додаток або голосовий асистент.",
  },
  {
    name: "Ledvans Smart",
    description:
      "Програма LEDVANCE SMART дозволяє керувати освітленням місця віддалено. Крім того, можна інтегрувати з Amazon Alexa та Google Assistant для управління пристроями за допомогою голосових команд.",
  },
  {
    name: "Smart Life",
    description:
      "Smart Life - це програма для керування розумними пристроями, яка допоможе вам легше контролювати та керувати пристроями розумного дому та жити розумніше. Smart Life інтегрований з HealthKit та HomeKit.",
  },
];

const Technologies = () => (
  <div
    className="grid grid-cols-12 lg:p-0 p-6 gap-y-16 mt-10"
    id="technologies"
  >
    <div className="col-span-12 lg:col-span-6 flex flex-col items-center gap-10">
      <AnimationWrapper duration={0.4} animationType="slideUp">
        <h2 className="text-3xl font-bold text-center text-gray-100">
          Технології Смарт Хаус
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
              Всі технології
            </button>
          </AnimationWrapper>
        </DialogTrigger>
        <TecрDialog />
      </Dialog>
    </div>
  </div>
);

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

const TecрDialog = () => {
  return (
    <DialogContent className="bg-gray-100 rounded-3xl p-5 lg:p-10">
      <h3 className="text-2xl font-bold text-gray-800">
        Список технологій, вбудованих в смарт-хаус
      </h3>

      <ul className="flex flex-col gap-0.5 list-disc">
        {otherTechnologies.map((technology) => (
          <li key={technology} className="text-gray-700 lg:text-md ">
            {technology.charAt(0).toUpperCase() + technology.slice(1)}
          </li>
        ))}
      </ul>
    </DialogContent>
  );
};

export default Technologies;
