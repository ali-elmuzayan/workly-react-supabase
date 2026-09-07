import { Button } from "@/components/ui/button";
import ContactInput from "./contact-input";
import { MessageSquare } from "lucide-react";
const ContactForm = () => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("Form submitted");
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex gap-4 w-full">
        <ContactInput type="text" label="Name" placeholder="Your name" />
        <ContactInput
          type="email"
          label="Email"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <ContactInput
          type="textarea"
          label="Message"
          placeholder="Tell us what' on your mind"
        />
      </div>
      <div className="flex justify-end">
        <Button>
          {/* message icon from lucide react */}
          <MessageSquare className="mr-2 h-4 w-4" />
          Send message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
