const FeatureStartCard = () => {
  return (
    <section className="relative w-full flex justify-center py-20 rounded-3xl ">
      <div
        className="rounded-3xl p-12 py-20 overflow-hidden w-full bg-blue-800 max-w-8xl"
        style={{
          backgroundImage: "url('/assets/shapes.svg')",
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 100%",
        }}
      >
        <div className="relative z-10 text-white">
          <div className="md:flex md:flex-row sm:flex sm:flex-col justify-between">
            <h2 className="md:text-5xl text-4xl  mb-4">Eleve Seu Inglês</h2>
            <div className="space-y-6">
              <p className="text-lg max-w-sm">
                Agende uma aula experimental gratuita e descubra como podemos
                ajudar você a alcançar seus objetivos.
              </p>
              <button className="bg-white text-blue-700 font-semibold py-2 px-6 rounded-full text-lg hover:bg-gray-200 transition-colors">
                Começar!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureStartCard;
