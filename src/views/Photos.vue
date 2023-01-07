<template>
	<q-page>
		<section class="section-video">
			<div class="video-container">
				<q-img
					src="../assets/rooms/exterieur/DSC5970_compressed60_019.jpg"
					class="carousel"
				>
					<div
						class="absolute-center bg-transparent text-h4 text-uppercase text-center text-weight-light"
						style="letter-spacing: 4px"
					>
						{{ $t("gallery.titre") }}
					</div>
				</q-img>
				<div class="gt-md absolute-bottom text-center q-pb-lg">
					<q-img src="../assets/chevron_bas.svg" width="50px"></q-img>
				</div>
			</div>
		</section>

		<div class="wrapper">
			<h4 class="q-pa-md q-pt-xl text-uppercase text-weight-light">
				{{ $t("gallery.titre9") }}
			</h4>

			<section class="q-gutter-y-md">
				<h5 class="q-px-md q-pt-md">{{ $t("gallery.titre10") }}</h5>

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
						v-model="slide"
						v-model:fullscreen="fullscreen"
						class="uncropped-image"
					>
						<q-carousel-slide
							v-for="(slide, key, index) in imagesInterieur"
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
				<h5 class="q-px-md q-pt-md">{{ $t("gallery.titre11") }}</h5>
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
						v-model:fullscreen="fullscreen2"
						class="uncropped-image"
					>
						<q-carousel-slide
							v-for="(slide2, key, index) in imagesExterieur"
							:key="key"
							:name="index"
							:img-src="slide2"
							class="uncropped-image"
						/>

						<template v-slot:control>
							<q-carousel-control position="bottom-right" :offset="[18, 18]">
								<q-btn
									round
									flat
									color="white"
									text-color="black"
									:icon="fullscreen2 ? 'fullscreen_exit' : 'fullscreen'"
									@click="fullscreen2 = !fullscreen2"
								/>
							</q-carousel-control>
						</template>
					</q-carousel>
				</q-responsive>
				<h5 class="q-px-md q-pt-md">{{ $t("gallery.titre12") }}</h5>
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
						v-model="slide3"
						v-model:fullscreen="fullscreen3"
						class="uncropped-image"
					>
						<q-carousel-slide
							v-for="(slide3, key, index) in imagesJura"
							:key="key"
							:name="index"
							:img-src="slide3"
							class="uncropped-image"
						/>

						<template v-slot:control>
							<q-carousel-control position="bottom-right" :offset="[18, 18]">
								<q-btn
									round
									flat
									color="white"
									text-color="black"
									:icon="fullscreen3 ? 'fullscreen_exit' : 'fullscreen'"
									@click="fullscreen3 = !fullscreen3"
								/>
							</q-carousel-control>
						</template>
					</q-carousel>
				</q-responsive>
			</section>
		</div>
	</q-page>
</template>

<script setup>
import CustomDivider from "../components/CustomDivider.vue";
import { ref } from "vue";

const slide = ref(0);
const slide2 = ref(0);
const slide3 = ref(0);
const fullscreen = ref(false);
const fullscreen2 = ref(false);
const fullscreen3 = ref(false);

const imagesInterieur = import.meta.glob(
	"../assets/rooms/interieur/*.(jpg|JPG|png|PNG)",
	{ as: "url", eager: true }
);
const imagesExterieur = import.meta.glob(
	"../assets/rooms/exterieur/*.(jpg|JPG|png|PNG)",
	{ as: "url", eager: true }
);
const imagesJura = import.meta.glob(
	"../assets/rooms/jura/*.(jpg|JPG|png|PNG)",
	{ as: "url", eager: true }
);
</script>

<style>
.uncropped-image {
	background-size: contain; /* don't crop the image  */
	background-repeat: no-repeat; /* only show the image one time  */
	background-color: #eeeeee; /* color to fill empty space with  */
}
</style>
