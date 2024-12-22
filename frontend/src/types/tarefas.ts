export interface ITarefa {
  id: string;
  titulo: string;
  prioridade: "Urgente" | "Alta" | "Média" | "Baixa";
  status: boolean;
}
