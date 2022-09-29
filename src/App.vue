<template>
	<q-layout view="hHh lpr fff">
		<NavBar />

		<main>
			<q-page-container>
				<router-view />
			</q-page-container>
		</main>

		<q-footer class="shadow-12" style="background: white">
			<q-toolbar class="row">
				<q-toolbar-title>
					<q-avatar>
						<img src="/logoGitedes.svg" />
					</q-avatar>
				</q-toolbar-title>
				<div class="text-brand">Sponsors</div>
			</q-toolbar>
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
		".appear-left, .appear-right"
	);
	Elements_inViewport.forEach((element) => {
		Observer.observe(element, options);
	});
});
</script>
