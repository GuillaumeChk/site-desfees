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
					<a
						href="https://www.tripadvisor.fr/Hotel_Review-g2058197-d2058192-Reviews-Domaine_des_Fees-Pretin_Jura_Bourgogne_Franche_Comte.html"
					>
						<q-img
							fit="contain"
							height="60px"
							width="60px"
							src="./assets/icons/TC_2022_L_TRANSPARENT_BG_RGB.svg"
						>
						</q-img>
					</a>

					<a
						href="https://www.gites-de-france.com/fr/bourgogne-franche-comte/jura/domaine-des-fees-chambres-dhotes-et-gite-spa-bi-39g4147"
					>
						<q-img
							fit="contain"
							height="60px"
							width="60px"
							src="./assets/icons/gites-de-france.svg"
						>
						</q-img>
					</a>

					<a
						href="http://www.atout-france.fr/content/decouvrez-les-destinations-labellisees-vignobles-decouvertes/"
					>
						<q-img
							fit="contain"
							height="60px"
							width="60px"
							src="./assets/icons/vignobles-et-decouvertes.svg"
						>
						</q-img>
					</a>

					<a
						href="https://www.jura-tourism.com/gite-chambre-d-hote/domaine-des-feesbr-chambres-dhotes-et-gitebr-spa-bi/"
					>
						<q-img
							fit="contain"
							height="60px"
							width="60px"
							src="./assets/icons/jura-tourisme_compressed.jpg"
						>
						</q-img>
					</a>

					<a
						href="https://www.chambresdhotesdecharme.com/chambre-hote/france/franche-comte/jura/pretin/1692-domaine-des-fees-chambres-dhotes-et-gite-spa-bien-etre.html"
					>
						<q-img
							fit="contain"
							height="60px"
							width="60px"
							src="./assets/icons/charme_compressed.jpg"
						>
						</q-img>
					</a>

					<a href="http://www.tripnbike.com/">
						<q-img
							fit="contain"
							height="60px"
							width="60px"
							src="./assets/icons/tnb-accueil-bikers-2022.png"
						>
						</q-img>
					</a>

					<a href="https://www.facebook.com/chambredhotedesFees">
						<q-img
							fit="contain"
							height="60px"
							width="60px"
							src="./assets/icons/2021_Facebook_icon.svg.png"
						>
						</q-img>
					</a>

					<a href="https://www.instagram.com/domaine_des_fees/">
						<q-img
							fit="contain"
							height="60px"
							width="60px"
							src="./assets/icons/Instagram_logo_2022.svg.png"
						>
						</q-img>
					</a>
				</div>

				<div class="q-pa-xs text-orange-7 text-center">
					<q-btn-dropdown
						class="q-mb-sm"
						menu-anchor="bottom middle"
						menu-self="top middle"
						dropdown-icon="translate"
					>
						<q-list>
							<q-item clickable v-close-popup @click="$i18n.locale = 'fr'">
								<q-item-section>
									<q-item-label>français</q-item-label>
								</q-item-section>
							</q-item>

							<q-item clickable v-close-popup @click="$i18n.locale = 'en'">
								<q-item-section>
									<q-item-label>english</q-item-label>
								</q-item-section>
							</q-item>

							<q-item clickable v-close-popup @click="$i18n.locale = 'de'">
								<q-item-section>
									<q-item-label>deutsch</q-item-label>
								</q-item-section>
							</q-item>

							<q-item clickable v-close-popup @click="$i18n.locale = 'it'">
								<q-item-section>
									<q-item-label>italiano</q-item-label>
								</q-item-section>
							</q-item>

							<q-item clickable v-close-popup @click="$i18n.locale = 'pt'">
								<q-item-section>
									<q-item-label>português</q-item-label>
								</q-item-section>
							</q-item>

							<q-item clickable v-close-popup @click="$i18n.locale = 'ru'">
								<q-item-section>
									<q-item-label>pусский</q-item-label>
								</q-item-section>
							</q-item>

							<q-item clickable v-close-popup @click="$i18n.locale = 'es'">
								<q-item-section>
									<q-item-label>español</q-item-label>
								</q-item-section>
							</q-item>
						</q-list> </q-btn-dropdown
					><br />
					Copyright © 2022 – GuillaumeChk <br />
					desfees.fr •
					<router-link class="text-orange-7" to="/conditions">{{
						$t("terms")
					}}</router-link
					><br />
					{{ $t("footer.droits_reserves") }}
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
