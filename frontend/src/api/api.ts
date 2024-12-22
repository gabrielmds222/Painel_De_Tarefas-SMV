import { ITarefa } from "@/types/tarefas";

const baseUrl = "http://localhost:3001";

export const buscaTodasAsTarefas = async (): Promise<ITarefa[]> => {
  const res = await fetch(`${baseUrl}/tarefas`, { cache: "no-store" });
  const tarefas = await res.json();
  return tarefas;
};

export const adicionaTarefa = async (tarefa: ITarefa): Promise<ITarefa> => {
  const res = await fetch(`${baseUrl}/tarefas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tarefa),
  });
  const novaTarefa = await res.json();
  return novaTarefa;
};
