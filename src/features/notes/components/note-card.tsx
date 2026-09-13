import GlassCard from "@/components/glass-card";
import type { Note } from "@/types";
import { useNavigate } from "react-router";
const NoteCard = ({ note }: { note: Note }) => {
  const navigate = useNavigate();
  const { content, title } = note;
  const noteContent =
    content.length > 100 ? content.slice(0, 100) + "..." : content;

  function handleClick() {
    navigate(`/notes/${note.id}`);
  }

  return (
    <GlassCard
      onClick={handleClick}
      className="py-2 px-4 space-y-2 cursor-pointer"
    >
      <h3 className="text-2xl font-bold">{title}</h3>
      <p>{noteContent}</p>
    </GlassCard>
  );
};

export default NoteCard;
