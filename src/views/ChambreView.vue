<template>
	<div class="chambre">
		Page chambre
		<h1>{{ chambre.name }}</h1>

		<div>{{ chambre.description }}</div>

		<img :src="chambre.image" />
	</div>
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
import chambres from "../data/chambres.json";
// import  equipments  from '../data/equipments.json'

const route = useRoute();

let chambreName = route.params.roomName;
let chambre = chambres[chambreName];
</script>
