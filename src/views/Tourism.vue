<template>
	<q-page>
		<section class="section-video">
			<div class="video-container">
				<q-img
					src="../assets/rooms/exterieur/Paysage_du_Jura_(8)_compressed60_029.jpg"
					class="carousel"
				>
					<div
						class="absolute-center bg-transparent text-h4 text-uppercase text-center text-weight-light"
						style="letter-spacing: 4px"
					>
						{{ $t("tourism.titre") }}
					</div>
				</q-img>
				<div class="gt-md absolute-bottom text-center q-pb-lg">
					<q-img src="../assets/chevron_bas.svg" width="50px"></q-img>
				</div>
			</div>
		</section>

		<div class="wrapper">
			<h4 class="q-pa-md q-pt-xl text-uppercase text-weight-light">
				{{ $t("tourism.titre2") }}
			</h4>

			<section class="q-gutter-y-md">
				<h5 class="text-brand-2 q-px-md">{{ $t("tourism.titre3") }}</h5>

				<q-img src="../assets/rooms/exterieur/vignoble.jpg" :ratio="16 / 9">
				</q-img>

				<div class="q-px-md">
					<p>
						{{ $t("tourism.paragraphe") }}
					</p>

					<h6>Domaine Raphaël Fumey et Adeline Chatelain</h6>
					<p>Montigny Les Arsures +33 (0)3 84 66 27 84</p>

					<h6>Daniel et Monique Dugois</h6>
					<p>Les Arsures +33 (0)3 84 66 03 41</p>
					<a href="https://www.vins-danieldugois.com/">{{
						$t("tourism.				visiter_le_site")
					}}</a>

					<h6>Fruitère vinicole Arbois</h6>
					<p>Arbois +33 (0)3 84 66 21 84</p>
					<a href="https://www.chateau-bethanie.com/">{{
						$t("tourism.				visiter_le_site")
					}}</a>

					<h6>Camille Loye (Millésime)</h6>
					<p>Arbois +33 (0)3 84 66 04 93</p>
				</div>
			</section>

			<section class="q-gutter-y-md">
				<h5 class="text-brand q-pt-xl q-px-md">
					{{ $t("tourism.titre4") }}
				</h5>

				<q-img src="../assets/rooms/exterieur/table.jpg" :ratio="16 / 9">
				</q-img>

				<p class="q-px-md">
					{{ $t("tourism.paragraphe3") }}
				</p>

				<div class="column q-pa-md q-gutter-y-sm">
					<a class="text-h6" href="https://www.restaurantlepetitblanc.com/"
						>Restaurant Le Petit Blanc à Salins les Bains
					</a>
					<a class="text-h6" href="https://www.le-sensso.fr/"
						>Le Sensso à Salins les Bains</a
					>
					<a class="text-h6" href="https://www.le-relais-darc-et-senans.com/"
						>Le relais d'Arc-et-Senans</a
					>
					<a class="text-h6" href="https://www.bistrotdesportlesney.com/"
						>Bistrot de Port Lesney à Port Lesney</a
					>
					<a class="text-h6" href="https://www.lescaudalies.fr/"
						>Les Caudalies à Arbois</a
					>
					<a class="text-h6" href="https://www.legrapiot.com/fr/index.php"
						>Le Grapiot à Pupillin</a
					>
					<a class="text-h6" href="https://www.facebook.com/lecomptoirkokague/"
						>Le comptoir Kokagué
					</a>
					<a class="text-h6" href="https://le-bistronome-arbois.com/"
						>Le Bistronôme
					</a>
					<a class="text-h6" href="https://www.restaurant-lesarcades39.fr/"
						>Restaurant des Arcades
					</a>
				</div>
				<br />

				<p class="text-italic q-px-md">{{ $t("tourism.paragraphe4") }}</p>
			</section>

			<h4 class="q-pa-md q-pt-xl text-uppercase text-weight-light text-brand-2">
				{{ $t("tourism.titre5") }}
			</h4>
			<section class="q-gutter-y-md">
				<q-img
					src="../assets/rooms/exterieur/Paysage_du_Jura_(6)_compressed60_028.jpg"
					:ratio="16 / 9"
				>
				</q-img>

				<div class="q-px-md">
					<p>
						{{ $t("tourism.paragraphe7") }}
					</p>

					<h5 class="text-brand-2">{{ $t("tourism.paragraphe8") }}</h5>
					<a href="https://www.salinesdesalins.com" target="_blank"
						>Site officiel de la Grande Saline à Salins les Bains (39110) - Jura
						(39) - Franche Comté</a
					><br />
					<a href="https://www.salineroyale.com/" target="_blank"
						>Saline Royale à Arc-et-Senans</a
					><br />

					<h5 class="text-brand-2">
						Office du tourisme Jura, Coeur du Jura, Besançon, Dole
					</h5>
					<a href="https://www.jura-tourism.com/" target="_blank"
						>Jura tourisme</a
					><br />
					<a href="https://www.coeurdujura-tourisme.com/" target="_blank"
						>Coeur du Jura</a
					><br />
					<a href="https://www.besancon-tourisme.com/" target="_blank"
						>Besançon</a
					><br />

					<h5 class="text-brand-2">{{ $t("tourism.titre6") }}</h5>
					<a href="https://www.montagnes-du-jura.fr" target="_blank"
						>La route des vins du Jura | Montagnes de Jura</a
					><br />
					<a href="https://www.montagnes-du-jura.fr" target="_blank"
						>Le printemps dans les Montagnes du Jura | Montagnes du Jura</a
					><br />
					<a href="https://www.jura-vins.com/" target="_blank">Jura vins</a
					><br />
					<a
						href="https://www.les-plus-beaux-villages-de-france.org"
						target="_blank"
						>Château-Chalon (Jura), l'un des Plus Beaux Villages de France</a
					><br />
				</div>
			</section>

			<h4 class="q-pa-md q-pt-xl text-uppercase text-weight-light text-brand">
				{{ $t("tourism.titre7") }}
			</h4>
			<section class="q-gutter-y-md q-pb-lg">
				<q-img
					src="../assets/rooms/exterieur/9_compressed60_009.jpg"
					:ratio="16 / 9"
				>
				</q-img>

				<div class="q-px-md">
					<h5 class="text-brand">{{ $t("tourism.titre8") }}</h5>
					<a href="https://www.cascades-du-herisson.fr/" target="_blank"
						>Cascades du Hérisson</a
					><br />
					<a href="https://www.juralacs.com/" target="_blank">Jura lacs</a
					><br />
					<a href="https://www.baumelesmessieurs.fr/" target="_blank"
						>Baume les Messieurs</a
					><br />
					<a href="https://www.juramusees.fr/" target="_blank">Jura musées</a
					><br />
					<a href="https://www.mouche-fr.com/" target="_blank">Mouche</a><br />
					<a href="https://www.echappee-jurassienne.ch" target="_blank"
						>L'échappée Jurassienne - Le grand itinéraire de randonnée
						franco-suisse</a
					><br />

					<h5 class="text-brand">{{ $t("tourism.titre9") }}</h5>
					<a href="https://www.poupetvollibre.com/" target="_blank"
						>Poupet vol libre</a
					><br />
					<a href="https://www.mouche-fr.com/" target="_blank">Mouche</a><br />
					<a href="https://www.grottesdesmoidons.com/" target="_blank"
						>Grottes des Moidons</a
					><br />
					<a href="https://www.jura-tourism.com/" target="_blank"
						>Lac Jura, baignade et plages des Lacs du Jura - Jura Tourisme</a
					><br />

					<h5 class="text-brand">{{ $t("tourism.titre10") }}</h5>
					<a
						href="https://www.jura-tourism.com/vivre-le-jura/pratiquer/ski-sports-hiver/domaines-skiables-du-jura/"
						target="_blank"
						>Les domaines skiables</a
					><br />
					<a
						href="https://www.espacenordiquejurassien.com/home.html"
						target="_blank"
						>Les espaces nordiques jurassiens (webcam, enneigement,...)</a
					><br />
					<a
						href="https://www.espacenordiquejurassien.com/infos-pratiques/cartographie-menu/plan-des-pistes-des-domaines-nordiques.html"
						target="_blank"
						>Plans des pistes (ski de fond, raquettes,...)</a
					><br />
					<a
						href="https://www.jura-tourism.com/vivre-le-jura/pratiquer/ski-sports-hiver/raquettes-a-neige/#trouver"
						target="_blank"
						>Loueur, une école de ski ou un accompagnateur en raquettes à
						neige</a
					><br />
					<a
						href="https://www.montagnes-du-jura.fr/sejourner/activites/chiens-de-traineaux/"
						target="_blank"
						>Balade en chiens de traineaux</a
					><br />
				</div>
			</section>
		</div>
	</q-page>
</template>

<style lang="scss" scoped>
a {
	color: #212121;
}
</style>
