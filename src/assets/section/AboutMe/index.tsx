import Title from "../../components/Title";
import Programming from "../../../img/Programming.json";
import Lottie from "lottie-react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BsSearchHeart, BsTelephone } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { BiBookReader } from "react-icons/bi";
import { SiDialogflow } from "react-icons/si";

export default function AboutMe() {
  return (
    <section id="aboutme" className="flex flex-col items-center mt-30 m-5">
      <div className="flex flex-col items-center gap-5">
        <Title title="Sobre mim" />
        <p className="w-[70%] text-lg text-neutral-400 text-center">
          Olá novamente! Me chamo{" "}
          <span className="font-bold">João Vitor Farias</span>, tenho 24 anos e
          sou graduando em Análise e Desenvolvimento de Sistemas e também sou
          técnico em Desenvolvimento de Sistemas. Atualmente estudo React e
          NodeJS, e faço projetos pessoais para aprimorar minhas habilidades,
          tem sido uma experiência incrível, e com tudo que venho aprendendo
          tenho certeza que posso contribuir muito para sua equipe.
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
          </div>
        </div>
      </div>

      <Lottie animationData={Programming} />
    </section>
  );
}
