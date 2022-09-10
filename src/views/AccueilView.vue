<template>
	<q-page>
		<section class="section-video">
			<div class="video-container">
				<video
					src="src/assets/video/presentation des fées raccourcie.mp4"
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

			<CustomDivider />

			<p class="appear-right" style="width: 75%; margin: 0 auto">
				Les Fées ont pris possession des lieux, au pied des monts du Jura et au
				bord d’une petite rivière appelée... « La Vache ».
			</p>
		</section>

		<section class="q-py-xl text-center brand-3">
			<div class="wrapper row items-center">
				<q-parallax
					:speed="1"
					class="col-sm-5 col-lg-6 appear-left"
					src="src/assets/Salon_(10).jpg"
				>
				</q-parallax>
				<div class="col-sm-7 col-lg-6 q-pa-xl appear-right">
					<h5 class="text-uppercase text-brand-2 q-pb-lg">
						Bienvenue dans cet écrin de nature, véritable havre de paix !
					</h5>
					<p>
						Les fées ont profitées pour s’embellir et leur permettre de
						réellement prendre possession des lieux avec un
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

		<section class="q-py-xl text-center">
			<div class="wrapper row reverse items-center">
				<q-parallax
					:speed="1"
					class="col-sm-6 col-lg-8 appear-right"
					src="src/assets/Salon_(6).jpg"
				></q-parallax>

				<div class="col-sm-6 col-lg-4 q-pa-xl appear-left">
					<h5 class="text-uppercase text-brand q-pb-lg">Un monde féérique</h5>
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

		<h4
			class="wrapper q-pa-lg q-py-xl text-weight-light text-uppercase appear-left"
		>
			Nos chambres
		</h4>
		<section class="wrapper chambres">
			<div
				class="chambre q-pb-lg appear-right"
				v-for="chambre in chambres"
				:key="chambre.name"
			>
				<router-link
					:to="{ name: 'chambre', params: { roomName: chambre.pathName } }"
				>
					<q-parallax :src="chambre.image" :height="167">
						<h3
							class="q-pa-md text-white cursive absolute-bottom-left"
							style="background: linear-gradient(to right, black, transparent)"
						>
							{{ chambre.name }}
						</h3>
					</q-parallax>
				</router-link>
			</div>
		</section>

		<section class="brand-4 q-mt-xl">
			<div class="wrapper items-center">
				<h4
					class="q-py-xl q-pl-lg text-uppercase text-weight-light appear-left"
				>
					Nos équipements
				</h4>

				<div class="q-gutter-lg q-px-lg row">
					<EquipmentCard
						v-for="equipment in equipments"
						:key="equipment.index"
						:equipment="equipment"
						:chambres="chambres"
					/>
				</div>
			</div>
		</section>
	</q-page>
</template>

<script setup>
import chambres from "../data/chambres.json";
import equipments from "../data/equipments.json";
import EquipmentCard from "../components/EquipmentCard.vue";
import CustomDivider from "../components/CustomDivider.vue";
</script>

<style lang="scss" scoped>
.chambres {
	display: flex;
	flex-wrap: wrap;
}
.chambre {
	flex: auto;
	width: 425px;
	margin: 0;
}
li {
	list-style-type: "\2713";
}
.image-chambre {
	margin: 25px;
	max-height: 200px;
}

.video-container {
	background-color: black;
	overflow: hidden;
	height: 100%;
	position: absolute;
	width: 100%;
	z-index: 0;
}

.video-container > video {
	height: 100%;
	left: 0;
	object-fit: cover;
	position: absolute;
	top: 0;
	width: 100%;
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
	.chambre {
		flex: auto;
		// width: 425px;
		margin: 5px;
	}
	li {
		list-style-type: "\2713";
	}
	.image-chambre {
		margin: 25px;
		// max-height: 200px;
	}
}

@media (min-width: 1440px) {
	.chambre {
		flex: auto;
		// width: 425px;
		margin: 5px;
	}
	li {
		list-style-type: "\2713";
	}
	.image-chambre {
		margin: 25px;
		// max-height: 200px;
	}

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
