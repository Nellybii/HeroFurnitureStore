"use client";

import { useState } from "react";
import Button from "./Buttons";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle submission logic
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow">
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e98955]"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e98955]"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e98955]"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Message</label>
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e98955]"
        />
      </div>
      <Button
        type="submit"
        className="w-full text-white py-2 rounded-md transition"
      >
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
