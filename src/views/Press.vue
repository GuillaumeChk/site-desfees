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
						{{ $t("gallery.titre2") }}
					</div>
				</q-img>
				<div class="gt-md absolute-bottom text-center q-pb-lg">
					<q-img src="../assets/chevron_bas.svg" width="50px"></q-img>
				</div>
			</div>
		</section>

		<div class="wrapper">
			<!-- <h4 class="q-pa-md q-pt-xl text-uppercase text-weight-light">
				{{ $t("gallery.titre2") }}
			</h4> -->

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
		</div>
	</q-page>
</template>

<script setup>
import CustomDivider from "../components/CustomDivider.vue";
import { ref } from "vue";
</script>

<style>
.uncropped-image {
	background-size: contain; /* don't crop the image  */
	background-repeat: no-repeat; /* only show the image one time  */
	background-color: #eeeeee; /* color to fill empty space with  */
}
</style>
