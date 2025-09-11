import ProjectCard from "../../components/ProjectCard";
import H2Component from "../../components/H2Component";
import { FaHtml5 } from "react-icons/fa";

export default function Projects() {
  return (
    <section className="text-center flex flex-col items-center gap-4">
      <H2Component
        titleEffect="Projetos"
        text="Um pouco do que eu venho aprendendo"
      />

      <ProjectCard
        title="Exemplo"
        text="lorem-lorem-lorem-lorem-lorem-lorem-lorem-lorem-lorem-lorem-lorem-lorem-lorem-lorem-lorem-lorem-lorem-lorem-lorem-lorem-lorem-lorem-lorem-lorem-lorem-lorem-lorem-lorem-lorem-lorem-lorem-lorem-"
        toolsUsed={FaHtml5}
        projectImg={FaHtml5}
      />
    </section>
  );
}
