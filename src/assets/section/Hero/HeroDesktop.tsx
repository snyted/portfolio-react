import ScrollIcon from "../../components/ScrollIcon";
export const HeroDesktop = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-black flex flex-col justify-center items-center gap-15 -mb-20">
      <h1 className="text-7xl font-bold">Innovate. Design. Build.</h1>
      <p className="text-justify w-2/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At porro ad
        neque dolor sint provident, error harum minima quae amet placeat
        distinctio et ipsum dignissimos ut, rerum id sapiente quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, pariatur. Quidem itaque repellat modi similique nobis ipsa reprehenderit reiciendis, sed facilis consectetur amet, officia veritatis eveniet hic ex iste accusantium?
      </p>

      <button className="buttonEffect">
        <span> </span>
        <span> </span>
        <span> </span>
        <span> </span>
        Conheça meus projetos
      </button>
        <ScrollIcon />
    </div>
  );
};
