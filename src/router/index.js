import { createRouter, createWebHistory } from "vue-router";
import AccueilView from "../views/AccueilView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "accueil",
			component: AccueilView,
		},
		{
			path: "/contact",
			name: "contact",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/ContactView.vue"),
		},
		{
			path: "/chambres",
			name: "chambres",
			component: () => import("../views/ChambresView.vue"),
		},
		{
			name: "chambre",
			path: "/chambre/:roomName",
			component: () => import("../views/ChambreView.vue"),
		},
		{
			path: "/prestations",
			name: "prestations",
			component: () => import("../views/PrestationsView.vue"),
		},
		{
			path: "/tourisme",
			name: "tourisme",
			component: () => import("../views/TourismeView.vue"),
		},
		{
			path: "/galeries",
			name: "galeries",
			component: () => import("../views/GaleriesView.vue"),
		},
	],
});

export default router;
