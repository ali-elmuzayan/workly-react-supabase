import type { Note } from "@/types";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { getNoteById } from "../services/notes.service";

const useNote = (id?: string) => {
  const { getToken } = useAuth();

  const [note, setNote] = useState<Note | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNote = async () => {
      if (!id) return;

      try {
        setIsLoading(true);
        setError(null);

        const token = await getToken();

        if (!token) {
          throw new Error("You need to login first");
        }

        const data = await getNoteById(token, id);
        console.log("data here from ", data);

        setNote(data);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Something went wrong";

        setError(message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNote();
  }, [getToken, id]);

  return {
    note,
    isLoading,
    error,
  };
};

export default useNote;
