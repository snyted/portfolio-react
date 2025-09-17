import { motion, useMotionValue } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import React from "react";

interface ProjectCardProps {
  title: string;
  text: string;
  projectImg: string;
  urlDoProjeto?: string;
  toolsUsed: React.ElementType[];
}

export default function ProjectCard({
  title,
  text,
  toolsUsed,
  projectImg,
  urlDoProjeto,
}: ProjectCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateY.set(((x - centerX) / centerX) * 10);
    rotateX.set(-((y - centerY) / centerY) * 10);
    scale.set(1.05);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      className="bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-grey-200 relative max-w-xl overflow-hidden bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat bg-opacity-10 p-5 m-3 shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms] flex flex-col rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-neutral-500"
      style={{ rotateX, rotateY, scale, perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="mb-4 inline-flex items-center justify-between rounded-md p-2 shadow-lg"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 5, // ajuste a velocidade
          ease: "linear",
        }}
      />
      <div className="flex flex-col gap-4">
        <div className="flex rounded-t-3xl w-full h-50 bg-gradient-to-r from-indigo-950 via-indigo-700 to-indigo-900 backdrop-filter bg-clip-padding">
          <img
            src={projectImg}
            alt={title}
            className="object-cover self-end h-5/6 w-full"
          />
        </div>

        <h3 className="text-xl text-left font-bold">{title}</h3>
        <p className="text-sm text-gray-200 text-left mb-3 line-clamp-2">
          {text}
        </p>

        <div className="flex gap-3">
          {toolsUsed.map((Tool, index) => (
            <Tool
              key={index}
              className="text-white text-2xl hover:text-blue-400 transition-colors duration-300"
            />
          ))}
          {urlDoProjeto && (
            <a
              className="ml-auto"
              href={urlDoProjeto}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
