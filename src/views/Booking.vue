<template>
	<q-page class="q-mb-xl">
		<section class="section-video">
			<div class="video-container">
				<q-img
					src="../assets/rooms/exterieur/Fée__gros_plan_hiver_compressed60_014.jpg"
					class="carousel"
				>
					<div
						class="absolute-center bg-transparent text-h4 text-uppercase text-center text-weight-light"
						style="letter-spacing: 4px"
					>
						Réservation
					</div>
				</q-img>
			</div>
		</section>

		<div class="wrapper">
			<div class="q-pa-sm form">
				<h4 class="q-py-xl text-uppercase text-weight-light">Réserver</h4>
				<q-form
					@submit="onSubmit"
					@reset="onReset"
					class="q-gutter-y-md q-pb-xl"
					greedy
				>
					<q-input filled rounded v-model="client" label="Nom"
							lazy-rules="ondemand"
								:rules="[
									(val) =>
										(val && val.length > 0) || 'Veuillez entrer votre nom complet',
								]"
								hide-bottom-space />

					<q-select
						filled
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
							v-model="reservationDate"
							lazy-rules="ondemand"
							:rules="[
								(val) =>
									(val && val.length > 0) || 'Veuillez sélectionner une durée',
							]"
							hide-bottom-space
						>
							<template v-slot:control>
								<q-date
									v-model="reservationDate"
									:disable="!datePickerDisabled"
									:options="datesOptions"
									mask='DD/MM/YYYY'
									flat
									square
									color="orange"
									class="q-mt-sm full-width"
									minimal
									range
									multiple
								/>
							</template>
						</q-field>
						<div
							class="q-pa-sm bg-orange-5 text-white"
							v-if="reservationDate && reservationDate.length > 0"
						>
							<div v-for="day in reservationDate">
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
							<q-card class="q-pa-md q-mx-md text-grey-8 ">
								<p>Sélectionnez d'abord une chambre.</p>
								<p>Une nuit : cliquez deux fois.</p>
								<p>
									Plusieurs nuits : cliquez sur la date de début, puis celle de
									fin.
								</p>
								<p class="q-mb-none text-italic">
									Vous pouvez accumuler plusieurs nuits et/ou périodes. <br>
									Si une date est désactivée, c'est qu'elle est déjà réservée.
								</p>
							</q-card>
						</q-expansion-item>
					</div>

					<q-field
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
						<q-checkbox v-model="acceptConditions" color="orange"
							>J'ai lu et accepté les
							</q-checkbox>
							<q-btn
								label="conditions"
								flat
								class="text-lowercase q-pa-xs text-underline"
								style="text-decoration: underline;"
								@click="displayConditions = true"
							/>
					</q-field>

					<q-dialog v-model="displayConditions">
						<q-card  class="q-px-lg q-py-md">
							<q-card-section>
								<div class="text-h6 text-uppercase">Conditions de vente et d'annulation</div>
							</q-card-section>

							<q-card-section class="q-pt-none">
								<p>Pour toute réservation définitive, nous demandons au client un acompte de 50 % ou de nous confier un numéro de carte bancaire
								accompagné de sa date de validité… (aucun paiement ne sera effectué avant le séjour, il ne s'agit là, que d'une empreinte
								bancaire en cas d'annulation ou de détérioration de la chambre durant le séjour).</p> 
								
								<p> Toute annulation doit être notifiée par lettre recommandée ou mail avec accusé de réception -> Domaine des fées, 39110 Pretin <br><br>

								<strong>a)</strong> Le client bénéficie d'une assurance - annulation : se reporter à la fiche assurance jointe au contrat. <br><br>

								<strong>b)</strong> Le client ne bénéficie pas d’une assurance annulation : pour toute annulation du fait du client, la somme remboursée à ce dernier par l’Agence de Réservation Touristique, à l’exception des frais de dossier (si ceux-ci ont été perçus lors de la réservation) sera la suivante : 
								<ul>
									<li>Annulation plus de 30 jours avant le début du séjour : il sera retenu 10% du montant du séjour ; </li>
									<li>Annulation entre le 30<sup>e</sup> et le 21<sup>e</sup> jour inclus avant le début du séjour : il sera retenu 25% du prix du séjour ;</li>
									<li>Annulation entre le 20<sup>e</sup> et le 8<sup>e</sup> jour inclus avant le début du séjour : il sera retenu 50% du prix du séjour ; </li>
									<li>Annulation entre le 7<sup>e</sup> et le 2<sup>e</sup> jour inclus avant le début du séjour : il sera
								retenu 75% du prix du séjour ; </li>
									<li>Annulation à moins de 2 jours avant le début du séjour : il sera retenu 100% du prix du séjour ;</li>
								</ul> 
								
								En cas de non-présentation du client : il ne sera procédé à aucun remboursement. </p>

								<p> Nos hôtes sont accueillis le jour de leur
								arrivée à partir de 17 heures. Les départs sont jusqu’à 11 heures. Afin de prolonger le séjour chez les Fées, il est possible de venir plus tôt ou partir plus tard moyennant un
								supplément, merci de vous renseigner.</p> 

								<p>
									Les animaux sont bienvenus sous certaines conditions : Education parfaite, propre et toujours en compagnie de leur maître. 
								</p>

									Tarif des chambres avec petits déjeuner régional : 
									<q-markup-table dense bordered flat class="q-my-sm">
										<tbody>
											<tr v-for="room in roomsData">
												<td>{{room.name}}</td>
												<td v-if="room.pathName !== 'gite'">de {{room.tarifs[0]}} € à {{room.tarifs[room.tarifs.length -1]}} €</td>
												<td v-else>de {{room.tarifs[0][0][0]}} € à {{room.tarifs[room.tarifs.length -1][room.tarifs[room.tarifs.length -1].length -1]}} €</td>
											</tr>
											<tr>
												<td>Semaine/curiste</td>
											<td>nous consulter</td>
										</tr>
										</tbody>
									</q-markup-table>

								<p>

									Dès la seconde nuitée en chambre d'hôte, une remise de 10% est accordée. 
								</p>
								</q-card-section>

							<q-card-actions align="right">
								<q-btn icon="close" flat  dense v-close-popup />
							</q-card-actions>
						</q-card>
					</q-dialog>

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

				<CustomDivider />
			</div>
		</div>
	</q-page>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watch } from "vue";
import CustomDivider from "../components/CustomDivider.vue";
import roomsData from "../data/roomsData.json";
import { collection, doc, getDocs, setDoc, Timestamp } from "firebase/firestore";
import { db } from "@/firebase";
import { date } from 'quasar';

let calendar = ref([]);

let room = ref();
let client = ref();
let people = ref();
let reservationDate = ref([]);
let acceptConditions = ref(false);
let displayConditions = ref(false);
let reservation = computed(() => {
	return {
		clientName: client.value,
		room: room.value,
		people: people.value,
		startDate: reservationDate.value,
		endDate: reservationDate.value,
	};
});
let datePickerDisabled = computed(() => {
	return roomNameOptions.includes(room.value)
});

const roomNameOptions = Array.from(roomsData, (element) => element.name);
const peopleQuantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Disable already reserved dates in DatePicker
function datesOptions(dateElement) {
	return !calendar.value.includes(dateElement);
}

async function onSubmit() {
	if (acceptConditions.value === true) {
		
		let eventForDB = { ...reservation.value};	
		eventForDB.room = roomsData.find((object) => object.name === reservation.value.room).pathName;
		let dateTemp = eventForDB.startDate[0].split("/");
		eventForDB.startDate = Timestamp.fromDate(new Date(dateTemp[2], dateTemp[1] - 1, dateTemp[0])); // from "DD/MM/YYYY"
		dateTemp = eventForDB.endDate[0].split("/");
		eventForDB.endDate = Timestamp.fromDate(new Date(dateTemp[2], dateTemp[1] - 1, dateTemp[0])); // from "DD/MM/YYYY"
		
		console.log(eventForDB);

		await setDoc(doc(db, "calendar", Date.now().toString()), eventForDB);
	} 
}

function onReset() {
	room.value = null;
	people.value = null;
	reservationDate.value = null;
	acceptConditions.value = false;
}


let querySnapshot;

// Update date picker options (set available dates) when a room is selected
watch(room, (newRoom) => {
	let roomPathName = roomsData.find(
				(object) => object.name === newRoom
			).pathName
	setRoomCalendar(roomPathName);
})

// Get room data when selecting room
function setRoomCalendar(roomPathName) {
	let calendarData = [];
	querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		if (doc.data().room === roomPathName) {
			const reservation = {
				id: doc.id,
				clientName: doc.data().clientName,
				startDate: doc.data().startDate,
				endDate: doc.data().endDate,
				room: roomsData.find(
				(object) => object.pathName === doc.data().room
			).name,
			};
			if(reservation.startDate.seconds === reservation.endDate.seconds) {
				calendarData.push(date.formatDate(reservation.startDate.toDate(), 'YYYY/MM/DD')); // do not change mask 'YYYY/MM/DD'
			}
		}
	});
	// console.log(calendarData);
	calendar.value = calendarData;
}

// Get calendar data from DB
onMounted(async () => {
	querySnapshot = await getDocs(collection(db, "calendar"));
})
</script>

<style>
.form {
	max-width: 400px;
	border-radius: 20px;
	margin: auto;
}

.last-rounded {
	background-color: #eeeeee;
	border-bottom-left-radius: 30px;
	border-bottom-right-radius: 30px;
}
</style>
