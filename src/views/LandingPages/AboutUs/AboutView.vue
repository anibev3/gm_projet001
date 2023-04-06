<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
import Profile from "../Author/Sections/AuthorProfile.vue";
import DefaultInfoCard from "./Sections/DefaultInfoCard.vue";

//image
import bg0 from "@/assets/img/bg9.jpg";

//dep
import Typed from "typed.js";

//sections
import Information from "./Sections/AboutInformation.vue";
import AboutTeam from "./Sections/AboutTeam.vue";
import Featuring from "./Sections/AboutFeaturing.vue";
import Newsletter from "./Sections/AboutNewsletter.vue";

const body = document.getElementsByTagName("body")[0];
//hooks
onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");

  if (document.getElementById("typed")) {
    // eslint-disable-next-line no-unused-vars
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });
  }
});

onUnmounted(() => {
  body.classList.remove("about-us");
  body.classList.remove("bg-gray-200");
});
</script>
<template>
  <DefaultNavbar
    :action="{
      route: 'javascript:;',
      label: 'Connexion',
      color: 'btn-white',
    }"
    transparent
  />
  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-75"
      :style="{ backgroundImage: `url(${bg0})` }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
              G.M <span class="text-white" id="typed"></span>
            </h1>
            <div id="typed-strings">
              <h1>PARTNERS</h1>
              <h1>TÉLÉCOMMUNICATION</h1>
            </div>
         
            <DefaultInfoCard
              color="info"
              title=""
              description="G.M Partners / G.M Télécommunication Netowrk est le partenaire de choix des petites et moyennes entreprises pour les solutions d'hébergement Web et les infrastructures Cloud.

"
            />
            <button type="submit" class="btn bg-white text-dark">
              Voir nos services
            </button>
            <h6 class="text-white mb-2 mt-5">Retrouvez nous sur :</h6>
            <div class="d-flex justify-content-center">
              <a href="javascript:;"
                ><i class="fab fa-facebook text-lg text-white me-4"></i
              ></a>
              <a href="javascript:;"
                ><i class="fab fa-instagram text-lg text-white me-4"></i
              ></a>
              <a href="javascript:;"
                ><i class="fab fa-twitter text-lg text-white me-4"></i
              ></a>
              <a href="javascript:;"
                ><i class="fab fa-google-plus text-lg text-white"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <div class="container mt-sm-5">
    <div
      class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl"
      :style="{
        backgroundImage:
          'url(https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg)'
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark"></span>
      <div class="container">
        <div class="row">
          <!-- <div class="col-lg-6 ms-lg-5"> -->
            <h4 class="text-white">Qui nous sommes :</h4>
            <DefaultInfoCard
              color="info"
              title="G.M Partners / G.M Télécommunication Netowrk"
              description="G.M Partners / G.M Télécommunication Netowrk est le partenaire de choix des petites et moyennes entreprises pour les solutions d'hébergement Web et les infrastructures Cloud. Nous offrons non seulement un portefeuille de produits et de services-clés qui permettent aux entreprises de démarrer et de développer leur activité sur Internet, mais aussi notre expertise en matière d'infrastructure (IaaS). Leader de l'hébergement en Europe, nous gérons plus de 34 millions de contrats et hébergeons plus de 44 millions de noms de domaine au sein de data centers à travers le monde."
            />
            <DefaultInfoCard
              color="info"
              title=""
              description=" Nous aidons les créateurs d'entreprise à effectuer leurs premiers pas sur Internet, nous accompagnons les entrepreneurs qui le souhaitent dans leur désir de croissance et soutenons les grandes entreprises et leurs partenaires pour atteindre leurs objectifs en leur fournissant les moyens de leur ambition. Qu'il s'agisse de sécuriser un nom de domaine, de créer un premier site vitrine ou un site Web plus élaboré, de transférer son back-office dans le Cloud ou de déployer des clusters de conteneur, notre portefeuille de produits vous offre les meilleurs applications, serveurs et services.
"
            />
            <DefaultInfoCard
              color="info"
              title=""
              description=" Fiabilité et sécurité font partie intégrante de nos produits et de nos services. Notre réseau de data centres, construit par nos soins, garantit performance maximale et géo-redondance. Chez G.M PARTNERS / G.M Télécommunication Network dont la maison-mère est basée en Royaume-uni, nous mettons un point d'honneur à perpétuer une tradition de technologie de pointe, de sécurité des données, de protection des données personnelles et de respect de la vie privée.
"
            />
            <DefaultInfoCard
              color="info"
              title=""
              description="Nos clients sont au centre de nos préoccupations. C'est pourquoi nous mettons à leur disposition non seulement des équipes de support locales, mais aussi un service sur mesure et unique dans le monde de l'hébergement Web : un conseiller personnel, interlocuteur privilégié et dédié, à même de donner des conseils d'expert, adaptés aux besoins de nos clients.
"
            />
            <a
              href="#"
              class="text-white icon-move-right"
             >
              Nos établissements
              <i class="fas fa-arrow-right text-sm ms-1"></i>
            </a>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
    <Information />
    
    <AboutTeam />
<br>
<br>

    <Profile />
    <Featuring />
  <Contact />

    <!-- <Newsletter /> -->
  </div>
  <DefaultFooter />
</template>
