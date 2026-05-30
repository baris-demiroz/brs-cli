import { Link } from "react-router-dom";

type Note = {
  id: number;
  title: string;
  content: string;
};

const notes: Note[] = [
  { id: 1, title: "İlk Not", content: "Bu benim ilk notum" },
  { id: 2, title: "React Öğreniyorum", content: "Router ve layout sistemi kuruldu" },
  { id: 3, title: "BRS Template", content: "Kendi starter sistemimi yapıyorum" },
];

export default function NotesPage() {
  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-[var(--text-h)]">Notes</h1>
        <p className="text-sm opacity-60 mt-1">
          Your simple note manager template
        </p>
      </div>

      {/* LIST */}
      <div className="grid gap-4">
        {notes.map((note) => (
          <Link
            key={note.id}
            to={`/note/${note.id}`}
            className="group p-5 rounded-xl border border-[var(--border)] bg-white/5 hover:bg-purple-500/5 hover:border-purple-500 transition-all duration-200"
          >
            <h2 className="text-lg font-semibold group-hover:text-purple-500 transition">
              {note.title}
            </h2>

            <p className="text-sm opacity-60 mt-1 line-clamp-2">
              {note.content}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}