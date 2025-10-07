import { FaGithub } from "react-icons/fa";
import HamburguerMenu from "./HamburguerMenu";

export default function Header() {
  return (
    <header className="flex items-center gap-3 h-25 bg-black text-lime-5">
      <a
        href="https://github.com/snyted"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub
          size={30}
          className="text-white hover:text-indigo-600 transition-all duration-500 ml-10"
        />
      </a>
      <p className="border border-red-600 p-1 rounded-xl text-red-600 font-bold hover:bg-red-600 hover:text-white transition-all duration-600">
        Site em desenvolvimento!
      </p>
      <HamburguerMenu />
    </header>
  );
}
