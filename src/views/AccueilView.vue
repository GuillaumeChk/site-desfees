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

			<p>
				Les Fées ont pris possession des lieux,
				<strong>au pied des monts du Jura</strong> et au bord d’une petite
				rivière appelée... « La Vache ».
			</p>
		</section>

		<section class="q-py-lg text-center">
			<div class="wrapper row items-center">
				<q-parallax
					:speed="1"
					class="col-sm-7 col-lg-6 appear-left"
					src="src/assets/Salon_(10).jpg"
				>
				</q-parallax>
				<div class="col-sm-5 col-lg-6 q-pa-xl brand-3 appear-right">
					<p>
						Un écrin de nature ou l’hiver s’installe afin de permettre à la
						nature de se ressourcer en compagnie des fées. La féerie vous
						accompagnera durant votre séjour dans un
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
					class="col-sm-7 col-lg-8 appear-right"
					src="src/assets/Salon_(6).jpg"
				></q-parallax>

				<div class="col-sm-5 col-lg-4 q-pa-xl brand-2 appear-left">
					<p>
						Les fées ont profitées pour s’embellir et leur permettre de
						réellement prendre possession des lieux avec un
						<strong>parc zen</strong> où la magie de l’eau et de la lumière
						sauront vous charmer dans ce <strong>cadre idyllique</strong>.
					</p>
				</div>
			</div>
		</section>

		<h4 class="wrapper q-pa-lg q-py-xl text-uppercase">Nos chambres</h4>
		<section class="chambres wrapper">
			<div
				class="chambre q-pb-lg"
				v-for="chambre in chambres"
				:key="chambre.name"
				:class="[
					chambre.index % 2 === 0
						? 'q-pl-lg appear-right'
						: 'q-pr-lg appear-left',
				]"
			>
				<q-parallax :src="chambre.image" :height="167">
					<h3
						class="q-pa-md bg-transparent text-white cursive"
						:class="[
							chambre.index % 2 === 0
								? 'absolute-bottom-right'
								: 'absolute-bottom-left',
						]"
					>
						{{ chambre.name }}
					</h3>
				</q-parallax>
			</div>
		</section>

		<section>
			<h4 class="wrapper q-pa-lg q-py-xl text-uppercase">Nos équipements</h4>

			<q-card
				flat
				v-for="equipment in equipments"
				:key="equipment.name"
				:class="[
					equipment.index % 2 === 0
						? 'brand appear-left'
						: 'brand-4 appear-right',
				]"
			>
				<div
					class="wrapper row items-center"
					:class="[equipment.index % 2 === 0 ? '' : 'reverse']"
				>
					<q-img
						loading="eager"
						no-spinner
						:src="equipment.image"
						class="col-sm-6 col-md-4"
						img-class="image-chambre"
					/>

					<q-card-section class="col-sm-6 col-md-8">
						<h5 class="text-uppercase">{{ equipment.name }}</h5>
						<p>{{ equipment.description }}</p>

						<p>Équipé dans :</p>
						<q-list dense class="text-italic">
							<q-item clickable v-ripple v-for="chambre in equipment.chambres">
								<q-item-section>
									<q-item-label> ✓ {{ chambres[chambre].name }} </q-item-label>
								</q-item-section>
							</q-item>
						</q-list>
					</q-card-section>
				</div>
			</q-card>
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
.appear-left {
	opacity: 0;
	transform: translateX(-100%);
	transition: transform 1s ease, opacity 1s ease;
}
.appear-right {
	opacity: 0;
	transform: translateX(100%);
	transition: transform 1s ease, opacity 1s ease;
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
