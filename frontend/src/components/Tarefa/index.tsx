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

  const handleSubmitEditTask: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editarTarefa({
      id: tarefa.id,
      titulo: editarValorTarefa,
      prioridade: editarPrioridadeTarefa,
      status: tarefa.status,
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

  return (
    <tr key={tarefa.id}>
      <td className="w-full">{tarefa.titulo}</td>
      <td>{tarefa.prioridade}</td>
      <td className="flex gap-5">
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          cursor="pointer"
          className="text-blue-500"
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
          className="text-red-500"
          size={25}
        />
        <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
          <h3 className="text-lg">Certeza man?</h3>
          <div className="modal-action">
            <button className="btn" onClick={() => handleDeleteTask(tarefa.id)}>
              Sim
            </button>
          </div>
        </Modal>
        <FaCheck cursor="pointer" className="text-green-500" size={25} />
      </td>
    </tr>
  );
}
