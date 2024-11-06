import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const AboutSection = () => {
  return (
    <section
      id="about-us"
      className="py-24 grid md:grid-cols-2 sm:grid-cols-1 w-full gap-10"
    >
      <div className="space-y-6 flex flex-col justify-center">
        <span className="text-lg font-bold  text-blue-dark uppercase">
          Sobre nós
        </span>

        <h2
          className="text-6xl font-bold text-blue-dark-2
        "
        >
          Quem Somos?
        </h2>

        <p className=" text-black/60 text-lg mt-8">
          O Inglês de Todos é uma plataforma de ensino de inglês online que
          oferece cursos para pessoas de todas as idades que desejam aprender,
          aperfeiçoar ou desenvolver suas habilidades na língua inglesa.
        </p>
        <Button className="bg-blue-dark rounded-2xl text-lg p-6 w-fit">
          Saiba Mais
        </Button>
      </div>
      <Image
        src="/assets/avatar-star.svg"
        alt="hero"
        width={1000}
        height={1000}
        className="object-cover w-fit h-fit"
      />
    </section>
  );
};

export default AboutSection;
