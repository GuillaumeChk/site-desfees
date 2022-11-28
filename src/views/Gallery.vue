<template>
	<q-page>
		<section class="section-video">
			<div class="video-container">
				<q-img
					src="../assets/rooms/exterieur/_DSC5970_compressed60_019.jpg"
					class="carousel"
				>
					<div
						class="absolute-center bg-transparent text-h4 text-uppercase text-center text-weight-light"
						style="letter-spacing: 4px"
					>
						{{ $t("gallery.titre") }}
					</div>
				</q-img>
			</div>
		</section>

		<div class="wrapper">
			<h4 class="q-pa-md q-pt-xl text-uppercase text-weight-light">
				{{ $t("gallery.titre2") }}
			</h4>

			<section class="q-px-md q-gutter-y-md">
				<h5 class="text-brand q-py-lg">
					{{ $t("gallery.titre3") }}
				</h5>

				<p>
					{{ $t("gallery.paragraphe") }}
				</p>

				<q-img src="../assets/depeche_110619_compressed.jpg"></q-img>

				<p>
					{{ $t("gallery.article_paru") }}
					<a
						href="https://issuu.com/paoh/docs/pays-dolois-235_1bb8878d5d9e98"
						target="_blank"
						>{{ $t("gallery.voir_article") }}</a
					>
				</p>
			</section>

			<CustomDivider />

			<section class="q-px-md q-gutter-y-md">
				<h5 class="text-brand-2 q-py-lg">
					{{ $t("gallery.titre5") }}
				</h5>
				<a href="" target="_blank">{{ $t("gallery.voir_article") }}</a>
			</section>

			<CustomDivider />

			<section class="q-px-md q-gutter-y-md">
				<h5 class="text-brand q-py-lg">
					{{ $t("gallery.titre6") }}
				</h5>

				<q-img src="../assets/article_compressed.jpg"></q-img>

				<p>{{ $t("gallery.article_paru2") }}</p>
			</section>

			<CustomDivider />

			<section class="q-px-md q-gutter-y-md">
				<h5 class="text-brand-2 q-py-lg">
					{{ $t("gallery.titre7") }}
				</h5>

				<p>
					{{ $t("gallery.paragraphe2") }}
				</p>

				<div class="row justify-center">
					<q-img
						src="../assets/article2_compressed.jpg"
						style="max-width: 374px"
					></q-img>
				</div>

				<p>
					{{ $t("gallery.paragraphe3") }}
				</p>
			</section>

			<CustomDivider />

			<section class="q-px-md q-gutter-y-md">
				<h5 class="text-brand q-py-lg">{{ $t("gallery.titre8") }}</h5>

				<q-img src="../assets/st-valentin_2022_compressed.jpg"></q-img>

				<p>{{ $t("gallery.article_paru3") }}</p>
			</section>

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
						control-color="black"
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
						control-color="black"
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
						control-color="black"
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
