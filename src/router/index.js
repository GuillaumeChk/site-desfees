import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/contact",
			name: "contact",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/Contact.vue"),
		},
		{
			path: "/chambres",
			name: "rooms",
			component: () => import("../views/Rooms.vue"),
		},
		{
			path: "/reservation",
			name: "booking",
			component: () => import("../views/Booking.vue"),
		},
		{
			name: "room",
			path: "/chambre/:roomName",
			component: () => import("../views/Room.vue"),
		},
		{
			path: "/services",
			name: "prestations",
			component: () => import("../views/Services.vue"),
		},
		{
			path: "/tourisme",
			name: "tourism",
			component: () => import("../views/Tourism.vue"),
		},
		{
			path: "/galerie",
			name: "gallery",
			component: () => import("../views/Gallery.vue"),
		},
		{
			path: "/:pathMatch(.*)*", // default
			component: Home,
		},
	],
	scrollBehavior: (to, from, savedPosition) => {
		return savedPosition || { top: 0, left: 0 };
	},
});

export default router;
