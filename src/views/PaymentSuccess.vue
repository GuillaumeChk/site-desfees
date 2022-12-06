<template>
	<q-page class="q-mb-xl">
		<section class="section-video">
			<div class="video-container">
				<q-img
					src="../assets/rooms/exterieur/Fée__gros_plan_hiver_compressed60_014.jpg"
					class="carousel"
				>
					<div
						class="absolute-center bg-transparent text-h4 text-uppercase text-center text-weight-light"
						style="letter-spacing: 4px"
					>
						Paiement effectué
					</div>
				</q-img>
			</div>
		</section>

		<div class="wrapper">
			<div class="q-pa-md">
				<h4 class="q-py-xl text-uppercase text-weight-light">
					Merci pour votre réservation !
				</h4>

				<p>
					Votre paiement a bien été effectué. <br />
					Nous allons vous contacter.
				</p>

				<p>Si vous avez besion de nous contactez par vous-même :</p>
				<q-btn
					rounded
					unelevated
					label="Contact"
					color="orange"
					to="/contact"
				/>

				<CustomDivider />
			</div>
		</div>
	</q-page>
</template>

<script setup>
import CustomDivider from "../components/CustomDivider.vue";
</script>
