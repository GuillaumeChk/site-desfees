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
					Le Domaine des Fées vous souhaite la bienvenue.
				</h3>
			</div>
		</section>
		<!-- <q-carousel
      animated
      v-model="slide"
      infinite
      :autoplay="autoplay"
      transition-prev="fade"
      transition-next="fade"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      height="300px"
    >
      <q-carousel-slide :name="1" img-src="nv_logo_fee_40.png" />
      <q-carousel-slide :name="2" img-src="nv_logo_fee_40.png" />
      <q-carousel-slide :name="3" img-src="nv_logo_fee_40.png" />
      <q-carousel-slide :name="4" img-src="nv_logo_fee_40.png" />
    </q-carousel> -->

		<section class="q-pa-lg q-py-xl q-my-lg text-grey-10 text-center">
			<h2 class="cursive">Le Domaine des Fées vous souhaite la bienvenue.</h2>

			<q-separator class="q-px-xl" inset spaced="xl" />

			<p style="width: 75%; margin: 0 auto">
				Les Fées ont pris possession des lieux,
				<strong>au pied des monts du Jura</strong> et au bord d’une petite
				rivière appelée... « La Vache ».
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
					<h5 class="text-uppercase q-pb-lg">Titre</h5>
					<p>
						Au Domaine des Fées, quand le soleil rayonne et que le ciel devient
						bleu, vous pouvez accéder à un monde merveilleux.
					</p>
					<p>
						La piscine chauffée plongeant sur la vallée, avec son eau
						cristalline réputée magique dans le Jura, ornée de reflets argentés
						et d’une superbe cascade scintillante, vous offrira une possibilité
						de nage à contre-courant, un soin de réflexologie Kneippwalk qui
						saura parfaire votre instant de détente et de bien-être…
					</p>
				</div>
			</div>
		</section>

		<h4 class="wrapper q-pa-lg q-py-xl text-weight-light text-uppercase">
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
				<h4 class="q-py-xl q-pl-lg text-uppercase text-weight-light">
					Nos équipements
				</h4>

				<div class="q-gutter-lg q-px-lg row">
					<q-card
						flat
						v-for="equipment in equipments"
						:key="equipment.name"
						class="rounded appear-left card"
					>
						<q-card-section horizontal class="justify-center">
							<h5 class="q-pa-md q-pl-lg text-weight-light text-uppercase">
								{{ equipment.name }}
							</h5>
						</q-card-section>

						<q-separator />

						<q-card-section class="row bg-white q-pt-none">
							<q-img
								loading="eager"
								no-spinner
								:src="equipment.image"
								class="image-equipement col-sm-4 self-center"
							/>

							<q-card-section class="col-sm-8">
								<p>
									{{ equipment.description }}
								</p>

								<p class="text-bold">Équipé dans :</p>
								<q-list dense class="text-italic row warp justify-between">
									<q-item
										clickable
										v-ripple
										v-for="chambre in equipment.chambres"
										:to="'/chambre/' + chambres[chambre].pathName"
										exact
									>
										<q-item-section>
											<q-item-label>
												✓ {{ chambres[chambre].name }}
											</q-item-label>
										</q-item-section>
									</q-item>
								</q-list>
							</q-card-section>
						</q-card-section>
					</q-card>
				</div>
			</div>
		</section>
	</q-page>
</template>

<script setup>
import { onMounted, ref } from "vue";
import chambres from "../data/chambres.json";
import equipments from "../data/equipments.json";

const slide = ref(1);
const autoplay = ref(true);

// Animate on scroll (when visible)
onMounted(() => {
	const inViewport = (entries, observer) => {
		entries.forEach((entry) => {
			entry.target.classList.toggle("show", entry.isIntersecting);
		});
	};

	const Observer = new IntersectionObserver(inViewport);
	let options = {
		root: null,
		rootMargin: "0px",
		threshold: 1,
	};

	// Attach observer to every [data-inviewport] element:
	const Elements_inViewport = document.querySelectorAll(
		".appear-left, .appear-right"
	);
	Elements_inViewport.forEach((element) => {
		Observer.observe(element, options);
	});
});
</script>

<style lang="scss" scoped>
.card {
	width: 100%;
}
.rounded {
	border-radius: 25px;
}
.zoom-in {
	transition: 100ms;
	&:hover {
		transform: scale(1.5);
	}
}
.appear-left {
	opacity: 0;
	transform: translateX(-100%);
	transition: transform 1s ease, opacity 1.6s ease;
}
.appear-right {
	opacity: 0;
	transform: translateX(100%);
	transition: transform 1s ease, opacity 1.6s ease;
}
.show {
	transform: translateX(0);
	opacity: 1;
}

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
.image-equipement {
	max-height: 200px;
	min-width: 240px;
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
