import { Outlet } from "react-router-dom";
import { NotesProvider } from "@/features/notes/context/NotesContext";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <NotesProvider>
      <div className="min-h-screen flex bg-[var(--bg)] text-[var(--text-h)]">

        <Sidebar />

        <div className="flex-1 flex flex-col">

          <Topbar />

          <main className="flex-1 px-6 py-6 max-w-4xl w-full mx-auto">
            <Outlet />
          </main>

          <Footer />

        </div>
      </div>
    </NotesProvider>
  );
}