
import ModuleSwiper from '@/components/ModuleSwiper'


const InnerPlanning = () => {

   const paths = ['/innerPlanning/img1.jpeg', '/innerPlanning/img2.jpeg', '/innerPlanning/img3.jpeg', '/innerPlanning/img4.jpeg', '/innerPlanning/img5.jpeg']

   return (
      <div className="flex flex-col min-h-screen w-full align-middle mt-20 justify-center relative gap-8">
         <h1 className=" text-neutral-100 w-full text-center text-4xl font-medium">Внутрішнє планування</h1>
         <p className='max-w-5xl mx-auto w-full text-my-label text-center p-4'>
            Основне, що створює затишну атмосферу в домі - його інтер’єр. Наші будинки виконані в стилі мінімалізму та створені для максимального комфорту.
         </p>
         <ModuleSwiper pathsToImages={paths} />
      </div >
   )
}

export default InnerPlanning;