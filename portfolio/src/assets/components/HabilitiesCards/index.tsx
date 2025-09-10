import { useState } from "react";

interface HabilitieCardProps {
  icon: React.ElementType;
  text: string;
  className?: string;
  fillColor?: string; 
}

const HabilitieCard = ({
  icon: Icon,
  text,
  className = "",
  fillColor = "bg-blue-500",
}: HabilitieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardHoverClasses = isHovered
    ? "transform scale-105"
    : "transform scale-100";

  const defaultClasses =
    "relative flex flex-col items-center justify-center p-6 text-center text-white w-full md:h-48 backdrop-blur-md rounded-xl border border-white/30 shadow-xl cursor-pointer overflow-hidden";

  return (
    <div
      className={`${defaultClasses} ${className} ${cardHoverClasses}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div
        className={`
          absolute bottom-0 left-0 w-full 
          ${fillColor} 
           transition-all duration-500 ease-in-out
          ${isHovered ? "h-full" : "h-0"}
          -z-10
        `}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <div
          className={`mb-2 transition-transform duration-1000 transform ${
            isHovered ? "scale-120" : "scale-100"
          }`}
        >
          <Icon size="60" className="text-white" />
        </div>
        <h3 className="text-xl font-semibold">{text}</h3>
      </div>
    </div>
  );
};

export default HabilitieCard;
