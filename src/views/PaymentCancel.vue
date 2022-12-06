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
						Paiement annulé
					</div>
				</q-img>
			</div>
		</section>

		<div class="wrapper">
			<div class="q-pa-md">
				<h4 class="q-py-xl text-uppercase text-weight-light">Annulation</h4>

				<p>
					Aucun paiement n'a été effectué. <br />
					Si vous pensez qu'il s'agit d'une erreur, n'essayez pas de réserver à
					nouveau et contactez-nous.
				</p>

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
