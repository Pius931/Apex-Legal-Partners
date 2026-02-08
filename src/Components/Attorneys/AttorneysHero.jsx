import React from "react";

const AttorneysHero = () => {
  return (
    <div>
      <section className="attorneys-hero">
        <div className="hero-text">
          <h1>Expert Counsel Dedicated to Your Success</h1>
          <p>
            Our attorneys bring decades of courtroom experience, strategic
            insight, and an unwavering commitment to protecting your interests.
          </p>
        </div>

        <div className="hero-stat-card">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkrcRi5xBt_NWdzOQVinIswhYiCVQ7AEmHL_Db_0l0PlHmpkSD3kVbsaTxE3V_xRX0omSdf9hN-VhIHjt6JvRMKosLG6yaoFr2S3TTG879i5wVV9Xhf4n0ExGm-FJ1jfiF7jI9W8EW8JovB7TYfWO2gx3s0lrA36LYlKuP6UTptIB8uhEdsvN0LE4DNLaiCaHBw9F5xw9MG2cj9Vap6pEg5rp5fPjgYKWWA34gVep8Dcl2cWN6WKzQ1jyHXKcGWqzMhVfvL-WyxA"
            alt="team"
          />
          <div className="stat-badge">250+ Cases Won</div>
        </div>
      </section>
    </div>
  );
};

export default AttorneysHero;
