<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// example components
import DefaultInfoCard from "../../../../examples/cards/infoCards/DefaultInfoCard.vue";
import CenteredBlogCard from "../../../../examples/cards/blogCards/CenteredBlogCard.vue";


// Déclarer une référence réactive pour stocker le compte à rebours
const countdown = ref('');

// Date de déploiement de l'application (à modifier selon vos besoins)
const dateDeploiement = new Date('2023-04-15T00:00:00Z').getTime();

// Mettre à jour le compte à rebours toutes les secondes
const miseAJourCompteARebours = () => {
  const maintenant = new Date().getTime();
  const tempsRestant = dateDeploiement - maintenant;

  // Calculer les jours, heures, minutes et secondes restantes
  const jours = Math.floor(tempsRestant / (1000 * 60 * 60 * 24));
  const heures = Math.floor((tempsRestant % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((tempsRestant % (1000 * 60 * 60)) / (1000 * 60));
  const secondes = Math.floor((tempsRestant % (1000 * 60)) / 1000);

  // Mettre à jour la référence réactive 'countdown'
  countdown.value = `${jours}j ${heures}h ${minutes}m ${secondes}s`;
};



//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
  miseAJourCompteARebours();
  setInterval(miseAJourCompteARebours, 1000);
});

onUnmounted(() => {
  body.classList.remove("presentation-page"); 
  body.classList.remove("bg-gray-200");
});
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4">
          <div class="row justify-content-start">
            <div>
              <h1>Compte à Rebours</h1>
              <h4>Temps restant : <strong>{{ countdown }}</strong></h4>
            </div>
            <DefaultInfoCard
              color="info"
              title="Le réseau social"
              description="Ouverture de notre réseau social à partir du 10 avril 2023 ( application mobile Android & IOS )"
            />

          </div>

        </div>
        <div class="col-lg-4 ms-auto mt-lg-0 mt-6">
          <CenteredBlogCard
            image="https://csform.com/wp-content/uploads/2020/04/Susen-Social-Network-App-UI-Kit.jpg"
            title="Notre réseau social"
            description=""
          />
        </div>
        <div class="col-lg-4 ms-auto mt-lg-0 mt-6">
          <CenteredBlogCard
            image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            title="plateforme d'appel pour le secrétaire"
            description=""
          />
        </div>
      </div>
    </div>
  </section>
</template>
