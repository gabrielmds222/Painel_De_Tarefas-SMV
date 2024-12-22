import { ITarefa } from "@/types/tarefas";

interface TarefaProps {
  tarefa: ITarefa;
}
export default function Tarefa({ tarefa }: TarefaProps) {
  return (
    <tr key={tarefa.id}>
      <td>{tarefa.titulo}</td>
      <td>{tarefa.prioridade}</td>
    </tr>
  );
}
