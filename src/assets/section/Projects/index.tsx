import ProjectCard from "../../components/ProjectCard";
import H2Component from "../../components/H2Component";
import { FaReact, FaHtml5, FaCss3, FaJs, FaFigma } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import TodoList from "../../../../public/src/img/todo-list.png";

export default function Projects() {
  return (
    <section className="text-center flex flex-col items-center gap-8">
      <H2Component
        titleEffect="Projetos"
        text="Um pouco do que eu venho aprendendo."
      />

      <div className="grid md:grid-cols-2 gap-10 items-center justify-center">
        <ProjectCard
          title="ToDo List"
          text="Um gerenciador de tarefas para usar no seu dia-dia e se organizar melhor."
          toolsUsed={[FaHtml5, FaCss3, FaJs, FaFigma]}
          projectImg={TodoList}
        />
        <ProjectCard
          title="Portfolio"
          text="Breve descrição do projeto mostrando o que ele faz e qual tecnologia foi usada."
          toolsUsed={[FaReact, SiTypescript, VscVscode]}
          projectImg={TodoList} 
        />
        <ProjectCard
          title="Portfolio"
          text="Breve descrição do projeto mostrando o que ele faz e qual tecnologia foi usada."
          toolsUsed={[FaReact, SiTypescript, VscVscode]}
          projectImg={TodoList} 
        />
        <ProjectCard
          title="Portfolio"
          text="Breve descrição do projeto mostrando o que ele faz e qual tecnologia foi usada."
          toolsUsed={[FaReact, SiTypescript, VscVscode]}
          projectImg={TodoList} 
        />
         <ProjectCard
          title="Portfolio"
          text="Breve descrição do projeto mostrando o que ele faz e qual tecnologia foi usada."
          toolsUsed={[FaReact, SiTypescript, VscVscode]}
          projectImg={TodoList} 
        />
         <ProjectCard
          title="Portfolio"
          text="Breve descrição do projeto mostrando o que ele faz e qual tecnologia foi usada."
          toolsUsed={[FaReact, SiTypescript, VscVscode]}
          projectImg={TodoList} 
        />
      </div>
    </section>
  );
}
