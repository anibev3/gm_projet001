<script setup>
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Pays"
                description="Nous sommes dans 97 pays du monde"
                :count="97"
                suffix=""
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Chiffre d'affaire"
                description="chiffre d'affaires en 2022 de 285 Millions d'euros"
                :count="285"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4">
              <DefaultCounterCard
                color="success"
                title="Salariés et Indépendant"
                description="avec un total de 45 000 salaries dans les 97 pays du monde."
                :count="45000"
                :duration="3000"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
