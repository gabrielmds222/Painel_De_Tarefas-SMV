"use client";
import { ITarefa } from "@/types/tarefas";
import { FormEventHandler, useState } from "react";
import { FaCheck, FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import Modal from "../Modal";
import { useRouter } from "next/navigation";
import { deletarTarefa, editarTarefa } from "@/api/api";

interface TarefaProps {
  tarefa: ITarefa;
}

export default function Tarefa({ tarefa }: TarefaProps) {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
  const [editarValorTarefa, setEditarValorTarefa] = useState<string>(
    tarefa.titulo
  );
  const [editarPrioridadeTarefa, setEditarPrioridadeTarefa] = useState<
    ITarefa["prioridade"]
  >(tarefa.prioridade);
  const [status, setStatus] = useState<boolean>(tarefa.status);

  const handleSubmitEditTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await editarTarefa({
      id: tarefa.id,
      titulo: editarValorTarefa,
      prioridade: editarPrioridadeTarefa,
      status: status,
    });
    setEditarValorTarefa("");
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTask = async (id: string) => {
    await deletarTarefa(id);
    setOpenModalDeleted(false);
    router.refresh();
  };

  const toggleStatus = async () => {
    const novoStatus = !status;
    setStatus(novoStatus);
    try {
      await editarTarefa({
        id: tarefa.id,
        titulo: tarefa.titulo,
        prioridade: tarefa.prioridade,
        status: novoStatus,
      });
      router.refresh();
    } catch (error) {
      console.error("Erro ao atualizar status da tarefa:", error);
      setStatus(status);
    }
  };

  return (
    <tr key={tarefa.id}>
      <td className="w-full">
        <span className={tarefa.status ? "text-green-500 line-through" : ""}>
          {tarefa.titulo}
        </span>
      </td>
      <td>{tarefa.prioridade}</td>
      <td className="flex gap-5">
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          cursor="pointer"
          className={`${
            tarefa.status ? "text-gray-500 cursor-not-allowed" : "text-gray-500"
          } hover:text-blue-500`}
          size={25}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTask}>
            <h3 className="font-bold text-lg">Adicionar Tarefa</h3>
            <input
              value={editarValorTarefa}
              onChange={(e) => setEditarValorTarefa(e.target.value)}
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
              value={editarPrioridadeTarefa}
              onChange={(e) =>
                setEditarPrioridadeTarefa(
                  e.target.value as ITarefa["prioridade"]
                )
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

        <FaRegTrashAlt
          onClick={() => setOpenModalDeleted(true)}
          cursor="pointer"
          className="text-gray-500 hover:text-red-500"
          size={25}
        />
        <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
          <h3 className="text-lg">
            Tem certeza de que gostaria de apagar a tarefa?
          </h3>
          <div className="modal-action">
            <button className="btn" onClick={() => handleDeleteTask(tarefa.id)}>
              Sim
            </button>
          </div>
        </Modal>

        <button
          onClick={() => toggleStatus()}
          className={`${
            tarefa.status ? "bg-green-500 text-white" : "bg-gray-500 text-white"
          } hover:bg-red-500 px-4 py-2 rounded`}
        >
          {tarefa.status ? "Completo" : "Incompleto"}
        </button>
      </td>
    </tr>
  );
}
