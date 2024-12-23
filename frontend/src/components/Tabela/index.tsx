import { ITarefa } from "@/types/tarefas";
import Tarefa from "../Tarefa";

interface TabelaProps {
  tarefas: ITarefa[];
}

export default function Tabela({ tarefas }: TabelaProps) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Prioridade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {tarefas
            .sort((a, b) => {
              const prioridades = ["Urgente", "Alta", "Média", "Baixa"];
              return (
                prioridades.indexOf(a.prioridade) -
                prioridades.indexOf(b.prioridade)
              );
            })
            .map((tarefa) => (
              <Tarefa key={tarefa.id} tarefa={tarefa} />
            ))}
        </tbody>
      </table>
    </div>
  );
}
