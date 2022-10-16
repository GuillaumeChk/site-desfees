<template>
	<q-page class="q-mb-xl">
		<div class="wrapper">
			<q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
				<div
					class="absolute-bottom bg-transparent text-h3 text-uppercase text-center"
				>
					Réservation
				</div>
			</q-img>

			Résumé de la chambre selectionnée
			<h4 class="q-pa-md q-pt-xl text-uppercase text-weight-light">
				Réservation
			</h4>

			<div class="q-pa-md q-ma-md form">
				<q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md" greedy>
					<q-select
						filled
						rounded
						color="orange"
						v-model="room"
						:options="roomNameOptions"
						label="Chambre"
						lazy-rules="ondemand"
						:rules="[
							(val) =>
								(val && val.length > 0) || 'Veuillez choisir une chambre',
						]"
					/>

					<q-select
						filled
						color="orange"
						v-model="people"
						:options="peopleQuantityOptions"
						label="Occupants"
						lazy-rules="ondemand"
						:rules="[
							(val) =>
								(val && val > 0) || 'Veuillez saisir le nombre d’occupants',
						]"
					/>

					<q-field
						filled
						label="Durée"
						stack-label
						hint="2 clics pour une nuit ou une période"
						color="orange"
						v-model="date"
						lazy-rules="ondemand"
						:rules="[
							(val) => val || 'Veuillez sélectionner une durée (2 clics)',
						]"
					>
						<template v-slot:control>
							<q-date
								v-model="date"
								color="orange"
								class="q-mt-sm full-width"
								minimal
								range
								multiple
							/>
						</template>
					</q-field>

					<q-field
						v-model="acceptConditions"
						lazy-rules="ondemand"
						:rules="[
							(val) =>
								(val && val === true) || 'Veuillez accepter les conditions',
						]"
						color="grey-8"
					>
						<q-toggle
							class="q-mt-xl q-mb-sm"
							v-model="acceptConditions"
							color="orange"
						>
							J'ai lu et accepté les <a href="">conditions</a>
						</q-toggle>
					</q-field>

					<div>
						<q-btn
							rounded
							unelevated
							label="Réserver"
							type="submit"
							color="orange"
						/>
						<q-btn
							rounded
							label="Rétablir"
							type="reset"
							color="orange"
							flat
							class="q-ml-sm"
						/>
					</div>
				</q-form>
			</div>
		</div>
	</q-page>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { ref } from "vue";
import roomsData from "../data/roomsData.json";

let room = ref(null);
let people = ref(null);
let date = ref([]);
let acceptConditions = ref(null);
let reservation = computed(() => {
	return {
		room: room.value,
		people: people.value,
		date: date.value,
	};
});

let roomNameOptions = Array.from(roomsData, (element) => element.name);
let peopleQuantityOptions = [1, 2, 3];

function onSubmit() {
	if (acceptConditions.value !== true) {
		console.log("invalide");
		console.log(reservation);
	} else {
		console.log("valide");
		console.log(reservation);
	}
}

function onReset() {
	room.value = null;
	people.value = null;
	date.value = null;
	acceptConditions.value = false;
}
</script>

<style>
.form {
	max-width: 400px;
	border-radius: 20px;
}
</style>
