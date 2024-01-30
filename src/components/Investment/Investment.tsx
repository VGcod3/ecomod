import Image from "next/image";

const Investment = () => (
    <div className=" flex flex-row-reverse gap-16">
       <Image alt='ecomod' width={400} height={440} src='/investments.png' className="hidden md:block"/>
    <div className="flex flex-col">
    <div className="bg-white lg:rounded-r-3xl lg:rounded-l-none flex flex-col justify-evenly rounded-3xl md:px-24 md:py-8 p-4 md:my-20">
        <h1 className = "text-3xl font-bold mb-6">
            ECOMOD  - це впершу чергу про розумні інвестиції.
        </h1>
        <p>
            Ви не витрачаєте часу та сил на облаштування будинку. Наші майстри та дизайнери повністю беруть на себе цю відповідальність!
        </p>
        <p>
            Саме тому ECOMOD - це швидкий старт Вашого бізнесу. 
        </p>
    </div>
    <div className=" justify-center">
        <button className={ "border-2 border-cyan-300 md:py-[1.4vw] py-4 px-2 md:px-[1.6vw] rounded-lg h-fit leading-none lg:w-auto w-full text-cyan-300"}>ПЕРЕГЛЯНУТИ ПРОЄКТИ</button>
    </div>
    </div>
    </div>
)

export default Investment