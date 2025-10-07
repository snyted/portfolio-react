import { FaGithub } from "react-icons/fa6";
import ScrollIcon from "../../components/ScrollIcon";
import { FaLinkedin } from "react-icons/fa";
import Eu from "../../../img/eu.png";
export const HeroDesktop = () => {
  return (
    <section className=" w-full bg-gradient-to-b from-black flex flex-col items-center mb-20 gap-10">
      <div className="flex flex-col  xl:flex-row items-center justify-center gap-10 xl:gap-20 px-4 md:px-10 mx-10 xl:mt-30">
        {/* Texto */}
        <div className="text-center xl:text-left space-y-6">
          <h1 className="text-5xl xl:text-7xl font-bold">
            Olá, seja bem-vindo 👋
          </h1>
          <h2 className="text-4xl xl:text-6xl font-bold mt-4">
            Sou um <span className="text-indigo-500">Software Developer</span>
          </h2>
          <p className="mx-auto xl:mx-0 w-4/6 xl:w-2/3 text-lg xl:text-xl text-neutral-400">
            Com paixão por tecnologia e inovação, eu crio softwares e interfaces
            modernas que unem desempenho e uma experiência envolvente.
          </p>
          <div className="flex gap-2 text-2xl">
            <a
              href="https://github.com/snyted"
              target="_blank"
              className="cursor-pointer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/snyted"
              target="_blank"
              className="cursor-pointer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div
          className="relative w-60 md:w-72 aspect-square flex items-center justify-center"
          id="MyImgEffect"
        >
          <div className="absolute inset-0 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute inset-[5%] bg-indigo-500/40 rounded-full blur-2xl opacity-60"></div>
          <div className="absolute inset-[10%] bg-indigo-400/40 rounded-full blur-lg animate-[pulse_3s_ease-in-out_infinite]"></div>
          <img
            className="relative w-full h-full object-cover rounded-[100%] shadow-[0_0_30px_rgba(99,102,241,0.7)] hover:shadow-[0_0_45px_rgba(99,102,241,0.9)] hover:rounded-xl transition-all duration-800 ease-in-out -mt-10"
            src={Eu}
            alt="Imagem de um desenvolvedor de software"
          />
        </div>
      </div>

      <a className="buttonEffect" href="#projects">
        <span> </span>
        <span> </span>
        <span> </span>
        <span> </span>
        Conheça meus projetos
      </a>
      <ScrollIcon />
    </section>
  );
};
