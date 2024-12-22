import { ITarefa } from "@/types/tarefas";
import Tarefa from "../Tarefa";

interface TabelaProps {
  tarefas: ITarefa[];
}

export default function Tabela({ tarefas }: TabelaProps) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Título</th>
            <th>Prioridade</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa) => (
            <Tarefa key={tarefa.id} tarefa={tarefa} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
