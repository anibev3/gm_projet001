<script setup>
import { onMounted } from "vue";

//Vue Material Kit 2 components
import MaterialAvatar from "@/components/MaterialAvatar.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// image
import profilePic from "@/assets/img/bruce-mars.jpg";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <section class="py-sm-7 py-5 position-relative" style="margin-bottom: -200px;">
    <div class="container">
      <div class="row">
        <div class="col-12 mx-auto">
          <div class="mt-n8 mt-md-n9 text-center">
            <div class="blur-shadow-avatar">
              <MaterialAvatar
                size="xxl"
                class="shadow-xl position-relative z-index-2"
                :image="profilePic"
                alt="Avatar"
              />
            </div>
          </div>
          <div class="row py-7">
            <div
              class="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mx-auto"
            >
              <div
                class="d-flex justify-content-between align-items-center mb-2"
              >
                <h3 class="mb-0">Le fondateur de G.M Partners / G.M Télécommunication Network</h3>
                <!-- <div class="d-block">
                  <MaterialButton
                    class="text-nowrap mb-0"
                    variant="outline"
                    color="success"
                    size="sm"
                    >Follow</MaterialButton
                  >
                </div> -->
              </div>
              <div class="row mb-4">
                <!-- <div class="col-auto">
                  <span class="h6 me-1">323</span>
                  <span>Posts</span>
                </div>
                <div class="col-auto">
                  <span class="h6 me-1">3.5k</span>
                  <span>Followers</span>
                </div>
                <div class="col-auto">
                  <span class="h6 me-1">260</span>
                  <span>Following</span>
                </div> -->
              </div>
              <p class="text-lg mb-0">
                En 2021, <strong>Girard-Monroger</strong>  a fondé G.M TÉLÉCOMMUNICATION avec un partenaire commercial. La première idée commerciale s'appelait "GM TELECOM", un outil de marketing Télécom en 2021 puis dans 27 pays pour proposer solution Télécom et 2022 à crée G.M TELECOMMUNICATION pour des services Hébergement Web, serveur, création de plateforme crypté,cyberattaque. En fin 2022 la création du Groupe G.M PARTNERS à rattacher plusieurs activité professionnels dans 144 pays dans le monde. Est le 1 Janvier 2023 à la création de GM PARTNERS / G.M TELECOMMUNICATION NETWORK pour les deux nouveaux réseau sociale , la gestion bancaire, plusieurs solution pour les professionnelles et l'association. Le fondateur à crée 44 888 emploi dans le monde depuis 2021. avec un chiffres d'affaires pour 2022 de 285 millions d'euros.

                <!-- <br /><a
                  href="javascript:;"
                  class="text-success icon-move-right"
                  >More about me
                  <i class="fas fa-arrow-right text-sm ms-1"></i>
                </a> -->
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
