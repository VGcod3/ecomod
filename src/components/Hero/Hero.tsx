import Image from "next/image";
import { nasalization } from "@/fonts";
import Menu from "@/components/Menu";

import style from './Hero.module.scss';
import Scene from "../ThreeScene/Scene";


const Hero = () => (
    <>
        <Menu />
        <section className={style.wrapper}>
            <div className="col-span-2 row-span-2 w-full overflow-visible">
                {/* <Scene /> */}
                <Image src="/heroImage.png" alt="hero image module house" width={1214} height={703} className="absolute z-0 right-1/2 w-full h-full sm:h-1/2 object-contain object-right-top pointer-events-none" />
            </div>

            <div className="col-span-4 sm:order-none order-first sm:col-span-2 w-full h-full p-10 flex flex-col justify-center sm:items-start items-center sm:row-span-2">
                <h1 className={`${nasalization.className} text-neutral-100 text-[8vw] leading-none`}>ECOMOD</h1>

                <p className="text-neutral-300 text-2xl max-w-64 sm:text-[3vw] leading-snug text-center sm:text-start">
                    дім твого майбутнього
                </p>
            </div>

            <div className="col-span-4 sm:col-span-2 w-full h-full p-6 order-last sm:order-none flex flex-col lg:flex-row items-center gap-6 row-span-1">
                <button className={style.button}>Замовити дзвінок</button>
                <button style={{ backgroundColor: 'transparent' }} className={`${style.button} backdrop-blur-sm text-neutral-100 hover:text-my-cyan hover:border-my-cyan`}>Переглянути планування</button>
            </div>

            <div className="col-span-2 w-full h-full sm:row-span-1 row-span-2">
                <div className="slogans flex flex-col justify-center gap-4 h-full w-full sm:p-10">

                    <div className={style.slogan_item}>
                        <img src="/innovative.svg" alt="innovative" height={48} width={48} />
                        <p>Інноваційно</p>
                    </div>

                    <div className={style.slogan_item}>
                        <img src="/recycle.svg" alt="eco" height={48} width={48} />
                        <p>Екологічно</p>
                    </div>
                    <div className={style.slogan_item}>
                        <img src="/speedometer.svg" alt="fast" height={48} width={48} />
                        <p>Швидко</p>
                    </div>

                </div>
            </div>
        </section>
    </>

)

export default Hero;