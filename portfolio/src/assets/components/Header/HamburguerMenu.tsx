import { useState } from "react";

const HamburguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="top-4 right-4 z-50 flex flex-col justify-around h-6 w-6 relative bg-transparent border-none cursor-pointer focus:outline-none"
      >
        <div
          className={`
            block h-0.5 w-6 ${isOpen ? 'bg-black' : 'bg-white'} transform transition-all duration-300 ease-in-out
            ${isOpen ? 'rotate-45 translate-y-2' : ''}
          `}
        ></div>
        <div
          className={`
            block h-0.5 w-6 ${isOpen ? 'bg-black' : 'bg-white'} transition-all duration-300 ease-in-out
            ${isOpen ? 'opacity-0' : ''}
          `}
        ></div>
        <div
          className={`
            block h-0.5 w-6 ${isOpen ? 'bg-black' : 'bg-white'} transform transition-all duration-300 ease-in-out
            ${isOpen ? '-rotate-45 -translate-y-2' : ''}
          `}
        ></div>
      </button>

      <nav
        className={`
          fixed top-0 right-0 h-full w-full bg-white transition-transform duration-500 ease-in-out z-40
          ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:w-1/5 lg:h-full
        `}
      >
        <div className="flex flex-col items-center justify-center h-full text-lg">
          <a href="#" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-gray-600 my-4">
            Início
          </a>
          <a href="#" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-gray-600 my-4">
            Tecnologias
          </a>
          <a href="#" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-gray-600 my-4">
            Projetos
          </a>
          <a href="#" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-gray-600 my-4">
            Sobre
          </a>
          <a href="#" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-gray-600 my-4">
            Contato
          </a>
        </div>
      </nav>
    </div>
  );
};

export default HamburguerMenu;
