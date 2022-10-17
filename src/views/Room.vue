<template>
	<q-page>
		<section class="section-video">
			<div class="video-container">
				<q-img class="carousel" :src="getImageUrl(room.imageUrl)"> </q-img>
				<h3
					class="gt-sm absolute-bottom q-pb-lg text-h3 text-white text-center bg-transparent cursive"
				>
					{{ room.name }}
				</h3>
			</div>
		</section>

		<section class="q-px-lg q-pt-lg">
			<div class="wrapper q-gutter-y-xl">
				<h3 class="lt-md cursive text-center text-grey-8 appear-left">
					{{ room.name }}
				</h3>

				<p class="appear-left text-center">{{ room.description }}</p>
			</div>
		</section>

		<CustomDivider class="appear-left" />

		<section class="wrapper">
			<q-carousel
				swipeable
				animated
				arrows
				infinite
				thumbnails
				v-model="slide2"
				v-model:fullscreen="fullscreen"
				class="carousel2"
			>
				<q-carousel-slide
					v-for="(slide, key, index) in roomImages"
					:key="key"
					:name="index"
					:img-src="slide"
					class="carousel2_img"
				/>

				<template v-slot:control>
					<q-carousel-control position="bottom-right" :offset="[18, 80]">
						<q-btn
							round
							flat
							color="black"
							text-color="white"
							:icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
							@click="fullscreen = !fullscreen"
						/>
					</q-carousel-control>
				</template>
			</q-carousel>
		</section>

		<section class="q-pa-lg q-gutter-y-lg wrapper">
			<h5 class="text-uppercase appear-left">Tarifs</h5>

			<p class="appear-left">
				Prix : <strong>{{ room.tarifs[0] }}€/nuit</strong> avec petit déjeuner
				régional pour 2 personnes.
				<br />
				Une <strong>remise de 10% sur la 2ème nuitée</strong> vous sera déduite
				au paiement final.
			</p>

			<div class="q-pt-none q-pb-md appear-left">
				<h6>Tarif des nuitées (à partir du 1er avril 2021)</h6>

				<q-markup-table flat separator="vertical" wrap-cells>
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
			</div>
			<p class="appear-left">
				<strong>
					Avec petit déjeuner régional pour 2 personnes. <br />
					La taxe de séjour est incluse avec un accès à la piscine, kneippwalk
					et wifi. <br />
					Amis à 4 pattes compris.</strong
				>
			</p>
		</section>

		<section class="wrapper text-center q-py-lg">
			<q-btn
				class="brand text-white appear-right"
				unelevated
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
						:key="equipment.name"
						group="somegroup"
						:icon="equipment.icon"
						:label="equipment.name"
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

const slide = ref(1);
const slide2 = ref(1);
const autoplay = ref(true);
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
let room = ref(roomsData.find((room) => room.pathName === roomName));
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
		room.value = roomsData.find((room) => room.pathName === newRoomName);

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
.video-container {
	background-color: black;
	overflow: hidden;
	height: 100%;
	position: absolute;
	width: 100%;
	z-index: 0;
}

.video-container > .carousel {
	height: 100%;
	left: 0;
	object-fit: cover;
	position: absolute;
	top: 0;
	width: 100%;
}
.carousel2 {
	height: 700px;
}
.carousel2_img {
	object-fit: contain;
}
.section-video {
	overflow: hidden;
	position: relative;
	width: 100%;
	z-index: 1;

	background-color: black;
	display: flex;
	flex-direction: column;
	min-height: 350px;
	justify-content: flex-end;

	margin-top: -66px;
}

@media (min-width: 1024px) {
	.room {
		min-height: 100vh;
		display: flex;
		align-items: center;
	}
}

@media (min-width: 1440px) {
	.section-video {
		overflow: hidden;
		position: relative;
		width: 100%;
		z-index: 1;

		background-color: black;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		justify-content: flex-end;

		margin-top: -66px;
	}
}
</style>
