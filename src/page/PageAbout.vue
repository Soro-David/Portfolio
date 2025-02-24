<template>
  <div class="about-page">
    <section class="hero-section">
      <div class="hero-content">
        <h3><u>À Propos de Moi</u></h3>
        <p>Développeur Web et Mobile Passionné</p>
      </div>
    </section>

    <section class="bio-section">
      <div class="container">
        <h2>Mon Parcours</h2>
        <p>
          Je suis un développeur full-stack passionné par la création
          d'expériences web et mobiles innovantes et performantes. 2023, j'ai eu
          le privilège de travailler sur des projets variés, allant de sites web
          dynamiques à des applications mobiles complexes. Mon objectif est de
          transformer des idées en réalité numérique, en combinant expertise
          technique et créativité. Je suis Tutulaire d'une Licence Informatique
          Option Génie Logiciel à l'Université Internationale de Yamoussoukro.
        </p>
      </div>
    </section>

    <section class="skills-section">
      <div class="container">
        <h2>Mes Compétences Clés</h2>
        <div class="skills-grid">
          <div class="skill-card">
            <h3>Développement Front-end</h3>
            <ul>
              <li>HTML5, CSS3, JavaScript (ES6+)</li>
              <li>Frameworks : Vue.js, React Native</li>
              <li>Gestion d'état : Vuex</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div class="skill-card">
            <h3>Développement Back-end</h3>
            <ul>
              <li>Langages : Node.js (Express), PHP (Laravel)</li>
              <li>Bases de données : MySQL, MongoDB</li>
              <li>API RESTful</li>
              <li>Authentification : JWT</li>
              <li>Serveurs : Apache</li>
            </ul>
          </div>
          <div class="skill-card">
            <h3>Développement Mobile</h3>
            <ul>
              <li>Frameworks : React Native</li>
              <li>Intégration de services tiers</li>
            </ul>
          </div>
          <div class="skill-card">
            <h3>Autres Compétences</h3>
            <ul>
              <li>Gestion de version : Git</li>
              <li>Méthodologies Agile</li>
              <li>Tests unitaires et d'intégration</li>
              <li>Déploiement continu (CI/CD)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="projects-section">
      <div class="container">
        <h2>Projets Récents</h2>
        <div class="projects-grid">
          <div class="project-card">
            <h3>AFT import Export</h3>
            <p>
              C'est une plateforme de gestion des importations et exportations
              de marchandises. Technologies utilisées : Laravel, JavaScript,
              AJAX, JQuery, Bootstrap 5 etc...
            </p>
          </div>
          <div class="project-card">
            <h3>Projet pour une agence Immobilier</h3>
            <p>
              Il s'agissait de développer une application web pour la gestion
              des biens immobiliers. Tels que la gestion des loyerTechnologies
              utilisées : Laravel, JavaScript, AJAX, JQuery, Bootstrap 5 etc...
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <div class="container">
        <h2>Contactez-moi</h2>
        <p>
          N'hésitez pas à me contacter pour discuter de vos projets ou
          opportunités. Je suis toujours ouvert à de nouvelles collaborations !
        </p>
        <p>Email: soroddavid@gmail.com</p>
      </div>
    </section>
  </div>
</template>

<script setup>
// Vous pouvez ajouter ici des variables ou des fonctions si nécessaire.
</script>

<style scoped>
.about-page {
  font-family: "Arial", sans-serif;
  color: #333;
  line-height: 1.6;
}

/* Style de la section d'en-tête */
.hero-section {
  background: linear-gradient(to right, #007bff, #00bfff);
  color: rgb(99, 97, 223);
  /* text-align: left; */
  padding: 80px 0;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 10px;
}

.hero-content p {
  font-size: 1.5rem;
  font-style: italic;
}

/* Style de la section de biographie */
.bio-section {
  padding: 60px 0;
}

.container {
  max-width: 8OOpx;
  margin: 0 auto;
  padding: 0 20px;
}

.bio-section h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-align: center;
}

.bio-section p {
  font-size: 1.2rem;
}

/* Style de la section des compétences */
.skills-section {
  background-color: #f8f9fa;
  padding: 60px 0;
}

.skills-section h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-align: center;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.skill-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

.skill-card h3 {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.skill-card ul {
  list-style: none;
  padding: 0;
}

.skill-card li {
  margin-bottom: 10px;
}

/* Style de la section des projets */
.projects-section {
  padding: 60px 0;
}

.projects-section h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-align: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.project-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

.project-card h3 {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

/* Style de la section de contact */
.contact-section {
  background-color: #f8f9fa;
  padding: 60px 0;
  text-align: center;
}

.contact-section h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
}

.contact-section p {
  font-size: 1.2rem;
  margin-bottom: 15px;
}

/* Media queries pour une meilleure réactivité */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .hero-content p {
    font-size: 1.2rem;
  }

  .bio-section h2,
  .skills-section h2,
  .projects-section h2,
  .contact-section h2 {
    font-size: 2rem;
  }

  .bio-section p,
  .skill-card li,
  .project-card p,
  .contact-section p {
    font-size: 1rem;
  }

  .skills-grid,
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
