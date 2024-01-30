import { Description } from "@radix-ui/react-dialog";
import Image from "next/image";

type PointType = {
   link: string,
   title: string,
   description: string,
   className?: string
}


const props: PointType[] = [
   {
      link: "/StarIcon.svg",
      title: 'ЕСТЕТИКА',
      description: 'Внутрішнє оздоблення',
      className: 'col-span-2 md:col-span-1'
   },
   {
      link: "/GeoIcon.svg",
      title: 'МОБІЛЬНІСТЬ',
      description: 'Гарантія  на довгі роки',
      className: 'col-span-2 md:col-span-1'
   },
   {
      link: "/TimeIcon.svg",
      title: 'ШВИДКІСТЬ',
      description: '2 місяці на виготовлення',
      className: 'col-span-2 md:col-span-1'
   },
   {
      link: "/ProtectIcon.svg",
      title: 'БЕЗПЕКА',
      description: 'Оформлення документів',
      className: 'col-span-2 md:col-span-1'
   },
   {
      link: "/StatsIcon.svg",
      title: 'ЯКІСТЬ',
      description: 'Найкращі ресурси',
      className: 'col-span-2'
   }
]


const Comp = ({ link, title, description, className }: PointType) => (
   <div className={`${className} flex gap-4 mx-auto align-middle w-64`}>
      <Image alt={link} width={40} height={40} src={link} className="col-span-1" />
      <div className="flex flex-col gap-2">
         <h3 className="text-neutral-100 text-lg col-span-1 mt-2">{title}</h3>
         <p className=" text-neutral-400 col-span-2">{description}</p>
      </div>
   </div>
)

const WhyUs = () => (
   <div className="flex flex-col min-h-screen w-full align-middle mt-20 justify-center relative">
      <h1 className=" text-neutral-100 w-full text-center text-4xl font-medium mb-10 lg:mb-28">ЧОМУ МИ</h1>
      <div className="flex lg:flex-row flex-col gap-8 h-full">
         <div className="flex flex-col justify-evenly bg-white rounded-3xl lg:rounded-r-none lg:rounded-l-3xl p-8 md:p-12  m-6 lg:m-0 col-span-12 lg:order-2 flex-1">
            <p>Найбільше ми цінуємо комфорт, безпеку та швидкість. Саме це основи сучасного стрімкого життя.
               З модульними будинками Ви можете бути певні, що усе необхідне буде вже чекатиме усередині.
               Відчинивши двері до свого нового житла та переступивши поріг - ви відкриватимете щодня нові простори
            </p>
            <p className="mt-4 ">Це чудове рішення для майбутнього. Омріяне житло -  за 2 місяці.</p>
         </div>
         <div className="grid m-6 gap-y-6 gap-x-3 grid-cols-2 justify-center content-center flex-1">
            {
               props.map(p => (
                  <Comp link={p.link} description={p.description} title={p.title} className={`${p.className}`} />
               ))
            }
         </div>
      </div>
   </div>
)

export default WhyUs;