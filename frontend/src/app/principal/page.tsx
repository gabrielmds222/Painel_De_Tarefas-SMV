import Painel from "@/components/Painel";
import Sidebar from "@/components/Sidebar";

export default function Principal() {
  return (
    <div className="w-full min-h-screen p-6">
      <div className="flex justify-center items-center gap-6">
        <aside className="w-48 bg-red-100">
          <Sidebar />
        </aside>
        <div className="w-full bg-blue-100">
          <Painel />
        </div>
      </div>
    </div>
  );
}
