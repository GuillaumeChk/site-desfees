<template>
	<q-page>
		<section class="section-video">
			<div class="video-container">
				<q-img
					src="../assets/rooms/cocooning/_DSC6074_compressed.jpg"
					class="carousel"
				>
					<div
						class="absolute-center bg-transparent text-h4 text-uppercase text-center text-weight-light"
						style="letter-spacing: 4px"
					>
						{{ $t("services.titre") }}
					</div>
				</q-img>
				<div class="gt-md absolute-bottom text-center q-pb-lg">
					<q-img src="../assets/chevron_bas.svg" width="50px"></q-img>
				</div>
			</div>
		</section>

		<div class="wrapper">
			<h4 class="q-pa-md q-pt-xl text-uppercase text-weight-light">
				{{ $t("services.titre2") }}
			</h4>

			<section class="q-gutter-y-md">
				<!-- <h5 class="q-px-md text-brand-2 q-py-lg">
					{{ $t("services.titre3") }}
				</h5> -->

				<q-img
					src="../assets/rooms/exterieur/Vue_drone_compressed60_026.jpg"
				></q-img>

				<p class="q-px-md">
					{{ $t("services.paragraphe") }}
				</p>

				<q-img
					src="../assets/rooms/exterieur/Mare_compressed60_013.jpg"
				></q-img>

				<p class="q-px-md">
					{{ $t("services.paragraphe2") }}
				</p>

				<p class="q-px-md">
					{{ $t("services.paragraphe3") }}
				</p>

				<p class="q-px-md">
					{{ $t("services.paragraphe4") }}
				</p>
				<q-img
					src="../assets/rooms/cocooning/Accueil_New_compressed.jpg"
				></q-img>
				<q-img src="../assets/rooms/cocooning/_DSC7884_compressed.jpg"></q-img>
				<p class="q-px-md">
					{{ $t("services.paragraphe5") }}
				</p>

				<p class="q-px-md">
					{{ $t("services.paragraphe6") }}
				</p>

				<q-img
					src="../assets/rooms/cocooning/New_salle_1_compressed.jpg"
				></q-img>
				<q-img
					src="../assets/rooms/exterieur/_DSC6624-Modifier_compressed60_035.jpg"
				></q-img>
				<q-img
					src="../assets/rooms/cocooning/Terrasse_1er_(2)_compressed.jpg"
				></q-img>
				<p class="q-px-md">
					{{ $t("services.paragraphe7") }}
				</p>
				<q-img
					src="../assets/rooms/exterieur/IMG_3072_compressed60_020.jpg"
				></q-img>

				<p class="q-px-md">
					{{ $t("services.paragraphe8") }}
					<a
						href="/sites/desfees.fr/files/fichiers/pdf/Kneippwalk.pdf"
						target="_blank"
						>{{ $t("services.texte8") }}</a
					>.
				</p>

				<p class="q-px-md" v-html="$t('services.paragraphe9')"></p>

				<div class="row justify-center">
					<q-img
						src="../assets/rooms/exterieur/Avec_Rocher_terrasse_compressed60_001.jpg"
						style="max-width: 50%"
						fit="contain"
					></q-img>
				</div>
			</section>
		</div>
	</q-page>
</template>

<style></style>
