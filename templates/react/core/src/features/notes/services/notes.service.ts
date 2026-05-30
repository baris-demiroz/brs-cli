import { api } from "@/core/api/client";
import type { Note } from "../types/note";

// fake backend gibi düşün
export const notesService = {
  getAll: async (): Promise<Note[]> => {
    const res = await api.get("/notes");
    return res.data;
  },

  getById: async (id: number): Promise<Note> => {
    const res = await api.get(`/notes/${id}`);
    return res.data;
  },

  create: async (data: Omit<Note, "id" | "createdAt">) => {
    const res = await api.post("/notes", data);
    return res.data;
  },

  delete: async (id: number) => {
    const res = await api.delete(`/notes/${id}`);
    return res.data;
  },
};