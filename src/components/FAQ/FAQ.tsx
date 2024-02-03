import React, { ReactElement, useState } from "react"

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';



type faqType = {
   title: string,
   description: string
}

const popular_questions: faqType[] = [
   {
      title: 'Чи можливий дизайн за моїм плануванням?',
      description: 'Ні, дизайн зберігається в основних деталях. Під час оформлення замовлення Ви можете скорегувати кольори, додати або забрати деякі дрібні елементи.'
   },
   {
      title: 'Модульні будинки підходять тільки для проживання на короткий термін? ',
      description: 'Ні, дизайн зберігається в основних деталях. Під час оформлення замовлення Ви можете скорегувати кольори, додати або забрати деякі дрібні елементи.'
   },
   {
      title: 'Будинок збирається прямо на ділянці? ',
      description: 'Ні, дизайн зберігається в основних деталях. Під час оформлення замовлення Ви можете скорегувати кольори, додати або забрати деякі дрібні елементи.'
   },
   {
      title: 'Cкільки часу потрібно на виконання?',
      description: 'Ні, дизайн зберігається в основних деталях. Під час оформлення замовлення Ви можете скорегувати кольори, додати або забрати деякі дрібні елементи.'
   }
]

const AccordionItem = ({ children, value }: { children: ReactElement[], value: string }) => (
   <Accordion.Item
      className={`bg-neutral-700 rounded-2xl focus-within:border-2 border-my-cyan`}
      value={value}
   >
      {children}
   </Accordion.Item>
);

const AccordionTrigger = ({ heading }: { heading: string }) => (
   <Accordion.Header className="flex">
      <Accordion.Trigger
         className={`text-neutral-100  group flex p-8 flex-1 text-left justify-between px-5 text-2xl leading-none outline-none`}
      >
         {heading}
         <ChevronDownIcon
            className="w-10 h-10 text-my-cyan group-data-[state=open]:text-neutral-700 group-data-[state=open]:bg-my-cyan bg-neutral-700 p-2 rounded-full ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
            aria-hidden
         />
      </Accordion.Trigger>
   </Accordion.Header>
);

const AccordionContent = ({ description }: { description: string }) => (
   <Accordion.Content
      className={`font-light text-neutral-400 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp text-md h-32 px-6`}
   >
      <span className="h-full w-full flex align-middle items-center">
         {description}
      </span>
   </Accordion.Content>
);

const FAQ = () => {


   return (
      <div className="flex flex-col min-h-screen w-full align-middle mt-20 justify-center relative gap-8">
         <h1 className=" text-neutral-100 w-full text-center text-4xl font-medium">FAQ</h1>

         <Accordion.Root
            className=" w-full max-w-7xl mx-auto flex flex-col gap-4 p-4"
            type="single"
            defaultValue="0"
            collapsible
         >
            {
               popular_questions.map((q, i) => (
                  <AccordionItem value={i + ''}>
                     <AccordionTrigger heading={q.title} />
                     <AccordionContent description={q.description} />
                  </AccordionItem>
               ))
            }

         </Accordion.Root>

      </div >
   )
}

export default FAQ;