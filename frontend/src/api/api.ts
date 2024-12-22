import { ITarefa } from "@/types/tarefas";

const baseUrl = "http://localhost:3001";

export const buscaTodasAsTarefas = async (): Promise<ITarefa[]> => {
  const res = await fetch(`${baseUrl}/tarefas`);
  const tarefas = await res.json();
  return tarefas;
};
