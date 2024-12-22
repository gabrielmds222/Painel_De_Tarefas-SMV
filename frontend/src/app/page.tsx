import { buscaTodasAsTarefas } from "@/api/api";
import BtnAdicionaTarefa from "@/components/BtnAdicionaTarefa";
import Tabela from "@/components/Tabela";

export default async function Home() {
  const tarefas = await buscaTodasAsTarefas();
  console.log(tarefas);

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Painel de Tarefas</h1>
        <BtnAdicionaTarefa />
      </div>
      <Tabela tarefas={tarefas} />
    </main>
  );
}
