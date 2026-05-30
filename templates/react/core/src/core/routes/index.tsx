import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts//MainLayout/MainLayout";

import NotesPage from "@/features/notes/pages/NotesPage/NotesPage";
import NoteDetailPage from "@/features/notes/pages/NoteDetailPage/NoteDetailPage";
import SettingsPage from "@/features/settings/pages/SettingsPage/SettingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <NotesPage />,
      },
      {
        path: "note/:id",
        element: <NoteDetailPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);