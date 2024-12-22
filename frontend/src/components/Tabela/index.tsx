import { ITarefa } from "@/types/tarefas";

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
            <tr key={tarefa.id}>
              <td>{tarefa.titulo}</td>
              <td>{tarefa.prioridade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
