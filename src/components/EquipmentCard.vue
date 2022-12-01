<template>
	<q-card flat class="card">
		<!-- <q-card-section horizontal class="justify-center">
			<h5 class="q-pa-md q-pl-lg text-weight-light text-uppercase">
				{{ equipment.name }}
			</h5>
		</q-card-section>

		<q-separator /> -->

		<q-card-section class="row q-px-sm q-pt-xs q-pb-sm">
			<q-img
				loading="eager"
				no-spinner
				:src="getImageUrl(equipment.imageUrl)"
				class="image-equipement col-sm-4"
			/>

			<q-card-section
				class="col-sm-8 q-py-xs column justify-between q-gutter-y-md"
			>
				<h6>
					{{ equipment.description[$i18n.locale] }}
				</h6>

				<div class="text-grey-9">
					<span>{{ $t("equipments.equipe_dans") }}</span>

					<q-list dense class="text-italic row warp justify-between">
						<q-item
							clickable
							v-ripple
							v-for="roomName in equipment.rooms"
							:key="roomName"
							:to="
								'/chambre/' +
								rooms.find((room) => room.pathName === roomName).pathName
							"
							exact
						>
							<q-item-section>
								<q-item-label>
									✓
									{{ rooms.find((room) => room.pathName === roomName).name }}
								</q-item-label>
							</q-item-section>
						</q-item>
					</q-list>
				</div>
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
	rooms: {
		// type: Object,
		required: true,
	},
});

function getImageUrl(subPath) {
	return new URL(`../assets/${subPath}`, import.meta.url).href;
}

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
		".appear-left, .appear-right, .appear-bottom"
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
	border-radius: 16px;
}
</style>
