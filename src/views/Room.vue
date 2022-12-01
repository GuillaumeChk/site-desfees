<template>
	<q-page>
		<section class="section-video">
			<div class="video-container">
				<q-img class="carousel bg-white" :src="getImageUrl(room.imageUrl)">
				</q-img>
				<h3
					class="gt-sm absolute-bottom q-pb-lg text-h3 text-white text-center bg-transparent cursive"
				>
					{{ room.name }}
				</h3>
			</div>
		</section>

		<section class="q-px-lg q-pt-lg">
			<div class="wrapper q-gutter-y-md">
				<h3 class="lt-md cursive text-center text-grey-8 appear-left">
					{{ room.name }}
				</h3>

				<div class="row justify-between q-gutter-md appear-left">
					<router-link
						v-if="previousRoom != undefined"
						:to="{ name: 'room', params: { roomName: previousRoom.pathName } }"
						>🠔 Chambre précédente</router-link
					>
					<q-space v-else></q-space>
					<router-link
						v-if="nextRoom != undefined"
						:to="{ name: 'room', params: { roomName: nextRoom.pathName } }"
						>Chambre suivante 🠖</router-link
					>
				</div>

				<p
					v-if="room.pathName !== 'gite'"
					class="q-pt-md appear-left text-center"
				>
					{{ room.description[$i18n.locale] }}
				</p>
				<div v-else class="q-pt-md" v-html="room.description[$i18n.locale]"></div>
			</div>
		</section>

		<CustomDivider class="appear-left" />

		<section class="wrapper">
			<q-responsive
				:ratio="16 / 9"
				style="height: 600px; max-width: 100%; margin-bottom: 100px"
			>
				<q-carousel
					swipeable
					animated
					arrows
					infinite
					thumbnails
					v-model="slide2"
					v-model:fullscreen="fullscreen"
					class="uncropped-image"
					control-color="black"
				>
					<q-carousel-slide
						v-for="(slide, key, index) in roomImages"
						:key="key"
						:name="index"
						:img-src="slide"
						class="uncropped-image"
					/>

					<template v-slot:control>
						<q-carousel-control position="bottom-right" :offset="[18, 18]">
							<q-btn
								round
								flat
								color="white"
								text-color="black"
								:icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
								@click="fullscreen = !fullscreen"
							/>
						</q-carousel-control>
					</template>
				</q-carousel>
			</q-responsive>
		</section>

		<section class="q-pa-lg q-gutter-y-lg wrapper">
			<h5 class="text-uppercase appear-left">Tarifs</h5>

			<p v-if="room.pathName !== 'gite'" class="appear-left">
				Prix : à partir de <strong>{{ room.tarifs[0] }}€ / nuit</strong> avec
				petit déjeuner régional pour 2 personnes.
				<br />
				Une <strong>remise de 10% sur la 2ème nuitée</strong> vous sera déduite
				du paiement final.
			</p>

			<div class="q-pt-none q-pb-md appear-left">
				<q-markup-table
					v-if="room.pathName !== 'gite'"
					flat
					separator="vertical"
					wrap-cells
					style="max-width: 800px;"
				>
					<thead>
						<tr class="q-tr--no-hover">
							<th class="text-left">Période</th>
							<th class="text-right">Tarif</th>
						</tr>
					</thead>
					<tbody>
						<tr class="q-tr--no-hover">
							<td class="text-left">Du dimanche au vendredi</td>
							<td class="text-right text-no-wrap">{{ room.tarifs[0] }} €</td>
						</tr>
						<tr class="q-tr--no-hover">
							<td class="text-left">
								Du vendredi au dimanche, jours fériés, spéciaux, vacances
								scolaire
							</td>
							<td class="text-right text-no-wrap">{{ room.tarifs[1] }} €</td>
						</tr>
					</tbody>
				</q-markup-table>

				<div v-else class="q-py-xs q-gutter-y-lg">
					<p>
						<h6>Saison & période</h6>
						<strong>Baisse saison </strong>: Période ou calme plat, hors
						vacances, férié et animations régionales, météo peu favorable.
						<br />
						<strong>Moyenne saison </strong>: Période entre saison, mars-juin,
						septembre-octobre sauf férié !
						<br />
						<strong>Haute saison </strong>: Période de vacances scolaires,
						fériés et animations régionales.
					</p>

					<q-markup-table
						flat
						separator="vertical"
						wrap-cells
						class="text-center"
						style="max-width: 800px;"
					>
						<thead>
							<tr class="text-uppercase">
								<th>Saison</th>
								<th colspan="4">Le week-end*</th>
							</tr>
							<tr>
								<th></th>
								<th>1 nuit</th>
								<th>2 nuits</th>
								<th>3 nuits</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Basse</td>
								<td>{{ room.tarifs[0][0][0] }} €</td>
								<td>{{ room.tarifs[0][0][1] }} €</td>
								<td>{{ room.tarifs[0][0][2] }} €</td>
							</tr>
							<tr>
								<td>Moyenne</td>
								<td>{{ room.tarifs[0][1][0] }} €</td>
								<td>{{ room.tarifs[0][1][1] }} €</td>
								<td>{{ room.tarifs[0][1][2] }} €</td>
							</tr>
							<tr>
								<td>Haute</td>
								<td>{{ room.tarifs[0][2][0] }} €</td>
								<td>{{ room.tarifs[0][2][1] }} €</td>
								<td>{{ room.tarifs[0][2][2] }} €</td>
							</tr>
						</tbody>
						<thead>
							<tr></tr>
							<tr class="text-uppercase">
								<th>Saison</th>
								<th colspan="4">En semaine*</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Basse</td>
								<td colspan="4">{{ room.tarifs[1][0] }} €</td>
							</tr>
							<tr>
								<td>Moyenne</td>
								<td colspan="4">{{ room.tarifs[1][1] }} €</td>
							</tr>
							<tr>
								<td>Haute</td>
								<td colspan="4">{{ room.tarifs[1][2] }} €</td>
							</tr>
							<tr class="text-italic text-grey-7">
								<td>Spécial curiste</td>
								<td colspan="4">Nous consulter</td>
							</tr>
						</tbody>
					</q-markup-table>
					

					<p>
						*Le week-end : <strong>supplément de 10 €</strong> par personnes et
						par nuitées au-delà de 4 personnes (jusqu'à 9).
					</p>
					<p>
						*En semaine (du samedi 17h au samedi 10h) :
						<strong>supplément de 50 €</strong> par personnes et par nuitées
						au-delà de 4 personnes (jusqu'à 9).
					</p>
					<p>Forfait nettoyage si souhaité : 80 €.</p>
					<p>Une taxe de séjour 1,21 € par nuitée et par personne.</p>
				</div>
			</div>
			<p class="appear-left">
				<strong>
					Avec petit déjeuner régional pour 2 personnes. <br />
					La taxe de séjour est incluse avec un accès à la piscine, kneippwalk
					et wifi. <br />
					Amis à 4 pattes bienvenus.</strong
				>
			</p>
		</section>

		<section class="wrapper text-center q-py-lg">
			<q-btn
				class="brand text-white appear-right"
				unelevated
				rounded
				size="lg"
				label="Réserver cette chambre"
				to="/reservation"
			></q-btn>
		</section>

		<CustomDivider class="appear-left" />

		<section class="q-px-lg q-pb-xl q-pt-xs q-gutter-y-md items-center">
			<div class="wrapper q-gutter-y-lg">
				<h5 class="text-uppercase appear-left">Équipements inclus</h5>

				<q-list separator class="appear-left">
					<q-expansion-item
						v-for="equipment in roomEquipments"
						:key="equipment.name[$i18n.locale]"
						group="somegroup"
						:icon="equipment.icon"
						:label="equipment.name[$i18n.locale]"
						header-class="text-uppercase"
					>
						<EquipmentCard :equipment="equipment" :rooms="roomsData" />
					</q-expansion-item>
				</q-list>
			</div>
		</section>
	</q-page>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import roomsData from "../data/roomsData.json";
import equipmentsData from "../data/equipmentsData.json";
import EquipmentCard from "../components/EquipmentCard.vue";
import CustomDivider from "../components/CustomDivider.vue";
import { computed } from "@vue/reactivity";

let route = useRoute();

const slide2 = ref(0);
const fullscreen = ref(false);

function getImageUrl(subPath) {
	return new URL(`../assets/${subPath}`, import.meta.url).href;
}
// function getImageUrlFromAssets(subPath) {
// 	return new URL(`${subPath.name}`, import.meta.url).href;
// }

function fillEquipments(roomName) {
	// filter only equiped equipments by the room
	roomEquipments.value = [];
	equipmentsData.forEach((equipment) => {
		if (equipment.rooms.includes(roomName)) {
			roomEquipments.value.push({
				...equipment,
			});
		}
	});
}

function fillRoomImages(roomName) {
	// import all images from room folder
	roomImages.value = {};
	switch (room.value.index) {
		case 1:
			roomImages.value = import.meta.glob(
				"../assets/rooms/etoiles/*.(jpg|JPG|png|PNG)",
				{ as: "url", eager: true }
			);
			break;
		case 2:
			roomImages.value = import.meta.glob(
				"../assets/rooms/melusine/*.(jpg|JPG|png|PNG)",
				{ as: "url", eager: true }
			);
			break;

		case 3:
			roomImages.value = import.meta.glob(
				"../assets/rooms/reves/*.(jpg|JPG|png|PNG)",
				{
					as: "url",
					eager: true,
				}
			);
			break;
		case 4:
			roomImages.value = import.meta.glob(
				"../assets/rooms/romantique/*.(jpg|JPG|png|PNG)",
				{ as: "url", eager: true }
			);
			break;
		case 5:
			roomImages.value = import.meta.glob(
				"../assets/rooms/salina/*.(jpg|JPG|png|PNG)",
				{ as: "url", eager: true }
			);
			break;
		case 6:
			roomImages.value = import.meta.glob(
				"../assets/rooms/gite/*.(jpg|JPG|png|PNG)",
				{
					as: "url",
					eager: true,
				}
			);
			break;
	}
}

let roomName = computed(() => {
	return route.params.roomName;
});
let room = ref();
let nextRoom = ref();
let previousRoom = ref();
let roomEquipments = ref([]);
let roomImages = ref({});

//https://vueschool.io/lessons/reacting-to-param-changes
// fillEquipments(roomName);
// fillRoomImages(roomName);
watch(
	() => route.params.roomName,
	(newRoomName) => {
		if (newRoomName == undefined) {
			return;
		}
		room.value = roomsData.find(
			(roomElement) => roomElement.pathName === newRoomName
		);
		nextRoom.value = roomsData.find(
			(roomElement) => roomElement.index === room.value.index + 1
		);
		previousRoom.value = roomsData.find(
			(roomElement) => roomElement.index === room.value.index - 1
		);

		fillEquipments(newRoomName);
		fillRoomImages();
	},
	{ immediate: true }
);
</script>

<style lang="scss">
.images-room img {
	max-width: 30%;
}

.uncropped-image {
	background-size: contain; /* don't crop the image  */
	background-repeat: no-repeat; /* only show the image one time  */
	background-color: #eeeeee; /* color to fill empty space with  */
}

@media (min-width: 1024px) {
	.room {
		min-height: 100vh;
		display: flex;
		align-items: center;
	}
}
</style>

<style lang="scss" scoped>
a {
	color: orange;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
}
</style>
