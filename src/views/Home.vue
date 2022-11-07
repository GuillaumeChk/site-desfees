<template>
	<q-page>
		<section class="section-video">
			<div class="video-container">
				<video
					src="../assets/video/presentation_des_fées_raccourcie.mp4"
					muted
					autoplay
					loop
					:controls="false"
					width="1920"
					height="1080"
				/>
				<h3
					class="gt-sm absolute-bottom q-pb-lg text-h3 text-white text-center bg-transparent cursive"
				>
					Le Domaine des Fées vous souhaite la bienvenue
				</h3>
			</div>
		</section>

		<section class="q-pa-lg q-py-xl q-my-lg text-grey-8 text-center">
			<h2 class="cursive appear-left">
				Le Domaine des Fées vous souhaite la bienvenue
			</h2>

			<CustomDivider class="appear-left" />

			<p class="appear-right" style="width: 75%; margin: 0 auto">
				Les Fées ont pris possession des lieux, au pied des monts du Jura et au
				bord d’une petite rivière appelée... « La Vache ».
			</p>
		</section>

		<section class="q-py-xl text-justify brand-3">
			<div class="wrapper row items-center">
				<q-img
					class="col-sm-5 col-lg-6 appear-left"
					src="../assets/Salon_(10).jpg"
				>
				</q-img>
				<div class="col-sm-7 col-lg-6 q-pa-xl appear-right">
					<h5 class="text-uppercase text-brand-2 q-pb-lg">
						Bienvenue dans cet écrin de nature
					</h5>
					<p>
						Les fées ont profité du temps consacré au travaux pour s’embellir et
						permettre de réellement prendre possession des lieux avec un
						<strong>parc zen</strong> où la magie de l’eau et de la lumière
						sauront vous charmer dans ce <strong>cadre idyllique</strong>.
					</p>
					<p>
						Un écrin de nature ou l’hiver s’installe afin de permettre à la
						nature de se ressourcer en compagnie des fées.
					</p>
					<p>
						La féerie vous accompagnera durant votre séjour dans un
						<strong>cadre de bien-être et cocooning</strong> pour vous relaxer
						dans ce monde magique. Alors prenez la clef de ces voies
						enchanteuses…
					</p>
				</div>
			</div>
		</section>

		<section class="q-py-xl text-justify">
			<div class="wrapper row reverse items-center">
				<q-img
					class="col-sm-5 col-lg-4 appear-right"
					src="../assets/couloir.jpg"
				></q-img>

				<div class="col-sm-7 col-lg-8 q-pa-xl appear-left">
					<h5 class="text-uppercase text-brand q-pb-lg">
						Véritable havre de paix
					</h5>
					<p>
						Au Domaine des Fées, quand le soleil rayonne et que le ciel devient
						bleu, vous pouvez accéder à un monde merveilleux.
					</p>
					<p>
						La <strong class="text-brand">piscine chauffée</strong> plongeant
						sur la vallée, avec son eau cristalline réputée magique dans le
						<strong class="text-brand">Jura</strong>, ornée de reflets argentés
						et d’une superbe
						<strong class="text-brand">cascade scintillante</strong>, vous
						offrira une possibilité de
						<strong class="text-brand">nage à contre-courant</strong>, un
						<strong class="text-brand">soin de réflexologie Kneippwalk</strong>
						qui saura parfaire votre instant de détente et de bien-être…
					</p>
				</div>
			</div>
		</section>

		<CustomDivider class="appear-left" />

		<h4
			class="wrapper q-pa-lg q-py-xl text-weight-light text-uppercase appear-left"
		>
			Nos chambres
		</h4>
		<section class="wrapper row rooms q-pb-lg">
			<div
				class="room appear-bottom"
				v-for="room in roomsData"
				:key="room.name"
			>
				<router-link
					:to="{ name: 'room', params: { roomName: room.pathName } }"
				>
					<q-img class="" :ratio="16 / 9" :src="getImageUrl(room.imageUrl)">
						<h3
							class="q-pa-md text-white cursive absolute-bottom-left"
							style="
								background: linear-gradient(to right, #121212, transparent);
							"
						>
							{{ room.name }}
						</h3>
					</q-img>
				</router-link>
			</div>
		</section>

		<CustomDivider class="appear-left" />

		<section class="q-mt-xl q-px-lg">
			<div class="wrapper items-center q-pb-xl">
				<h4 class="q-py-xl text-uppercase text-weight-light appear-left">
					Nos équipements
				</h4>

				<q-list separator class="appear-left bg-white">
					<q-expansion-item
						v-for="equipment in equipmentsData"
						:key="equipment.name"
						group="somegroup"
						:icon="equipment.icon"
						:label="equipment.name"
						header-class=" text-uppercase"
					>
						<EquipmentCard :equipment="equipment" :rooms="roomsData" />
					</q-expansion-item>
				</q-list>
			</div>
		</section>

		<CustomDivider class="appear-left" />

		<section class="q-mt-lg q-px-lg">
			<div class="wrapper items-center q-pb-xl">
				<h4 class="q-py-xl text-uppercase text-weight-light appear-left">
					Carte
				</h4>
				<div class="map-container">
					<iframe
						class="responsive-iframe"
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1081.122387923357!2d5.8343491898577735!3d46.93698126326741!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x55665e5241251587!2sChambres%20d&#39;h%C3%B4tes%20et%20G%C3%AEte%20des%20F%C3%A9es!5e0!3m2!1sfr!2sfr!4v1665318607302!5m2!1sfr!2sfr"
						width="100%"
						height="100%"
						style="border: 0"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</section>

		<div class="q-py-lg"></div>
	</q-page>
</template>

<script setup>
import roomsData from "../data/roomsData.json";
import equipmentsData from "../data/equipmentsData.json";
import EquipmentCard from "../components/EquipmentCard.vue";
import CustomDivider from "../components/CustomDivider.vue";

function getImageUrl(subPath) {
	return new URL(`../assets/${subPath}`, import.meta.url).href;
}
</script>

<style lang="scss" scoped>
.map-container {
	position: relative;
	width: 100%;
	height: 60vh;
	overflow: hidden;
	//   padding-top: 100%; /* Aspect Ratio */
}
.responsive-iframe {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	width: 100%;
	height: 100%;
	border: none;
}
.rooms {
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
}
.room {
	flex: auto;
	width: 425px;
	// margin: 0;
}
li {
	list-style-type: "\2713";
}

.video-container > video {
	height: 100%;
	left: 0;
	object-fit: cover;
	position: absolute;
	top: 0;
	width: 100%;
}

@media (min-width: 1024px) {
	.room {
		flex: auto;
		// width: 425px;
		// margin: 5px;
	}
	li {
		list-style-type: "\2713";
	}
}

@media (min-width: 1440px) {
	.room {
		flex: auto;
		// width: 425px;
		// margin: 5px;
	}
	li {
		list-style-type: "\2713";
	}
}
</style>
