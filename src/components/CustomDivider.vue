<template>
	<div class="q-py-xs q-my-xl">
		<div class="divider divider-transparent">
			<img
				src="/src/components/icons/logoGitedes.svg"
				height="60px"
				width="60px"
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
	top: -30px;
	left: calc(50% - 30px);
	width: 60px;
	height: 60px;
	box-shadow: inset 0 0 0 30px white, 0 0 0 20px white;
}
</style>
