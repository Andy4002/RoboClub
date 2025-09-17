import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef(); // Reference to the form
  const [result, setResult] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setResult("Sending...");

    emailjs
      .sendForm(
        "service_t0jupqk", // Your Service ID
        "template_o2pot5f",  // Your Template ID from EmailJS
        form.current,       // Form reference
        "e5kmVHI9EC-moPEFA"      // Your User ID from EmailJS
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setResult("✅ Form submitted successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setResult("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <div id="contact" className="contact-container">
      <h2>Contact Us</h2>
      <p>Have questions or want to collaborate? Reach out to us!</p>

      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="contact-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="contact-input"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="contact-textarea"
        />
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>

      {result && <p className="success-msg">{result}</p>}

      {/* Styling */}
      <style jsx>{`
        .contact-container {
          max-width: 500px;
          margin: auto;
          padding: 2rem;
          background-color: #f9f9f9;
          border-radius: 12px;
        }
        .contact-container h2 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          text-align: center;
        }
        .contact-container p {
          text-align: center;
          margin-bottom: 1.5rem;
          color: #555;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contact-input,
        .contact-textarea {
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 1rem;
          width: 100%;
        }
        .contact-input:focus,
        .contact-textarea:focus {
          border-color: #3b82f6;
          outline: none;
        }
        .contact-button {
          padding: 12px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(90deg, #3b82f6, #1e40af);
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s;
        }
        .contact-button:hover {
          background: linear-gradient(90deg, #1e40af, #3b82f6);
        }
        .success-msg {
          text-align: center;
          color: green;
          font-weight: bold;
          margin-top: 0.5rem;
        }
      `}</style>
    </div>
  );
}
