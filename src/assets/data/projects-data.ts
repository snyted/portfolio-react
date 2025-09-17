import { FaReact, FaHtml5, FaCss3, FaJs, FaFigma } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";

import TodoList from "../../img/todo-list.png";
import Pokedex from "../../img/pokedex.png";
import MemoryGame from "../../img/memory-game.png";

export const projectsData = [
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
  },
  {
    title: "Pokedex",
    text: "Pesquise e favorite seus pokemons nessa pokedex online!",
    toolsUsed: [FaReact, SiTypescript, VscVscode],
    projectImg: Pokedex,
  },
  {
    title: "Portfolio",
    text: "Breve descrição do projeto mostrando o que ele faz e qual tecnologia foi usada.",
    toolsUsed: [FaReact, SiTypescript, VscVscode],
    projectImg: TodoList,
  },
  {
    title: "Portfolio",
    text: "Breve descrição do projeto mostrando o que ele faz e qual tecnologia foi usada.",
    toolsUsed: [FaReact, SiTypescript, VscVscode],
    projectImg: TodoList,
  },
  {
    title: "Portfolio",
    text: "Breve descrição do projeto mostrando o que ele faz e qual tecnologia foi usada.",
    toolsUsed: [FaReact, SiTypescript, VscVscode],
    projectImg: TodoList,
  },
];
