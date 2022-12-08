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
					{{ $t("booking.titre") }}
					</div>
				</q-img>
			</div>
		</section>

		<div class="wrapper">
			<div class="q-pa-sm form">
				<h4 class="q-py-xl text-uppercase text-weight-light">{{ $t("booking.titre2") }}</h4>

				<q-form
					@submit="onSubmit"
					@reset="onReset"
					class="q-gutter-y-md q-pb-xl"
					greedy
				>
					<q-input label-slot filled rounded color="orange" v-model="client" type="text" 
							lazy-rules="ondemand"
								:rules="[
									(val) =>
										(val && val.length > 0) || 'Veuillez entrer votre nom complet',
								]"
								hide-bottom-space >
							 <template v-slot:label>
								{{ $t("booking.nom") }}
							 </template>
							</q-input>

					<q-input label-slot filled color="orange" v-model="mail" type="email" 
				lazy-rules="ondemand"
					:rules="[
						(val) =>
							(val && val.length > 0) || 'Veuillez entrer une adresse mail valide',
					]"
					hide-bottom-space >
				 <template v-slot:label>
					{{ $t("booking.mail") }}
				 </template>
				</q-input>

					<q-input label-slot filled color="orange" v-model="phone" type="tel" maxlength="13" 
				lazy-rules="ondemand"
					:rules="[
						(val) =>
							(val && val.length > 0) || 'Veuillez entrer un numéro valide',
					]"
					hide-bottom-space >
				 <template v-slot:label>
					{{ $t("booking.phone") }}
				 </template></q-input>

					<q-select
				 label-slot
						filled
						color="orange"
						v-model="room"
						:options="roomNameOptions"
						lazy-rules="ondemand"
						:rules="[
							(val) =>
								(val && val.length > 0) || 'Veuillez choisir une chambre',
						]"
						hide-bottom-space
					>
					<template v-slot:label>
					{{ $t("booking.chambre") }}
				 </template>
				</q-select>

					<q-select
				 label-slot
						filled
						color="orange"
						v-model="people"
						:options="peopleQuantityOptions"
						lazy-rules="ondemand"
						:rules="[
							(val) =>
								(val && val > 0) || 'Veuillez saisir le nombre d’occupants',
						]"
						hide-bottom-space
					>
					<template v-slot:label>
					{{ $t("booking.people") }}
				 </template>
				</q-select>

					<div>
						<q-field
						label-slot
							filled
							stack-label
							color="orange"
							v-model="reservationDate"
							lazy-rules="ondemand"
							:rules="[
								(val) =>
									(val && val.length > 0) || 'Veuillez sélectionner une nuit',
							]"
							hide-bottom-space
						>
							<template v-slot:label>
								{{ $t("booking.nuits") }}
							</template>
							<template v-slot:control>
								<q-date
									v-model="reservationDate"
									:disable="!datePickerDisabled"
									:options="datesOptions"
									:events="datesHighPrices"
									event-color="amber"
									navigation-min-year-month="2022/01"
      								navigation-max-year-month="2032/12"
									mask='DD/MM/YYYY'
									flat
									square
									color="orange"
									class="q-mt-sm full-width"
									minimal
									multiple
								/>
							</template>
						</q-field>
						<div>
							<span class="eventCaption q-mb-xs q-mr-xs"></span><span class="text-italic text-orange">{{ $t("booking.legende") }}</span>
						</div>
						<div
							class="q-pa-sm bg-orange-5 text-white"
							v-if="reservationDate && reservationDate.length > 0"
						>
							<div v-for="day in reservationDate">
								{{
									day.from !== undefined ? `${day.from} 🠖 ${day.to}` : day
								}}
							</div>
						</div>
						<q-expansion-item
							icon="help"
							header-class="text-info"
							dense-toggle
						>
							<template v-slot:header>
								{{ $t("booking.titre2bis") }}
							</template>
							<q-card class="q-pa-md q-mx-md text-grey-8 ">
								<p>{{ $t("booking.paragraphe") }}</p>
								<p>{{ $t("booking.paragraphe2") }}</p>
								<p class="q-mb-none text-italic">
									{{ $t("booking.paragraphe3") }}
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
							>{{ $t("booking.accepter_conditions") }}
							</q-checkbox>
							<q-btn
								flat
								class="text-lowercase q-pa-xs text-underline"
								style="text-decoration: underline;"
								@click="displayConditions = true"
								>
						<div>
							{{ $t("booking.conditions") }}
						</div>
					</q-btn>
					</q-field>

					<q-dialog v-model="displayConditions">
						<q-card  class="q-px-lg q-py-md">
							<q-card-section>
								<div class="text-h6 text-uppercase">{{ $t("booking.titre3") }}</div>
							</q-card-section>

							<q-card-section class="q-pt-none">
								<p>{{ $t("booking.paragraphe4bis") }}</p> 
								
								<p>{{ $t("booking.paragraphe4") }}<br><br>

								<strong>a)</strong>{{ $t("booking.paragraphe5") }}<br><br>

								<strong>b)</strong>{{ $t("booking.paragraphe6") }}
								<ul>
									<li v-html="$t('booking.list_item')"></li>
									<li v-html="$t('booking.list_item2')"></li>
									<li v-html="$t('booking.list_item4')"></li>
									<li v-html="$t('booking.list_item5')"></li>
									<li v-html="$t('booking.list_item6')"></li>
								</ul> 
								
								{{ $t("booking.paragraphe7") }}</p>

								<p> {{ $t("booking.paragraphe8") }}</p> 

								<p>
									{{ $t("booking.paragraphe9") }}
								</p>

								{{ $t("booking.paragraphe10") }}
									<q-markup-table dense bordered flat class="q-my-sm">
										<tbody>
											<tr v-for="room in roomsData">
												<td>{{room.name}}</td>
												<td v-if="room.pathName !== 'gite'">{{room.tarifs[0]}} € 🠖 {{room.tarifs[room.tarifs.length -1]}} €</td>
												<td v-else>{{room.tarifs[0][0][0]}} € 🠖 {{room.tarifs[room.tarifs.length -1][room.tarifs[room.tarifs.length -1].length -1]}} €</td>
											</tr>
											<tr>
												<td>{{ $t("booking.paragraphe11") }}</td>
											<td>{{ $t("booking.paragraphe12") }}</td>
										</tr>
										</tbody>
									</q-markup-table>

								<p>
									{{ $t("booking.paragraphe13") }}
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
							type="submit"
							color="orange"
						>
						<div>
							{{ $t("booking.bouton") }}
						</div>
					</q-btn>
						<q-btn
							rounded
							type="reset"
							color="orange"
							flat
							class="q-ml-sm"
						>
						<div>
							{{ $t("booking.bouton2") }}
						</div>
					</q-btn>
					</div>
				</q-form>

				<q-dialog v-model="displayConfirmation">
						<q-card  class="q-px-lg q-py-md">
							<q-card-section>
								<div class="text-h6 text-uppercase">{{ $t("booking.titre4") }}</div>
							</q-card-section>

							<q-card-section class="q-pt-none">
								<h6>{{ $t("booking.titre5") }}</h6>
								<p class="q-pl-sm ">
									<q-icon name="person" /> {{client}}<br>
									<q-icon name="email" /> {{mail}}<br>
									<q-icon name="phone" /> {{phone}}<br>
									<q-icon name="groups" /> {{people}} {{ $t("booking.people2") }}<br>
									<q-icon name="bed" /> {{room}}<br>
									<q-icon name="date_range" />{{reservationDate[0]}} {{ $t("booking.date") }} 🠖 {{ $t("booking.date2") }} {{reservationDate[reservationDate.length - 1]}} {{ $t("booking.date3") }}<br>
									<q-icon name="done" />{{ $t("booking.conditions_acceptees") }}
								</p>
								<p>
									 <h6>{{ $t("booking.titre5") }}</h6>
									<q-markup-table  
					separator="horizontal" flat bordered
					wrap-cells>
										<tbody>
											<tr  v-for="(priceElement, index) in price">
				<td>
					{{ $t("booking.nuit") }} {{ priceElement }} €<td v-if="datesHighPrices(convertDateDDMMYYYYToYYYYMMDD(reservationDate[index])) === true">{{ $t("booking.legende") }}</td><td v-if="index > 0">{{ $t("booking.remise") }}</td>
				</td>							
											</tr>
											<tr>
												<td>
						<strong>{{ $t("booking.total") }}</strong> {{ priceTotal }} €							
			</td>									
				
											</tr>
										</tbody>
										
									</q-markup-table> 
									{{ $t("booking.paragraphe14") }}<br>
									
									<br>
									{{ $t("booking.paragraphe15") }}
								</p>
								<p>
									{{ $t("booking.paragraphe16") }}<br>
									{{ $t("booking.paragraphe17") }}
								</p>
								</q-card-section>

							<q-card-actions align="right">
								<q-btn flat unelevated  v-close-popup >
						<div>
							{{ $t("booking.bouton3") }}
						</div>
						</q-btn>
							<q-btn
								unelevated
								color="blue"
								v-close-popup
								@click="checkout()"
							>
							<div>
								{{ $t("booking.bouton4") }}
							</div>
						</q-btn>
							</q-card-actions>
						</q-card>
					</q-dialog>

				<CustomDivider />

      			<button @click="checkout()">Checkout</button>
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
import holidaysTo2032 from "../data/holidaysTo2032.json"

let calendar = ref([]);

let room = ref();
let client = ref();
let mail = ref();
let phone = ref();
let people = ref();
let reservationDate = ref([]);
let acceptConditions = ref(false);
let displayConditions = ref(false);
let displayConfirmation= ref(false);
let reservation = computed(() => {
	return {
		clientName: client.value,
		mail: mail.value,
		phone: phone.value, 
		room: room.value,
		people: people.value,
		startDate: null,
		endDate: null,
	};
});
let datePickerDisabled = computed(() => {
	return roomNameOptions.includes(room.value)
});
const discount = 0.1;
let price = computed(() => {
	let priceArray = []

	reservationDate.value.forEach((dateElement, index) => {
		let reservationDateTemp = convertDateDDMMYYYYToYYYYMMDD(dateElement)

		let roomPrice = roomsData.find(roomElement => roomElement.name === room.value).tarifs[datesHighPrices(reservationDateTemp) ? 1 : 0]
		priceArray.push(index > 0 ? roomPrice*(1-discount) : roomPrice)
		
	})
	// console.log(priceArray)

	return priceArray
});
let priceTotal = computed(() => { return price.value.reduce((accumulator, currentValue) => accumulator + currentValue, 0)})

async function checkout() {
	if(reservation.value && priceTotal.value){
		const dataToSend = {
			productName: reservation.value.room,
			totalPrice: priceTotal.value
		}

		const res = await fetch(`http://localhost:3000/create-checkout-session`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(dataToSend)
		});
		const stripeSession = await res.json();
		console.log(stripeSession);

		if (res.ok) {
			let eventForDB = { ...reservation.value, paid: false, stripeSessionID: stripeSession.id};	

			eventForDB.room = roomsData.find((object) => object.name === reservation.value.room).pathName;
			let dateTemp = reservationDate.value[0].split("/");
			eventForDB.startDate = Timestamp.fromDate(new Date(dateTemp[2], dateTemp[1] - 1, dateTemp[0])); // from "DD/MM/YYYY"
			dateTemp = reservationDate.value[reservationDate.value.length - 1].split("/");
			eventForDB.endDate = Timestamp.fromDate(new Date(dateTemp[2], dateTemp[1] - 1, dateTemp[0])); // from "DD/MM/YYYY"

			await setDoc(doc(db, "calendar", Date.now().toString()), eventForDB);

			window.open(stripeSession.checkoutUrl);
		}
	}
}

function convertDateDDMMYYYYToYYYYMMDD(dateElement) {
	let dateTemp = dateElement.split("/");
	return dateTemp[2] + "/" + dateTemp[1]  + "/" + dateTemp[0]; // do not change mask 'YYYY/MM/DD'
}

const roomNameOptions = Array.from(roomsData, (element) => element.name);
const peopleQuantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Disable already reserved dates in DatePicker
function datesOptions(dateElement) {
	return !calendar.value.includes(dateElement) && (new Date(dateElement)) >= (new Date()).setDate((new Date()).getDate()-1); // + not in the past
}

// Highlight high price dates in DatePicker
// do not change mask 'YYYY/MM/DD'
let schoolHolidays = ref([]); // set in onMounted
let datesHighPricesCalendar = ref([]);
function datesHighPrices(dateElement) {
	return datesHighPricesCalendar.value.includes(dateElement) || ((new Date(dateElement)).getDay() >= 5); // + week-ends
}
	
// get all dates between 2 dates
let getDaysArray = function(start, end) {
    for(var arr=[], dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate()+1)){
        arr.push(new Date(dt));
    }
    return arr;
};



async function onSubmit() {
	if (acceptConditions.value === true) {
		displayConfirmation.value = true;

		
	} 
}

function onReset() {
	room.value = null;
	clientName.value = null;
	mail.value = null;
	phone.value = null;
	people.value = null;
	reservationDate.value = null;
	acceptConditions.value = false;
}

// Update date picker options (set available dates) when a room is selected
watch(room, (newRoom) => {
	let roomPathName = roomsData.find(
				(object) => object.name === newRoom
			).pathName
	setRoomCalendar(roomPathName);
})

let querySnapshot;

// Get room dates availabilities when selecting room
function setRoomCalendar(roomPathName) {
	let calendarData = [];
	querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		if (doc.data().room === roomPathName && doc.data().paid) {
			const reservation = {
				id: doc.id,
				// clientName: doc.data().clientName,
				// mail: doc.data().mail,
				// phone: doc.data().phone,
				startDate: doc.data().startDate,
				endDate: doc.data().endDate,
				room: roomsData.find(
				(object) => object.pathName === doc.data().room
			).name,
			};

			// if unique night
			if(reservation.endDate.seconds - reservation.startDate.seconds < 24*60*60 ) {
				calendarData.push(date.formatDate(reservation.startDate.toDate(), 'YYYY/MM/DD')); // do not change mask 'YYYY/MM/DD'
			}
			else {
				let nextDate = new Date(doc.data().startDate.toDate());
				let nights = (reservation.endDate.seconds - reservation.startDate.seconds) / (24*60*60);

				for (let i = 0; i <= nights; i++) {
					calendarData.push(date.formatDate(nextDate, 'YYYY/MM/DD')); // do not change mask 'YYYY/MM/DD'
					nextDate.setDate(nextDate.getDate() + 1);
				}
			}
		}
	});
	// console.log(calendarData);
	calendar.value = calendarData;
}

// Get calendar data from DB 
// + school holidays from gouv.fr API
onMounted(async () => {
	querySnapshot = await getDocs(collection(db, "calendar"));

	let schoolHolidaysPromise = await fetch("https://data.education.gouv.fr/api/records/1.0/search/?dataset=fr-en-calendrier-scolaire&q=&rows=6&sort=end_date&facet=description&facet=population&facet=start_date&facet=end_date&facet=location&facet=zones&facet=annee_scolaire&refine.location=Besan%C3%A7on&timezone=Europe%2FParis");

	if (schoolHolidaysPromise.ok) { 
		let response = await schoolHolidaysPromise.json();
		schoolHolidays.value = response.records.map(record => {
			return {
				start: record.fields.start_date.slice(0,10),
				end: record.fields.end_date.slice(0,10),
			}
		})

		let holidays = holidaysTo2032.map(object => { 
			return convertDateDDMMYYYYToYYYYMMDD(object.date)
		});

		let schoolHolidaysDates = [];
		schoolHolidays.value.forEach(object => {
			schoolHolidaysDates = schoolHolidaysDates.concat(getDaysArray(new Date(object.start), new Date(object.end)))
		});
		schoolHolidaysDates = schoolHolidaysDates.map(dateObj => { return date.formatDate(dateObj, 'YYYY/MM/DD')});  // do not change mask 'YYYY/MM/DD'

		datesHighPricesCalendar.value = schoolHolidaysDates.concat(holidays);

		// console.log(datesHighPricesCalendar.value);
	}

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

.q-date__event {
    position: absolute;
    bottom: -1px;
    left: 50%;
    height: 5px;
    width: 8px;
    border-radius: 5px;
    background-color: amber;
    transform: translate3d(-50%,0,0);
}

.eventCaption {
	top: 50%;
    height: 5px;
    width: 8px;
    border-radius: 5px;
    background-color: #ffc107;
	display: inline-block;
}
</style>
