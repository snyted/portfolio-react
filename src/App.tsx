import Header from "./assets/components/Header";
import HeroSection from "./assets/section/HeroSection";
import BubbleEffect from "./assets/ui/BubblePurpleEffect";
import Habilities from "./assets/section/Habilities";
import Projects from "./assets/section/Projects";

function App() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-purple-800 via-indigo-900 to-black overflow-hidden font-roboto-custom z-0 text-white flex flex-col">
      <BubbleEffect />
      <Header />
      <HeroSection />
      <Habilities />
      <Projects />
    </main>
  );
}

export default App;
