import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#f59a69] mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-12">
          We would love to hear from you! Reach out using the form or contact info below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
