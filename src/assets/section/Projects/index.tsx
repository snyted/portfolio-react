import React, { useRef, useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState<boolean>(true);
  const [isAtEnd, setIsAtEnd] = useState<boolean>(false);

  // Monitora a rolagem para atualizar o estado das setas
  const handleScroll = (): void => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(Math.ceil(scrollLeft + clientWidth) >= scrollWidth);
    }
  };

  // Funções para rolar o container
  const scroll = (direction: 'left' | 'right'): void => {
    if (scrollRef.current) {
      const cardWidth = 320; // Largura do card + gap
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  
  // Efeito inicial para verificar o estado das setas na primeira renderização
  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <section className="container mx-auto p-8 relative">
      <h2 className="text-3xl font-bold mb-8 text-white">Meus Projetos</h2>
      
      {/* Botão de navegação para a esquerda */}
      <button
        onClick={() => scroll('left')}
        disabled={isAtStart}
        className={`absolute -left-2 sm:left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-neutral-800 text-white z-10 
          ${isAtStart ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-700'}`}
      >
        <FaChevronLeft />
      </button>

      {/* O container da rolagem horizontal */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto space-x-8 pb-4 hide-scrollbar"
      >
        <ProjectCard title="Projeto 1" description="Descrição do projeto 1." />
        <ProjectCard title="Projeto 2" description="Descrição do projeto 2." />
        <ProjectCard title="Projeto 3" description="Descrição do projeto 3." />
        <ProjectCard title="Projeto 4" description="Descrição do projeto 4." />
        <ProjectCard title="Projeto 5" description="Descrição do projeto 5." />
        <ProjectCard title="Projeto 6" description="Descrição do projeto 6." />
        <ProjectCard title="Projeto 7" description="Descrição do projeto 7." />
      </div>

      {/* Botão de navegação para a direita */}
      <button
        onClick={() => scroll('right')}
        disabled={isAtEnd}
        className={`absolute -right-2 sm:right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-neutral-800 text-white z-10 
          ${isAtEnd ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-700'}`}
      >
        <FaChevronRight />
      </button>

    </section>
  );
};

export default ProjectsSection;