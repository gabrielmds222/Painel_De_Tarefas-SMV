import { AiOutlinePlusCircle } from "react-icons/ai";

export default function BtnAdicionaTarefa() {
  return (
    <div>
      <button className="btn btn-primary w-full">
        Adicionar Tarefa
        <AiOutlinePlusCircle className="ml-2" size={18} />
      </button>
    </div>
  );
}
