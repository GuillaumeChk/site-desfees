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

					<p>
						Mettre en pause le système de réservation :<br />
						<q-btn-toggle
							v-model="bookingSystemWorking"
							class="my-custom-toggle"
							rounded
							unelevated
							toggle-color="orange"
							color="white"
							text-color="orange"
							:options="[
								{ label: 'ON', value: true },
								{ label: 'OFF', value: false },
							]"
						/>
					</p>
					<p>
						Sauvegarder l'agenda en l'état :<br />
						<q-btn unelevated label="Télécharger l'agenda" color="blue" />
					</p>
					<p>
						En cas de fausse manipulation sur cette page :<br />
						<q-btn
							unelevated
							label="Annuler toutes les modifications"
							color="black"
						/>
					</p>
					<p>
						Valider tous les changements et les envoyer au serveur :<br />
						<q-btn unelevated label="Valider les modifications" color="green" />
					</p>
					Récapitulatif des changements en cours :
				</div>

				<FullCalendar :options="calendarOptions" />

				Pour ajouter une réservation : cliquer sur une date de début, puis
				remplir les infos. On peut déplacer et redimensionner toute réservation.

				<q-dialog v-model="displayNewEvent">
					<q-card class="q-pa-sm">
						<q-card-section>
							<div class="text-h6 text-uppercase">Nouvelle réservation</div>
						</q-card-section>
						<q-form @submit="addNewEvent" greedy>
							<q-card-section class="q-gutter-y-md">
								<q-input
									rounded
									filled
									v-model="newEventData.title"
									label="Nom du client"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) ||
											'Veuillez entrer votre nom complet',
									]"
									hide-bottom-space
								/>

								<q-select
									filled
									color="orange"
									v-model="newEventData.room"
									:options="roomPathNameOptions"
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
									v-model="newEventData.people"
									:options="peopleQuantityOptions"
									label="Occupants"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val > 0) ||
											'Veuillez saisir le nombre d’occupants',
									]"
									hide-bottom-space
								/>

								<p v-if="newEventData.start">
									Le
									{{
										newEventData.start.toLocaleDateString("fr-FR", {
											timeZone: "UTC",
											weekday: "long",
											year: "numeric",
											month: "long",
											day: "numeric",
										})
									}}.
								</p>

								<p class="text-italic">
									Pour modifier la date : simplement cliquer/glisser la
									réservation. <br />
									Pour modifier la durée : redimensionner la réservation.
								</p>
							</q-card-section>

							<q-card-actions align="right">
								<q-btn flat unelevated label="Annuler" v-close-popup />
								<q-btn
									unelevated
									label="Ajouter"
									type="submit"
									color="green"
									v-close-popup
								/>
							</q-card-actions>
						</q-form>
					</q-card>
				</q-dialog>

				<q-dialog v-model="displayEventEdit">
					<q-card class="q-px-lg q-py-md">
						<q-card-section>
							<div class="text-h6 text-uppercase">Modifier une réservation</div>
						</q-card-section>

						<q-form @submit="editEvent" greedy>
							<q-card-section class="q-gutter-y-md">
								<q-input
									rounded
									filled
									v-model="eventData.title"
									label="Nom du client"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) ||
											'Veuillez entrer votre nom complet',
									]"
									hide-bottom-space
								/>

								<q-select
									filled
									color="orange"
									v-model="eventData.room"
									:options="roomPathNameOptions"
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
									v-model="eventData.people"
									:options="peopleQuantityOptions"
									label="Occupants"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val > 0) ||
											'Veuillez saisir le nombre d’occupants',
									]"
									hide-bottom-space
								/>

								<p v-if="eventData.start">
									Le
									{{
										eventData.start.toLocaleDateString("fr-FR", {
											timeZone: "UTC",
											weekday: "long",
											year: "numeric",
											month: "long",
											day: "numeric",
										})
									}}
									<span v-if="eventData.end"
										><br />jusqu'au <br />
										{{
											eventData.end.toLocaleDateString("fr-FR", {
												timeZone: "UTC",
												weekday: "long",
												year: "numeric",
												month: "long",
												day: "numeric",
											})
										}}. </span
									><br />
								</p>

								<p class="text-italic">
									Pour modifier la date : simplement cliquer/glisser la
									réservation. <br />
									Pour modifier la durée : redimensionner la réservation.
								</p>
							</q-card-section>

							<q-card-actions align="right">
								<q-btn flat unelevated label="Annuler" v-close-popup />
								<q-btn
									unelevated
									label="Modifier"
									type="submit"
									color="blue"
									v-close-popup
								/>
								<q-btn
									unelevated
									label="Supprimer"
									@click="deleteEvent"
									color="red"
									v-close-popup
								/>
							</q-card-actions>
						</q-form>
					</q-card>
				</q-dialog>
			</div>
		</div>
	</q-page>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import CustomDivider from "../components/CustomDivider.vue";
import roomsData from "../data/roomsData.json";

import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import frLocale from "@fullcalendar/core/locales/fr";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

let password = ref("");
let isPwd = ref(true);

const roomPathNameOptions = Array.from(
	roomsData,
	(element) => element.pathName
);
const peopleQuantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let calendar = ref([]);
let calendarOptions = computed(() => {
	return {
		timeZone: "UTC",
		plugins: [dayGridPlugin, interactionPlugin],
		buttonIcons: false,
		locale: frLocale,
		initialView: "dayGridMonth",
		editable: true,
		dateClick: handleDateClick,
		eventClick: handleEventClick,
		eventDrop: handleEventDropOrResize,
		eventResize: handleEventDropOrResize,
		events: calendar.value,
	};
});

let bookingSystemWorking = ref(true);

let displayNewEvent = ref(false);
let newEventData = ref();

function handleDateClick(info) {
	newEventData.value = {
		id: Date.now(),
		title: "",
		start: info.date,
		end: info.date,
		room: "",
		people: 0,
		allDay: true,
		borderColor: "white",
	};

	displayNewEvent.value = true;
}

let displayEventEdit = ref(false);
let eventData = ref();

function handleEventClick(info) {
	eventData.value = {
		id: info.event.id,
		title: info.event.title,
		start: info.event.start,
		end: info.event.end,
		allDay: true,
		room: info.event.extendedProps.room,
		people: info.event.extendedProps.people,
		borderColor: "white",
	};

	displayEventEdit.value = true;
}

let eventDroppedData = ref();

function handleEventDropOrResize(info) {
	eventDroppedData.value = {
		id: info.event.id,
		title: info.event.title,
		start: info.event.start,
		end: info.event.end,
		allDay: true,
		room: info.event.extendedProps.room,
		people: info.event.extendedProps.people,
		borderColor: "white",
	};
	eventDroppedData.value.room = roomsData.find(
		(object) => object.pathName === eventDroppedData.value.room
	).pathName; // no need ?
	eventDroppedData.value.backgroundColor = roomsData.find(
		(object) => object.pathName === eventDroppedData.value.room
	).color;

	// update event
	calendar.value.splice(
		calendar.value.findIndex((event) => event.id === eventDroppedData.value.id),
		1,
		eventDroppedData.value
	);

	eventDroppedData.value = {};

	calendarOptions.events = calendar.value;
}

function addNewEvent() {
	if (1) {
		// valid?
		newEventData.value.room = roomsData.find(
			(object) => object.pathName === newEventData.value.room
		).pathName;
		newEventData.value.backgroundColor = roomsData.find(
			(object) => object.pathName === newEventData.value.room
		).color;
		calendar.value.push(newEventData.value);
		calendarOptions.events = calendar.value;
		newEventData.value = {};

		// update DB
	} else {
		alert("Invalid date.");
	}
}

function editEvent() {
	eventData.value.room = roomsData.find(
		(object) => object.pathName === eventData.value.room
	).pathName;
	eventData.value.backgroundColor = roomsData.find(
		(object) => object.pathName === eventData.value.room
	).color;

	// update event
	calendar.value.splice(
		calendar.value.findIndex((event) => event.id === eventData.value.id),
		1,
		eventData.value
	);

	eventData.value = {};
	calendarOptions.events = calendar.value;
}

function deleteEvent() {
	calendar.value.splice(
		calendar.value.findIndex((event) => event.id === eventData.value.id),
		1
	);

	calendarOptions.events = calendar.value;
}

// Get calendar data
onMounted(async () => {
	const querySnapshot0 = await getDocs(collection(db, "settings"));
	querySnapshot0.forEach((doc) => {
		bookingSystemWorking.value = doc.data().bookingSystemActive;
	});

	const querySnapshot = await getDocs(collection(db, "calendar"));
	let calendarData = [];
	querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		const reservationEvent = {
			id: doc.id,
			title: doc.data().clientName,
			start: new Date(doc.data().startDate.seconds * 1000), // millisecond time
			end: new Date(doc.data().endDate.seconds * 1000),
			allDay: true,
			backgroundColor: roomsData.find(
				(object) => object.pathName === doc.data().room
			).color,
			borderColor: "white",
			extendedProps: {
				room: doc.data().room,
				people: doc.data().people,
			},
		};

		calendarData.push(reservationEvent);
	});

	calendar.value = calendarData;
});
</script>
