<template>
	<div class="q-py-xs q-my-xl">
		<div class="divider divider-transparent">
			<img
				src="../assets/icons/logoGitedes.svg"
				height="54px"
				width="54px"
				class="divider-center"
			/>
		</div>
	</div>
</template>

<style>
.divider {
	position: relative;
	height: 1px;
}

.divider-transparent {
	content: "";
	position: absolute;
	top: 0;
	left: 5%;
	right: 5%;
	width: 90%;
	height: 1px;
	background-image: linear-gradient(to right, transparent, orange, transparent);
}
.divider-center {
	content: "";
	position: absolute;
	z-index: 1;
	top: -27px;
	left: calc(50% - 27px);
	width: 54px;
	height: 54px;
	box-shadow: inset 0 0 0 30px white, 0 0 0 25px white;
}
</style>
