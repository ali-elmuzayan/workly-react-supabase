import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactInput = ({
  type,
  label,
  placeholder,
}: {
  type: string;
  label: string;
  placeholder: string;
}) => {
  return (
    <div className="space-y-2 w-full">
      <Label htmlFor="name" className="font-semibold">
        {label}
      </Label>
      {type === "textarea" ? (
        <Textarea
          className={`bg-gray-100 border border-gray-300 py-2`}
          placeholder={placeholder}
        />
      ) : (
        <Input
          type={type}
          placeholder={placeholder}
          className={`bg-gray-100 border border-gray-300 py-5`}
        />
      )}
    </div>
  );
};

export default ContactInput;
