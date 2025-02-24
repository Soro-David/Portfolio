<template>
  <section class="service-box">
    <div class="container">
      <div class="row justify-content-center gap-section-second">
        <div class="col-lg-7 text-center">
          <div class="title-big pb-3 mb-3">
            <h3>Les Projets</h3>
          </div>
          <p class="description-p text-muted pe-0 pe-lg-0">
            Les projets que nous avons réalisés sont le fruit de notre passion
            et de notre engagement envers nos clients. Nous sommes fiers de
            chaque projet que nous avons mené à bien et nous sommes impatients
            de vous aider à réaliser le vôtre.
          </p>
        </div>
      </div>
      <div class="row pt-5">
        <div class="col-lg-6 pb-5 pb-lg-0">
          <div class="project-card">
            <div class="project-card-inner text-center">
              <h5>AFT import export</h5>
              <img
                src="/image/logo_aft.png"
                alt="AFT Import Export"
                class="project-image"
              />
              <a
                href="https://www.example.com/aft"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-secondary mt-3"
                >Visiter</a
              >
            </div>
          </div>
        </div>
        <div class="col-lg-6 pb-5 pb-lg-0">
          <div class="project-card">
            <div class="project-card-inner text-center">
              <h5>LEBALEBOGROUP</h5>
              <img
                src="/image/lewalebogroop.jpg"
                alt="LEBALEBOGROUP"
                class="project-image"
              />
              <a
                href="https://www.example.com/lebalebo"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-secondary mt-3"
                >Visiter</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="row pt-5">
        <div class="col-lg-6 pb-5 pb-lg-0">
          <div class="project-card">
            <div class="project-card-inner text-center">
              <h5>Jadde consulting</h5>
              <img
                src="/image/jadde.png"
                alt="Jadde consulting"
                class="project-image"
              />
              <a
                href="https://www.example.com/jadde"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-secondary mt-3"
                >Visiter</a
              >
            </div>
          </div>
        </div>
        <div class="col-lg-6 pb-5 pb-lg-0">
          <div class="project-card">
            <div class="project-card-inner text-center">
              <h5>CIERA MOTOR</h5>
              <img
                src="/image/ciera_motor.jpg"
                alt="CIERA MOTOR"
                class="project-image"
              />
              <a
                href="https://cieragroupe.com/fr/"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-secondary mt-3"
                >Visiter</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
//Images placed in the public directory do not require import statements
</script>

<style scoped>
/* Variables CSS */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --text-color: #333;
  --font-family: sans-serif;
  --padding-small: 8px;
  --padding-medium: 12px;
  --box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  --border-radius: 8px;
}

.service-box {
  padding: 50px 0;
}

.gap-section-second {
  margin-bottom: 30px;
}

.title-big h3 {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--text-color);
}

.description-p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #777;
}

/* Style général des cartes de projet */
.project-card {
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card-inner {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  position: relative; /*  Needed for absolute positioning of the button */
  overflow: hidden; /* Hide the button initially */
}

.project-card-inner:hover .btn-secondary {
  opacity: 1;
  transform: translateY(0); /* Slide button into view */
}

.project-image {
  width: 250px; /* Set a fixed width */
  height: 150px; /* Set a fixed height */
  object-fit: cover; /* Maintain aspect ratio and cover the entire box */
  margin-bottom: 15px;
  border-radius: var(--border-radius);
  display: block; /* Empêche les marges verticales de se combiner */
  margin-left: auto;
  margin-right: auto;
  transition: opacity 0.3s ease; /* Create a fade effect for the image itself */
}

.project-card-inner:hover .project-image {
  opacity: 0.6; /* Makes the image more transparent on hover */
}

.project-card h5 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--text-color);
}

/* Style du bouton */
.btn-secondary {
  background-color: var(--secondary-color);
  color: white;
  border: none;
  padding: var(--padding-medium) var(--padding-medium);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  position: absolute;
  bottom: 10px; /* Position at the bottom */
  left: 50%; /* Center horizontally */
  transform: translateX(-50%) translateY(30px); /*  Adjust initial position */
  opacity: 0; /* Hide initially */
  z-index: 1; /* Ensure the button is on top of other content */
}

.btn-secondary:hover {
  background-color: #5a6268;
}

/* Style du bouton pour améliorer l'apparence */
.btn-secondary {
  display: inline-block; /* Ensures padding is respected */
  padding: 10px 20px; /* Adjust as needed */
  font-size: 1rem; /* Adjust font size */
  font-weight: bold; /* Make text bolder */
  text-align: center; /* Center the text */
  white-space: nowrap; /* Prevent text from wrapping */
  vertical-align: middle; /* Align the button vertically */
  user-select: none; /* Prevent text selection */
  border: none; /* Remove default border */
  border-radius: 5px; /* Adjust as needed */
  transition: background-color 0.15s ease; /* Smooth transition */
  cursor: pointer; /* Change cursor to a pointer on hover */
}
</style>
