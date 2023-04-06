<!-- <template>
  <div>
    <h1>Créer un travailleur</h1>
    <form @submit.prevent="createTravailleur">
      <div>
        <label>Nom et prénom</label>
        <input type="text" v-model="nomPrenom" />
      </div>
      <div>
        <label>Date de naissance</label>
        <input type="date" v-model="dateNaissance" />
      </div>
      <div>
        <label>Fiche de paie</label>
        <input type="file" v-on:change="handleFichePaieChange" />
      </div>
      <button type="submit">Créer</button>
    </form>
  </div>
</template> -->

<script>
import { defineComponent, ref } from 'vue'
// import { useTravailleurStore } from '@/store/modules/travailleur'
// import { usePinia } from 'pinia'
// import axios from 'axios'




import { onMounted } from "vue";
// import { useAuthenticationStore } from "@/store/modules/authentication";
// import { ref } from "vue";

// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/examples/Header.vue";

//Vue Material Kit 2 components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";



export default defineComponent({
  setup() {

    onMounted(() => {
      setMaterialInput();
    });
    // const pinia = usePinia()
    // const travailleurStore = useTravailleurStore(pinia)

    const nomPrenom = ref('')
    const dateNaissance = ref('')
    const fichePaie = ref(null)

    const handleFichePaieChange = (event) => {
      fichePaie.value = event.target.files[0]
    }

    const createTravailleur = async () => {
      const formData = new FormData()
      formData.append('nom_prenom', nomPrenom.value)
      formData.append('date_naissance', dateNaissance.value)
      formData.append('fiche_paie', fichePaie.value)
      console.log(formData);

      try {
      console.log(nomPrenom.value);
      console.log(dateNaissance.value);
      console.log(fichePaie.value);
        console.log(formData);
        // const response = await axios.post('/api/travailleurs', formData, {
        //   headers: {
        //     'Content-Type': 'multipart/form-data'
        //   }
        // })
        // travailleurStore.addTravailleur(response.data)
        // Rediriger l'utilisateur vers une autre page ou afficher un message de succès
      } catch (error) {
        console.error(error)
        // Afficher un message d'erreur
      }
    }

    return {
      nomPrenom,
      dateNaissance,
      fichePaie,
      handleFichePaieChange,
      createTravailleur,
      MaterialButton
    }
  }
})
</script>

<template>
  <DefaultNavbar transparent />
  <Header>
    <div
      class="page-header align-items-start min-vh-100"
      :style="{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80)'
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div
                class="card-header p-0 position-relative mt-n4 mx-3 z-index-2"
              >
                <div
                  class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1"
                >
                  <h4
                    class="text-white font-weight-bolder text-center mt-2 mb-0"
                  >
                    Connecter vous
                  </h4>
                  <!-- <div class="row mt-3">
                    <div class="col-2 text-center ms-auto">
                      <a class="btn btn-link px-3" href="javascript:;">
                        <i class="fa fa-facebook text-white text-lg"></i>
                      </a>
                    </div>
                    <div class="col-2 text-center px-1">
                      <a class="btn btn-link px-3" href="javascript:;">
                        <i class="fa fa-github text-white text-lg"></i>
                      </a>
                    </div>
                    <div class="col-2 text-center me-auto">
                      <a class="btn btn-link px-3" href="javascript:;">
                        <i class="fa fa-google text-white text-lg"></i>
                      </a>
                    </div>
                  </div> -->
                  <br>
                </div>
              </div>
              <div class="card-body">
                <form role="form" class="text-start" >

                  <div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
</div>

                  <div class="text-center" >

                  </div>


                  <p class="mt-4 text-sm text-center">
                    Pas encore de compte ?
                    <a
                      href="/pages/landing-pages/signup"
                      class="text-success text-gradient font-weight-bold"
                      >Inscrivez vous</a
                    >
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer position-absolute bottom-2 py-2 w-100">
        <div class="container">
          <div class="row align-items-center justify-content-lg-between">
            <div class="col-12 col-md-6 my-auto">
              <div
                class="copyright text-center text-sm text-white text-lg-start"
              >
                © {{ new Date().getFullYear() }}, Fait par
                <!-- <i class="fa fa-heart" aria-hidden="true"></i> -->
                 by
                <a
                  href=""
                  class="font-weight-bold text-white"
                  target="_blank"
                  >G.M Partners</a
                >
                <!-- for a better web. -->
              </div>
            </div>
            <div class="col-12 col-md-6">
              <ul
                class="nav nav-footer justify-content-center justify-content-lg-end"
              >
                <li class="nav-item">
                  <a
                    href="https://www.creative-tim.com"
                    class="nav-link text-white"
                    target="_blank"
                    >Creative Tim</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    href="https://www.creative-tim.com/presentation"
                    class="nav-link text-white"
                    target="_blank"
                    >About Us</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    href="https://www.creative-tim.com/blog"
                    class="nav-link text-white"
                    target="_blank"
                    >Blog</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    href="https://www.creative-tim.com/license"
                    class="nav-link pe-0 text-white"
                    target="_blank"
                    >License</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>

  </Header>
</template>
