import ProjectCard from "../../components/ProjectCard";
import Title from "../../components/Title";
import { projectsData } from "../../data/projects-data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="text-center flex flex-col items-center gap-8"
    >
      <Title
        title="Projetos"
        text="Um pouco do que eu venho aprendendo."
      />

      <div className="grid md:grid-cols-2 gap-10 items-center justify-center">
        {projectsData.map((project, index: number) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            toolsUsed={project.toolsUsed}
            projectImg={project.projectImg}
            urlDoProjeto={project.urlDoProjeto}
          />
        ))}
      </div>
    </section>
  );
}
