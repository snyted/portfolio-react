import { useEffect, useRef } from "react";
import TagCloudOriginal from "TagCloud";
import ReactDOMServer from "react-dom/server";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";

// Tipagem mínima do TagCloud
interface TagCloudOptions {
  radius?: number;
  maxSpeed?: "slow" | "normal" | "fast";
  initSpeed?: "slow" | "normal" | "fast";
  direction?: number;
  keep?: boolean;
  useHTML?: boolean;
}

type TagCloudFn = (
  container: HTMLElement,
  texts: (string | HTMLElement)[],
  options?: TagCloudOptions
) => { destroy: () => void };

const TagCloud = TagCloudOriginal as unknown as TagCloudFn;

export default function SphereTagCloud() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = window.innerWidth;
    let radius = 180;
    let iconSize = 40;

    if (width >= 768) {
      radius = 330;
      iconSize = 60;
    }
    const icons = [
      { Icon: FaReact, color: "hover:text-cyan-400" },
      { Icon: FaHtml5, color: "hover:text-orange-500" },
      { Icon: FaCss3, color: "hover:text-blue-500" },
      { Icon: FaJs, color: "hover:text-yellow-400" },
      { Icon: FaGitAlt, color: "hover:text-red-500" },
      { Icon: FaGithub, color: "hover:text-black" },
      { Icon: FaFigma, color: "hover:text-neutral-700" },
      { Icon: VscVscode, color: "hover:text-blue-400" },
      { Icon: SiTypescript, color: "hover:text-blue-600" },
      { Icon: TbApi, color: "hover:text-sky-400" },
      { Icon: IoLogoFirebase, color: "hover:text-orange-600" },
    ];

    const texts = icons.map(({ Icon, color }) =>
      ReactDOMServer.renderToString(
        <div
          className={`icon-cloud text-white transition-colors duration-300 ${color}`}
        >
          <Icon size={iconSize} />
        </div>
      )
    );

    const instance = TagCloud(containerRef.current, texts, {
      radius,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
      useHTML: true,
    });

    return () => instance.destroy();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-[80vw] h-[80vw] max-w-[700px] max-h-[700px] flex justify-center items-center mt-10 md:mt-0"
    />
  );
}
