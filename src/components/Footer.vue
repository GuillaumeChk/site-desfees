<template>
	<q-footer class="shadow-12" style="background: white">
		<div class="wrapper q-px-md q-py-md q-gutter-y-lg">
			<div class="row justify-evenly items-center q-gutter-md">
				<a
					href="https://www.tripadvisor.fr/Hotel_Review-g2058197-d2058192-Reviews-Domaine_des_Fees-Pretin_Jura_Bourgogne_Franche_Comte.html"
				>
					<q-img
						fit="contain"
						height="60px"
						width="60px"
						src="../assets/icons/TC_2022_L_TRANSPARENT_BG_RGB.svg"
					>
					</q-img>
				</a>

				<a
					href="https://www.gites-de-france.com/fr/bourgogne-franche-comte/jura/domaine-des-fees-chambres-dhotes-et-gite-spa-bi-39g4147"
				>
					<q-img
						fit="contain"
						width="80px"
						src="../assets/icons/Nouveau_logo_Gîte_de_France_rogné_compressed.jpg"
					>
					</q-img>
				</a>

				<a
					href="http://www.atout-france.fr/content/decouvrez-les-destinations-labellisees-vignobles-decouvertes/"
				>
					<q-img
						fit="contain"
						height="60px"
						width="60px"
						src="../assets/icons/LOGO_VIGNOBLESETDECOUVERTES_CONTOUR-BLANC-Web_compressed.jpg"
					>
					</q-img>
				</a>

				<a
					href="https://www.jura-tourism.com/gite-chambre-d-hote/domaine-des-feesbr-chambres-dhotes-et-gitebr-spa-bi/"
				>
					<q-img
						fit="contain"
						height="60px"
						width="60px"
						src="../assets/icons/jura-tourisme_compressed.jpg"
					>
					</q-img>
				</a>

				<a
					href="https://www.charme-traditions.com/fr/chambres-d-hotes/395/jura/1"
				>
					<q-img
						fit="contain"
						height="60px"
						width="60px"
						src="../assets/icons/selection-chambre-gite.png"
					>
					</q-img>
				</a>

				<a href="http://www.tripnbike.com/">
					<q-img
						fit="contain"
						height="60px"
						width="60px"
						src="../assets/icons/tnb-accueil-bikers-2022.png"
					>
					</q-img>
				</a>

				<a href="https://www.facebook.com/chambredhotedesFees">
					<q-img
						fit="contain"
						height="60px"
						width="60px"
						src="../assets/icons/2021_Facebook_icon.svg.png"
					>
					</q-img>
				</a>

				<a href="https://www.instagram.com/domaine_des_fees/">
					<q-img
						fit="contain"
						height="60px"
						width="60px"
						src="../assets/icons/Instagram_logo_2022.svg.png"
					>
					</q-img>
				</a>
			</div>

			<div class="q-pa-xs text-orange-7 text-center">
				Copyright © 2022 <br />
				desfees.fr •
				<router-link class="text-orange-7" to="/conditions">{{
					$t("terms")
				}}</router-link
				><br />
				{{ $t("footer.droits_reserves") }}
			</div>
		</div>
	</q-footer>
</template>
