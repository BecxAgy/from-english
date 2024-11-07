import React from "react";
import { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="flex gap-4">
      <div className="bg-red h-fit text-white rounded-3xl p-4">
        <Icon className="md:text-5xl text-[2rem]" />
      </div>
      <div className="sm:my-auto">
        <p className="text-xl md:text-2xl">{title}</p>
        <span className="md:text-lg text-sm text-black/60">{description}</span>
      </div>
    </div>
  );
};

export default FeatureCard;
