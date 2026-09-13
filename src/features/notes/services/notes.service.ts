import type { CreateNoteDTO, Note } from "@/types";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

/**
 * Get all the notes by the token
 */
export const getAllNotesByUser = async (
  token: string,
  signal?: AbortSignal,
): Promise<Note[]> => {
  const response = await fetch(`${API_BASE_URL}/api/notes`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
    signal,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch notes: ${response.status}`);
  }

  const data: { notes: Note[] } = await response.json();
  return data.notes;
};

/**
 * Create a new note
 */
export const createNote = async (token: string, note: CreateNoteDTO) => {
  const response = await fetch(API_BASE_URL + "/api/notes", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });

  if (!response.ok) {
    throw new Error(`Failed to create the note: ${response.status}`);
  }

  const data = await response.json();
  return data.note;
};
