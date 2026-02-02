import React from "react";
import "./Contact.css";

const ContactMap = () => {
  return (
    <div>
      <section className="contact-map">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps?q=San%20Francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactMap;
