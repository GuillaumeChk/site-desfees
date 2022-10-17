<template>
	<q-page class="q-mb-xl">
		<section class="section-video">
			<div class="video-container">
				<q-img src="https://cdn.quasar.dev/img/parallax2.jpg" class="carousel">
					<div
						class="absolute-bottom bg-transparent text-h3 text-uppercase text-center"
					>
						Réservation
					</div>
				</q-img>
			</div>
		</section>

		<div class="wrapper">
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
						hide-bottom-space
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
						hide-bottom-space
					/>

					<div>
						<q-field
							filled
							label="Durée"
							stack-label
							color="orange"
							v-model="date"
							lazy-rules="ondemand"
							:rules="[
								(val) => val.length > 0 || 'Veuillez sélectionner une durée',
							]"
							hide-bottom-space
						>
							<template v-slot:control>
								<q-date
									v-model="date"
									flat
									square
									color="orange"
									class="q-mt-sm full-width"
									mask="DD/MM/YYYY"
									minimal
									range
									multiple
								/>
							</template>
						</q-field>
						<div
							class="q-pa-sm bg-orange-5 text-white"
							v-if="date && date.length > 0"
						>
							<div v-for="day in date">
								{{
									day.from !== undefined ? `Du ${day.from} au ${day.to}` : day
								}}
							</div>
						</div>
						<q-expansion-item
							icon="help"
							label="Comment sélectionner une durée ?"
							header-class="text-info"
							dense-toggle
						>
							<q-card class="q-pa-md q-mx-md text-grey-8 bg-cyan-1">
								<p>Une nuit : cliquez deux fois.</p>
								<p>
									Plusieurs nuits : cliquez sur la date de début, puis celle de
									fin.
								</p>
								<p class="q-mb-none text-italic">
									Vous pouvez accumuler plusieurs nuits et/ou périodes.
								</p>
							</q-card>
						</q-expansion-item>
					</div>

					<!-- <q-field
						v-model="acceptConditions"
						lazy-rules="ondemand"
						:rules="[
							(val) =>
								(val && val === true) || 'Veuillez accepter les conditions',
						]"
						color="grey-8"
						class="last-rounded q-mb-lg"
						borderless
						hide-bottom-space
					>
						<q-toggle
							v-model="acceptConditions"
							color="orange"
							label="J'ai lu et accepté les conditions"
						/>
					</q-field> -->

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
// let acceptConditions = ref(false);
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
	// if (acceptConditions.value !== true) {
	// 	console.log("invalide");
	// 	console.log(reservation);
	// } else {
	// 	console.log("valide");
	// 	console.log(reservation);
	// }
}

function onReset() {
	room.value = null;
	people.value = null;
	date.value = null;
	// acceptConditions.value = false;
}
</script>

<style>
.form {
	max-width: 400px;
	border-radius: 20px;
}

.last-rounded {
	background-color: #eeeeee;
	border-bottom-left-radius: 30px;
	border-bottom-right-radius: 30px;
}
</style>
