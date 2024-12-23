"use client";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Modal from "../Modal";
import { FormEventHandler, useState } from "react";
import { adicionaTarefa } from "@/api/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { ITarefa } from "@/types/tarefas";

export default function BtnAdicionaTarefa() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [novaTarefaValor, setNovaTarefaValor] = useState<string>("");
  const [novaTarefaPrioridade, setNovaTarefaPrioridade] =
    useState<ITarefa["prioridade"]>("Baixa");

  const handleSubmitNewTask: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await adicionaTarefa({
      id: uuidv4(),
      titulo: novaTarefaValor,
      prioridade: novaTarefaPrioridade,
      status: false,
    });
    setNovaTarefaValor("");
    setNovaTarefaPrioridade("Baixa");
    setModalOpen(false);
    router.refresh();
  };
  return (
    <div>
      <button
        className="btn btn-primary w-full"
        onClick={() => setModalOpen(true)}
      >
        Adicionar Tarefa
        <AiOutlinePlusCircle className="ml-2" size={18} />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTask}>
          <h3 className="font-bold text-lg">Adicionar Tarefa</h3>
          <input
            value={novaTarefaValor}
            onChange={(e) => setNovaTarefaValor(e.target.value)}
            type="text"
            placeholder="Digite o título da tarefa"
            className="input input-bordered w-full"
          />
          <label
            htmlFor="prioridade-tarefa"
            className="block text-sm font-medium mb-2"
          >
            Prioridade
          </label>
          <select
            id="prioridade-tarefa"
            className="select select-bordered w-full"
            value={novaTarefaPrioridade}
            onChange={(e) =>
              setNovaTarefaPrioridade(e.target.value as ITarefa["prioridade"])
            }
            aria-label="Selecione a prioridade da tarefa"
          >
            <option disabled value="">
              Selecione a prioridade
            </option>
            <option value="Urgente">Urgente</option>
            <option value="Alta">Alta</option>
            <option value="Média">Média</option>
            <option value="Baixa">Baixa</option>
          </select>
          <button className="btn mt-4" type="submit">
            Cadastrar
          </button>
        </form>
      </Modal>
    </div>
  );
}
