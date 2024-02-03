
import ModuleSwiper from '@/components/ModuleSwiper'


const InnerPlanning = () => {

   const paths = ['/innerPlanning/img1.jpeg', '/innerPlanning/img2.jpeg', '/innerPlanning/img3.jpeg', '/innerPlanning/img4.jpeg', '/innerPlanning/img5.jpeg']

   return (
      <div className="flex flex-col min-h-screen w-full align-middle mt-20 justify-center relative">
         <h1 className=" text-neutral-100 w-full text-center text-4xl font-medium mb-10 lg:mb-28">Внутрішнє планування</h1>

         <ModuleSwiper pathsToImages={paths} />

      </div >
   )
}

export default InnerPlanning;