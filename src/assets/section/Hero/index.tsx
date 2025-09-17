import HeroMobile from "./HeroMobile";
import { HeroDesktop } from "./HeroDesktop";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 720);

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 720);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <section>{isDesktop ? <HeroDesktop /> : <HeroMobile />}</section>;
}
