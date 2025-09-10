import { FaReact, FaHtml5, FaCss3, FaJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { VscVscode } from "react-icons/vsc";
import { SiTypescript } from "react-icons/si";

import HabilitieCard from "../../components/HabilitiesCards"; 

const Habilities = () => {
    return (
      <section className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Habilidades</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          {/* Passamos a cor de preenchimento (background) */}
          <HabilitieCard icon={FaHtml5} text="HTML5" fillColor="bg-orange-600" />
          <HabilitieCard icon={FaCss3} text="CSS3" fillColor="bg-blue-600" />
          <HabilitieCard icon={FaReact} text="React" fillColor="bg-blue-400" />
          <HabilitieCard icon={FaJs} text="JavaScript" fillColor="bg-amber-400" />
          <HabilitieCard icon={SiTypescript} text="TypeScript" fillColor="bg-sky-600" />
          <HabilitieCard icon={FaGitAlt} text="Git" fillColor="bg-orange-600" />
          <HabilitieCard icon={FaGithub} text="GitHub" fillColor="bg-neutral-900" />
          <HabilitieCard icon={GiGears} text="API Integration" fillColor="bg-neutral-900" />
          <HabilitieCard icon={VscVscode} text="VSCODE" fillColor="bg-sky-700" />
        </div>
      </section>
    );
  };
  
  export default Habilities;