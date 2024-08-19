<template>
<div class="container">
    <img class="contedImg" width="50%" :src="imageSrc" alt="Accueil">
    <img class="contedImg" width="50%" :src="imageSrc" alt="Accueil">
    <h4 >Je Suis Un Jeune Développeur Full-Stack Junior</h4>
    <p> <b> j'ai Obtenu Une Licence En Informatique Option Génie Logiciel à UIYA (Université Internationale de Yamoussoukro)</b></p>
    <h4>Expérience Professionnelle</h4>
    <p><b> Développeur Web Junior</b></p>
    <p> Du 26 Mai au 07 Juillet J'ai eu à Occuper Un poste à MWS (Multi-Work Service) situé à Yopougon, Cité Caféiée  </p>
    <p> Moi et Mon Equipe, Nous Avons Travaillé Sur Plusieurs Projet de Creation de Site Web Dynamique</p>

</div>
</template>

<script setup>
const imageSrc = '/image/imageDave1.jpg'; // Chemin relatif depuis le dossier public
</script>

<style scoped>

.card{
    box-shadow: 0 4px 8px;
    border-radius: 8px;
}
.contedImg{
    max-width: 100%;
    height: auto;

}
.container{
    content: center;
    

}


</style>