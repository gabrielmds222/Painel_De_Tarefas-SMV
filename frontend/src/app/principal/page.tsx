import Painel from "@/components/Painel";
import Sidebar from "@/components/Sidebar";

export default function Principal() {
  return (
    <div className="w-full min-h-screen p-6 bg-slate-100">
      <div className="flex justify-center items-center gap-6">
        <aside className="w-48 border-solid border-2 border-slate-300 rounded">
          <Sidebar />
        </aside>
        <div className="w-full border-solid border-2 border-slate-300 rounded">
          <Painel />
        </div>
      </div>
    </div>
  );
}
