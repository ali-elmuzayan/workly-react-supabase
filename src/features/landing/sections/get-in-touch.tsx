import ContactForm from "../components/contact-form";
import SectionTitle from "../components/section-title";
const GetInTouch = () => {
  return (
    <section className="flex flex-col items-center  gap-12 py-24">
      <SectionTitle
        title="Get in Touch"
        subtitle="Have questions or want to collaborate? Reach out to us!"
      />
      <div className="w-full max-w-3xl rounded-xl border border-gray-300 p-8 bg-gray-50 shadow-md">
        <ContactForm />
      </div>
    </section>
  );
};

export default GetInTouch;
