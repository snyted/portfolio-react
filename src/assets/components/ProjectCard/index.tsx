interface ProjectCardProps {
  title: string;
  text: string;
  className?: string;
  toolsUsed: React.ElementType;
  projectImg: React.ElementType;
}

export default function ProjectCard({
  title,
  text,
  toolsUsed: ToolsUsed,
  projectImg: ProjectImg,
}: ProjectCardProps) {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        <div>
          <ToolsUsed />
        </div>
      </div>
      <div>
        <ProjectImg />
      </div>
    </div>
  );
}
