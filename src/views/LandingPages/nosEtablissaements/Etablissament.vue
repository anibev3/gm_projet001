<script setup>
// example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import Header from "../../../examples/Header.vue";
// example component
import HorizontalTeamCard from "@/examples/cards/teamCards/HorizontalTeamCard.vue";

// images
import emma from "@/assets/img/team-5.jpg";
import william from "@/assets/img/bruce-mars.jpg";
import ivana from "@/assets/img/ivana-squares.jpg";
import marquez from "@/assets/img/ivana-square.jpg";

// sections
import Footer from "./Sections/AuthorFooter.vue";
import Profile from "./Sections/AuthorProfile.vue";
import Posts from "./Sections/AuthorPosts.vue";
import Contact from "./Sections/AuthorContact.vue";

// image
import image from "@/assets/img/city-profile.jpg";
</script>
<template>
  <DefaultNavbar transparent />
  <Header>
    <div
      class="page-header min-height-400"
      :style="{ backgroundImage: `url(${image})` }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-8"></span>
    </div>
  </Header>
  
  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
    <!-- <section class="pb-5 position-relative bg-gradient-dark mx-n3">
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-start mb-5 mt-5">
          <h3 class="text-white z-index-1 position-relative">
            Rejoignez nous et améliorez vous.
          </h3>
          <p class="text-white opacity-8 mb-0">
            Plusieurs post a pouvoir
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4"
            :image="emma"
            :profile="{ name: 'Ingénieur développeur junior', link: 'javascript:;' }"
            :position="{ label: 'JavaScript - Vue-Js - Node-Js - Angular', color: 'success' }"
            description="Vous serai ammené a trvailler sur des projet de developpement web"
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5"
            :image="william"
            :profile="{ name: 'Ingénieur Techniciens réseau et télécom', link: 'javascript:;' }"
            :position="{ label: 'Chine', color: 'success' }"
            description="Connaissance du Secteur & de l'Industrie des Télécoms Basique2. Conception &am..."
          />
        </div>
      </div>
      <div class="row mt-4">

        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4 z-index-2"
            :image="ivana"
            :profile="{ name: 'Ingénieur Resau et Télécom junior', link: 'javascript:;' }"
            :position="{ label: 'Canada - Etat unie', color: 'success' }"
            description="Date limite: 30 septembre, 2023 Artist is a term applied to a person who engages in an
                    activity deemed to be an art."
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="marquez"
            :profile="{ name: 'ADMINISTRATEUR BASE DE DONNEES H/F', link: 'javascript:;' }"
            :position="{ label: 'Cote d ivoire - Sénégal', color: 'success' }"
            description=" Nous recrutons un(e) Administrateur de base de données"
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="marquez"
            :profile="{ name: 'ADMINISTRATEUR BASE DE DONNEES H/F', link: 'javascript:;' }"
            :position="{ label: 'Cote d ivoire - Sénégal', color: 'success' }"
            description=" Nous recrutons un(e) Administrateur de base de données"
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="marquez"
            :profile="{ name: 'ADMINISTRATEUR BASE DE DONNEES H/F', link: 'javascript:;' }"
            :position="{ label: 'Cote d ivoire - Sénégal', color: 'success' }"
            description=" Nous recrutons un(e) Administrateur de base de données"
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="marquez"
            :profile="{ name: 'ADMINISTRATEUR BASE DE DONNEES H/F', link: 'javascript:;' }"
            :position="{ label: 'Cote d ivoire - Sénégal', color: 'success' }"
            description=" Nous recrutons un(e) Administrateur de base de données"
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="marquez"
            :profile="{ name: 'ADMINISTRATEUR BASE DE DONNEES H/F', link: 'javascript:;' }"
            :position="{ label: 'Cote d ivoire - Sénégal', color: 'success' }"
            description=" Nous recrutons un(e) Administrateur de base de données"
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="marquez"
            :profile="{ name: 'ADMINISTRATEUR BASE DE DONNEES H/F', link: 'javascript:;' }"
            :position="{ label: 'Cote d ivoire - Sénégal', color: 'success' }"
            description=" Nous recrutons un(e) Administrateur de base de données"
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="marquez"
            :profile="{ name: 'ADMINISTRATEUR BASE DE DONNEES H/F', link: 'javascript:;' }"
            :position="{ label: 'Cote d ivoire - Sénégal', color: 'success' }"
            description=" Nous recrutons un(e) Administrateur de base de données"
          />
        </div>
      </div>
    </div>
    </section> -->
    <!-- <Profile /> -->

    <Posts />
  </div>
  
  <!-- <Contact /> -->
  <Footer />
</template>
