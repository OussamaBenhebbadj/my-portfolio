'use client' ;

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_4nhb6mt", 
        "template_4xqoom2",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "RXog_1YGeacMiYeMY"   
      )
      .then(
        (result) => {
          alert("✅ Your message has been sent successfully!");
        },
        (error) => {
          alert("❌ Failed to send your message. Please try again.");
        }
      );
    setFormData({ name: "", email: "", message: "" }); // reset form
  };

  return (
    <div className="w-[1300px] mx-16 bg-[#252525] border border-gray-700 rounded-2xl mt-12 p-10">
      <h1 className="ml-4 text-3xl text-amber-50">Contact</h1>
      <hr className="border-2 rounded-2xl border-lime-300 w-[50px] mt-2 ml-4" />

      <div className="grid grid-cols-2 gap-10 mt-8">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102674.20306473292!2d4.827645054513136!3d36.46797457697842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128cd9b514aa274f%3A0x5f9e2afa55aba6ef!2sBeni%20Chebana!5e0!3m2!1sfr!2sdz!4v1757404952823!5m2!1sfr!2sdz"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-[#1f1f1f] p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl text-amber-50 font-semibold mb-2">
            Let’s Collaborate 🤝
          </h2>
          <p className="text-gray-300 mb-6">
            Have a project in mind or looking for a collaboration?  
            Fill out the form below and I’ll get back to you as soon as possible.
          </p>

          <label className="text-amber-50 mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 rounded-md mb-4 outline-none bg-[#2e2e2e] text-white"
            required
          />

          <label className="text-amber-50 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 rounded-md mb-4 outline-none bg-[#2e2e2e] text-white"
            required
          />

          <label className="text-amber-50 mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="p-2 rounded-md mb-4 outline-none bg-[#2e2e2e] text-white"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-lime-300 text-[#252525] font-bold py-2 px-6 rounded-xl hover:bg-lime-400 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
