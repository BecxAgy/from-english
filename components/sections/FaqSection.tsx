import React from "react";
import AccordionsFAQ from "../AccordionsFAQ";
import { Button } from "../ui/button";

const FaqSection = () => {
  return (
    <section
      id="faq"
      className="py-24 grid md:grid-cols-2 grid-cols-1 gap-10  justify-center items-center"
    >
      <AccordionsFAQ />
      <div className="space-y-6 flex flex-col justify-center">
        <span className="text-sm font-bold  text-blue-dark uppercase">FAQ</span>

        <h2
          className="md:text-5xl text-4xl font-bold text-blue-dark-2
    "
        >
          Restou alguma dúvida?
        </h2>

        <p className=" text-black/60 md:text-lg mt-8">
          Conte conosco para sanar suas dúvidas e usufruir de uma experiência de
          aprendizado incrível.
        </p>

        <button className="bg-blue-dark rounded-2xl text-sm px-4 py-3 text-white w-fit">
          Saiba Mais
        </button>
      </div>
    </section>
  );
};

export default FaqSection;
