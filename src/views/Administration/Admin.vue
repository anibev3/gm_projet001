<template>
    <div>
      <h1>Créer un travailleur</h1>
      <form @submit.prevent="submitForm">
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
          <input type="file" @change="onFichePaieChange" />
        </div>
        <button type="submit">Créer</button>
      </form>
    </div>
  </template>
  
  <script setup>
//   import { useTravailleurStore } from '@/store/modules/travailleur'
  import { ref } from 'vue'
//   import { usePinia } from 'pinia'
  import axios from 'axios'
  
//   const pinia = usePinia()
//   const travailleurStore = useTravailleurStore(pinia)
  
  const nomPrenom = ref('')
  const dateNaissance = ref('')
  const fichePaie = ref(null)
  
  const submitForm = async () => {
    const formData = new FormData()
    formData.append('nom_prenom', nomPrenom.value)
    formData.append('date_naissance', dateNaissance.value)
    formData.append('fiche_paie', fichePaie.value)
  
    try {
      const response = await axios.post('/api/travailleurs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      travailleurStore.addTravailleur(response.data)
      // Rediriger l'utilisateur vers une autre page ou afficher un message de succès
    } catch (error) {
      console.error(error)
      // Afficher un message d'erreur
    }
  }
  
  const onFichePaieChange = (event) => {
    fichePaie.value = event.target.files[0]
  }
  </script>
  