<template>
	<q-page>
		<q-carousel
			animated
			v-model="slide"
			infinite
			:autoplay="autoplay"
			transition-prev="fade"
			transition-next="fade"
			@mouseenter="autoplay = false"
			@mouseleave="autoplay = true"
			height="300px"
		>
			<q-carousel-slide :name="1" :img-src="chambre.image" />
			<q-carousel-slide :name="2" :img-src="chambre.image" />
			<q-carousel-slide :name="3" :img-src="chambre.image" />
			<q-carousel-slide :name="4" :img-src="chambre.image" />
		</q-carousel>

		<section class="wrapper q-pa-lg q-gutter-md brand-4">
			<h3 class="cursive">{{ chambre.name }}</h3>

			<img :src="chambre.image" />

			<div>{{ chambre.description }}</div>
		</section>

		<section class="wrapper q-pa-lg q-gutter-md items-center">
			<div>
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
@media (min-width: 1024px) {
	.chambre {
		min-height: 100vh;
		display: flex;
		align-items: center;
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
