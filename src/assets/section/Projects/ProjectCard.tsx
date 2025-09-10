interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
  return (
    // 'flex-shrink-0' e 'w-80' são as classes mais importantes aqui
    <div className="flex-shrink-0 w-80 p-6 bg-neutral-800 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default ProjectCard;