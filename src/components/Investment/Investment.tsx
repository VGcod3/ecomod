import Image from "next/image";

const Investment = () => (
    <div className="grid col-span-4 lg:grid-cols-6 gap-16 p-10 lg:p-0">
        <div className="flex gap-4 flex-col flex-grow my-20 col-span-4">
            <div className="bg-white lg:rounded-l-none flex flex-col justify-center gap-4 rounded-3xl min-h-80 p-10 lg:pl-48">
                <h1 className="text-3xl font-bold mb-6">
                    ECOMOD  - це впершу чергу про розумні інвестиції.
                </h1>
                <p>
                    Ви не витрачаєте часу та сил на облаштування будинку. Наші майстри та дизайнери повністю беруть на себе цю відповідальність!
                </p>
                <p>
                    Саме тому ECOMOD - це швидкий старт Вашого бізнесу.
                </p>
            </div>

            <div className="flex justify-center">
                <button className={"border-2 border-cyan-300 lg:py-[1.4vw] py-4 px-2 lg:px-[1.6vw] rounded-lg h-fit leading-none lg:w-auto w-full text-cyan-300 backdrop-blur-sm hover:scale-105 transition-all duration-500"}>ПЕРЕГЛЯНУТИ ПРОЄКТИ</button>
            </div>

        </div>

        <Image alt='ecomod' width={400} height={440} src='/investments.png' className="hidden lg:block col-span-2 w-full h-full object-contain object-center" />

    </div>
)

export default Investment