import Header from "./assets/components/Header";
import HeroSection from "./assets/section/Hero";
import BubbleEffect from "./assets/ui/BubblePurpleEffect";
import Habilities from "./assets/section/Habilities";
import Projects from "./assets/section/Projects";
import AboutMe from "./assets/section/AboutMe";
import Contact from "./assets/section/Contact";

function App() {
  return (
    <main className="relative bg-gradient-to-br from-purple-800 via-indigo-900 to-black overflow-hidden font-roboto-custom z-0 text-white flex flex-col scroll-smooth">
      <BubbleEffect />
      <div>
        <Header />
        <HeroSection />
      </div>
      <Habilities />
      <Projects />
      <AboutMe />
      <Contact />
    </main>
  );
}

export default App;
