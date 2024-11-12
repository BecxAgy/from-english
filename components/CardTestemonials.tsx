import Image from "next/image";
import React from "react";

const CardTestemonials = ({
  variant,
  img,
  name,
  role,
  avaliation,
}: {
  variant: string;
  img: string;
  name: string;
  role: string;
  avaliation: string;
}) => {
  const isPrimary = variant === "primary";

  return (
    <div
      className={`rounded-3xl md:w-[400px] md:min-w-[400px] w-sm ${
        isPrimary ? "bg-blue-dark" : "bg-[#F8F9FF]"
      }`}
    >
      <div className="flex flex-col p-8">
        <div className="flex gap-4">
          <Image
            src={img}
            alt="face"
            width={100}
            height={100}
            className="rounded-full w-14 h-14"
          />
          <div>
            <h3
              className={`font-medium text-lg whitespace-nowrap ${
                isPrimary ? "text-white" : "text-black"
              }`}
            >
              {name}
            </h3>
            <span
              className={`text-sm ${isPrimary ? "text-white" : "text-black"}`}
            >
              {role}
            </span>
          </div>
        </div>

        <p
          className={`mt-4 font-light text-sm ${
            isPrimary ? "text-white/80" : "text-black/80"
          }`}
        >
          {avaliation}
        </p>
      </div>
    </div>
  );
};

export default CardTestemonials;
