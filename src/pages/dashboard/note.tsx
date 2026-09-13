import GlassCard from "@/components/glass-card";
import Loader from "@/components/loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useNote from "@/features/notes/hooks/useNote";
import { Archive, ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router";

const Note = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { note, isLoading } = useNote(id);

  function handleBack() {
    navigate(-1);
  }

  if (!id) {
    return null;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (!note) {
    return <div>Note not found</div>;
  }

  return (
    <GlassCard className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          className="cursor-pointer"
          onClick={handleBack}
        >
          <ArrowLeft />
          Back all notes
        </Button>

        <Button variant="outline" className="text-red-700">
          <Archive />
          Delete
        </Button>
      </div>

      <div className="flex gap-2 items-center">
        <Button variant="outline">Generate Summary</Button>
        <Button variant="outline">Select write mode</Button>
        <Button variant="outline">Translate</Button>
      </div>

      <div className="space-y-4">
        <Input
          className="bg-transparent dark:bg-transparent focus-visible:ring-0"
          value={note.title}
          readOnly
        />

        <Textarea
          placeholder="Write your note content here"
          className="bg-transparent dark:bg-transparent focus-visible:ring-0"
          rows={20}
          value={note.content}
          readOnly
        />
      </div>
    </GlassCard>
  );
};

export default Note;
