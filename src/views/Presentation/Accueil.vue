<script setup>
import { ref, onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";
import FilledInfoCard from "../../examples/cards/infoCards/FilledInfoCard.vue";

//Vue Material Kit 2 components
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";

// sections
import Information from "../LandingPages/AboutUs/Sections/AboutInformation.vue";
import PresentationCounter from "./Sections/AccueilCounter.vue";
import PresentationPages from "./Sections/PresentationPages.vue";
import PresentationExample from "./Sections/PresentationExample.vue";
import data from "./Sections/Data/designBlocksData";
import BuiltByDevelopers from "./Components/BuiltByDevelopers.vue";
import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";
import PresentationInformation from "./Sections/PresentationInformation.vue";

//images
import vueMkHeader from "@/assets/img/vue-mk-header.jpeg";
import wavesWhite from "@/assets/img/waves-white.svg";
import logoBootstrap from "@/assets/img/logos/bootstrap5.jpg";
import logoTailwind from "@/assets/img/logos/icon-tailwind.jpg";
import logoVue from "@/assets/img/logos/vue.jpg";
import logoAngular from "@/assets/img/logos/angular.jpg";
import logoReact from "@/assets/img/logos/react.jpg";
import logoSketch from "@/assets/img/logos/sketch.jpg";



//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});

onUnmounted(() => {
  body.classList.remove("presentation-page"); 
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>

  <!-- Photo de couverture & Barnner -->
  <Header>
    <div
      class="page-header min-vh-75"
      :style="`background-image: url(${vueMkHeader})`"
      loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1
              class="text-white pt-3 mt-n5 me-2"
              :style="{ display: 'inline-block ' }"
            >
            GM PARTNERS / G.M TÉLÉCOMMUNICATION NETWORK
            </h1>
            <!-- <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
              Start the Development With Bootstrap 5 Design System inspired by
              Material Design.
            </p> -->
          </div>
        </div>
      </div>
    </div>
  </Header>




  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <!-- compteur des  -->
    <PresentationCounter />
    <div class="container">
      <div class="row">
        <div class="row text-center my-sm-5 mt-5">
          <div class="col-lg-6 mx-auto">
            <MaterialBadge color="success" class="mb-3"
              >Booster votre Créactivité avec</MaterialBadge
            >
            <h2 class="">Nos réseaux sociaux</h2>

            <p class="lead">
              La mise en service de nos application de réseau social et la plateforme d'appel pour le secrétaire est prévu pour tres bientot, resté a l'écoute.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Information />
    <!-- <PresentationInformation /> -->
    <!-- <PresentationExample :data="data" /> -->
    
    <!-- <PresentationPages /> -->
    <BuiltByDevelopers />

    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <FilledInfoCard
            class="p-4"
            :color="{ text: 'white', background: 'bg-gradient-success' }"
            :icon="{ component: 'flag', color: 'white' }"
            title="G.M Partners"
            description="Qu'il s'agisse de sécuriser un nom de domaine, de créer un premier site vitrine ou un site Web plus élaboré, de transférer son back-office dans le Cloud ou de déployer des clusters de conteneur, notre portefeuille de produits vous offre les meilleurs applications, serveurs et services..."
            :action="{
              route:
                '/pages/landing-pages/about-us',
              label: { text: 'Commencer', color: 'white' }
            }"
          />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard
            class="px-lg-1 mt-lg-0 mt-4 p-4"
            height="h-100"
            :icon="{ component: 'precision_manufacturing', color: 'success' }"
            title="Fiabilité et sécurité"
            description="Fiabilité et sécurité font partie intégrante de nos produits et de nos services, Notre réseau de data centres, construit par nos soins, garantit performance maximale et..."
            :action="{
              route:
                '/pages/landing-pages/about-us',
              label: { text: 'Lire plus' }
            }"
          />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard
            class="px-lg-1 mt-lg-0 mt-4 p-4"
            :icon="{ component: 'receipt_long', color: 'success' }"
            title="Clients satisfait"
            description="Nos clients sont au centre de nos préoccupations. Un conseiller personnel, interlocuteur privilégié et dédié, à même de donner des conseils d'expert, adaptés aux besoins de nos clients..."
            :action="{
              route:
                '/pages/landing-pages/about-us',
              label: { text: 'Lire plus' }
            }"
          />
        </div>
      </div>
    </div>
    <!-- <PresentationTestimonials /> -->

    <div
      class="container-fluid mt-sm-5 border-radius-xl"
      :style="{
        background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))'
      }"
    >
      <div
        class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl"
        :style="{
          backgroundImage: `url(${wavesWhite})`
        }"
        loading="lazy"
      >
        <span class="mask bg-gradient-dark"></span>
        <div class="container">
          <div class="row">
            <div class="d-flex justify-content-center p-5">
              <div class="col-lg-8 ms-lg-5 text-center">
                <h3 class="text-white">
                  G.M Partners
                </h3>
                <p class="text-white text-md">
                  Commencer deh maintenant a Construire votre avenir
                </p>

                <a
                  href="/pages/landing-pages/etablissament"
                  class="btn btn-sm mb-0 bg-gradient-success px-5 py-3 mt-4"
                  >Voir nos établissements</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="container">
      <div class="row">
        <div class="d-flex flex-column w-100 text-center p-5 mb-8">
          <h3>Les techologie utiliser pour de dévelopment</h3>
          <div class="d-flex justify-content-center mt-3 flex-wrap">
             <a
              href="https://www.creative-tim.com/product/material-kit"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Bootstrap 5 - Most popular front-end component library"
            >
              <img
                :src="logoBootstrap"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>
            <a
              class="opacity-5 ms-3"
              href="#"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Coming Soon"
            >
              <img
                :src="logoTailwind"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a> 
            <a
              href=""
              class="mx-3"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Vue.js - Is a Progressive JavaScript Framework"
            >
              <img
                :src="logoVue"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>
            <a
              class="opacity-5"
              href="#"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Coming Soon"
            >
              <img
                :src="logoAngular"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>
            <a
              href=""
              class="mx-3"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="React – A JavaScript library for building user interfaces"
            >
              <img
                :src="logoReact"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>
            <a
              class="opacity-5"
              href="#"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Coming Soon"
            >
              <img
                :src="logoSketch"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>
          </div>
        </div>
      </div>
    </div> -->
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 ms-auto">
            <h4 class="mb-1">Visiter nos reseau sociaux</h4>
            <!-- <p class="lead mb-0">We deliver the best web products</p> -->
          </div>
          <div class="col-lg-5 me-lg-auto my-lg-auto text-lg-end mt-5">
            <MaterialSocialButton
              route=""
              component="twitter"
              color="twitter"
              label="Twitter"
            />
            <MaterialSocialButton
              route=""
              component="facebook-square"
              color="facebook"
              label="facebook"
            />
            <MaterialSocialButton
              route=""
              component="linkedin"
              color="linkedin"
              label="linkedin"
            />
            <MaterialSocialButton
              route=""
              component="youtube"
              color="youtube"
              label="youtube"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>
