import { createContext, useContext, useEffect, useState } from "react";
import type { Note } from "../types/note";
import { notesService } from "../services/notes.service";

type NotesContextType = {
  notes: Note[];
  loading: boolean;
  refresh: () => void;
};

const NotesContext = createContext<NotesContextType | null>(null);

export function NotesProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchNotes = async () => {
    setLoading(true);
    const data = await notesService.getAll();
    setNotes(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <NotesContext.Provider
      value={{
        notes,
        loading,
        refresh: fetchNotes,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const ctx = useContext(NotesContext);
  if (!ctx) throw new Error("useNotes must be used inside NotesProvider");
  return ctx;
}