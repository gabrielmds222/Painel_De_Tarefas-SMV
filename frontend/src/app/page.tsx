import { buscaTodasAsTarefas } from "@/api/api";
import BtnAdicionaTarefa from "@/components/BtnAdicionaTarefa";
import Tabela from "@/components/Tabela";

export default async function Home() {
  const tarefas = await buscaTodasAsTarefas();
  console.log(tarefas);

  return (
    <>
      <header className="w-full px-6 py-4 flex items-center">
        <h1 className="text-xl font-bold mx-auto">Painel de Tarefas</h1>
      </header>

      <div className="max-w-5xl mx-auto mt-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <label>
              <input
                type="radio"
                name="priority-filter"
                value="alta"
                className="radio radio-primary"
              />
              <span className="ml-2">Alta</span>
            </label>
            <label>
              <input
                type="radio"
                name="priority-filter"
                value="media"
                className="radio radio-primary"
              />
              <span className="ml-2">Média</span>
            </label>
            <label>
              <input
                type="radio"
                name="priority-filter"
                value="baixa"
                className="radio radio-primary"
              />
              <span className="ml-2">Baixa</span>
            </label>
            <label>
              <input
                type="radio"
                name="priority-filter"
                value="todas"
                className="radio radio-primary"
              />
              <span className="ml-2">Todas</span>
            </label>
          </div>
          <BtnAdicionaTarefa />
        </div>
      </div>

      <main className="max-w-5xl mx-auto mt-4">
        <Tabela tarefas={tarefas} />
      </main>
    </>
  );
}
