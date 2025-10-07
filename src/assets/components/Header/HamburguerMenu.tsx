import { useState } from "react";

const HamburguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="top-9 right-4 z-50 flex flex-col justify-around h-6 w-6 mr-3 fixed bg-transparent border-none cursor-pointer focus:outline-none"
      >
        <div
          className={`
            block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out
            ${isOpen ? 'rotate-45 translate-y-2' : ''}
          `}
        ></div>
        <div
          className={`
            block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out
            ${isOpen ? 'opacity-0' : ''}
          `}
        ></div>
        <div
          className={`
            block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out
            ${isOpen ? '-rotate-45 -translate-y-2' : ''}
          `}
        ></div>
      </button>

      <nav
        className={`
          fixed top-0 right-0 w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 transition-transform duration-500 ease-in-out z-40
          ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:w-1/5 lg:h-full h-full border-white/10`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-5 text-2xl font-bold">
          <a href="#" onClick={() => setIsOpen(false)} className="">
            Início
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="">
            Projetos
          </a>
          <a href="#" onClick={() => setIsOpen(false)} className="">
            Sobre
          </a>
          <a href="#" onClick={() => setIsOpen(false)} className="">
            Contato
          </a>
        </div>
      </nav>
    </div>
  );
};

export default HamburguerMenu;
