import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="py-12 grid md:grid-cols-2 sm:grid-cols-1 w-full gap-10"
    >
      <div className="space-y-6 flex flex-col justify-center">
        <h1 className="text-7xl text-blue-dark-2 font-bold">
          O Inglês de Todos
        </h1>
        <p className="text-black/60 text-lg">
          Nosso curso é para pessoas de todas as idades que desejam aprender,
          aperfeiçoar ou desenvolver suas habilidades na língua inglesa.
        </p>
        <Button className="bg-red rounded-2xl text-lg p-6 w-fit">
          Começar
        </Button>
      </div>
      <Image
        src="/assets/hero-image.svg"
        alt="hero"
        width={1000}
        height={1000}
        className="object-cover w-fit h-fit"
      />
    </section>
  );
};

export default HeroSection;
