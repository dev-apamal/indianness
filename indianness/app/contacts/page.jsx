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

    // Basic Validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", message: "Please fill all fields." });
      return;
    }

    setLoading(true);

    try {
      // Call your Next.js API route instead of Web3Forms directly
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: "Message sent! We will get back to you shortly.",
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full bg-gray-100 flex flex-col lg:flex-row">
      {/* LEFT — IMAGE */}
      <div className="flex-1">
        <img
          src="https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Building-Compressed.png"
          alt="Office Building"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="flex-1 flex flex-col gap-6 items-center justify-center px-4 sm:px-6 py-20">
        {/* Contact Info Card */}
        <div className="w-full max-w-lg bg-white p-6 shadow-sm">
          <h4 className="text-base text-left font-semibold text-foreground">
            Office Address
          </h4>
          <p className="text-sm text-muted-foreground mt-2">
            Indianness Academy, Indianness Square, Calicut - 673004, Kerala,
            India.
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            1800 123 4567 | icirhtrust@gmail.com
          </p>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.957569373266!2d75.78752759999999!3d11.2645294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6590070ae6347%3A0x933e4dcf496fa0ac!2sIndianness%20Academy%20(ICIRH%20Trust)!5e0!3m2!1sen!2sin!4v1763913017651!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            ></iframe>
          </div>
        </div>

        {/* Form Card */}
        <div className="w-full max-w-lg bg-white p-6 shadow-sm">
          <h3 className="text-lg text-left font-semibold text-foreground">
            Get in Touch
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Have questions? Reach out to us and we’ll get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Status Message Display */}
            {status && (
              <div
                className={`p-3 text-sm rounded ${
                  status.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {status.message}
              </div>
            )}

            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground">
                Name
              </label>
              <input
                type="text"
                name="name" // Linked to state key
                value={form.name} // Controlled component
                onChange={handleChange} // Updates state
                required
                className="mt-1 w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Your full name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="you@example.com"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                required
                className="mt-1 w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Your message..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white py-3 transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-black hover:bg-gray-800"
              }`}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
// import React, { useState } from "react";

// export default function ContactPage() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState(null);
//   const [loading, setLoading] = useState(false);

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setForm((p) => ({ ...p, [name]: value }));
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setStatus(null);

//     if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
//       setStatus({ type: "error", message: "Please fill all fields." });
//       return;
//     }

//     setLoading(true);
//     try {
//       // Replace with your real endpoint (Formspree or API)
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         setStatus({
//           type: "success",
//           message: data.message || "Message sent!",
//         });
//         setForm({ name: "", email: "", message: "" });
//       } else {
//         setStatus({
//           type: "error",
//           message: data?.error || "Something went wrong.",
//         });
//       }
//     } catch (err) {
//       setStatus({ type: "error", message: "Network error. Try again later." });
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <section className="w-full  bg-gray-100 flex flex-col lg:flex-row">
//       {/* LEFT — IMAGE */}
//       <div className="flex-1 ">
//         <img
//           src="https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Building-Compressed.png"
//           alt="Office Building"
//           className="w-full h-full object-cover object-center"
//         />
//       </div>

//       <div className="flex-1 flex flex-col gap-6 items-center justify-center px-4 sm:px-6 py-20">
//         <div className="w-full max-w-lg bg-white p-6">
//           <h4 className="text-base text-left font-semibold text-foreground">
//             Office Address
//           </h4>
//           <p className="text-sm text-muted-foreground ">
//             Indianness Academy, Indianness Square, Calicut - 673004, Kerala,
//             India.
//           </p>
//           <p className="text-sm text-muted-foreground ">
//             1800 123 4567 | icirhtrust@gmail.com
//           </p>
//         </div>

//         <div className="w-full max-w-lg bg-white p-6">
//           <h3 className="text-lg text-left font-semibold text-foreground">
//             Get in Touch
//           </h3>
//           <p className="text-sm text-muted-foreground mb-6">
//             Have questions? Reach out to us and we’ll get back to you shortly.
//           </p>

//           <form className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-muted-foreground">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 required
//                 className="mt-1 w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
//                 placeholder="Your full name"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium text-muted-foreground">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 required
//                 className="mt-1 w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
//                 placeholder="you@example.com"
//               />
//             </div>

//             {/* Message */}
//             <div>
//               <label className="block text-sm font-medium text-muted-foreground">
//                 Message
//               </label>
//               <textarea
//                 rows="4"
//                 required
//                 className="mt-1 w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
//                 placeholder="Your message..."
//               ></textarea>
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               className="w-full bg-black text-white py-3 hover:bg-gray-800 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
