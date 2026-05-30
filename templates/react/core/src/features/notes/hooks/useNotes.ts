import { useNotes } from "../context/NotesContext";

export const useNotesHook = () => {
  return useNotes();
};