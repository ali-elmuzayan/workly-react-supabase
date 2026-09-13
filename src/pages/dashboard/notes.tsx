import GlassCard from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import NoteCard from "@/features/notes/components/note-card";
import useNotes from "@/features/notes/hooks/useNotes";
import { createNote } from "@/features/notes/services/notes.service";
import { useAuth } from "@clerk/clerk-react";
import { Plus, Search } from "lucide-react";
import { useNavigate } from "react-router";

const Notes = () => {
  const { notes, isLoading, error } = useNotes();
  const { getToken } = useAuth();
  const navigate = useNavigate();

  async function handleCreateNote() {
    const token = await getToken();
    if (!token) {
      throw new Error("Unauthorized");
    }
    const note = await createNote(token, {
      title: "New Note",
      content: "No value yet",
    });
    console.log(note);
    if (note) navigate(`/notes/${note.id}`);
  }
  return (
    <div className="space-y-12">
      <GlassCard className="px-4 py-6 space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">My Notes</h1>
          <Button onClick={handleCreateNote}>
            <Plus />
            Create Note
          </Button>
        </div>
        <div className="relative">
          <Search className="h-5 w-5 absolute left-2 top-1.5 text-muted-foreground" />
          <Input className="pl-8" placeholder="Search notes" />
        </div>
        <div className="space-y-4">
          {isLoading ? (
            <GlassCard>
              <p className="text-center h-12">Loading notes...</p>
            </GlassCard>
          ) : error ? (
            <GlassCard>
              <p className="text-center text-red-500">{error}</p>
            </GlassCard>
          ) : (
            notes.map((note) => <NoteCard note={note} key={note.id} />)
          )}
        </div>
      </GlassCard>
    </div>
  );
};

export default Notes;
