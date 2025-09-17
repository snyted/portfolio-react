import { FaReact, FaHtml5, FaCss3, FaJs, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";

import TodoList from "../../img/todo-list.png";
import Pokedex from "../../img/pokedex.png";
import MemoryGame from "../../img/memory-game.png";
import Portfolio from "../../img/portfolio-react.png";
import { TbBrandFramerMotion } from "react-icons/tb";

export const projectsData = [
  {
    title: "Portfolio",
    text: "O site onde você está! Aqui eu guardo os meus projetos e mostro um pouco sobre mim.",
    toolsUsed: [
      FaReact,
      SiTypescript,
      VscVscode,
      SiTailwindcss,
      TbBrandFramerMotion,
    ],
    projectImg: Portfolio,
    urlDoProjeto: "https://snyted.github.io/portfolio-react/",
  },
  {
    title: "ToDo List",
    text: "Um gerenciador de tarefas para usar no seu dia-dia e se organizar melhor.",
    toolsUsed: [FaHtml5, FaCss3, FaJs, FaFigma],
    projectImg: TodoList,
    urlDoProjeto: "https://snyted.github.io/todo-list/",
  },
  {
    title: "Jogo da Memoria",
    text: "Estimule sua memória nesse jogo envolvente que possui sistema de ranking com atualização em tempo real.",
    toolsUsed: [FaHtml5, FaCss3, FaJs, FaFigma, IoLogoFirebase],
    projectImg: MemoryGame,
    urlDoProjeto: "https://snyted.github.io/memory-game/",
  },
  {
    title: "Pokedex",
    text: "Pesquise e favorite seus pokemons nessa pokedex online!",
    toolsUsed: [FaReact, SiTypescript, VscVscode],
    projectImg: Pokedex,
    urlDoProjeto: "https://snyted.github.io/pokedex/",
  },
];
