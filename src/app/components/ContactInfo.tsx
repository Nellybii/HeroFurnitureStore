import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Our Contact Info</h2>
      <div className="space-y-4 text-gray-600">
        <div className="flex items-center gap-3">
          <Phone className="text-[#e98955]" /> +254 712 345678
        </div>
        <div className="flex items-center gap-3">
          <Mail className="text-[#e98955]" /> contact@tradesite.org
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="text-[#e98955]" /> Nairobi, Kenya
        </div>
      </div>

      <div className="mt-8">
        <iframe
          src="https://maps.google.com/maps?q=Nairobi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="200"
          className="rounded-md border"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;
