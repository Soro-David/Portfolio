<template>
  <div class="slider-section">
    <div class="slider" ref="sliderRef">
      <div
        class="slides-container"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div class="slide" v-for="(slide, index) in slides" :key="index">
          <img :src="slide.image" :alt="slide.alt" class="slide-image" />
          <div class="slide-content">
            <h4>{{ slide.title }}</h4>
            <p v-html="slide.description"></p>
          </div>
        </div>
      </div>

      <!-- Indicateurs du slider -->
      <div class="slider-indicators">
        <span
          v-for="(slide, index) in slides"
          :key="index"
          @click="goToSlide(index)"
          :class="{ active: currentIndex === index }"
        ></span>
      </div>
    </div>
  </div>

  <section class="skills-section">
    <div class="skills-container">
      <h2 class="section-title">Mes Compétences Back-end et Front-end</h2>
      <div class="skills-grid">
        <div v-for="(skill, index) in skills" :key="index" class="skill-card">
          <h3 class="skill-title">{{ skill.title }}</h3>
          <p class="skill-description">{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const skills = ref([
  {
    title: "PHP (Laravel)",
    description:
      "J'utilise Laravel depuis décembre 2023 et j'ai eu l'opportunité de travailler sur plusieurs projets, aussi bien en équipe qu'en solo, en exploitant pleinement les capacités de ce framework.",
  },
  {
    title: "Node.js (Express)",
    description:
      "Depuis 2024, j'ai eu l'opportunité de travailler sur plusieurs projets avec Express, aussi bien en solo qu'en équipe. Cela m'a permis d'acquérir une solide expérience dans le développement d'applications web, la gestion des bases de données, l'optimisation des performances et l'intégration d'API tierces.",
  },
  {
    title: "Vue.js",
    description:
      "Avec Vue.js, je conçois des interfaces utilisateur interactives et réactives, en mettant l'accent sur la modularité et la maintenabilité du code.  J'utilise Vuex pour la gestion d'état complexe et Vue Router pour la navigation.",
  },
  {
    title: "React native",
    description:
      "J'ai une bonne expérience avec React Native. Je suis capable de développer des applications mobiles performantes et évolutives",
  },
]);
// Liste des slides
const slides = ref([
  {
    image: "/image/dev1.jpg",
    alt: "Développement Web",
    title: "Développement Web",
    description:
      "Conception et création de sites web dynamiques et interactifs.",
  },
  {
    image: "/image/dev2.jpg",
    alt: "Développement Mobile",
    title: "Développement Mobile",
    description: "Création d'applications mobiles pour iOS et Android.",
  },
]);

const currentIndex = ref(0);
const autoplayInterval = ref(null);
const sliderRef = ref(null);
const slideIntervalTime = 3000; // Intervalle de 3 secondes

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const startAutoplay = () => {
  autoplayInterval.value = setInterval(nextSlide, slideIntervalTime);
};

const stopAutoplay = () => {
  clearInterval(autoplayInterval.value);
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<style scoped>
.slider-section {
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 40px;
}

.slider {
  position: relative;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.slides-container {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
  box-sizing: border-box;
}

.slide {
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
}

.slide-image {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  box-sizing: border-box;
}

.slide-content {
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  box-sizing: border-box;
}

.slide-content h4 {
  font-size: 1.8em;
  margin-bottom: 10px;
}

.slide-content p {
  font-size: 1.1em;
  line-height: 1.5;
}

.slider-controls {
  display: none;
}

.slider-indicators {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.slider-indicators span {
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ccc;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.slider-indicators span.active {
  background-color: #007bff;
}

.skills-section {
  padding: 60px 0;
  background-color: #f8f9fa;
  box-sizing: border-box;
}

.skills-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  justify-content: center;
  box-sizing: border-box;
}

.skill-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.skill-card:hover {
  transform: translateY(-5px);
}

.skill-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #007bff;
  text-transform: uppercase;
}

.skill-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}

.slider-section {
  width: 100%;
  padding: 0;
  margin: 0;
}

.slider {
  max-width: none;
  border-radius: 0;
  box-shadow: none;
}

.slide-image {
  max-height: 400px;
}

.container {
  max-width: 80%;
}
</style>
