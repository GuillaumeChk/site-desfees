<template>
	<q-pages>
		<section class="section-video">
			<div class="video-container">
				<q-img
					src="../assets/rooms/exterieur/Pont_tonnelle_et_végétation_compressed60_033.jpg"
					class="carousel"
				>
					<div
						class="absolute-center bg-transparent text-h4 text-uppercase text-center text-weight-light"
						style="letter-spacing: 4px"
					>
						Administration
					</div>
				</q-img>
			</div>
		</section>

		<div class="wrapper">
			<!-- <h4 class="q-pa-md q-pt-xl text-uppercase text-weight-light">Contact</h4> -->

			<section class="q-pa-md q-pl-lg q-gutter-y-md">
				<p>
					Cette page est destinée à l'administration du site. <br />
					Elle ne contient aucune donnée sensible.
					<br />
					<br />
					Si vous êtes arrivé par hasard, vous pouvez revenir à l'accueil en
					cliquant sur le bouton ci-dessous.
				</p>

				<q-btn rounded unelevated label="Accueil" color="orange" to="/" />
			</section>

			<CustomDivider></CustomDivider>

			<div class="q-gutter-y-md q-py-xl">
				<h5>Accès réservé à l'administration</h5>

				<q-input
					v-model="password"
					filled
					:type="isPwd ? 'password' : 'text'"
					hint="Mot de passe"
					color="orange"
					style="max-width: 500px"
				>
					<template v-slot:append>
						<q-icon
							:name="isPwd ? 'visibility_off' : 'visibility'"
							class="cursor-pointer"
							@click="isPwd = !isPwd"
						/>
					</template>
				</q-input>

				<div v-if="password === 'mdp'"></div>

				<FullCalendar :options="calendarOptions" />
			</div>
		</div>
	</q-pages>
</template>

<script setup>
import { ref } from "vue";
import CustomDivider from "../components/CustomDivider.vue";

import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

let password = ref("");
let isPwd = ref(true);

let calendarOptions = {
	plugins: [dayGridPlugin, interactionPlugin],
	initialView: "dayGridMonth",
};
</script>
