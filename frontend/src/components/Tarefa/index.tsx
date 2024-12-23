"use client";
import { ITarefa } from "@/types/tarefas";
import { FormEventHandler, useState } from "react";
import { FaCheck, FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import Modal from "../Modal";
import { useRouter } from "next/navigation";
import { editarTarefa } from "@/api/api";

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

  const handleSubmitEditTask: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editarTarefa({
      id: tarefa.id,
      titulo: editarValorTarefa,
    });
    setEditarValorTarefa("");
    setOpenModalEdit(false);
    router.refresh();
  };

  return (
    <tr key={tarefa.id}>
      <td className="w-full">{tarefa.titulo}</td>
      <td>Alta</td>
      <td className="flex gap-5">
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          cursor="pointer"
          className="text-blue-500"
          size={25}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTask}>
            <h3 className="font-bold text-lg">Editar Tarefa</h3>
            <input
              value={editarValorTarefa}
              onChange={(e) => setEditarValorTarefa(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <button className="btn" type="submit">
              Cadastrar
            </button>
          </form>
        </Modal>
        <FaRegTrashAlt cursor="pointer" className="text-red-500" size={25} />
        <FaCheck cursor="pointer" className="text-green-500" size={25} />
      </td>
    </tr>
  );
}
