import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-64 border-r border-[var(--border)] px-4 py-6 flex flex-col">

      <Link to="/" className="text-xl font-bold text-purple-500 mb-10">
        BRS Notes
      </Link>

      <nav className="flex flex-col gap-1 text-sm">

        <Link
          to="/"
          className={`px-3 py-2 rounded-md ${
            isActive("/") ? "bg-purple-500/10 text-purple-500" : "hover:bg-purple-500/5"
          }`}
        >
          📝 Notes
        </Link>

        <Link
          to="/settings"
          className={`px-3 py-2 rounded-md ${
            isActive("/settings") ? "bg-purple-500/10 text-purple-500" : "hover:bg-purple-500/5"
          }`}
        >
          ⚙️ Settings
        </Link>

      </nav>

    </aside>
  );
}