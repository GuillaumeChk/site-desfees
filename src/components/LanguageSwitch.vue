<template>
	<q-btn-dropdown
		class="q-pa-none q-pr-xs without-icon"
		menu-anchor="bottom middle"
		menu-self="top middle"
		unelevated
		rounded
	>
		<template v-slot:label>
			<div class="row items-center no-wrap">
				<q-img
					fit="contain"
					height="50px"
					width="50px"
					src="../assets/lang.svg"
				>
				</q-img>
			</div>
		</template>

		<q-list>
			<q-item clickable v-close-popup @click="$i18n.locale = 'fr'">
				<q-item-section>
					<q-item-label>français</q-item-label>
				</q-item-section>
			</q-item>

			<q-item clickable v-close-popup @click="$i18n.locale = 'en'">
				<q-item-section>
					<q-item-label>english</q-item-label>
				</q-item-section>
			</q-item>

			<q-item clickable v-close-popup @click="$i18n.locale = 'de'">
				<q-item-section>
					<q-item-label>deutsch</q-item-label>
				</q-item-section>
			</q-item>

			<q-item clickable v-close-popup @click="$i18n.locale = 'it'">
				<q-item-section>
					<q-item-label>italiano</q-item-label>
				</q-item-section>
			</q-item>

			<q-item clickable v-close-popup @click="$i18n.locale = 'pt'">
				<q-item-section>
					<q-item-label>português</q-item-label>
				</q-item-section>
			</q-item>

			<q-item clickable v-close-popup @click="$i18n.locale = 'ru'">
				<q-item-section>
					<q-item-label>pусский</q-item-label>
				</q-item-section>
			</q-item>

			<q-item clickable v-close-popup @click="$i18n.locale = 'es'">
				<q-item-section>
					<q-item-label>español</q-item-label>
				</q-item-section>
			</q-item>
		</q-list>
	</q-btn-dropdown>
</template>

<style>
button.without-icon i {
	display: none;
}
</style>
