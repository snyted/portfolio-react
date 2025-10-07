import Lottie from "lottie-react";
import Title from "../../components/Title";
import Solution from "../../../img/solutions.json";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex justify-center flex-col items-center rounded-lg p-4 gap-10"
    >
      <Title
        title="Vamos conversar"
        text="Que tal transformar sua ideia em realidade? Mande uma mensagem!"
      />
      <div className=" flex items-center justify-center border-t border-l  border-white/60 p-2 rounded-lg">
        <form action="submit" className="flex flex-col p-2">
          <input
            type="text"
            placeholder="Seu nome"
            className="p-2 m-2 rounded-md"
          />
          <input
            type="email"
            placeholder="Seu email"
            className="p-2 m-2 rounded-md "
          />
          <textarea
            placeholder="Sua mensagem"
            className="p-2 m-2 rounded-md"
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md m-2"
          >
            Enviar
          </button>
        </form>
        <Lottie animationData={Solution} className="w-50" />
      </div>
    </section>
  );
}
