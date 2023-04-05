<script setup>
// example components
import TransparentBlogCard from "../../../../examples/cards/blogCards/TransparentBlogCard.vue";
import BackgroundBlogCard from "../../../../examples/cards/blogCards/BackgroundBlogCard.vue";

//Vue Material Kit 2 components
import post1 from "@/assets/img/examples/testimonial-6-2.jpg";
import post2 from "@/assets/img/examples/testimonial-6-3.jpg";
import post3 from "@/assets/img/examples/blog-9-4.jpg";
import post4 from "@/assets/img/examples/blog2.jpg";
</script>
<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mb-5">Nos établissements</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-12 col-12" style="margin-bottom: 10px;">
          <BackgroundBlogCard
            :image="post4"
            title="GM PARTNERS / G.M TÉLÉCOMMUNICATION"
            description="groupes international"
          />
        </div>
        <div class="col-lg-3 col-md-12 col-12" style="margin-bottom: 10px;">
          <BackgroundBlogCard
            :image="post4"
            title="G.M GIRARD-MONROGER"
            description="groupes international"
          />
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard
            image="https://www.maltep.com/img/cms/Secteurs%20activit%C3%A9/Telecoms.png"
            title="G.M Télécommunication"
            description=""
          />
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard
            image="https://static.wixstatic.com/media/e05b36_f2130b5ee8384957a8583e6ea6660cb1~mv2.jpg/v1/fill/w_1300,h_868,al_c/e05b36_f2130b5ee8384957a8583e6ea6660cb1~mv2.jpg"
            title="G.M Télécommunication Network"
            description=""
          />
        </div>

      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard
            image="https://mms.businesswire.com/media/20131016006033/fr/387634/5/LR_R%26D_Centre.jpg"
            title="MG Health Beauty Systemes"
            description=""
          />
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard
            image="https://www.lesaffaires.com/uploads/images/normal/c71d7943ad5cd3448209b60dc0445976.jpg"
            title="GMBANK"
            description=""
          />
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard
            image="https://ibp.info6tm.fr/api/v1/files/5efb05b8d286c2532705e7e5/methodes/article_small/image.jpg"
            title="G.M EXPRESS LOGISTIQUE"
            description=""
          />
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard
            image="https://www.presse-citron.net/app/uploads/2021/11/pexels-tima-miroshnichenko-5380664.jpg"
            title="G.M Cyberattaque"
            description=""
          />
        </div>

      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard
            image="https://lte.ma/wp-content/uploads/2015/06/Togo-Telecom-veut-aller-vite_ng_image_full.jpg"
            title="G.M Télécom"
            description=""
          />
        </div>
        <!-- <div class="col-lg-3 col-md-12 col-12">
          <BackgroundBlogCard
            :image="post4"
            title="Flexible work hours"
            description="Rather than worrying about switching offices every couple years, you stay in the same place."
          />
        </div> -->
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard
            image="https://www.groupe-essor.ci/wp-content/uploads/2017/10/secretaire-bilingue-groupe-essor.jpg"
            title="Secrétaire GM TELECOMMUNICATION NETWORK"
            description=""
          />
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard
            image="https://cdn-s-www.lalsace.fr/images/3C2953D9-7EFA-47B0-BD01-D186A0C5CE3A/NW_raw/les-encheres-degressives-ne-sont-pas-gage-de-bon-plan-assure-pour-les-acheteurs-potentiels-car-les-mises-a-prix-sont-assez-elevees-le-premier-acheteur-a-se-manifester-remporte-la-mise-sauf-si-le-vendeur-en-decide-autrement-photo-adobe-1576872908.jpg"
            title="G.M ENCHÈRES"
            description=""
          />
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard
            image="https://www.larousse.fr/encyclopedie/data/images/1007249-Supervision_dun_r%C3%A9seau_de_t%C3%A9l%C3%A9communication.jpg"
            title="GM SOLUTION TELECOMMUNICATION"
            description=""
          />
        </div>
        <!-- <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard
            :image="post3"
            title="MG Health Beauty Systemes"
            description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
          />
        </div> -->
        <!-- <div class="col-lg-3 col-md-12 col-12">
          <BackgroundBlogCard
            :image="post4"
            title="Flexible work hours"
            description="Rather than worrying about switching offices every couple years, you stay in the same place."
          />
        </div> -->
        <!-- <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard
            :image="post3"
            title="MG Health Beauty Systemes"
            description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
          />
        </div> -->
      </div>
    </div>
  </section>
</template>
