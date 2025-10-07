import Title from "../../components/Title";
import Programming from "../../../img/Programming.json";
import Lottie from "lottie-react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { BiBookReader } from "react-icons/bi";
import { SiDialogflow } from "react-icons/si";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import { BsSearchHeart, BsTelephone } from "react-icons/bs";

export default function AboutMe() {
  const [copied, setCopied] = useState(false);
  const email = "joaofarias_16@hotmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="aboutme" className="flex flex-col items-center mt-30 m-5">
      <div className="flex flex-col items-center gap-5">
        <Title title="Sobre mim" />
        <p className="w-[70%] text-lg text-neutral-400 text-center">
          Olá novamente! Me chamo <span className="font-bold">João Vitor Farias</span>, tenho 24 anos e
          sou graduando em Análise e Desenvolvimento de Sistemas e também sou
          técnico em Desenvolvimento de Sistemas. Atualmente estudo diversas
          ferramentas do mercado, e faço projetos pessoais para aprimorar minhas
          habilidades e aprender novas tecnologias. Estou em busca da minha
          primeira oportunidade como desenvolvedor, e estou muito animado para
          começar essa nova jornada. O processo de aprendizado tem sido uma
          experiência incrível, e com tudo que venho aprendendo tenho certeza
          que posso contribuir muito para sua equipe.
        </p>
        <div className="flex gap-3 items-center ">
          <ul className="flex gap-2 flex-wrap"></ul>
        </div>

        <div className="flex w-full justify-evenly flex-wrap gap-2">
          <div className="border border-white/10 hover:border-white hover:scale-[1.01] transition-all duration-700 p-5 rounded-xl flex flex-col items-center gap-2 min-w-[200px]">
            <h2 className="font-bold text-2xl">Soft Skills</h2>
            <ul className="space-y-1">
              <li className="bg-red-400 rounded-sm p-1 hover:scale-[1.05] flex items-center gap-1">
                <GrGroup /> Trabalho em equipe
              </li>
              <li className="bg-yellow-500 rounded-sm p-1 hover:scale-[1.05] flex items-center gap-1">
                <BsSearchHeart /> Curiosidade
              </li>
              <li className="bg-sky-600 rounded-sm p-1 hover:scale-[1.05] flex items-center gap-1">
                <BiBookReader /> Aprendo com facilidade
              </li>
              <li className="bg-green-600 rounded-sm p-1 hover:scale-[1.05] flex items-center gap-1">
                <SiDialogflow /> Boa comunicação
              </li>
            </ul>
          </div>

          <div className="border border-white/10 hover:border-white hover:scale-[1.01] transition-all duration-700 p-5 rounded-xl flex flex-col items-center gap-2 min-w-[200px]">
            <h2 className="mx-auto font-bold text-2xl">Contato</h2>
            <div className="my-auto">
              <p className="flex items-center gap-1">
                <MdEmail /> Email: joaofarias_16@hotmail.com
              </p>
              <p className="flex items-center gap-1">
                <BsTelephone /> Celular: +55 48 99199-3025
              </p>
              <p className="flex items-center gap-1">
                <FaLinkedin /> Linkedin:{" "}
                <a href="https://www.linkedin.com/in/snyted">
                  https://www.linkedin.com/in/snyted
                </a>
              </p>
            </div>
            <button
              onClick={handleCopy}
              className="relative flex items-center gap-3 px-6 py-3 rounded-xl
                 bg-indigo-600 text-white font-semibold
                 shadow-[0_0_15px_rgba(99,102,241,0.5)]
                 hover:shadow-[0_0_25px_rgba(99,102,241,0.7)]
                 hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden"
            >
              <FaEnvelope
                className={`${
                  copied ? "opacity-0" : "opacity-100"
                } transition-opacity duration-300`}
              />
              <span
                className={`${
                  copied ? "opacity-0" : "opacity-100"
                } transition-opacity duration-300`}
              >
                Copiar email
              </span>
              <span
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    text-white font-semibold bg-indigo-600/80 px-4 py-1 rounded-lg
                    transition-all duration-300 w-full flex items-center justify-center gap-1
                    ${
                      copied
                        ? "opacity-100 -translate-y-4 bg-transparent"
                        : "opacity-0 translate-y-4"
                    }`}
              >
                Feito! <IoCheckmarkCircle size={18} />
              </span>
            </button>
          </div>
        </div>
        {copied ? (
          <p className="fixed bottom-10  bg-black/40 p-2 text-green-400 mt-2 z-999">
            Email copiado para sua área de transferencia.
          </p>
        ) : null}
      </div>

      <Lottie animationData={Programming} />
    </section>
  );
}
