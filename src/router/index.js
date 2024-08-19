import { createRouter, createWebHistory } from "vue-router";
import AccueilPage from "@/page/PageAccueil.vue";
import AboutPage from "@/page/PageAbout.vue";
import ContactPage from "@/page/PageContact.vue";
import AboutPageP from "@/page/PageAboutP.vue";

const routes = [
    {
      path: '/',
      name: 'Accueil',
      component: AccueilPage
    },
    {
      path: '/about',
      name: 'About',
      component: AboutPage
    },
    {
      path: '/aboutp',
      name: 'AboutP',
      component: AboutPageP
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactPage
    },
    
  ]

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router