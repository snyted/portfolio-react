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
        <FaGithub size={30} className="text-purple-700 inline-block ml-1" />
        <span>/snyted</span>
      </a>
      <HamburguerMenu />
    </header>
  );
}
