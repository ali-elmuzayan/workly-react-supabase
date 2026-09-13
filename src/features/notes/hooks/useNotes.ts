import type { Note } from "@/types";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { getAllNotesByUser } from "../services/notes.service";

const useNotes = () => {
  const { getToken } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    // const controller = new AbortController();
    const fetchNotes = async () => {
      try {
        setIsLoading(true);
        const token = await getToken();

        if (!token) {
          throw new Error("You need to login first");
        }

        const data = await getAllNotesByUser(token);

        setNotes(data);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Something wen wrong";
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNotes();
  }, [getToken]);

  return { notes, isLoading, error };
};

export default useNotes;
