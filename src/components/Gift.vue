<template>
	<div class="row justify-center items-center q-pa-lg q-ma-md">
		<div class="q-ma-lg q-gutter-md">
			<h5 class="text-brand text-uppercase">Bon cadeau</h5>
			<p class="text-grey-7 text-italic">
				Envie de faire paisir ? <br />
				<strong class="text-purple">Offrez</strong> un moment de féerie à vos
				proches !
			</p>
		</div>

		<router-link :to="{ name: 'booking', query: { gift: 1 } }">
			<q-img
				src="../assets/bon_cadeau_new.png"
				width="220px"
				height="220px"
			></q-img>
		</router-link>
	</div>
</template>
