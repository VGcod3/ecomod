
import ModuleSwiper from '@/components/ModuleSwiper'


const PlanPhotos = () => {

   const paths = ['/Installment/img1.jpeg', '/Installment/img2.jpeg', '/Installment/img3.jpeg', '/Installment/img4.jpeg', '/Installment/img5.jpeg']

   return (
      <div className="flex flex-col min-h-screen w-full align-middle mt-20 justify-center relative gap-8">
         <h1 className=" text-neutral-100 w-full text-center text-4xl font-medium">Встановлення</h1>
         <p className='max-w-5xl mx-auto w-full text-my-label text-center p-4'>
            Після оформлення замовлення та всіх документів, ми починаємо збірку Вашого будинку!
            Це може займати від 2 до 4 місяців.
            Збірка відбувається за найкращими новітніми технологіями, які роблять доступними легкість, комфорт та безпеку. Це дозволяє витримувати найгірші погодні умови!
            Після виготовлення, відбувається доставка будинку та його встановлення на ділянці.  Наявність фундаменту або його тип неважливий
         </p>
         <ModuleSwiper pathsToImages={paths} />

      </div >
   )
}

export default PlanPhotos;