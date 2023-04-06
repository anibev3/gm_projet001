// import { defineStore } from 'pinia'
// import axios from 'axios'

// const apiClient = axios.create({
// //   baseURL: 'https://api.example.com/',
// })

// export const useAuthenticationStore = defineStore({
//   id: 'authentication',
//   state: () => ({
//     isAuthenticated: false,
//     user: null,
//     token: null,
//     error: null,
//   }),
//   actions: {
//     async login(email, password) {
//       try {
//         const response = await apiClient.post('/login', {
//           email,
//           password,
//         })
//         const { user, token } = response.data
//         this.isAuthenticated = true
//         this.user = user
//         this.token = token
//         this.error = null
//         return user
//       } catch (error) {
//         this.isAuthenticated = false
//         this.user = null
//         this.token = null
//         this.error = error.response.data.message
//         throw error
//       }
//     },
//     async logout() {
//       try {
//         await apiClient.post('/logout')
//         this.isAuthenticated = false
//         this.user = null
//         this.token = null
//         this.error = null
//       } catch (error) {
//         this.isAuthenticated = false
//         this.user = null
//         this.token = null
//         this.error = error.response.data.message
//         throw error
//       }
//     },
//     // async getUser() {
//     //   try {
//     //     const response = await apiClient.get('/user')
//     //     const user = response.data
//     //     this.isAuthenticated = true
//     //     this.user = user
//     //     this.error = null
//     //     return user
//     //   } catch (error) {
//     //     this.isAuthenticated = false
//     //     this.user = null
//     //     this.token = null
//     //     this.error = error.response.data.message
//     //     throw error
//     //   }
//     // },
//   },
// })
