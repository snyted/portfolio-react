import Eu from "../../../img/eu.png";

const HeroMobile = () => {
  return (
    <div className="md:hidden flex items-center directi flex-col rounded-b-2xl w-full h-[500px] hero-gradient">
      <img
        src={Eu}
        alt="Fotografia de João Vitor Farias"
        className="w-35 rounded-full mt-10"
      />
      <h1 className="mt-2 text-4xl font-bold font-inter-custom">
        João Vitor Farias
      </h1>
      <p className="text-center p-10 pt-6 font-roboto-custom">
        Sou um desenvolvedor apaixonado por criar soluções digitais inovadoras e
        funcionais. Atualmente, sou Técnico em Desenvolvimento de Sistemas e
        faço graduação em Análise e Desenvolvimento de Sistemas (ADS)
      </p>
      <button
  className="w-[150px] h-12 px-3
             flex items-center justify-center
             font-roboto-custom font-bold text-lg text-white
             bg-gradient-to-r from-purple-600 to-indigo-600
             rounded-full border-0
             shadow-lg
             active:bg-purple-800 active:shadow-none transition-all duration-100"
>
  Contato
</button>
    </div>
  );
};

export default HeroMobile;
