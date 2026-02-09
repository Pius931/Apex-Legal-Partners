import React, { useState } from "react";
import "./PracticeAreas.css";

const PracticeCards = ({ cards }) => {
  return (
    <div>
      <section className="practice-cards">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div key={index} className="practice-card">
              <span className="icon">
                <Icon />
              </span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default PracticeCards;
