import planetImg from "./assets/planet.svg";

export function App() {
  return (
    <div className="flex flex-row items-center justify-center h-screen max-lg:flex-col max-lg:items-start">
      <div className="flex flex-col w-[25%] gap-14 max-lg:w-full max-lg:px-8">
        <div>
          <h1 className="mb-4">Ops, esta página não foi encontrada</h1>
          <p className="max-lg:w-[80%]">
            Parece que você se perdeu... Tente voltar para a página anterior ou
            acessar a home.
          </p>
        </div>
        <div className="flex flex-row gap-4 ">
          <button>Voltar</button>
          <button>Ir para Home</button>
        </div>
      </div>
      <img src={planetImg} alt="planet" />
    </div>
  );
}
