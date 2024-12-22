"use client";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Modal from "../Modal";
import { FormEventHandler, useState } from "react";
import { adicionaTarefa } from "@/api/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default function BtnAdicionaTarefa() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [novaTarefaValor, setNovaTarefaValor] = useState<string>("");

  const handleSubmitNewTask: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await adicionaTarefa({
      id: uuidv4(),
      titulo: novaTarefaValor,
    });
    setNovaTarefaValor("");
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
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <button className="btn" type="submit">
            Cadastrar
          </button>
        </form>
      </Modal>
    </div>
  );
}
