<template>
	<q-header
		id="navbar"
		:class="
			route.name === 'home' || route.name === 'room'
				? 'navbar-transparent'
				: 'navbar-solid'
		"
		height-hint="98"
	>
		<q-toolbar
			id="toolbar"
			class="q-pa-sm"
			:class="route.name === 'home' || route.name === 'room' ? 'gradient' : ''"
		>
			<q-btn flat round class="lt-md" icon="menu" @click="toggleLeftDrawer" />

			<q-tabs class="gt-sm" align="left">
				<q-route-tab class="tab" to="/" label="Accueil" />
				<q-btn stretch unelevated flat class="tab" label="Chambres">
					<q-menu auto-close>
						<q-list style="min-width: 100px">
							<q-item
								v-for="room in roomsData"
								:key="room.name"
								clickable
								v-close-popup
								:to="{
									name: 'room',
									params: { roomName: room.pathName },
								}"
								exact
							>
								<q-item-section>{{ room.name }}</q-item-section>
							</q-item>
						</q-list>
					</q-menu>
				</q-btn>
				<q-route-tab class="tab" to="/prestations" label="Prestations" />
				<q-btn stretch unelevated flat rounded class="tab" label="Explorer">
					<q-menu auto-close>
						<q-list style="min-width: 100px">
							<q-item clickable v-close-popup to="/tourisme" exact>
								<q-item-section>Tourisme</q-item-section>
							</q-item>
							<q-item clickable v-close-popup to="/galerie" exact>
								<q-item-section>Galerie </q-item-section>
							</q-item>
						</q-list>
					</q-menu>
				</q-btn>
				<q-route-tab class="tab" to="/contact" label="Contact" />
			</q-tabs>

			<q-space />

			<q-btn
				v-if="route.name !== 'booking'"
				class="q-mr-md brand text-white"
				unelevated
				rounded
				label="Réserver"
				to="/reservation"
			></q-btn>

			<q-btn class="no-padding" to="/" size="md" unelevated rounded>
				<q-img width="45px" height="45px" fit="fill" src="logoGitedes.svg">
				</q-img>
			</q-btn>

			<q-btn class="gt-xs q-ml-xs" no-caps to="/" unelevated rounded>
				<q-toolbar-title class="cursive text-h4">
					Domaine des Fées
				</q-toolbar-title>
			</q-btn>
		</q-toolbar>
	</q-header>

	<q-drawer
		v-model="leftDrawerOpen"
		elevated
		class="column items-center text-uppercase text-orange-8"
	>
		<q-btn
			flat
			rounded
			icon="close"
			size="lg"
			class="q-ma-lg"
			@click="toggleLeftDrawer"
		/>

		<q-list>
			<q-item class="items-center" clickable to="/" exact :active="false">
				<q-item-label class="text-center"> Accueil </q-item-label>
			</q-item>
			<q-expansion-item
				expand-icon-class="text-orange-2"
				icon=""
				:content-inset-level="1"
				label="Chambres"
			>
				<q-item
					v-for="room in roomsData"
					:key="room.name"
					clickable
					:to="{
						name: 'room',
						params: { roomName: room.pathName },
					}"
					exact
					:active="false"
					class="items-center"
				>
					<q-item-section>{{ room.name }}</q-item-section>
				</q-item>
			</q-expansion-item>
			<q-item
				class="items-center"
				clickable
				to="/prestations"
				exact
				:active="false"
			>
				<q-item-label class="text-center"> Prestations </q-item-label>
			</q-item>
			<q-expansion-item
				expand-icon-class="text-orange-2"
				class="items-center"
				:content-inset-level="1"
				label="Explorer"
			>
				<q-item
					class="items-center"
					clickable
					to="/tourisme"
					exact
					:active="false"
				>
					<q-item-label class="text-center"> Tourisme </q-item-label>
				</q-item>
				<q-item
					class="items-center"
					clickable
					to="/galerie"
					exact
					:active="false"
				>
					<q-item-label class="text-center"> Galerie </q-item-label>
				</q-item>
			</q-expansion-item>
			<q-item
				class="items-center"
				clickable
				to="/contact"
				exact
				:active="false"
			>
				<q-item-label class="text-center"> Contact </q-item-label>
			</q-item>
		</q-list>
	</q-drawer>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { useRoute } from "vue-router";
import roomsData from "../data/roomsData.json";

let route = useRoute();

// Navbar — trantparent to solid
let topTransparent = ref(true);

/// uncomment below to enable on specific pages only
// let topTransparent = ref(false);
// watch(
// 	() => route.name,
// 	() => {
// 		topTransparent = route.name === "home" || route.name === "room";
// 	},
// 	{ immediate: true }
// );

window.onscroll = function () {
	if (topTransparent) {
		scrollFunction();
	}
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("navbar").classList.add("navbar-solid");
		document.getElementById("navbar").classList.remove("navbar-transparent");
		document.getElementById("toolbar").classList.remove("gradient");
	} else {
		document.getElementById("navbar").classList.add("navbar-transparent");
		document.getElementById("navbar").classList.remove("navbar-solid");
		document.getElementById("toolbar").classList.add("gradient");
	}
}

// Quasar Open drawer menu
let leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
	leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style lang="scss" scoped>
.tab-active {
	color: orange;
}
.navbar-solid {
	color: grey;
	background-color: white;
	box-shadow: 0px 2px 8px rgb(0 0 0 / 5%);
}
.navbar-transparent {
	color: white;
	background-color: transparent;
}
.gradient {
	background: linear-gradient(rgba(0, 0, 0, 0.664), 30%, transparent);
}
</style>
