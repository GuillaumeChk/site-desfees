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
						{{ $t("admin.titre") }}
					</div>
				</q-img>
			</div>
		</section>

		<div class="wrapper">
			<!-- <h4 class="q-pa-md q-pt-xl text-uppercase text-weight-light">Contact</h4> -->

			<section class="q-pa-md q-pl-lg q-gutter-y-md">
				<p v-html="$t('admin.paragraphe')"></p>

				<q-btn rounded unelevated label="Accueil" color="orange" to="/" />
			</section>

			<CustomDivider></CustomDivider>

			<div class="q-px-md q-gutter-y-md q-py-xl">
				<h5 v-html="$t('admin.titre2')"></h5>

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

				<div v-if="password === pwdEnvVariable" class="q-mt-xl q-gutter-y-md">
					<h6 class="text-uppercase">Calendrier des réservations</h6>

					<p>
						État du système de réservation :<br />
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
						<q-btn
							unelevated
							label="Télécharger l'agenda"
							color="blue"
							@click="downloadCalendar()"
						/>
					</p>
					<p>Attention, chaque modification est envoyée en temps réel.</p>
					<!-- <p>
						En cas de fausse manipulation, annuler les changements en cours :<br />
						<q-btn unelevated label="Annuler tout" color="black" />
					</p>
					<p>
						Valider les changements en cours et les envoyer au serveur :<br />
						<q-btn unelevated label="Valider tout" color="green" />
					</p>
					Récapitulatif des changements en cours :
					</p> -->

					<FullCalendar :options="calendarOptions" />

					Pour ajouter une réservation : cliquer sur une date de début, puis
					remplir les infos. On peut déplacer et redimensionner toute
					réservation.
				</div>

				<q-dialog v-model="displayNewEvent">
					<q-card class="q-pa-sm">
						<q-card-section>
							<div class="text-h6 text-uppercase">Nouvelle réservation</div>
						</q-card-section>
						<q-form @submit="addNewEvent" greedy>
							<q-card-section class="q-gutter-y-sm">
								<div class="row justify-between items-baseline">
									<span> Est-ce un cadeau ? </span>

									<q-btn-toggle
										v-model="newEventData.isItGift"
										class="my-custom-toggle"
										rounded
										unelevated
										toggle-color="orange"
										color="white"
										text-color="orange"
										:options="[
											{ label: 'Non', value: false },
											{ label: 'Oui', value: true },
										]"
									/>
								</div>

								<template v-if="newEventData.isItGift">
									<p>Bénéficiaire</p>

									<q-input
										rounded
										filled
										v-model="newEventData.beneficiaryFirstName"
										label="Prénom du beneficiary"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) || 'Veuillez entrer le prénom',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										v-model="newEventData.beneficiaryLastName"
										label="Nom du beneficiary"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) ||
												'Veuillez entrer le nom de famille',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										v-model="newEventData.beneficiaryAddress"
										label="Adresse du beneficiary"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) ||
												'Veuillez entrer une Adresse complète',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										v-model="newEventData.beneficiaryPostalCode"
										label="Code postal du beneficiary"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) ||
												'Veuillez entrer une Adresse complète',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										v-model="newEventData.beneficiaryCity"
										label="Ville du beneficiary"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) ||
												'Veuillez entrer une Adresse complète',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										v-model="newEventData.beneficiaryMail"
										label="Adresse mail"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) || 'Veuillez entrer un mail',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										v-model="newEventData.beneficiaryPhone"
										label="Téléphone"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) ||
												'Veuillez entrer un numéro de téléphone',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										v-model="newEventData.beneficiaryVouchersQuantity"
										label="Nombre de bons"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) ||
												'Veuillez entrer le nombre de bons',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										v-model="newEventData.beneficiaryVoucherValue"
										label="Valeur par bon"
									/>

									<q-checkbox
										v-model="newEventData.toWriteAmount"
										label="Inscrire le montant offert sur le bon."
										color="orange"
									/>

									<q-checkbox
										v-model="newEventData.sendGiftToBeneficiary"
										label="Envoyer directement le bon au bénéficiaire."
										color="orange"
									/>
								</template>

								<p>Client</p>

								<q-input
									rounded
									filled
									v-model="newEventData.clientFirstName"
									label="Prénom du client"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) || 'Veuillez entrer le prénom',
									]"
									hide-bottom-space
								/>

								<q-input
									filled
									v-model="newEventData.clientLastName"
									label="Nom du client"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) ||
											'Veuillez entrer le nom de famille',
									]"
									hide-bottom-space
								/>

								<q-input
									filled
									v-model="newEventData.clientAddress"
									label="Adresse du client"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) ||
											'Veuillez entrer une Adresse complète',
									]"
									hide-bottom-space
								/>

								<q-input
									filled
									v-model="newEventData.clientPostalCode"
									label="Code postal du client"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) ||
											'Veuillez entrer une Adresse complète',
									]"
									hide-bottom-space
								/>

								<q-input
									filled
									v-model="newEventData.clientCity"
									label="Ville du client"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) ||
											'Veuillez entrer une Adresse complète',
									]"
									hide-bottom-space
								/>

								<q-input
									filled
									v-model="newEventData.clientMail"
									label="Adresse mail"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) || 'Veuillez entrer un mail',
									]"
									hide-bottom-space
								/>

								<q-input
									filled
									v-model="newEventData.clientPhone"
									label="Téléphone"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) ||
											'Veuillez entrer un numéro de téléphone',
									]"
									hide-bottom-space
								/>

								<p>Réservation</p>

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
								/>

								<p v-if="newEventData.start">
									Le
									{{
										newEventData.start.toLocaleDateString({
											timeZone: "UTC",
											weekday: "long",
											year: "numeric",
											month: "long",
											day: "numeric",
										})
									}}.
								</p>

								<q-input
									v-model="newEventData.clientMessage"
									filled
									placeholder="Message du client ou note"
									autogrow
									color="orange"
								/>

								<p class="text-italic text-grey-6">
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
							<q-card-section class="q-gutter-y-sm">
								<div class="row justify-between items-baseline">
									<span> Est-ce un cadeau ? </span>

									<q-btn-toggle
										v-model="eventData.isItGift"
										class="my-custom-toggle"
										rounded
										unelevated
										toggle-color="orange"
										color="white"
										text-color="orange"
										:options="[
											{ label: 'Non', value: false },
											{ label: 'Oui', value: true },
										]"
									/>
								</div>

								<template v-if="eventData.isItGift">
									<p>Bénéficiaire</p>

									<q-input
										rounded
										filled
										v-model="eventData.beneficiaryFirstName"
										label="Prénom du beneficiary"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) || 'Veuillez entrer le prénom',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										v-model="eventData.beneficiaryLastName"
										label="Nom du beneficiary"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) ||
												'Veuillez entrer le nom de famille',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										v-model="eventData.beneficiaryAddress"
										label="Adresse du beneficiary"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) ||
												'Veuillez entrer une Adresse complète',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										v-model="eventData.beneficiaryPostalCode"
										label="Code postal du beneficiary"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) ||
												'Veuillez entrer une Adresse complète',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										v-model="eventData.beneficiaryCity"
										label="Ville du beneficiary"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) ||
												'Veuillez entrer une Adresse complète',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										v-model="eventData.beneficiaryMail"
										label="Adresse mail"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) || 'Veuillez entrer un mail',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										v-model="eventData.beneficiaryPhone"
										label="Téléphone"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) ||
												'Veuillez entrer un numéro de téléphone',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										v-model="eventData.beneficiaryVouchersQuantity"
										label="Nombre de bons"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) ||
												'Veuillez entrer le nombre de bons',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										v-model="eventData.beneficiaryVouchersQuantity"
										label="Valeur par bon"
									/>

									<q-checkbox
										v-model="eventData.toWriteAmount"
										label="Inscrire le montant offert sur le bon."
										color="orange"
									/>

									<q-checkbox
										v-model="eventData.sendGiftToBeneficiary"
										label="Envoyer directement le bon au bénéficiaire."
										color="orange"
									/>
								</template>

								<p>Client</p>

								<q-input
									rounded
									filled
									v-model="eventData.clientFirstName"
									label="Prénom du client"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) || 'Veuillez entrer le prénom',
									]"
									hide-bottom-space
								/>

								<q-input
									filled
									v-model="eventData.clientLastName"
									label="Nom du client"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) ||
											'Veuillez entrer le nom de famille',
									]"
									hide-bottom-space
								/>

								<q-input
									filled
									v-model="eventData.clientAddress"
									label="Adresse du client"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) ||
											'Veuillez entrer une Adresse complète',
									]"
									hide-bottom-space
								/>

								<q-input
									filled
									v-model="eventData.clientPostalCode"
									label="Code postal du client"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) ||
											'Veuillez entrer une Adresse complète',
									]"
									hide-bottom-space
								/>

								<q-input
									filled
									v-model="eventData.clientCity"
									label="Ville du client"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) ||
											'Veuillez entrer une Adresse complète',
									]"
									hide-bottom-space
								/>

								<q-input
									filled
									v-model="eventData.clientMail"
									label="Adresse mail"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) || 'Veuillez entrer un mail',
									]"
									hide-bottom-space
								/>

								<q-input
									filled
									v-model="eventData.clientPhone"
									label="Téléphone"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) ||
											'Veuillez entrer un numéro de téléphone',
									]"
									hide-bottom-space
								/>

								<p>Réservation</p>

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
								/>

								<p v-if="eventData.start">
									Le
									{{
										eventData.start.toLocaleDateString({
											timeZone: "UTC",
											weekday: "long",
											year: "numeric",
											month: "long",
											day: "numeric",
										})
									}}
									<span v-if="eventData.end"
										><br />jusqu'au matin du
										{{
											eventData.end.toLocaleDateString({
												timeZone: "UTC",
												weekday: "long",
												year: "numeric",
												month: "long",
												day: "numeric",
											})
										}}. </span
									><br />
								</p>

								<p>Message ou note</p>

								<q-input
									v-model="eventData.clientMessage"
									filled
									placeholder="Message du client ou note"
									autogrow
									color="orange"
								/>

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
import { ref, onMounted, computed, watch } from "vue";
import CustomDivider from "../components/CustomDivider.vue";
import roomsData from "../data/roomsData.json";

import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import frLocale from "@fullcalendar/core/locales/fr";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import { exportFile } from "quasar";

import {
	collection,
	getDocs,
	getDoc,
	doc,
	setDoc,
	deleteDoc,
} from "firebase/firestore";
import { db } from "@/firebase";

const pwdEnvVariable = import.meta.env.VITE_ADMIN_BOOKING_PASSWORD;

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
		// timeZone: "UTC",
		plugins: [dayGridPlugin, interactionPlugin],
		buttonIcons: false,
		locale: frLocale,
		initialView: "dayGridMonth",
		editable: true,
		dateClick: handleDateClick,
		eventClick: handleEventClick,
		eventDrop: handleEventDrop,
		eventResize: handleEventResize,
		events: calendar.value,
	};
});

let bookingSystemWorking = ref();
watch(bookingSystemWorking, async (newValue) => {
	await setDoc(doc(db, "settings", "bookingStatus"), {
		bookingSystemActive: newValue,
	});
});

/// EVENTS HANDLERS
let displayNewEvent = ref(false);
let newEventData = ref();

// add new
function handleDateClick(info) {
	// let endDate = new Date(info.date);
	// endDate.setDate(endDate.getDate() + 1);

	newEventData.value = {
		id: Date.now().toString(),
		title: "",
		start: info.date,
		end: info.date,
		room: "",
		clientMessage: "",
		isItGift: false,
		toWriteAmount: false,
		sendGiftToBeneficiary: false,
		beneficiaryVouchersQuantity: null,
		beneficiaryVoucherValue: null,
		clientFirstName: "",
		clientLastName: "",
		clientMail: "",
		clientAddress: "",
		clientPostalCode: "",
		clientCity: "",
		clientPhone: "",
		beneficiaryFirstName: "",
		beneficiaryLastName: "",
		beneficiaryMail: "",
		beneficiaryAddress: "",
		beneficiaryPostalCode: "",
		beneficiaryCity: "",
		beneficiaryPhone: "",
		people: 0,
		allDay: true,
		borderColor: "white",
	};

	displayNewEvent.value = true;
}

let displayEventEdit = ref(false);
let eventData = ref();

// modify
function handleEventClick(info) {
	eventData.value = {
		id: info.event.id,
		title:
			info.event.extendedProps.clientFirstName +
			" " +
			info.event.extendedProps.clientLastName,
		start: info.event.start,
		end: info.event.end,
		allDay: true,
		toWriteAmount: info.event.extendedProps.toWriteAmount,
		sendGiftToBeneficiary: info.event.extendedProps.sendGiftToBeneficiary,
		beneficiaryVouchersQuantity:
			info.event.extendedProps.beneficiaryVouchersQuantity,
		beneficiaryVoucherValue: info.event.extendedProps.beneficiaryVoucherValue,
		room: info.event.extendedProps.room,
		people: info.event.extendedProps.people,
		isItGift: info.event.extendedProps.isItGift,
		clientMessage: info.event.extendedProps.clientMessage,
		clientFirstName: info.event.extendedProps.clientFirstName,
		clientLastName: info.event.extendedProps.clientLastName,
		clientMail: info.event.extendedProps.clientMail,
		clientPhone: info.event.extendedProps.clientPhone,
		clientAddress: info.event.extendedProps.clientAddress,
		clientPostalCode: info.event.extendedProps.clientPostalCode,
		clientCity: info.event.extendedProps.clientCity,
		beneficiaryFirstName: info.event.extendedProps.beneficiaryFirstName,
		beneficiaryLastName: info.event.extendedProps.beneficiaryLastName,
		beneficiaryMail: info.event.extendedProps.beneficiaryMail,
		beneficiaryPhone: info.event.extendedProps.beneficiaryPhone,
		beneficiaryAddress: info.event.extendedProps.beneficiaryAddress,
		beneficiaryPostalCode: info.event.extendedProps.beneficiaryPostalCode,
		beneficiaryCity: info.event.extendedProps.beneficiaryCity,
		borderColor: "white",
	};

	displayEventEdit.value = true;
}

let eventDroppedData = ref();

// modify date
async function handleEventDrop(info) {
	eventDroppedData.value = {
		id: info.event.id,
		title: info.event.title,
		start: info.event.start,
		end: info.event.end,
		allDay: true,
		toWriteAmount: info.event.extendedProps.toWriteAmount,
		sendGiftToBeneficiary: info.event.extendedProps.sendGiftToBeneficiary,
		beneficiaryVouchersQuantity:
			info.event.extendedProps.beneficiaryVouchersQuantity,
		beneficiaryVoucherValue: info.event.extendedProps.beneficiaryVoucherValue,
		room: info.event.extendedProps.room,
		people: info.event.extendedProps.people,
		isItGift: info.event.extendedProps.isItGift,
		clientMessage: info.event.extendedProps.clientMessage,
		clientFirstName: info.event.extendedProps.clientFirstName,
		clientLastName: info.event.extendedProps.clientLastName,
		clientMail: info.event.extendedProps.clientMail,
		clientPhone: info.event.extendedProps.clientPhone,
		clientAddress: info.event.extendedProps.clientAddress,
		clientPostalCode: info.event.extendedProps.clientPostalCode,
		clientCity: info.event.extendedProps.clientCity,
		beneficiaryFirstName: info.event.extendedProps.beneficiaryFirstName,
		beneficiaryLastName: info.event.extendedProps.beneficiaryLastName,
		beneficiaryMail: info.event.extendedProps.beneficiaryMail,
		beneficiaryPhone: info.event.extendedProps.beneficiaryPhone,
		beneficiaryAddress: info.event.extendedProps.beneficiaryAddress,
		beneficiaryPostalCode: info.event.extendedProps.beneficiaryPostalCode,
		beneficiaryCity: info.event.extendedProps.beneficiaryCity,
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

	await updateDB(eventDroppedData);

	eventDroppedData.value = {};

	calendarOptions.events = calendar.value;
}

let eventResizedData = ref();

// modify date duration
async function handleEventResize(info) {
	eventResizedData.value = {
		id: info.event.id,
		title: info.event.title,
		start: info.event.start,
		end: info.event.end,
		allDay: true,
		toWriteAmount: info.event.extendedProps.toWriteAmount,
		sendGiftToBeneficiary: info.event.extendedProps.sendGiftToBeneficiary,
		beneficiaryVouchersQuantity:
			info.event.extendedProps.beneficiaryVouchersQuantity,
		beneficiaryVoucherValue: info.event.extendedProps.beneficiaryVoucherValue,
		room: info.event.extendedProps.room,
		people: info.event.extendedProps.people,
		isItGift: info.event.extendedProps.isItGift,
		clientMessage: info.event.extendedProps.clientMessage,
		clientFirstName: info.event.extendedProps.clientFirstName,
		clientLastName: info.event.extendedProps.clientLastName,
		clientMail: info.event.extendedProps.clientMail,
		clientPhone: info.event.extendedProps.clientPhone,
		clientAddress: info.event.extendedProps.clientAddress,
		clientPostalCode: info.event.extendedProps.clientPostalCode,
		clientCity: info.event.extendedProps.clientCity,
		beneficiaryFirstName: info.event.extendedProps.beneficiaryFirstName,
		beneficiaryLastName: info.event.extendedProps.beneficiaryLastName,
		beneficiaryMail: info.event.extendedProps.beneficiaryMail,
		beneficiaryPhone: info.event.extendedProps.beneficiaryPhone,
		beneficiaryAddress: info.event.extendedProps.beneficiaryAddress,
		beneficiaryPostalCode: info.event.extendedProps.beneficiaryPostalCode,
		beneficiaryCity: info.event.extendedProps.beneficiaryCity,
		borderColor: "white",
	};
	eventResizedData.value.room = roomsData.find(
		(object) => object.pathName === eventResizedData.value.room
	).pathName; // no need ?
	eventResizedData.value.backgroundColor = roomsData.find(
		(object) => object.pathName === eventResizedData.value.room
	).color;

	// update event
	calendar.value.splice(
		calendar.value.findIndex((event) => event.id === eventResizedData.value.id),
		1,
		eventResizedData.value
	);

	await updateDB(eventResizedData);

	eventResizedData.value = {};

	calendarOptions.events = calendar.value;
}
/// EVENTS HANDLER - end

/// CRUD
async function addNewEvent() {
	newEventData.value.room = roomsData.find(
		(object) => object.pathName === newEventData.value.room
	).pathName;
	newEventData.value.backgroundColor = roomsData.find(
		(object) => object.pathName === newEventData.value.room
	).color;
	calendar.value.push({
		...newEventData.value,
		title:
			newEventData.value.clientFirstName +
			" " +
			newEventData.value.clientLastName,
	});
	calendarOptions.events = calendar.value;

	// update db
	await updateDB(newEventData);

	newEventData.value = {};
}

async function editEvent() {
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

	// update db
	await updateDB(eventData);

	eventData.value = {};
	calendarOptions.events = calendar.value;
}

async function deleteEvent() {
	calendar.value.splice(
		calendar.value.findIndex((event) => event.id === eventData.value.id),
		1
	);

	await deleteDoc(doc(db, "calendar", eventData.value.id));
	calendarOptions.events = calendar.value;
}

// Add/update event to db
async function updateDB(eventRef) {
	let endDate = new Date(eventRef.value.end);
	endDate.setDate(endDate.getDate() - 1);

	let eventForDB = {
		clientName: eventRef.value.title,
		startDate: eventRef.value.start,
		endDate: endDate,
		room: eventRef.value.room,
		people: eventRef.value.people,
		isItGift: eventRef.value.isItGift,
		toWriteAmount: eventRef.value.toWriteAmount,
		sendGiftToBeneficiary: eventRef.value.sendGiftToBeneficiary,
		beneficiaryVouchersQuantity: eventRef.value.beneficiaryVouchersQuantity,
		beneficiaryVoucherValue: eventRef.value.beneficiaryVoucherValue,
		clientMessage: eventRef.value.clientMessage,
		clientFirstName: eventRef.value.clientFirstName,
		clientLastName: eventRef.value.clientLastName,
		clientMail: eventRef.value.clientMail,
		clientPhone: eventRef.value.clientPhone,
		clientAddress: eventRef.value.clientAddress,
		clientPostalCode: eventRef.value.clientPostalCode,
		clientCity: eventRef.value.clientCity,
		beneficiaryFirstName: eventRef.value.beneficiaryFirstName,
		beneficiaryLastName: eventRef.value.beneficiaryLastName,
		beneficiaryMail: eventRef.value.beneficiaryMail,
		beneficiaryPhone: eventRef.value.beneficiaryPhone,
		beneficiaryAddress: eventRef.value.beneficiaryAddress,
		beneficiaryPostalCode: eventRef.value.beneficiaryPostalCode,
		beneficiaryCity: eventRef.value.beneficiaryCity,
		allDay: true,
		paid: true,
	};
	// console.log(eventForDB);
	await setDoc(doc(db, "calendar", eventRef.value.id), eventForDB);
}

// Get calendar data from firebase
onMounted(async () => {
	const docSnap = await getDoc(doc(db, "settings", "bookingStatus"));
	bookingSystemWorking.value = docSnap.data().bookingSystemActive;

	const querySnapshot = await getDocs(collection(db, "calendar"));
	let calendarData = [];
	querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		if (doc.data().paid) {
			const reservationEvent = {
				id: doc.id,
				title: doc.data().clientFirstName + " " + doc.data().clientLastName,
				start: new Date(doc.data().startDate.seconds * 1000), // millisecond time
				end: new Date(doc.data().endDate.seconds * 1000 + 24 * 60 * 60 * 1000),
				allDay: true,
				backgroundColor: roomsData.find(
					(object) => object.pathName === doc.data().room
				).color,
				borderColor: "white",
				extendedProps: {
					room: doc.data().room,
					people: doc.data().people ? doc.data().people : null,
					isItGift: doc.data().isItGift,
					clientMessage: doc.data().clientMessage,
					clientFirstName: doc.data().clientFirstName,
					clientLastName: doc.data().clientLastName,
					clientMail: doc.data().clientMail,
					clientPhone: doc.data().clientPhone,
					clientAddress: doc.data().clientAddress,
					clientPostalCode: doc.data().clientPostalCode,
					clientCity: doc.data().clientCity,
					beneficiaryFirstName: doc.data().beneficiaryFirstName,
					beneficiaryLastName: doc.data().beneficiaryLastName,
					beneficiaryMail: doc.data().beneficiaryMail,
					beneficiaryPhone: doc.data().beneficiaryPhone,
					beneficiaryAddress: doc.data().beneficiaryAddress,
					beneficiaryPostalCode: doc.data().beneficiaryPostalCode,
					beneficiaryCity: doc.data().beneficiaryCity,
					toWriteAmount: doc.data().toWriteAmount,
					sendGiftToBeneficiary: doc.data().sendGiftToBeneficiary,
					beneficiaryVouchersQuantity: doc.data().beneficiaryVouchersQuantity,
					beneficiaryVoucherValue: doc.data().beneficiaryVoucherValue,
				},
			};

			calendarData.push(reservationEvent);
		}
	});

	// console.log(calendarData);
	calendar.value = calendarData;
});
/// CRUD - end

// Export Download
function downloadCalendar() {
	const status = exportFile(
		"calendar_" + new Date().getTime() + ".txt",
		JSON.stringify(calendar.value, null, "\t")
	);

	if (status === true) {
		// browser allowed it
	} else {
		// browser denied it
		console.log("Error: " + status);
	}
}
</script>
