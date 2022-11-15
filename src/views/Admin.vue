<template>
	<q-page>
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
					Cette page est destinée à l'administration du site, à des fins
					d'organisation. <br />
					Elle ne donne accès à aucune donnée sensible.
					<br />
					<br />
					Si vous êtes arrivé par hasard, vous pouvez revenir à l'accueil en
					cliquant sur le bouton ci-dessous.
				</p>

				<q-btn rounded unelevated label="Accueil" color="orange" to="/" />
			</section>

			<CustomDivider></CustomDivider>

			<div class="q-px-md q-gutter-y-md q-py-xl">
				<h5>Accès réservé à l'administration</h5>

				<q-input
					v-model="password"
					filled
					:type="isPwd ? 'password' : 'text'"
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

				<div v-if="password === 'mdp'" class="q-mt-xl q-gutter-y-md">
					<h6 class="text-uppercase">Calendrier des réservations</h6>
				</div>
				<FullCalendar :options="calendarOptions" />
			</div>
		</div>
	</q-page>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import CustomDivider from "../components/CustomDivider.vue";

import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import { formatDate } from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

let password = ref("");
let isPwd = ref(true);

let calendar = ref([]);
let calendarOptions = computed(() => {
	return {
		plugins: [dayGridPlugin, interactionPlugin],
		initialView: "dayGridMonth",
		dateClick: handleDateClick,
		eventClick: handleEventClick,
		titleFormat: {
			month: "long",
			year: "numeric",
			day: "numeric",
		},
		events: calendar.value,
	};
});

function handleDateClick(arg) {
	alert("date click! " + arg.dateStr);
}

function handleEventClick(info) {
	alert(
		"Event: " +
			info.event.title +
			"Coordinates: " +
			info.jsEvent.pageX +
			"," +
			info.jsEvent.pageY +
			"View: " +
			info.view.type
	);

	// change the border color just for fun
	info.el.style.borderColor = "red";
}

// Get calendar data
onMounted(async () => {
	const querySnapshot = await getDocs(collection(db, "calendar"));
	let calendarData = [];
	querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		const reservationEvent = {
			id: doc.id,
			title: doc.data().clientName,
			start: new Date(doc.data().startDate.seconds * 1000), // millisecond time
			end: new Date(doc.data().endDate.seconds * 1000),
		};
		console.log(reservationEvent);
		if (doc.data().startDate.seconds === doc.data().endDate.seconds) {
			calendarData.push(reservationEvent);
		}
	});
	console.log(calendarData);
	calendar.value = calendarData;
});
</script>
