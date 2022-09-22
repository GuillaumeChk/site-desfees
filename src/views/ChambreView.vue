<template>
	<q-page>
		<section class="section-video">
			<div class="video-container">
				<q-carousel
					animated
					v-model="slide"
					infinite
					:autoplay="autoplay"
					transition-prev="fade"
					transition-next="fade"
					@mouseenter="autoplay = false"
					@mouseleave="autoplay = true"
					class="carousel"
				>
					<q-carousel-slide
						:name="1"
						:img-src="getImageUrl(chambre.imageUrl)"
					/>
					<q-carousel-slide
						:name="2"
						:img-src="getImageUrl(chambre.imageUrl)"
					/>
					<q-carousel-slide
						:name="3"
						:img-src="getImageUrl(chambre.imageUrl)"
					/>
					<q-carousel-slide
						:name="4"
						:img-src="getImageUrl(chambre.imageUrl)"
					/>
				</q-carousel>
			</div>
		</section>

		<section class="q-px-lg q-pt-lg">
			<div class="wrapper q-gutter-y-xl">
				<h3 class="cursive text-center appear-left">{{ chambre.name }}</h3>

				<p class="appear-left">{{ chambre.description }}</p>
			</div>
		</section>

		<CustomDivider class="appear-left" />

		<section class="wrapper">
			<q-carousel
				swipeable
				animated
				arrows
				v-model="slide2"
				v-model:fullscreen="fullscreen"
				infinite
				class="carousel2"
			>
				<q-carousel-slide
					v-for="(slide, key, index) in chambreImages"
					:key="slide.name"
					:name="index"
					:img-src="getImageUrlFromAssets(slide)"
				/>

				<template v-slot:control>
					<q-carousel-control position="bottom-right" :offset="[18, 18]">
						<q-btn
							round
							flat
							color="black"
							text-color="white"
							:icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
							@click="fullscreen = !fullscreen"
						/>
					</q-carousel-control>
				</template>
			</q-carousel>
		</section>
		<section class="q-pa-lg q-gutter-y-lg wrapper">
			<h5 class="text-uppercase appear-left">Tarifs</h5>

			<p class="appear-left">
				<strong> Prix : {{ chambre.tarifs[0] }}€/nuit</strong> avec petit
				déjeuner régional pour 2 personnes.
				<br />
				Une <strong>remise de 10% sur la 2ème nuitée</strong> vous sera déduite
				au paiement final.
			</p>

			<div class="q-pt-none q-pb-md appear-left">
				<h6>Tarif des nuitées (à partir du 1 avril 2021)</h6>
				<div class="q-pl-md">
					<div class="row justify-between">
						<span>Du dimanche au vendredi :</span>
						<span> {{ chambre.tarifs[0] }}€ </span>
					</div>
					<div class="row justify-between">
						<span>
							Du vendredi au dimanche, Jours fériés, spéciaux, vacances scolaire
							:
						</span>
						<span> {{ chambre.tarifs[1] }}€ </span>
					</div>
				</div>
			</div>
			<p class="appear-left">
				<strong>
					Avec petit déjeuner régional pour 2 personnes. <br />
					La taxe de séjour est incluse avec un accès à la piscine, kneippwalk
					et wifi. <br />
					Amis à 4 pattes compris.</strong
				>
			</p>
		</section>

		<section class="wrapper text-center q-py-lg">
			<q-btn
				class="brand text-white appear-right"
				unelevated
				size="lg"
				label="Réserver cette chambre"
			></q-btn>
		</section>

		<CustomDivider class="appear-left" />

		<section class="q-px-lg q-pb-xl q-pt-xs q-gutter-y-md items-center">
			<div class="wrapper q-gutter-y-lg">
				<h5 class="text-uppercase appear-left">Équipements inclus</h5>

				<q-list bordered separator class="appear-left">
					<q-expansion-item
						v-for="equipment in chambreEquipments"
						:key="equipment.name"
						group="somegroup"
						:icon="equipment.icon"
						:label="equipment.name"
						header-class="text-uppercase"
					>
						<EquipmentCard :equipment="equipment" :chambres="chambresData" />
					</q-expansion-item>
				</q-list>
			</div>
		</section>
	</q-page>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import chambresData from "../data/chambresData.json";
import equipmentsData from "../data/equipmentsData.json";
import EquipmentCard from "../components/EquipmentCard.vue";
import CustomDivider from "../components/CustomDivider.vue";

// const chambreImagesSlides = [
// 	{
// 		id: 1,
// 		url: "https://cdn.quasar.dev/img/mountains.jpg",
// 	},
// 	{
// 		id: 2,
// 		url: "https://cdn.quasar.dev/img/parallax1.jpg",
// 	},
// 	{
// 		id: 3,
// 		url: "https://cdn.quasar.dev/img/parallax2.jpg",
// 	},
// 	{
// 		id: 4,
// 		url: "https://cdn.quasar.dev/img/quasar.jpg",
// 	},
// ];

const route = useRoute();

function getImageUrl(subPath) {
	return new URL(`../assets/${subPath}`, import.meta.url).href;
}
function getImageUrlFromAssets(subPath) {
	console.log(new URL(`${subPath.name}`, import.meta.url).href);
	return new URL(`${subPath.name}`, import.meta.url).href;
}

let chambreName = route.params.roomName;
let chambre = chambresData.find((chambre) => chambre.pathName === chambreName);

// filter only equiped equipments by the chambre
let chambreEquipments = [];
equipmentsData.forEach((equipment) => {
	if (equipment.chambres.includes(chambreName)) {
		chambreEquipments.push({
			...equipment,
		});
	}
});

// import all images from chambre folder
let chambreImages = {};
switch (chambre.index) {
	case 1:
		chambreImages = import.meta.glob(
			"../assets/chambres/etoiles/*.(jpg|JPG|png|PNG)",
			{ as: "url" }
		);
		break;
	case 2:
		chambreImages = import.meta.glob(
			"../assets/chambres/melusine/*.(jpg|JPG|png|PNG)",
			{ as: "url" }
		);
		break;

	case 3:
		chambreImages = import.meta.glob(
			"../assets/chambres/reves/*.(jpg|JPG|png|PNG)",
			{ as: "url" }
		);
		break;
	case 4:
		chambreImages = import.meta.glob(
			"../assets/chambres/romantique/*.(jpg|JPG|png|PNG)",
			{ as: "url" }
		);
		break;
	case 5:
		chambreImages = import.meta.glob(
			"../assets/chambres/salina/*.(jpg|JPG|png|PNG)",
			{ as: "url" }
		);
		break;
	case 6:
		chambreImages = import.meta.glob(
			"../assets/chambres/gite/*.(jpg|JPG|png|PNG)",
			{ as: "url" }
		);
		break;
}
// console.log(chambreImages);

const slide = ref(1);
const slide2 = ref(1);
const autoplay = ref(true);
const fullscreen = ref(false);
</script>

<style lang="scss">
.images-chambre img {
	max-width: 30%;
}
.wrapper {
	max-width: 1300px;
	margin: 0 auto;
	position: relative;
}

@media (min-width: 1024px) {
	.wrapper {
		max-width: 1300px;
		margin: 0 auto;
		position: relative;
		width: calc(100% - 60px);
	}
}
.video-container {
	background-color: black;
	overflow: hidden;
	height: 100%;
	position: absolute;
	width: 100%;
	z-index: 0;
}

.video-container > .carousel {
	height: 100%;
	left: 0;
	object-fit: cover;
	position: absolute;
	top: 0;
	width: 100%;
}
.carousel2 {
	min-height: 63vh;
	object-fit: contain;
}
.section-video {
	overflow: hidden;
	position: relative;
	width: 100%;
	z-index: 1;

	background-color: black;
	display: flex;
	flex-direction: column;
	min-height: 350px;
	justify-content: flex-end;

	margin-top: -66px;
}

@media (min-width: 1024px) {
	.chambre {
		min-height: 100vh;
		display: flex;
		align-items: center;
	}
}

@media (min-width: 1440px) {
	.section-video {
		overflow: hidden;
		position: relative;
		width: 100%;
		z-index: 1;

		background-color: black;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		justify-content: flex-end;

		margin-top: -66px;
	}
}
</style>
