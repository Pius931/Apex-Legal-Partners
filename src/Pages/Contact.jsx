import React from "react";
import ContactHero from "../Components/Contact/ContactHero";
import ContactForm from "../Components/Contact/ContactForm";
import ContactInfo from "../Components/Contact/ContactInfo";
import BusinessHours from "../Components/Contact/BusinessHours";
import ContactMap from "../Components/Contact/ContactMap";
import "../Components/Contact/Contact.css";

const Contact = () => {
  return (
    <div className="main-contact-page">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <BusinessHours />
      <ContactMap />
    </div>
  );
};

export default Contact;
