import { FaGithub } from "react-icons/fa";
import HamburguerMenu from "./HamburguerMenu";

export default function Header() {
  return (
    <header className="flex items-center justify-between h-25 bg-black text-lime-50">
      <a
        href="https://github.com/snyted"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={30} className="text-white hover:text-indigo-600 transition-all duration-500 ml-10" />
      </a>
      <HamburguerMenu />
    </header>
  );
}
