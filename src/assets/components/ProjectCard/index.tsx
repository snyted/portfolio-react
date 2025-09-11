import { motion, useMotionValue } from "framer-motion";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

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
  urlDoProjeto
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
      className="relative md:w-100 w-80 p-6 rounded-xl shadow-lg cursor-pointer flex flex-col items-center gap-4 bg-black/70 backdrop-blur-md border border-white/10 overflow-hidden"
      style={{ rotateX, rotateY, scale, perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-30 blur-3xl"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear", delay: 2}}
      />

      <div className="relative flex flex-col gap-4">
        <div className="w-full h-full">
          <img src={projectImg} alt={title} className="bg-auto" />
        </div>
        <h3 className="text-xl text-left font-bold">{title}</h3>

        <p className="text-sm text-gray-200 text-left mb-3">{text}</p>

        <div className="flex gap-3">
          {toolsUsed.map((Tool, index) => (
            <Tool
              key={index}
              className="text-white text-2xl hover:text-blue-400 transition-colors duration-300"
            />
          ))}
          <a
            className="ml-auto"
            href={urlDoProjeto}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
