import { createRouter, createWebHistory } from "vue-router";

// Importare le pagine
import Dashboard from './pages/Dashboard.vue';
import Settings from './pages/Settings.vue';



// definiamo le rotte
const routes = [
 

  {
    path: "/dashboard", 
    name: "dashboard", 
    component: Dashboard
  },
	// ... altre rotte
  {
    // Show di un singolo post
    path: "/settings",
    name: "settings",
    component: Settings,
  }
]

// creazione istanza di Router
const router = createRouter({
  history: createWebHistory(),
  routes
});

// esportiamo l'istanta router per poterla usare dentro main.js
export default router ;