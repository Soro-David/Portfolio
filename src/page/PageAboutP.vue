<template>

<div class="center">

    <h1 class="center"> Les Projet Auquels J'ai Participé En Tant Que Dévoppeur</h1><br><br>
    <p><b>ADDE Consulting est le cabinet leader dans le domaine de l’Ergonomie en Côte d’Ivoire.</b></p><br> 
    <p><b>C'est une Application Dynamique auquelle j'ai eu à participer de la conception au deployement</b></p><br>
    <div class="card" style="width: 18rem;">  
        <a href="https://jaddeconsulting.com/"><img class="contedImg" :src="imageSrc" alt="Accueil"></a> 
        
    </div>
</div><br><br>


</template>

<script setup>
const imageSrc = '/image/jadde.png'; // Chemin relatif depuis le dossier public
</script>

<style scoped>
.center{
    justify-content: center;
}

</style>