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
						img-src="https://cdn.quasar.dev/img/mountains.jpg"
					/>
					<q-carousel-slide :name="2" :img-src="chambre.image" />
					<q-carousel-slide :name="3" :img-src="chambre.image" />
					<q-carousel-slide :name="4" :img-src="chambre.image" />
				</q-carousel>
			</div>
		</section>

		<section class="q-pa-lg q-gutter-md brand-4">
			<div class="wrapper">
				<h3 class="cursive">{{ chambre.name }}</h3>

				<img :src="chambre.image" />

				<div>{{ chambre.description }}</div>
			</div>
		</section>

		<section class="q-pa-lg q-gutter-md items-center">
			<div class="wrapper">
				<h5 class="text-uppercase">Équipements inclus</h5>
				<div class="q-gutter-lg q-px-lg row">
					<EquipmentCard
						v-for="equipment in equipments"
						:key="equipment.name"
						:equipment="equipment"
						:chambres="chambres"
					/>
				</div>
			</div>

			<div>
				<h5 class="text-uppercase">Tarifs</h5>
			</div>

			<div>
				<h5 class="text-uppercase">Réserver</h5>
			</div>
		</section>
	</q-page>
</template>

<style>
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

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import chambres from "../data/chambres.json";
import equipments from "../data/equipments.json";
import EquipmentCard from "../components/EquipmentCard.vue";

const route = useRoute();

let chambreName = route.params.roomName;
let chambre = chambres[chambreName];

const slide = ref(1);
const autoplay = ref(true);
</script>
