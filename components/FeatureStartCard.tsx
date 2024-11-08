import React from "react";

const FeatureStartCard = () => {
  return (
    <section className="relative w-full flex justify-center py-20 rounded-3xl">
      <div
        className="  rounded-3xl p-12 py-20 overflow-hidden w-full bg-blue-800 max-w-8xl"
        style={{
          backgroundImage: "url('/assets/shapes.svg')",
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 100%",
          zIndex: 0,
          position: "absolute",
          left: 0,
        }}
      >
        <div className="relative z-10 sm:flex sm:flex-col md:flex md:flex-row md:justify-between items-center  text-white">
          {/* Text Section */}
          <div className="md:w-2/3">
            <h2 className="text-4xl font-semibold mb-4">Eleve Seu Inglês</h2>
            <p className="text-lg max-w-sm">
              Agende uma aula experimental gratuita e descubra como podemos
              ajudar você a alcançar seus objetivos.
            </p>
            <div className="mt-6 md:mt-0">
              <button className="bg-white text-blue-700 font-semibold py-2 px-6 rounded-full text-lg hover:bg-gray-200 transition-colors">
                Começar!
              </button>
            </div>
          </div>

          {/* Button Section */}
        </div>
      </div>
    </section>
  );
};

export default FeatureStartCard;
