import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import FeatureCard from "../FeatureCard";
import { TbDeviceGamepad2, TbTargetArrow } from "react-icons/tb";
import { FaChess } from "react-icons/fa";

const FeatureMetodologySection = () => {
  return (
    <section
      id="about-us"
      className="py-24 grid md:grid-cols-2 sm:grid-cols-1 w-full gap-10 items-center"
    >
      <div className="space-y-6 flex flex-col justify-center">
        <span className="text-lg font-bold  text-blue-dark uppercase">
          Metodologia
        </span>

        <h2
          className="text-6xl font-bold text-blue-dark-2
    "
        >
          Nosso Método
        </h2>

        <p className=" text-black/60 text-lg mt-8">
          As aulas são personalizadas, com foco no progresso contínuo e nos
          objetivos específicos de cada aluno, seja para crescimento
          profissional, preparação para intercâmbio ou desenvolvimento pessoal.
        </p>

        <Image
          src="/assets/dizzy-gaming.svg"
          alt="hero"
          width={1000}
          height={1000}
          className="object-cover w-fit h-fit"
        />
      </div>
      <div className="space-y-8">
        <FeatureCard
          icon={TbTargetArrow}
          title="Personalização"
          description="Nossas aulas são desenvolvidas para atender às necessidades de cada aluno."
        />
        <FeatureCard
          icon={TbDeviceGamepad2}
          title="Eficiência"
          description="We develop a customized marketing strategy that is based on your unique needs and goals."
        />
        <FeatureCard
          icon={FaChess}
          title="Flexibilidade"
          description="We develop a customized marketing strategy that is based on your unique needs and goals."
        />
      </div>
    </section>
  );
};

export default FeatureMetodologySection;
