import { useParams, Link } from "react-router-dom";

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

export default function NoteDetailPage() {
  const { id } = useParams();

  const note = notes.find((n) => n.id === Number(id));

  if (!note) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">Note not found</h1>
        <Link to="/" className="text-purple-500 mt-3 inline-block">
          ← Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* BACK */}
      <Link
        to="/"
        className="text-sm text-purple-500 hover:underline"
      >
        ← Back to notes
      </Link>

      {/* CARD */}
      <div className="p-6 rounded-xl border border-[var(--border)] bg-white/5">
        <h1 className="text-3xl font-bold text-[var(--text-h)]">
          {note.title}
        </h1>

        <p className="mt-4 text-base opacity-70 leading-relaxed">
          {note.content}
        </p>
      </div>
    </div>
  );
}