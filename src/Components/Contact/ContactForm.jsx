import React from "react";
import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const clearMessages = () => {
    setTimeout(() => {
      setSuccess(false);
      setError(false);
    }, 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_kok71iv",
        "template_4khta2v",
        form.current,
        "_NYUmrlWY6EH_YUKj",
      )
      .then(
        () => {
          setIsSending(false);
          setSuccess(true);
          setError(false);
          e.target.reset();
          clearMessages();
        },
        (error) => {
          setIsSending(false);
          setError(true);
          setSuccess(false);
          console.log(error.text);
          clearMessages();
        },
      );
  };

  return (
    <section className="contact-form-card">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label>Your Name</label>
          <input type="text" name="name" required />
        </div>

        <div className="form-group">
          <label>Professional Email</label>
          <input type="email" name="email" required />
        </div>

        <div className="form-group">
          <label>Case Study</label>
          <select name="case_type">
            <option value="General Inquiry">General Inquiry</option>
            <option value="Corporate Law">Corporate Law</option>
            <option value="Criminal Defence">Criminal Defence</option>
            <option value="Family Law">Family Law</option>
            <option value="Personal Injury">Personal Injury</option>
            <option value="Real Estate Law">Real Estate Law</option>
            <option value="Intellectual Property">Intellectual Property</option>
            <option value="Employment Law">Employment Law</option>
            <option value="Estate Planning">Estate Planning</option>
          </select>
        </div>

        <div className="form-group">
          <label>Your Message</label>
          <textarea rows="5" name="message" required />
        </div>

        {success && (
          <p className="success-msg">
            ✅ Message sent successfully. We will get back to you shortly.
          </p>
        )}

        {error && (
          <p className="error-msg">
            ❌ Something went wrong. Please try again.
          </p>
        )}

        <button type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
