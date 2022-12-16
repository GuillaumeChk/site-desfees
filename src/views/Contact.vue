<template>
	<q-page>
		<section class="section-video">
			<div class="video-container">
				<q-img
					src="../assets/rooms/exterieur/Terrasse_et_roseaux_1_compressed60_034.jpg"
					class="carousel"
				>
					<div
						class="absolute-center bg-transparent text-h4 text-uppercase text-center text-weight-light"
						style="letter-spacing: 4px"
					>
						{{ $t("contact.titre") }}
					</div>
				</q-img>
			</div>
		</section>

		<div class="wrapper">
			<!-- <h4 class="q-pa-md q-pt-xl text-uppercase text-weight-light">Contact</h4> -->

			<section class="q-pa-md q-pt-xl q-pl-lg">
				<h4>
					Domaine des Fées 
				</h4>
				<h5>
					Chambres d'hôtes et Gîte 
				</h5>
				<p>
					Chez Isabelle<br />
					<address class="address">
						
						<q-icon name="location_city" /> 2 Rue de la Chassignoles, 39110 Pretin <br> <span>46° 56' 13.892" N  5° 50' 5.219" E</span> 
						<div class="q-pa-xs q-gutter-sm">
							<q-btn round unelevated  color="orange-4" :icon="addressCopied ? 'assignment_turned_in' : 'content_copy' "  @click="copyAddress('2 Rue de la Chassignoles, 39110 Pretin, France')"   />
							<q-btn round unelevated color="orange-4" icon="directions" href="https://goo.gl/maps/iQUQ581TETnRqAdb6"  target="_blank" />
						</div>
						<q-icon name="email" />{{ $t("contact.mail") }}
						<a href="mailto:info@desfees.fr">info@desfees.fr</a><br />
						<q-icon name="phone" />{{ $t("contact.phone") }}
						<a href="tel:+33384732636">+33 (0) 3 84 73 26 36</a><br />
						<q-icon name="smartphone" />{{ $t("contact.portable") }}
						<a href="tel:+33637788843">+33 (0) 6 37 78 88 43</a>{{ $t("contact.memento") }}<br />
					</address>
				</p>
			</section>
		</div>

		<section class="q-mt-lg q-px-lg">
			<div class="wrapper items-center q-pb-xl">
				<h4 class="q-py-xl text-uppercase text-weight-light">{{ $t("contact.carte") }}</h4>
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
	</q-page>
</template>

<script setup>
import { copyToClipboard } from 'quasar'
import { ref } from 'vue';

let addressCopied = ref(false);

function copyAddress(text) {
	copyToClipboard(text)
	.then(() => {
    // success!
	console.log("copié !")
	addressCopied.value = true;
	})
	.catch(() => {
		// fail
		console.log("fail !")
		
	})
}
</script>

<style>
.map-container {
	position: relative;
	width: 100%;
	height: 30vh;
	overflow: hidden;
	padding-top: 100%; /* Aspect Ratio */
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

.address{
	font-style: normal;
}
</style>
