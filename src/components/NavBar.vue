<template>
	<q-header id="navbar" class="navbar-transparent" height-hint="98">
		<q-toolbar class="q-pa-sm q-gutter-sm">
			<div class="lt-md">
				<q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
			</div>

			<q-tabs class="gt-sm" align="left">
				<q-route-tab class="tab" to="/" label="Acceuil" />
				<q-route-tab class="tab" to="/chambres" label="Chambres" />
				<q-route-tab class="tab" to="/prestations" label="Prestations" />
				<q-route-tab class="tab" to="/tourisme" label="Explorer" />
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
					fit="contain"
					src="nv_logo_fee_40.png"
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
		class="column justify-center items-center text-uppercase brand-4"
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
				expand-icon-class="text-white"
				:content-inset-level="1"
				label="Chambres"
			>
				<q-item clickable to="/chambre/salina" exact :active="false">
					<q-item-label class="text-center"> Fée Salina </q-item-label>
				</q-item>
				<q-item clickable to="/chambre/etoiles" exact :active="false">
					<q-item-label class="text-center"> Fée des Étoiles </q-item-label>
				</q-item>
				<q-item clickable to="/chambre/romantique" exact :active="false">
					<q-item-label class="text-center"> Fée Romantique </q-item-label>
				</q-item>
				<q-item clickable to="/chambre/melusine" exact :active="false">
					<q-item-label class="text-center"> Fée Mélusine </q-item-label>
				</q-item>
				<q-item clickable to="/chambre/reves" exact :active="false">
					<q-item-label class="text-center"> Fée des Rêves </q-item-label>
				</q-item>
				<q-item clickable to="/chambre/gite" exact :active="false">
					<q-item-label class="text-center">
						Gîte un Conte de Fées
					</q-item-label>
				</q-item>
			</q-expansion-item>
			<q-item clickable to="/prestations" exact :active="false">
				<q-item-label class="text-center"> Prestations </q-item-label>
			</q-item>
			<q-expansion-item
				:switch-toggle-side="right"
				expand-icon-class="text-white"
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
	color: #9e9e9e;
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

<script>
import { ref } from "vue";

window.onscroll = function () {
	scrollFunction();
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

export default {
	setup() {
		const leftDrawerOpen = ref(false);

		return {
			leftDrawerOpen,
			toggleLeftDrawer() {
				leftDrawerOpen.value = !leftDrawerOpen.value;
			},
		};
	},
};
</script>
