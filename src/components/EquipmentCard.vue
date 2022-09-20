<template>
	<q-card flat bordered class="appear-left card" style="border-radius: 25px">
		<q-card-section horizontal class="justify-center">
			<h5 class="q-pa-md q-pl-lg text-weight-light text-uppercase">
				{{ equipment.name }}
			</h5>
		</q-card-section>

		<q-separator />

		<q-card-section class="row bg-white q-pt-none">
			<q-img
				loading="eager"
				no-spinner
				:src="getImageUrl(equipment.imageUrl)"
				class="image-equipement col-sm-4 self-center"
			/>

			<q-card-section class="col-sm-8">
				<p>
					{{ equipment.description }}
				</p>

				<p class="text-bold">Équipé dans :</p>
				<q-list dense class="text-italic row warp justify-between">
					<q-item
						clickable
						v-ripple
						v-for="chambreName in equipment.chambres"
						:key="chambreName"
						:to="
							'/chambre/' +
							chambres.find((chambre) => chambre.pathName === chambreName)
								.pathName
						"
						exact
					>
						<q-item-section>
							<q-item-label>
								✓
								{{
									chambres.find((chambre) => chambre.pathName === chambreName)
										.name
								}}
							</q-item-label>
						</q-item-section>
					</q-item>
				</q-list>
			</q-card-section>
		</q-card-section>
	</q-card>
</template>

<script setup>
import { onMounted } from "vue";

const props = defineProps({
	equipment: {
		// type: Object,
		required: true,
	},
	chambres: {
		// type: Object,
		required: true,
	},
});

function getImageUrl(subPath) {
	return new URL(`../assets/${subPath}`, import.meta.url).href;
}
console.log(getImageUrl(props.equipment.imageUrl));

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

<style lang="scss">
.card {
	width: 100%;
}
.image-equipement {
	max-height: 200px;
	min-width: 240px;
}
</style>
