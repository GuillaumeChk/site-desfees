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
						{{ $t("navbar.reviews") }}
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
				<a
					href="https://www.tripadvisor.fr/Hotel_Review-g2058197-d2058192-Reviews-Domaine_des_Fees-Pretin_Jura_Bourgogne_Franche_Comte.html"
					target="_blank"
				>
					<q-img
						fit="contain"
						height="200px"
						src="../assets/icons/TC_2022_L_TRANSPARENT_BG_RGB.svg"
					>
					</q-img>
				</a>

				<q-item class="q-py-lg">
					<q-item-section class="items-end"><h3>5,0</h3></q-item-section>

					<q-item-section>
						<q-item-label><strong>Excellent</strong></q-item-label>
						<q-item-label caption
							><q-rating
								:model-value="5"
								max="5"
								size="md"
								icon="circle"
								color="green-14"
								readonly
								class="q-pr-xs"
							/>
							+300 avis</q-item-label
						>
					</q-item-section>
				</q-item>

				<q-card>
					<q-item>
						<q-item-section avatar>
							<q-avatar>
								<img
									src="https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/e4/a9/default-avatar-2020-50.jpg"
								/>
							</q-avatar>
						</q-item-section>

						<q-item-section>
							<q-item-label
								><strong>Jielce</strong> a écrit un avis (janv.
								2023)</q-item-label
							>
							<q-item-label caption>1 contribution</q-item-label>
						</q-item-section>
					</q-item>

					<q-card-section>
						<q-rating
							:model-value="5"
							max="5"
							size="md"
							icon="circle"
							color="green-14"
							readonly
						/>
						<h6 class="text-bold">D'une année à l'autre</h6>
						<p>
							«Un séjour mémorable au pays des Fées pour passer d'une année à
							l'autre. Nous avons passé un moment inoubliable. Tout fut parfait!
							Un grand merci à Isabelle et Danielle pour leur accueil
							chaleureux, leur soucis de notre bien être et leur disponibilité
							pour nos divers demandes. <br />
							Nous nous réjouissons de pouvoir y retourner à l'occasion.»
						</p>
						<p><strong>Date du séjour :</strong> janvier 2023</p>
						<p>
							<strong>Astuce pour la chambre :</strong> Nous espérons y
							retourner pour tester toutes les chambres car elles ont toutes une
							particularité...
						</p>
					</q-card-section>
				</q-card>

				<q-card>
					<q-item>
						<q-item-section avatar>
							<q-avatar>
								<img
									src="https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/f2/7a/default-avatar-2020-25.jpg"
								/>
							</q-avatar>
						</q-item-section>

						<q-item-section>
							<q-item-label
								><strong>Julien D</strong> a écrit un avis (janv.
								2023)</q-item-label
							>
							<q-item-label caption>1 contribution</q-item-label>
						</q-item-section>
					</q-item>

					<q-card-section>
						<q-rating
							:model-value="5"
							max="5"
							size="md"
							icon="circle"
							color="green-14"
							readonly
						/>
						<h6 class="text-bold">Nouvel an au Domaine des fées</h6>
						<p>
							«Nous avons passé un agréable séjour au Domaine des Fées.
							L'emplacement est idéal pour un repos maximal. Concernant la
							chambre romantique, parfaite pour un moment à deux, le bain
							bouillonnant est agréable, la literie y est très bonne ! Larges
							choix pour le petit déjeuné ! Les hôtes sont bienveillants.»
						</p>
						<p><strong>Date du séjour :</strong> janvier 2023</p>
						<p><strong>Type de voyage :</strong> A voyagé en couple</p>
					</q-card-section>
				</q-card>

				<q-card>
					<q-item>
						<q-item-section avatar>
							<q-avatar>
								<img
									src="https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/e2/e6/default-avatar-2020-45.jpg"
								/>
							</q-avatar>
						</q-item-section>

						<q-item-section>
							<q-item-label
								><strong>ArmelleDA</strong> a écrit un avis (déc.
								2022)</q-item-label
							>
							<q-item-label caption
								>9 contributions • 4 votes utiles</q-item-label
							>
						</q-item-section>
					</q-item>

					<q-card-section>
						<q-rating
							:model-value="5"
							max="5"
							size="md"
							icon="circle"
							color="green-14"
							readonly
						/>
						<h6 class="text-bold">Une parenthèse idéale en amoureux</h6>
						<p>
							«Nous avons passé un agréable séjour au Domaine des Fées.
							L'emplacement est idéal pour un repos maximal. Concernant la
							chambre romantique, parfaite pour un moment à deux, le bain
							bouillonnant est agréable, la literie y est très bonne ! Larges
							choix pour le petit déjeuné ! Les hôtes sont bienveillants.C'est
							dans un cadre ultra romantique que se niche la grande maison
							d'hôtes du Domaine des fées, nous y avons passé 2 nuits et ce fut
							vraiment parfait depuis l'accueil de la propriétaire Isabelle , et
							de Monique nouvelle collaboratrice, le confort de la chambre avec
							la baignoire balnéothérapie si relaxante, les petits déjeuners
							bien gourmands sans oublier la présence discrète mais appréciée
							des animaux de la maison 😊 On est accueillis comme en amis et on
							se sent bien au domaine des fées, on aimerait y rester pour
							oublier le quotidien ! On attend avec impatience les beaux jours
							et quelques jours de repos pour y retourner ! Mille Mercis encore
							à Isabelle et Monique, tout fut parfait !!!»
						</p>
						<p><strong>Date du séjour :</strong> novembre 2022</p>
						<p><strong>Type de voyage :</strong> A voyagé en couple</p>
					</q-card-section>
				</q-card>

				<q-card>
					<q-item>
						<q-item-section avatar>
							<q-avatar>
								<img
									src="https://media-cdn.tripadvisor.com/media/photo-t/25/0b/eb/56/marie-f.jpg"
								/>
							</q-avatar>
						</q-item-section>

						<q-item-section>
							<q-item-label
								><strong>Marie</strong> a écrit un avis (juil.
								2022)</q-item-label
							>
							<q-item-label caption>2 contributions</q-item-label>
						</q-item-section>
					</q-item>

					<q-card-section>
						<q-rating
							:model-value="5"
							max="5"
							size="md"
							icon="circle"
							color="green-14"
							readonly
						/>
						<h6 class="text-bold">Un endroit qui s'appelle « Reviens » !</h6>
						<p>
							«Nous avons passé une nuit au Domaine des fées. C'est un endroit
							ressourçant, parfait pour se détendre et profiter de la nature. Le
							temps était au rdv, nous avons pu profiter de la piscine et de
							l'apéritif en terrasse. Isabelle et son mari sont particulièrement
							accueillants et aux petits soins. Le petit déjeuner était
							excellent, la gelée de lavande maison en particulier !
							<br />
							Tristan et Marie»
						</p>
						<p><strong>Date du séjour :</strong> juillet 2022</p>
						<p><strong>Type de voyage :</strong> A voyagé en couple</p>
					</q-card-section>
				</q-card>

				<q-card>
					<q-item>
						<q-item-section avatar>
							<q-avatar>
								<img
									src="https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/e4/a9/default-avatar-2020-50.jpg"
								/>
							</q-avatar>
						</q-item-section>

						<q-item-section>
							<q-item-label
								><strong>Chloé L</strong> a écrit un avis (juil.
								2022)</q-item-label
							>
							<q-item-label caption>1 contribution</q-item-label>
						</q-item-section>
					</q-item>

					<q-card-section>
						<q-rating
							:model-value="5"
							max="5"
							size="md"
							icon="circle"
							color="green-14"
							readonly
						/>
						<h6 class="text-bold">Magnifique week-end</h6>
						<p>
							«Endroit reposant et relaxant, incroyable pour ceux qui aiment la
							nature! Chambre propre, spacieuse et climatisée, je recommande
							cette adresse ! Personnel au top et très gentil :) Extérieurs
							agréable, endroit calme pour se relaxer ! »
						</p>
						<p><strong>Date du séjour :</strong> juillet 2022</p>
						<p><strong>Type de voyage :</strong> A voyagé avec ses amis</p>
					</q-card-section>
				</q-card>
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
