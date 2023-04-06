import { createPinia } from 'pinia'
import { useAppStore } from './modules/bootstrap/bootstrap_'
// import { useAuthenticationStore } from './modules/authentication'
const app = createPinia()

app.use(useAppStore);
// app.use(useAuthenticationStore);

export default app