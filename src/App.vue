<template>
	<q-layout view="hHh lpr fff">
		<NavBar />

		<main>
			<q-page-container>
				<router-view />
			</q-page-container>
		</main>

		<q-footer class="shadow-12" style="background: white">
			<div class="wrapper q-px-md q-py-md q-gutter-y-lg">
				<div class="row justify-evenly items-center q-gutter-md">
					<q-img
						fit="contain"
						height="50px"
						width="50px"
						src="src/assets/gites-de-france.svg"
					>
					</q-img>

					<q-img
						fit="contain"
						height="50px"
						width="50px"
						src="src/assets/vignobles-et-decouvertes.svg"
					>
					</q-img>

					<q-img
						fit="contain"
						height="50px"
						width="50px"
						src="src/assets/jura-tourisme_compressed.jpg"
					>
					</q-img>

					<q-img
						fit="contain"
						height="50px"
						width="50px"
						src="src/assets/charme_compressed.jpg"
					>
					</q-img>

					<q-img
						fit="contain"
						height="50px"
						width="50px"
						src="src/assets/tnb-accueil-bikers-2022.png"
					>
					</q-img>

					<q-img
						fit="contain"
						height="50px"
						width="50px"
						src="src/assets/tnb-accueil-bikers-2022.png"
					>
					</q-img>

					<q-img
						fit="contain"
						height="50px"
						width="50px"
						src="src/assets/tnb-accueil-bikers-2022.png"
					>
					</q-img>

					<q-img
						fit="contain"
						height="50px"
						width="50px"
						src="src/assets/tnb-accueil-bikers-2022.png"
					>
					</q-img>
				</div>
				<div class="q-pa-xs text-brand text-center">
					Copyright © 2022 <br />
					desfees.fr <br />
					All Rights Reserved.
				</div>
			</div>
		</q-footer>
	</q-layout>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";

import NavBar from "./components/NavBar.vue";
import { onMounted } from "vue";

// Animate on scroll (when visible)
onMounted(() => {
	const inViewport = (entries, observer) => {
		entries.forEach((entry) => {
			entry.target.classList.toggle("show", entry.isIntersecting);
		});
	};

	const Observer = new IntersectionObserver(inViewport);
	let options = {
		root: null,
		rootMargin: "0px",
		threshold: 1,
	};

	// Attach observer to every [data-inviewport] element:
	const Elements_inViewport = document.querySelectorAll(
		".appear-left, .appear-right, .appear-bottom"
	);
	Elements_inViewport.forEach((element) => {
		Observer.observe(element, options);
	});
});
</script>
