<template>
  <nav class="navbar">
    <ul>
      <li v-for="(item, index) in menuItems" :key="index">
        <router-link
          :to="item.path"
          class="navbar-link"
          :class="{ active: route.path === item.path }"
        >
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

// Récupérer la route active
const route = useRoute();

// Définir les éléments du menu
const menuItems = computed(() => [
  { path: "/", label: "Accueil" },
  { path: "/a-propos", label: "A Propos de moi" },
  { path: "/projets", label: "Projets réalisés" },
  { path: "/contact", label: "Me contacter" },
]);
</script>

<style scoped>
.navbar {
  background-color: #f8f9fa;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: sticky; /* Optionnel: rend le menu fixe en haut */
  top: 0;
  z-index: 100; /* Assure que le menu est au-dessus des autres éléments */
  display: flex; /* Ajout pour centrer le menu */
  justify-content: center; /* Ajout pour centrer le menu */
}

.navbar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex; /* Important pour aligner les éléments horizontalement */
  /* justify-content: space-around;  */ /* Supprimé, le centrage se fait sur le container */
  align-items: center; /* Aligne verticalement au centre, si nécessaire */
}

.navbar li {
  margin-right: 20px; /* Espacement entre les éléments (ajuster selon besoin) */
}

/* Enlève la marge à droite du dernier élément */
.navbar li:last-child {
  margin-right: 0;
}

.navbar-link {
  display: block;
  padding: 8px 15px;
  text-decoration: none;
  color: #333;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
}

.navbar-link:hover {
  background-color: #e2e6ea;
}

.navbar-link.active {
  background-color: #007bff;
  color: white;
  font-weight: bold;
}
</style>
