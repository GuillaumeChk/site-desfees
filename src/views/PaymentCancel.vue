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
						{{ $t("paymentCancel.titre") }}
					</div>
				</q-img>
				<div class="gt-md absolute-bottom text-center q-pb-lg">
					<q-img src="../assets/chevron_bas.svg" width="50px"></q-img>
				</div>
			</div>
		</section>

		<div class="wrapper">
			<div class="q-pa-md">
				<h4 class="q-py-xl text-uppercase text-red text-weight-light">
					{{ $t("paymentCancel.titre2") }}
				</h4>

				<p v-html="$t('paymentCancel.texte')"></p>

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
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
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

		await deleteDoc(doc(db, "calendar", eventID));
	} else {
		console.log("reservation is undefined");
	}
});
</script>
