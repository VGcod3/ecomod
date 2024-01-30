import Image from "next/image";

type advatageType = {
	text: string,
	className?: string
}

const advantages: advatageType[] = [
	{ text: 'жодних лишніх деталей. максимум простоти та комфорту', className: 'top-12 -left-48 order-first' },
	{ text: 'якісні довговічні  матеріали, які не бояться жодної негоди', className: 'top-12 -right-48 order-first' },
	{ text: 'мобільність корпусу, яка дозволятиме легко змінити місце розташування', className: 'bottom-12 -left-48' },
	{ text: 'затишне місце для роботи або відпочинку з видами на Ваш вибір', className: 'bottom-12 -right-48' }
];

const AdvantageCard = ({ text, className }: advatageType) => {
	return (
		<div className={`${className} flex items-center justify-center border-2 min-h-32 lg:max-w-72 border-my-cyan rounded-3xl backdrop-blur-md text-white text-center p-6 lg:absolute `}>
			{text}
		</div>
	)
}

const Advantages = () => (
	<div className="flex flex-col min-h-screen mx-auto max-w-2xl w-full align-middle mt-20 justify-center p-10 gap-10 lg:gap-28">

		<h1 className=" text-neutral-100 uppercase w-full text-center text-4xl font-medium order-first ">Переваги модульного дому</h1>

		<div className="flex flex-col gap-4 relative">

			<Image alt={'advantages image'} src={'/advantage.png'} className={'max-w-2xl mx-auto w-full'} width={628}
				height={503} />
			{
				advantages.map(adv => <AdvantageCard text={adv.text} className={adv.className} />)
			}
		</div>

	</div>
)

export default Advantages;