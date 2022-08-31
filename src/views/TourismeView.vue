<template>
	<q-carousel
		animated
		v-model="slide"
		infinite
		:autoplay="autoplay"
		transition-prev="fade"
		transition-next="fade"
		@mouseenter="autoplay = false"
		@mouseleave="autoplay = true"
		height="300px"
	>
		<q-carousel-slide :name="1" img-src="nv_logo_fee_40.png" />
		<q-carousel-slide :name="2" img-src="nv_logo_fee_40.png" />
		<q-carousel-slide :name="3" img-src="nv_logo_fee_40.png" />
		<q-carousel-slide :name="4" img-src="nv_logo_fee_40.png" />
	</q-carousel>

	<q-page>
		<h3>Tourisme</h3>

		<h4>Les plaisirs de la table…</h4>

		<section class="brand-2 q-pa-md q-gutter-md">
			<h5>… côté vignoble, nos coups de</h5>
			<p>
				Le Jura et ses célèbres cépages séduiront les amateurs par leur
				diversité et leur typicité, n’oublier pas de déguster une des sept
				merveilles bachiques de ce monde, le fameux Vin Jaune de préférence avec
				un morceau de Comté en fin de repas. A visiter sans modération, les
				vignobles d’Arbois, Pupillin, l’Etoile, Château-Chalon et Côtes du Jura…
				Possibilités de dégustations.
			</p>

			<h6>Domaine Raphaël Fumey et Adeline Chatelain</h6>
			<p>Montigny Les Arsures +33 (0)3 84 66 27 84</p>

			<h6>Daniel et Monique Dugois</h6>
			<p>Les Arsures +33 (0)3 84 66 03 41</p>
			<a href="https://www.vins-danieldugois.com/">Visiter le site web</a>

			<h6>Fruitère vinicole Arbois</h6>
			<p>Arbois +33 (0)3 84 66 21 84</p>
			<a href="https://www.chateau-bethanie.com/">Visiter le site web</a>

			<h6>Camille Loye (Millésime)</h6>
			<p>Arbois +33 (0)3 84 66 04 93</p>
		</section>

		<section class="q-pa-md q-gutter-md">
			<h5>… côté table et palais, nos coups de</h5>
			<p>
				Le Jura et ses traditions culinaires reconnues séduiront les plus
				exigeants épicuriens. La truite au Vin Jaune, les spécialités à base de
				Comté, le coq au Vin Jaune et morilles, la cancoillotte, la morbiflette
				et la gamme de restaurants avec un excellent rapport qualité/prix est
				bien réelle, belle découverte…Toutes ces adresses se trouvent entre 3-10
				km des Fées…
			</p>

			<a href="https://www.restaurantlepetitblanc.com/"
				>Restaurant Le Petit Blanc à Salins les Bains </a
			><br />
			<a href="https://www.le-sensso.fr/">Le Sensso à Salins les Bains</a><br />
			<a href="https://www.le-relais-darc-et-senans.com/"
				>http://www.le-relais-darc-et-senans.com/</a
			><br />
			<a href="httpss://www.bistrotdeportlesney.com/"
				>Bistrot de Port Lesney à Port Lesney</a
			><br />
			<a href="https://www.lescaudalies.fr/">Les Caudalies à Arbois</a><br />
			<a href="https://www.legrapiot.com/fr/index.php">Le Grapiot à Pupillin</a
			><br />
			<a href="https://www.chateaudegermigney.com/"
				>Chateau de Germigney à Port Lesney</a
			><br />

			<p>A deux pas...</p>
		</section>

		<section class="brand-2 q-pa-md q-gutter-md">
			<h4>Un peu d’histoire...</h4>

			<p>
				Comme toutes vacances ou week-end, une bonne préparation vous aidera à
				planifier de façon optimale votre emploi du temps. Différents sites et
				lieux sont à visiter dans la région :
			</p>

			<h5>Découvrir les visites de Franche-Comté</h5>
			<a href="https://www.salinesdesalins.com" target="_blank"
				>Site officiel de la Grande Saline à Salins les Bains (39110) - Jura
				(39) - Franche Comté</a
			><br />
			<a href="https://www.salineroyale.com/" target="_blank"
				>Saline Royale à Arc-et-Senans</a
			><br />

			<h5>Office du tourisme Jura, Coeur du Jura, Besançon, Dole</h5>
			<a href="https://www.jura-tourism.com/" target="_blank">Jura tourisme</a
			><br />
			<a href="https://www.coeurdujura-tourisme.com/" target="_blank"
				>Coeur du Jura</a
			><br />
			<a href="https://www.besancon-tourisme.com/" target="_blank">Besançon</a
			><br />

			<h5>La route des vins et des lacs</h5>
			<a href="https://www.montagnes-du-jura.fr" target="_blank"
				>La route des vins du Jura | Montagnes de Jura</a
			><br />
			<a href="https://www.montagnes-du-jura.fr" target="_blank"
				>Le printemps dans les Montagnes du Jura | Montagnes du Jura</a
			><br />
			<a href="https://www.jura-vins.com/" target="_blank">Jura vins</a><br />
			<a
				href="https://www.les-plus-beaux-villages-de-france.org"
				target="_blank"
				>Château-Chalon (Jura), l'un des Plus Beaux Villages de France</a
			><br />
		</section>

		<section class="q-pa-md q-gutter-md">
			<h4>Autour de chez nous...</h4>

			<h5>Activités annuelles</h5>
			<a href="https://www.cascades-du-herisson.fr/" target="_blank"
				>Cascades du Hérisson</a
			><br />
			<a href="https://www.juralacs.com/" target="_blank">Jura lacs</a><br />
			<a href="https://www.baumelesmessieurs.fr/" target="_blank"
				>Baume les Messieurs</a
			><br />
			<a href="https://www.juramusees.fr/" target="_blank">Jura musées</a><br />
			<a href="https://www.mouche-fr.com/" target="_blank">Mouche</a><br />
			<a href="https://www.echappee-jurassienne.ch" target="_blank"
				>L'échappée Jurassienne - Le grand itinéraire de randonnée
				franco-suisse</a
			><br />

			<h5>Activités estivales</h5>
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

			<h5>Activités hivernales</h5>
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
				>Loueur, une école de ski ou un accompagnateur en raquettes à neige</a
			><br />
			<a
				href="https://www.montagnes-du-jura.fr/sejourner/activites/chiens-de-traineaux/"
				target="_blank"
				>Balade en chiens de traineaux</a
			><br />
		</section>
	</q-page>
</template>

<style lang="scss" scoped>
a {
	color: #212121;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
}
</style>
