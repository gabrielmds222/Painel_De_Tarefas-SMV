import BtnAdicionaTarefa from "@/components/BtnAdicionaTarefa";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Painel de Tarefas</h1>
        <BtnAdicionaTarefa />
      </div>
    </main>
  );
}
