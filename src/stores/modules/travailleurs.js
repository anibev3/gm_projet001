import { defineStore } from 'pinia';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const useTravailleurStore = defineStore('travailleur', {
  state: () => ({
    travailleurs: [],
    travailleur: null,
  }),
  actions: {
    async fetchTravailleurs() {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/travailleurs`);
        this.travailleurs = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchTravailleur(id) {
        try {
          const response = await axios.get(`${API_BASE_URL}/api/travailleurs/${id}`);
          this.travailleur = response.data;
        } catch (error) {
          console.error(error);
        }
      },
      async updateTravailleur(travailleur) {
        try {
          const response = await axios.put(`${API_BASE_URL}/travailleurs/${travailleur.id}`, travailleur)
          this.travailleur = response.data
          const index = this.travailleurs.findIndex(t => t.id === travailleur.id)
          this.travailleurs.splice(index, 1, travailleur)
        } catch (error) {
          console.error(error)
        }
      },
      async deleteTravailleur(id) {
        try {
          await axios.delete(`${API_BASE_URL}/travailleurs/${id}`);
          this.travailleurs = this.travailleurs.filter((t) => t.id !== id);
        } catch (error) {
          console.error(error);
        }
      },
  },
});



// Pour afficher la liste des travailleur
{/* <template>
  <div>
    <ul>
      <li v-for="travailleur in travailleurStore.travailleurs" :key="travailleur.id">
        {{ travailleur.nom }} {{ travailleur.prenom }}
      </li>
    </ul>
    <button @click="fetchTravailleurs">Charger les travailleurs</button>
  </div>
</template>

<script>
import { useTravailleurStore } from '@/stores/travailleur';

export default {
  setup() {
    const travailleurStore = useTravailleurStore();

    const fetchTravailleurs = async () => {
      await travailleurStore.fetchTravailleurs();
    };

    return { travailleurStore, fetchTravailleurs };
  },
};
</script> */}
