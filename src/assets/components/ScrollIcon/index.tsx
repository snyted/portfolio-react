import Lottie from "lottie-react";
import scrollAnimation from "./scrollIcon.json"; // arquivo JSON da animação

export default function ScrollIcon() {
  return (
    <div className="w-20 h-20 text-white">
      <Lottie animationData={scrollAnimation} loop={true} />
    </div>
  );
}