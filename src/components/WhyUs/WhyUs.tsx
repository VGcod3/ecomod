import { Description } from "@radix-ui/react-dialog";
import Image from "next/image";

type PointType = {
   link:string,
   title:string,
   description:string,
   className?: string
}


const props:PointType[] = [
   {
      link: "/StarIcon.svg",
      title: 'ЕСТЕТИКА',
      description: 'Внутрішнє оздоблення',
      className : 'col-span-2'
   },
   {
      link: "/GeoIcon.svg",
      title: 'МОБІЛЬНІСТЬ',
      description: 'Гарантія  на довгі роки',
      className : 'col-span-2'
   },
   {
      link: "/TimeIcon.svg",
      title: 'ШВИДКІСТЬ',
      description: '2 місяці на виготовлення',
      className : 'col-span-4'
   },
   {
      link: "/ProtectIcon.svg",
      title: 'БЕЗПЕКА',
      description: 'Оформлення документів',
      className : 'col-span-4'
   },
   {
      link: "/StatsIcon.svg",
      title: 'ЯКІСТЬ',
      description: 'Найкращі ресурси', 
      className : 'col-span-2'
   }
]


const Comp = ( {link, title, description, className } : PointType ) => (
   <div className = {`flex flex-col ${className} md-10`}>
   <Image alt={link} width={40} height={40} src ={link} className = "col-span-1"/>
   <h3 className="text-neutral-100 col-span-2">{title}</h3>
   <p className=" text-neutral-400 mt-3">{description}</p>
  </div>
)

const WhyUs = () => (
   <div className="flex flex-col min-h-screen w-full align-middle mt-20">
    <h1 className=" text-neutral-100 w-full text-center text-4xl font-medium mb-32">ЧОМУ МИ</h1>
    <div className="flex flex-row-reverse">
    <div className=" bg-white rounded-bl-3xl rounded-tl-3xl p-14 col-span-12">
      <p>Найбільше ми цінуємо комфорт, безпеку та швидкість. Саме це основи сучасного стрімкого життя. 
         З модульними будинками Ви можете бути певні, що усе необхідне буде вже чекатиме усередині. 
         Відчинивши двері до свого нового житла та переступивши поріг - ви відкриватимете щодня нові простори 
      </p>
      <p className="mt-4">Це чудове рішення для майбутнього. Омріяне житло -  за 2 місяці.</p> 
    </div>
    <div className = "flex">

      {
         props.map(p => (
            <Comp link={p.link} description={p.description} title={p.title} className= {p.className}/>
         ))
      }
   </div>
    </div>
   </div>
)

export default WhyUs;