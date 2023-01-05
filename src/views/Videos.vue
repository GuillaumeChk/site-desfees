<template>
	<q-page>
		<section class="section-video">
			<div class="video-container">
				<q-img
					src="../assets/rooms/exterieur/DSC5970_compressed60_019.jpg"
					class="carousel"
				>
					<div
						class="absolute-center bg-transparent text-h4 text-uppercase text-center text-weight-light"
						style="letter-spacing: 4px"
					>
						{{ $t("navbar.videos") }}
					</div>
				</q-img>
				<div class="gt-md absolute-bottom text-center q-pb-lg">
					<q-img src="../assets/chevron_bas.svg" width="50px"></q-img>
				</div>
			</div>
		</section>

		<div class="wrapper">
			<!-- <h4 class="q-pa-md q-pt-xl text-uppercase text-weight-light">
				{{ $t("gallery.titre9") }}
			</h4> -->

			<section class="q-py-xl q-gutter-lg justify-center">
				<q-responsive style="height: 600px; max-width: 100%">
					<iframe
						width="560"
						height="315"
						src="https://www.youtube-nocookie.com/embed/qpZ8VSYXky4"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</q-responsive>

				<q-responsive style="height: 600px; max-width: 100%">
					<iframe
						width="560"
						height="315"
						src="https://www.youtube-nocookie.com/embed/ZKSqWQTjp7Q"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe
				></q-responsive>
				<q-responsive style="height: 600px; max-width: 100%">
					<iframe
						width="560"
						height="315"
						src="https://www.youtube-nocookie.com/embed/wXMpA4vJJl0"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe
				></q-responsive>
				<q-responsive style="height: 600px; max-width: 100%">
					<iframe
						width="560"
						height="315"
						src="https://www.youtube-nocookie.com/embed/Qm46PlLpwHw"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe
				></q-responsive>
				<q-responsive style="height: 600px; max-width: 100%">
					<iframe
						width="560"
						height="315"
						src="https://www.youtube-nocookie.com/embed/X8i-l-WtUZw"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe
				></q-responsive>
				<q-responsive style="height: 600px; max-width: 100%">
					<iframe
						width="560"
						height="315"
						src="https://www.youtube-nocookie.com/embed/N04lsB6VOQE"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe
				></q-responsive>
			</section>
		</div>
	</q-page>
</template>

<script setup></script>

<style>
.uncropped-image {
	background-size: contain; /* don't crop the image  */
	background-repeat: no-repeat; /* only show the image one time  */
	background-color: #eeeeee; /* color to fill empty space with  */
}
</style>
