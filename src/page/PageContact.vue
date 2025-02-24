<template>
  <div class="contact-container">
    <h2>Contactez-Moi</h2>
    <p>
      N'hésitez pas à me contacter pour discuter de vos projets ou simplement
      échanger.
    </p>

    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Nom:</label>
        <input
          type="text"
          id="name"
          v-model="name"
          required
          placeholder="Votre nom"
        />
      </div>

      <div class="form-group">
        <label for="objet">Objet:</label>
        <input
          type="text"
          id="objet"
          v-model="objet"
          required
          placeholder="l'objet de votre message"
        />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="email"
          required
          placeholder="Votre adresse email"
        />
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea
          id="message"
          v-model="message"
          rows="5"
          required
          placeholder="Votre message"
        ></textarea>
      </div>

      <button type="submit" class="submit-button">Envoyer</button>
    </form>

    <div
      v-if="submissionStatus"
      class="submission-message"
      :class="submissionStatusClass"
    >
      {{ submissionMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const name = ref("");
const objet = ref(""); // Ajout de l'objet
const email = ref("");
const message = ref("");
const submissionStatus = ref(null);
const submissionMessage = ref("");

const submissionStatusClass = computed(() => {
  if (submissionStatus.value === "success") {
    return "success";
  } else if (submissionStatus.value === "error") {
    return "error";
  }
  return "";
});

const handleSubmit = async () => {
  try {
    // Simuler l'envoi d'email (à remplacer par votre code réel)
    console.log(
      "Envoi du formulaire:",
      name.value,
      objet.value, // Inclure l'objet dans le log
      email.value,
      message.value
    );
    // **Remplacez ceci par votre logique d'envoi de formulaire réelle**
    // Par exemple, utiliser une API comme EmailJS, Netlify Forms, ou votre propre backend.
    await simulateEmailSend(); // Simulateur pour le démo

    submissionStatus.value = "success";
    submissionMessage.value = "Votre message a été envoyé avec succès !";
    resetForm();
  } catch (error) {
    console.error("Erreur lors de l'envoi:", error);
    submissionStatus.value = "error";
    submissionMessage.value =
      "Une erreur s'est produite lors de l'envoi. Veuillez réessayer.";
  }
};

const simulateEmailSend = () => {
  //Simulateur asynchrone pour l'envoi d'un courriel.
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

const resetForm = () => {
  name.value = "";
  objet.value = ""; // Réinitialiser l'objet
  email.value = "";
  message.value = "";
};
</script>

<style scoped>
.contact-container {
  max-width: 80%; /* Utiliser 80% de la largeur de l'écran */
  margin: 20px auto; /* Centrer horizontalement */
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; /* Important pour éviter que le padding n'élargisse les champs */
  font-size: 16px;
}

textarea {
  resize: vertical; /* Permet à l'utilisateur d'ajuster la hauteur */
}

.submit-button {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.submit-button:hover {
  background-color: #3e8e41;
}

.submission-message {
  margin-top: 15px;
  padding: 10px;
  border-radius: 4px;
}

.submission-message.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.submission-message.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}
</style>
