import Title from "../../components/Title";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex justify-center flex-col items-center  mt-10 mb-10 h-screen"
    >
     <Title title="Vamos conversar" text="Que tal transformar sua ideia em realidade"/>
     <div className="">
        <form action="submit" className="">
            <input type="text" placeholder="Seu nome" className="p-2 m-2 rounded-md text-black"/>
            <input type="email" placeholder="Seu email" className="p-2 m-2 rounded-md text-black"/>
            <textarea placeholder="Sua mensagem" className="p-2 m-2 rounded-md text-black"></textarea>
            <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md m-2">Enviar</button>
        </form>
     </div>
    </section>
  );
}