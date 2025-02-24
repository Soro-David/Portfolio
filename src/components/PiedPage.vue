<template>
  <footer class="footer">
    <div class="footer-content">
      <h4 class="footer-title">Localité</h4>
      <p><i class="fa fa-map-marker-alt"></i> Côte d'Ivoire, Abidjan, Cocody</p>
      <p><i class="fa fa-phone-alt"></i> +225 076950</p>
      <p><i class="fa fa-envelope"></i> soroddavid@gmail.com</p>
      <div class="social-links">
        <a href="#" class="social-btn" aria-label="Facebook"
          ><i class="fab fa-facebook-f"></i
        ></a>
        <a href="#" class="social-btn" aria-label="LinkedIn"
          ><i class="fab fa-linkedin"></i
        ></a>
      </div>
      <p class="footer-text">© {{ currentYear }} - Tous droits réservés</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

// Obtenir l'année courante
const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
/* Style du pied de page */
.footer {
  background-color: #a67c52; /* Couleur marron */
  color: white; /* Texte en blanc pour contraster */
  text-align: center;
  padding: 40px 0;
  font-size: 16px;
  box-sizing: border-box;
}

/* Contenu du pied de page */
.footer-content {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
}

/* Titre du pied de page */
.footer-title {
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Espacement des textes */
.footer-content p {
  margin: 12px 0;
}

/* Icônes des réseaux sociaux */
.social-links {
  margin: 20px 0;
}

.social-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: white;
  color: #333;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  text-align: center;
  font-size: 20px;
  margin: 0 10px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

/* Animation au survol */
.social-btn:hover {
  background-color: orange;
  color: white;
}

/* Texte en bas du pied de page */
.footer-text {
  font-size: 14px;
  margin-top: 15px;
  opacity: 0.8;
}

/* Ajout d'un style pour les icônes */
.fa {
  margin-right: 8px;
}

/* Media query pour une meilleure réactivité */
@media (max-width: 768px) {
  .footer {
    padding: 30px 0;
    font-size: 15px;
  }

  .footer-content {
    max-width: 90%;
    padding: 15px;
  }

  .footer-title {
    font-size: 22px;
    margin-bottom: 12px;
  }

  .footer-content p {
    margin: 10px 0;
  }

  .social-btn {
    width: 40px;
    height: 40px;
    font-size: 19px;
    margin: 0 8px;
  }

  .footer-text {
    font-size: 13px;
    margin-top: 12px;
  }
}
</style>
