import React, { ReactElement } from "react";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import AnimationWrapper from "../Animations/AnimationWrapper";
import { useTranslations } from "next-intl";

type faqType = {
  title: string;
  description: string;
};

const popular_questions: faqType[] = [
  {
    title: "Чи можливий дизайн за моїм плануванням?",
    description:
      "Ні, дизайн зберігається в основних деталях. Під час оформлення замовлення Ви можете скорегувати кольори, додати або забрати деякі дрібні елементи інтер'єру.",
  },
  {
    title:
      "Модульні будинки підходять тільки для проживання на короткий термін? ",
    description:
      "Ні, модульні будинки підходять для проживання на постійній основі. Вони мають всі необхідні комунікації, а також можуть бути обладнані системами автономного опалення та водопостачання.",
  },
  {
    title: "Будинок збирається прямо на ділянці? ",
    description:
      "Ні, будинок збирається на виробництві, потім доставляється на ділянку, а всі комунікації підключаються на місці.",
  },
  {
    title: "Cкільки часу потрібно на виконання?",
    description:
      "Від моменту підписання договору до введення в експлуатацію зазвичай проходить від 2 до 4 місяців. Цей термін включає в себе виробництво будинку, підготовку ділянки та монтаж.",
  },
];

const AccordionItem = ({
  children,
  value,
}: {
  children: ReactElement[];
  value: string;
}) => (
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
      className={`text-neutral-100  group flex p-8 flex-1 text-left items-center justify-between text-2xl leading-none outline-none`}
    >
      {heading}
      <ChevronDownIcon
        className="w-10 h-10 min-w-10 text-my-cyan group-data-[state=open]:text-neutral-700 group-data-[state=open]:bg-my-cyan bg-neutral-700 p-2 rounded-full ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
);

const AccordionContent = ({ description }: { description: string }) => (
  <Accordion.Content
    className={`font-light text-neutral-400 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp text-md h-32 px-8`}
  >
    <span className="h-full w-full flex align-middle items-center">
      {description}
    </span>
  </Accordion.Content>
);

const FAQ = () => {
  const t = useTranslations("faq");

  return (
    <div
      className="flex flex-col min-h-screen w-full align-middle mt-20 justify-center relative gap-8"
      id="faq"
    >
      <AnimationWrapper duration={0.2} animationType="slideUp" delay={0.2}>
        <h1 className=" text-neutral-100 w-full text-center text-4xl font-medium">
          FAQ
        </h1>
      </AnimationWrapper>

      <Accordion.Root
        className=" w-full max-w-7xl mx-auto flex flex-col gap-4 p-4"
        type="single"
        defaultValue="0"
        collapsible
      >
        {popular_questions.map((q, i) => (
          <AnimationWrapper
            key={i}
            duration={0.4}
            animationType="flipInX"
            delay={0.4}
          >
            <AccordionItem value={i + ""}>
              <AccordionTrigger heading={t(`list.${i}.title`)} />
              <AccordionContent description={t(`list.${i}.description`)} />
            </AccordionItem>
          </AnimationWrapper>
        ))}
      </Accordion.Root>
    </div>
  );
};

export default FAQ;
