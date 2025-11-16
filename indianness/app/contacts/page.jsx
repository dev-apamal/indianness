"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", message: "Please fill all fields." });
      return;
    }

    setLoading(true);
    try {
      // Replace with your real endpoint (Formspree or API)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus({
          type: "success",
          message: data.message || "Message sent!",
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data?.error || "Something went wrong.",
        });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Network error. Try again later." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full h-dvh bg-gray-100 flex flex-col lg:flex-row">
      {/* LEFT — IMAGE */}
      <div className="flex-1 bg-[url('https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/BuildingContact.png')] bg-cover bg-center h-auto"></div>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="w-full max-w-lg bg-white p-6">
          <h3 className="text-lg text-left font-semibold text-foreground">
            Get in Touch
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Have questions? Reach out to us and we’ll get back to you shortly.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground">
                Name
              </label>
              <input
                type="text"
                required
                className="mt-1 w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground">
                Email
              </label>
              <input
                type="email"
                required
                className="mt-1 w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="you@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground">
                Message
              </label>
              <textarea
                rows="4"
                required
                className="mt-1 w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Your message..."
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
