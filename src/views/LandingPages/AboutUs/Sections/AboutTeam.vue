<script setup>
// example component
import HorizontalTeamCard from "@/examples/cards/teamCards/HorizontalTeamCard.vue";

// images
import emma from "@/assets/img/team-5.jpg";
import william from "@/assets/img/bruce-mars.jpg";
import ivana from "@/assets/img/ivana-squares.jpg";
import marquez from "@/assets/img/ivana-square.jpg";
</script>

<template>
  <section class="pb-5 position-relative bg-gradient-dark mx-n3">
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-start mb-5 mt-5">
          <h3 class="text-white z-index-1 position-relative">
            Nos siéges social dans le monde
          </h3>
          <p class="text-white opacity-8 mb-0">
            Nous somme présent dans plus de ... pays dans ... continent.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4"
            image="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg"
            :profile="{ name: 'GM TELECOMMUNICATION', link: 'javascript:;' }"
            :position="{ label: '  34 Avenue des champ élisées 75008 Paris.', color: 'success' }"
            description="FRANCE"
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5"
            image="https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_England.svg"
            :profile="{ name: 'GM TELECOMMUNICATION UK', link: 'javascript:;' }"
            :position="{ label: '69 Old broad streat EC2M 1QS London', color: 'success' }"
            description="ANGLETERRE"
          />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4 z-index-2"
            image="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
            :profile="{ name: 'GM TELECOMMUNICATION USA', link: 'javascript:;' }"
            :position="{ label: '1717 Pennsylvania Avenue NW, 10th Floor D.C 20006 Washington', color: 'success' }"
            description="ETAT UNIE"
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            image="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg"
            :profile="{ name: 'GM TELECOMMUNICATION (HONG KONG)', link: 'javascript:;' }"
            :position="{ label: '40 one Museum Place 669 Zinzha Road Jing An District, 200041 Shangai', color: 'success' }"
            description="HONG KONG"
          />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4 z-index-2"
            image="https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg"
            :profile="{ name: 'GM TELECOMMUNICATION SINGAPOUR', link: 'javascript:;' }"
            :position="{ label: '24 CapitaGreen 138 Market Street 048946 Singapoure', color: 'success' }"
            description="SINGAPOUR"
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            image="https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg"
            :profile="{ name: 'GM TELECOMMUNICATION (ARABIE SAODITE)', link: 'javascript:;' }"
            :position="{ label: ' 18 Al Faisaliah Center King Fahd Rad, Olaya District 11524 Riyadh', color: 'success' }"
          />
        </div>
      </div>
    </div>
  </section>
</template>
