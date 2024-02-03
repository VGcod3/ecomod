import Image from "next/image";

const PlanPhotos = () => {

   const paths = ['/PlanPhotos/plan-1.png', '/PlanPhotos/plan-2.png', '/PlanPhotos/plan-3.png', '/PlanPhotos/plan-4.png', '/PlanPhotos/plan-5.png', '/PlanPhotos/plan-6.png']

   return (
      <div className="flex flex-col min-h-screen w-full align-middle mt-20 justify-center relative gap-8">
         <h1 className=" text-neutral-100 w-full text-center text-4xl font-medium">Фото планування</h1>

         <div className="grid grid-cols-2 md:grid-cols-3 mx-auto gap-4 p-4">
            {
               paths.map(imgPath => (
                  <Image src={imgPath} width={300} height={300} alt="Plan image" className="col-span-1 rounded" />
               ))
            }
         </div>

      </div >
   )
}

export default PlanPhotos;