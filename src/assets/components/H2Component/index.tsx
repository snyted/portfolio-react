interface H2ComponentProps {
  title?: string;
  titleEffect: string;
  text?: string;
}

import { motion } from "framer-motion";

export default function H2Component({
  title,
  titleEffect,
  text,
}: H2ComponentProps) {
  return (
    <>
      <h2 className="text-2xl font-inter-custom">
        {title}
        <motion.div
          className="text-transparent text-4xl bg-clip-text font-bold bg-gradient-to-l from-purple-600 via-blue-400 to-indigo-700"
          style={{
            backgroundSize: "300% 100%",
          }}
          animate={{ backgroundPositionX: ["0%", "100%"] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {titleEffect}
        </motion.div>
      </h2>
      <p>{text}</p>
    </>
  );
}
