<template>
	<q-header
		id="navbar"
		:class="
			route.name === 'accueil' || route.name === 'chambre'
				? 'navbar-transparent'
				: 'navbar-solid'
		"
		height-hint="98"
	>
		<q-toolbar class="q-pa-sm q-gutter-sm">
			<q-btn flat class="lt-md" round icon="menu" @click="toggleLeftDrawer" />

			<q-tabs class="gt-sm" align="left">
				<q-route-tab class="tab" to="/" label="Acceuil" />
				<q-btn stretch unelevated flat class="tab" label="Chambres">
					<q-menu auto-close>
						<q-list style="min-width: 100px">
							<q-item
								v-for="chambre in chambres"
								:key="chambre.name"
								clickable
								v-close-popup
								:to="{
									name: 'chambre',
									params: { roomName: chambre.pathName },
								}"
								exact
							>
								<q-item-section>{{ chambre.name }}</q-item-section>
							</q-item>
						</q-list>
					</q-menu>
				</q-btn>
				<q-route-tab class="tab" to="/prestations" label="Prestations" />
				<q-btn stretch unelevated flat class="tab" label="Explorer">
					<q-menu auto-close>
						<q-list style="min-width: 100px">
							<q-item clickable v-close-popup to="/tourisme" exact>
								<q-item-section>Tourisme</q-item-section>
							</q-item>
							<q-item clickable v-close-popup to="/galeries" exact>
								<q-item-section>Galeries</q-item-section>
							</q-item>
						</q-list>
					</q-menu>
				</q-btn>
				<q-route-tab class="tab" to="/contact" label="Contact" />
			</q-tabs>

			<q-space />

			<q-btn
				class="q-mr-md brand text-white"
				:unelevated="true"
				label="Réserver"
			></q-btn>

			<q-btn class="no-padding" to="/" size="md" unelevated>
				<q-img
					width="45px"
					height="45px"
					fit="fill"
					src="/src/components/icons/logoGitedes.svg"
				>
				</q-img>
			</q-btn>

			<q-btn class="gt-xs" no-caps to="/" unelevated>
				<q-toolbar-title class="cursive text-h4">
					Domaine des Fées
				</q-toolbar-title>
			</q-btn>
		</q-toolbar>
	</q-header>

	<q-drawer
		v-model="leftDrawerOpen"
		side="left"
		elevated
		class="column justify-center items-center text-uppercase text-brand"
	>
		<q-btn
			flat
			icon="close"
			class="fixed-top-left q-ma-lg"
			@click="toggleLeftDrawer"
		/>

		<q-list>
			<q-item clickable to="/" exact :active="false">
				<q-item-label class="text-center"> Acceuil </q-item-label>
			</q-item>
			<q-expansion-item
				:switch-toggle-side="right"
				expand-icon-class="text-orange"
				:content-inset-level="1"
				label="Chambres"
			>
				<q-item
					v-for="chambre in chambres"
					:key="chambre.name"
					clickable
					:to="{
						name: 'chambre',
						params: { roomName: chambre.pathName },
					}"
					exact
					:active="false"
				>
					<q-item-section>{{ chambre.name }}</q-item-section>
				</q-item>
			</q-expansion-item>
			<q-item clickable to="/prestations" exact :active="false">
				<q-item-label class="text-center"> Prestations </q-item-label>
			</q-item>
			<q-expansion-item
				:switch-toggle-side="right"
				expand-icon-class="text-orange"
				:content-inset-level="1"
				label="Explorer"
			>
				<q-item clickable to="/tourisme" exact :active="false">
					<q-item-label class="text-center"> Tourisme </q-item-label>
				</q-item>
				<q-item clickable to="/galeries" exact :active="false">
					<q-item-label class="text-center"> Galeries </q-item-label>
				</q-item>
			</q-expansion-item>
			<q-item clickable to="/contact" exact :active="false">
				<q-item-label class="text-center"> Contact </q-item-label>
			</q-item>
		</q-list>
	</q-drawer>
</template>

<style lang="scss" scoped>
.tab-active {
	color: orange;
}
.navbar-solid {
	color: grey;
	background-color: white;
}
.navbar-transparent {
	color: white;
	background-color: transparent;
}
.navbar-transparent .tab:hover {
	background-color: rgba($color: orange, $alpha: 0.98);
}
</style>

<script setup>
import { ref, watch, computed } from "vue";
import { useRoute } from "vue-router";
import chambres from "../data/chambres.json";

let route = useRoute();
let topTransparent = ref(false);
watch(
	() => route.name,
	() => {
		topTransparent = route.name === "accueil" || route.name === "chambre";
	},
	{ immediate: true }
);

// Navbar — trantparent to solid
window.onscroll = function () {
	if (topTransparent) {
		scrollFunction();
	}
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("navbar").classList.add("navbar-solid");
		document.getElementById("navbar").classList.remove("navbar-transparent");
	} else {
		document.getElementById("navbar").classList.add("navbar-transparent");
		document.getElementById("navbar").classList.remove("navbar-solid");
	}
}

// Quasar Open drawer menu
const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
	leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
