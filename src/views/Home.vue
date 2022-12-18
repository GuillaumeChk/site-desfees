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
				<!-- <h1
					class="gt-sm absolute-bottom q-pb-lg text-white text-center bg-transparent cursive"
				>
					{{ $t("home.bienvenue") }}
				</h1> -->
			</div>
		</section>

		<section class="q-pa-lg q-py-xl q-my-lg text-grey-8 text-center">
			<h2 class="cursive q-pb-xl appear-left">
				{{ $t("home.bienvenue2") }}
			</h2>

			<img
				class="img-welcome appear-bottom"
				src="../assets/icons/logoGitedes.svg"
				height="220px"
				width="220px"
			/>

			<div class="col q-pb-xl text-uppercase appear-bottom">
				<h4>Domaine des fées</h4>
				<h5>Chambres d'hôtes & gîte</h5>
				<hr class="solid" />
				<h6>SPA & Bien-être</h6>
			</div>

			<h6 class="appear-right" style="width: 75%; margin: 0 auto">
				{{ $t("home.intro") }}
			</h6>
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
						{{ $t("home.paragraphe1_titre") }}
					</h5>
					<p v-html="$t('home.paragraphe1_texte')"></p>
					<p v-html="$t('home.paragraphe1_texte2')"></p>
					<p v-html="$t('home.paragraphe1_texte3')"></p>
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
						{{ $t("home.paragraphe2_titre") }}
					</h5>
					<p v-html="$t('home.paragraphe2_texte')"></p>
					<p v-html="$t('home.paragraphe2_texte2')"></p>
				</div>
			</div>
		</section>

		<CustomDivider class="appear-left" />

		<h4
			class="wrapper q-pa-lg q-py-xl text-weight-light text-uppercase appear-left"
		>
			{{ $t("home.nos_chambres") }}
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
					{{ $t("home.nos_equipements") }}
				</h4>

				<q-list separator class="appear-left bg-white">
					<q-expansion-item
						v-for="equipment in equipmentsData"
						:key="equipment.name[$i18n.locale]"
						group="somegroup"
						:icon="equipment.icon"
						:label="equipment.name[$i18n.locale]"
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
					{{ $t("home.carte") }}
				</h4>
				<div class="map-container">
					<iframe
						class="responsive-iframe"
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6576.5190257184095!2d5.834772!3d46.93705!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x55665e5241251587!2sChambres%20d&#39;h%C3%B4tes%20et%20G%C3%AEte%20des%20F%C3%A9es!5e1!3m2!1sfr!2sfr!4v1671127402950!5m2!1sfr!2sfr"
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
.img-welcome {
	width: 220px;
	height: 220px;
}
hr.solid {
	max-width: 350px;
	border-top: 2px solid;
	margin: 5px auto;
}
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
