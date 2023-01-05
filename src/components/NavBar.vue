<template>
	<q-header id="navbar" class="navbar-transparent" height-hint="98">
		<q-toolbar
			id="toolbar"
			class="q-pa-sm"
			:class="route.name === 'home' || route.name === 'room' ? 'gradient' : ''"
		>
			<q-btn flat round class="lt-md" @click="toggleLeftDrawer">
				<q-icon size="sm" name="menu"> </q-icon>
			</q-btn>

			<q-tabs class="gt-sm" align="left">
				<q-route-tab to="/">{{ $t("navbar.accueil") }}</q-route-tab>
				<q-btn
					stretch
					unelevated
					flat
					@mouseover.native="menuOver = true"
					@mouseout.native="menuOver = false"
				>
					<div>
						{{ $t("navbar.chambres") }}
					</div>
					<q-menu auto-close v-model="navbarMenuTab1">
						<q-list
							@mouseover.native="listOver = true"
							@mouseout.native="listOver = false"
							style="min-width: 100px"
						>
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
				<q-route-tab to="/prestations">
					{{ $t("navbar.prestations") }}
				</q-route-tab>
				<q-btn
					stretch
					unelevated
					flat
					rounded
					@mouseover.native="menuOver2 = true"
					@mouseout.native="menuOver2 = false"
					label="Explorer"
				>
					<q-menu auto-close v-model="navbarMenuTab2">
						<q-list
							@mouseover.native="listOver2 = true"
							@mouseout.native="listOver2 = false"
							style="min-width: 100px"
						>
							<q-item clickable v-close-popup to="/tourisme" exact>
								<q-item-section>{{ $t("navbar.tourisme") }}</q-item-section>
							</q-item>
							<q-item clickable v-close-popup to="/presse" exact>
								<q-item-section>{{ $t("navbar.press") }} </q-item-section>
							</q-item>
							<q-item clickable v-close-popup to="/photos" exact>
								<q-item-section>{{ $t("navbar.photos") }} </q-item-section>
							</q-item>
							<q-item clickable v-close-popup to="/videos" exact>
								<q-item-section>{{ $t("navbar.videos") }} </q-item-section>
							</q-item>
							<q-item clickable v-close-popup to="/reviews" exact>
								<q-item-section>{{ $t("navbar.reviews") }} </q-item-section>
							</q-item>
						</q-list>
					</q-menu>
				</q-btn>
				<q-route-tab to="/contact">
					{{ $t("navbar.contact") }}
				</q-route-tab>
			</q-tabs>

			<q-space />

			<q-btn
				v-if="route.name !== 'booking'"
				class="q-mr-md brand text-white"
				unelevated
				rounded
				to="/reservation"
			>
				{{ $t("navbar.reserver") }}
			</q-btn>

			<!-- <q-btn class="no-padding" to="/" size="md" unelevated rounded>
				<q-img width="50px" height="50px" fit="fill" src="logoGitedes.svg">
				</q-img>
			</q-btn> -->

			<LanguageSwitch />

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
				<q-item-label class="text-center">
					{{ $t("navbar.accueil") }}
				</q-item-label>
			</q-item>
			<q-expansion-item
				expand-icon-class="text-orange-2"
				icon=""
				:content-inset-level="1"
			>
				<template v-slot:header>
					{{ $t("navbar.chambres") }}
				</template>
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
				<q-item-label class="text-center">
					{{ $t("navbar.prestations") }}
				</q-item-label>
			</q-item>
			<q-expansion-item
				expand-icon-class="text-orange-2"
				class="items-center"
				:content-inset-level="1"
			>
				<template v-slot:header>
					{{ $t("navbar.explorer") }}
				</template>
				<q-item
					class="items-center"
					clickable
					to="/tourisme"
					exact
					:active="false"
				>
					<q-item-label class="text-center">
						{{ $t("navbar.tourisme") }}
					</q-item-label>
				</q-item>
				<q-item
					class="items-center"
					clickable
					to="/presse"
					exact
					:active="false"
				>
					<q-item-label class="text-center">
						{{ $t("navbar.press") }}
					</q-item-label>
				</q-item>
				<q-item
					class="items-center"
					clickable
					to="/photos"
					exact
					:active="false"
				>
					<q-item-label class="text-center">
						{{ $t("navbar.photos") }}
					</q-item-label>
				</q-item>
				<q-item
					class="items-center"
					clickable
					to="/videos"
					exact
					:active="false"
				>
					<q-item-label class="text-center">
						{{ $t("navbar.videos") }}
					</q-item-label>
				</q-item>
				<q-item class="items-center" clickable to="/avis" exact :active="false">
					<q-item-label class="text-center">
						{{ $t("navbar.reviews") }}
					</q-item-label>
				</q-item>
			</q-expansion-item>
			<q-item
				class="items-center"
				clickable
				to="/contact"
				exact
				:active="false"
			>
				<q-item-label class="text-center">
					{{ $t("navbar.contact") }}
				</q-item-label>
			</q-item>
		</q-list>

		<CustomDivider />
	</q-drawer>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { useRoute } from "vue-router";
import roomsData from "../data/roomsData.json";
import CustomDivider from "./CustomDivider.vue";
import LanguageSwitch from "./LanguageSwitch.vue";
import { debounce } from "quasar";

let route = useRoute();

// Navbar tabs open when hovering it
let navbarMenuTab1 = ref(false);
let navbarMenuTab2 = ref(false);
let menuOver = ref(false);
let menuOver2 = ref(false);
let listOver = ref(false);
let listOver2 = ref(false);
const handleMenuHover1 = debounce(function () {
	if (menuOver.value || listOver.value) {
		navbarMenuTab1.value = true;
	} else {
		navbarMenuTab1.value = false;
	}
}, 150 /*ms to wait*/);
watch(menuOver, () => handleMenuHover1());
watch(listOver, () => handleMenuHover1());
const handleMenuHover2 = debounce(function () {
	if (menuOver2.value || listOver2.value) {
		navbarMenuTab2.value = true;
	} else {
		navbarMenuTab2.value = false;
	}
}, 150 /*ms to wait*/);
watch(menuOver2, () => handleMenuHover2());
watch(listOver2, () => handleMenuHover2());

// Navbar — trantparent to solid
let topTransparent = true;
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
