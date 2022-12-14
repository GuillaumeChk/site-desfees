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
			path: "/prestations",
			name: "services",
			component: () => import("../views/Services.vue"),
		},
		{
			path: "/tourisme",
			name: "tourism",
			component: () => import("../views/Tourism.vue"),
		},
		{
			path: "/presse",
			name: "press",
			component: () => import("../views/Press.vue"),
		},
		{
			path: "/photos",
			name: "photos",
			component: () => import("../views/Photos.vue"),
		},
		{
			path: "/videos",
			name: "videos",
			component: () => import("../views/Videos.vue"),
		},
		{
			path: "/avis",
			name: "reviews",
			component: () => import("../views/Reviews.vue"),
		},
		{
			path: "/admin",
			name: "admin",
			component: () => import("../views/Admin.vue"),
		},
		{
			path: "/conditions",
			name: "terms",
			component: () => import("../views/Terms.vue"),
		},
		{
			path: "/paiement-valide",
			name: "payment-success",
			component: () => import("../views/PaymentSuccess.vue"),
		},
		{
			path: "/paiement-annulation",
			name: "payment-cancel",
			component: () => import("../views/PaymentCancel.vue"),
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
