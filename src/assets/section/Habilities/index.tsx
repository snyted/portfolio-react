import { useEffect, useRef } from "react";
import TagCloud from "TagCloud";
import ReactDOMServer from "react-dom/server";
import H2Component from "../../components/H2Component";

import { FaReact, FaHtml5, FaCss3, FaJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Habilities() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const icons = [
      { icon: <FaReact size={40} />, hover: "hover:text-cyan-400" },
      { icon: <FaHtml5 size={40} />, hover: "hover:text-orange-500" },
      { icon: <FaCss3 size={40} />, hover: "hover:text-blue-500" },
      { icon: <FaJs size={40} />, hover: "hover:text-yellow-400" },
      { icon: <FaGitAlt size={40} />, hover: "hover:text-red-500" },
      { icon: <FaGithub size={40} />, hover: "hover:text-black" },
      { icon: <VscVscode size={40} />, hover: "hover:text-blue-400" },
      { icon: <SiTypescript size={40} />, hover: "hover:text-blue-600" },
    ];

    const texts = icons.map(({ icon, hover }) =>
      ReactDOMServer.renderToString(
        <div className={`icon-cloud text-white transition-colors duration-300 ${hover}`}>
          {icon}
        </div>
      )
    );

    const instance = TagCloud(containerRef.current, texts, {
      radius: 180,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
      useHTML: true,
    });

    return () => instance.destroy();
  }, []);

  return (
    <section className="flex justify-center flex-col items-center h-screen">
      <H2Component title="Minhas " titleEffect="Habilidades"/>
      <div
        ref={containerRef}
        className="w-[80vw] h-[80vw] max-w-[500px] max-h-[500px] flex justify-center items-center mt-10 md:mt-0"
      />
    </section>
  );
}
