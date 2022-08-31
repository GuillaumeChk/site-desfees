<template>
	<div class="chambre">
		<p>Current route name: {{ $route.name }}</p>
		<h1>chambre{{ chambre.name }}</h1>
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

console.log(route);

// let chambreName = route.params.pathName;
// let chambre = chambres.chambreName;
</script>
