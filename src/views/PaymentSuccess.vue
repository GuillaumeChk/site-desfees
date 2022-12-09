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
						{{ $t("paymentSuccess.titre") }}
					</div>
				</q-img>
			</div>
		</section>

		<div class="wrapper">
			<div class="q-pa-md">
				<h4 class="q-py-xl text-uppercase text-green text-weight-light">
					{{ $t("paymentSuccess.titre2") }}
				</h4>

				<p v-html="$t('paymentSuccess.texte')"></p>

				<p v-html="$t('paymentSuccess.texte2')"></p>
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
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useRoute } from "vue-router";
import { onMounted } from "vue";

onMounted(async () => {
	const route = useRoute();

	const sessionID = route.query.session_id;

	if (sessionID) {
		let eventID = "";

		const querySnapshot = await getDocs(collection(db, "calendar"));
		querySnapshot.forEach((doc) => {
			if (doc.data().stripeSessionID === sessionID) {
				eventID = doc.id;
			}
		});

		await setDoc(doc(db, "calendar", eventID), { paid: true }, { merge: true });
	} else {
		console.log("reservation is undefined");
	}
});
</script>
