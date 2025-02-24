import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

// Importation de Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"; // ✅ Inclusion de Popper.js

// Importation des composants de page
import Home from "./page/PageAccueil.vue";
import About from "./page/PageAbout.vue";
import Projects from "./page/PageAboutP.vue";
import Contact from "./page/PageContact.vue";

// Définition des routes
const routes = [
  { path: "/", component: Home },
  { path: "/a-propos", component: About },
  { path: "/projets", component: Projects },
  { path: "/contact", component: Contact },
];

// Création du routeur
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Création de l'application Vue
const app = createApp(App);

app.use(router);
app.mount("#app");
