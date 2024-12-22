"use client";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Modal from "../Modal";
import { FormEventHandler, useState } from "react";

export default function BtnAdicionaTarefa() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [novaTarefa, setNovaTarefa] = useState<string>("");

  const handleSubmitNewTask: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(novaTarefa);
    setNovaTarefa("");
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
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn" type="submit">
            Cadastrar
          </button>
        </form>
      </Modal>
    </div>
  );
}
