import SkillsAndTools from "../../ui/SphereTagCloud";
import Title from "../../components/Title";

export default function Habilities() {
  return (
    <section
      id="habilities"
      className="flex justify-center flex-col items-center h-screen mt-10 mb-10"
    >
      <Title title="Habilidades" text="As ferramentas e tecnologias que uso."/>
      <SkillsAndTools />
    </section>
  );
}
