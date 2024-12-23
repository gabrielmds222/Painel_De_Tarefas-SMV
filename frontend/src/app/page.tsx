import { buscaTodasAsTarefas } from "@/api/api";
import BtnAdicionaTarefa from "@/components/BtnAdicionaTarefa";
import Tabela from "@/components/Tabela";
import Principal from "./pages/principal/page";
import Login from "./pages/login/page";

export default async function Home() {
  const tarefas = await buscaTodasAsTarefas();
  console.log(tarefas);

  return (
    <>
      {/* <Principal /> */}
      <Login />
    </>
  );
}
