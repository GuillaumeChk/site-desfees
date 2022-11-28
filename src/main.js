import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar } from "quasar";
import langFr from "quasar/lang/fr";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
// Import Quasar css
import "quasar/dist/quasar.css";

const i18n = createI18n({
	locale: "fr",
	allowComposition: true, // you need to specify that!
	messages: {
		fr: {
			home: {
				bienvenue: "Le Domaine des Fées vous souhaite la bienvenue",
				bienvenue2: "Le Domaine des Fées vous souhaite la bienvenue",
				intro:
					"Les Fées ont pris possession des lieux, au pied des monts du Jura et au bord d’une petite rivière appelée... « La Vache ».",
				paragraphe1_titre: "Bienvenue dans cet écrin de nature",
				paragraphe1_texte:
					"Les fées ont profité du temps consacré au travaux pour s’embellir et permettre de réellement prendre possession des lieux avec un <strong>parc zen</strong> où la magie de l’eau et de la lumière sauront vous charmer dans ce <strong>cadre idyllique</strong>.",
				paragraphe1_texte2:
					"Un écrin de nature ou l’hiver s’installe afin de permettre à la nature de se ressourcer en compagnie des fées.",
				paragraphe1_texte3:
					"La féerie vous accompagnera durant votre séjour dans un <strong>cadre de bien-être et cocooning</strong> pour vous relaxer dans ce monde magique. Alors prenez la clef de ces voies enchanteuses…",
				paragraphe2_titre: "Véritable havre de paix",
				paragraphe2_texte:
					"Au Domaine des Fées, quand le soleil rayonne et que le ciel devient bleu, vous pouvez accéder à un monde merveilleux.",
				paragraphe2_texte2:
					'La <strong class="text-brand">piscine chauffée</strong> plongeant sur la vallée, avec son eau cristalline réputée magique dans le <strong class="text-brand">Jura</strong>, ornée de reflets argentés et d’une superbe <strong class="text-brand">cascade scintillante</strong>, vous offrira une possibilité de <strong class="text-brand">nage à contre-courant</strong>, un <strong class="text-brand">soin de réflexologie Kneippwalk</strong> qui saura parfaire votre instant de détente et de bien-être…',
				nos_chambres: "Nos chambres",
				nos_equipements: "Nos équipements",
				carte: "Carte",
			},
			services: {
				titre: "Prestations",
				titre2: "Des moments uniques...",
				titre3: "Des moments uniques...",
				paragraphe:
					"Au Domaine des Fées, quand le soleil rayonne et que le ciel devient bleu, vous pouvez accéder à un monde merveilleux.<br /> La piscine (profondeur : 1.50m.)chauffée plongeant sur la vallée, avec son eau cristalline réputée magique dans le Jura, ornée de reflets argentés et d’une superbe cascade scintillante, vous offrira une possibilité de nage à contre-courant, un soin de réflexologie Kneippwalk qui saura parfaire votre instant de détente et de bien-être…",
				paragraphe2:
					"Dans ce cadre naturel et encore préservé, «la maîtresse de mais a souhaité conserver les valeurs des siècles passés tout en intégrant le confort actuel pour satisfaire une attente des clients. Depuis 25 ans, Isabelle travaille dans les métiers de l’hôtellerie. En créant ce lieu, son rêve se réalise enfin d’accueillir et de choyer ses propres clients.",
				paragraphe3:
					"Les chambres d’hôtes, la suite et le gîte vous proposent une climatisation et le WiFi très haut débit (fibre optique) dans toutes les pièces. Les intérieurs du Domaine des Fées sont non-fumeur.",
				paragraphe4:
					"Le salon des Fées. Envie de bouquiner ou plutôt flâner dans un environnement cocooning ou la cheminée crépite et la pierre de taille conservera la fraîcheur du lieu, le salon des Fées vous attend…",
				paragraphe5: "Un coin bibliothèque et TV sont à votre disposition.",
				paragraphe6:
					"Une douce ambiance et un environnement de zénitude vous attend à l’éveil du matin dans notre salle ou sur notre terrasse pour apprécier un petit déjeuner bienfaisant ravec des produits régionaux exclusifs sauront vous donner l’énergie à proximité de notre cascade et son bassin ils sauront vous ressourcer et vous donner l’énergie pour la découverte de notre magnifique Jura… A votre retour, un choix de produits régionaux ou gourmets préparé avec soin par la fée de la maison saura égaillé vos papilles gustatives, le tout dans un panier pick nick prêt à l’emploi que vous aurez la possibilité de découvrir soit dans notre parc ou plutôt au bord de l’eau ou sur la terrasse ou encore àl’étage et son patio…Les possibilités ne manque pas&nbsp;!",
				paragraphe7:
					"Une cave voûtée avec quelques flacons pour un apéritif entre amis.",
				paragraphe8:
					"La détente assurée sur le chemin du bien-être... Le Kneippwalk. La méthode Kneipp est fondée sur cinq piliers: l'hydrothérapie, la phytothérapie, l'activité physique, la diététique et un style de vie sain et équilibré. Pour en savoir plus",
				texte8: "consultez le PDF",
				paragraphe9:
					"Des lits pour bébé peuvent être prêtés sur simple demande ainsi qu’un parc, une chaise haute et des jouets. Pour les balades à pied, un circuit de grandes randonnées passe devant la ferme. Des luges, boules de pétanque sont à votre disposition, elle peut également vous organiser : Des parties de pêche en rivière, des ballades équestres, VTT, vol en montgolfière, avion, parapente, <strong>sur commande</strong> arrangements floraux, bouquets de fleurs, paniers pique-niques, différents massages de bien-être&nbsp;et si d’autres envies vous saisissent parlez nous-en, nous, nous engageons à vous faire vivre un moment unique !",
			},
			tourism: {
				titre: "Tourisme",
				titre2: "Les plaisirs de la table…",
				titre3: "… côté vignoble, nos coups de ♥",
				titre4: "… côté table et palais, nos coups de ♥",
				paragraphe:
					"Le Jura et ses célèbres cépages séduiront les amateurs par leur diversité et leur typicité, n’oublier pas de déguster une des sept merveilles bachiques de ce monde, le fameux Vin Jaune de préférence avec un morceau de Comté en fin de repas. A visiter sans modération, les vignobles d’Arbois, Pupillin, l’Etoile, Château-Chalon et Côtes du Jura… Possibilités de dégustations.",
				visiter_le_site: "Visiter le site web",
				paragraphe3:
					"Le Jura et ses traditions culinaires reconnues séduiront les plus exigeants épicuriens. La truite au Vin Jaune, les spécialités à base de Comté, le coq au Vin Jaune et morilles, la cancoillotte, la morbiflette et la gamme de restaurants avec un excellent rapport qualité/prix est bien réelle, belle découverte…Toutes ces adresses se trouvent entre 3-10 km des Fées…",
				paragraphe4: "A deux pas...",
				titre5: "Un peu d’histoire...",
				paragraphe7:
					"Comme toutes vacances ou week-end, une bonne préparation vous aidera à planifier de façon optimale votre emploi du temps. Différents sites et lieux sont à visiter dans la région :",
				paragraphe8: "Découvrir les visites de Franche-Comté",
				titre6: "La route des vins et des lacs",
				titre7: "Autour de chez nous...",
				titre8: "Activités annuelles",
				titre9: "Activités estivales",
				titre10: "Activités hivernales",
			},
			gallery: {
				titre: "Gallerie",
				titre2: "On parle de nous",
				titre3: "Les chambres d'hôtes féériques reçoivent leur 5ème épis.",
				paragraphe:
					"Des moments uniques dans un cadre féerique… Dans ce cadre naturel et encore préservé par la folie du monde actuel, «la fée de la maison » a souhaité conserver les valeurs des siècles passés tout en intégrant le confort actuel pour combler les attentes de ses hôtes, même les plus exigeants. Depuis 25 ans, Isabelle travaille dans les métiers de l’hôtellerie de standing. En créant ce lieu, son rêve se réalise enfin d’accueillir et de choyer ses propres clients.",
				paragraphe2:
					"L’histoire a commencé il y a quelques semaines. Une vie d’arbres qui se prolongera en conte de fées, pour une à eux décennies encore. Par De notre correspondant, Jacques FAIVRE.",
				paragraphe3:
					"« J’aime tant la nature. Je voulais rendre hommage à ces arbres, pour ces années, en leur donnant une deuxième vie, détaille Isabelle la sculpteuse. Chaque arbre coupé à mi-tronc a eu un successeur en harmonie avec le climat : sycomores, érables rouges et argenté, tulipier et coulommier, kaki, lilas des indes etc. Frédéric Godin, jardinier paysagiste a été notre conseil. Je souhaite aux petits nouveaux une belle et longue croissance. Pour aller jusqu’au bout, nous avons permis à 14 de nos opérés de revivre tout au long d’un chemin ludique le long de la rivière. » Le domaine des fées Myriam Eckert et Isabelle Gisler se sont rencontrées. L’artiste sculpteuse conquise est alors entrée en scène avec sa tronçonneuse. Le chantier est en cours depuis quelques mois. « En phase avec Isabelle, j’ai eu d’entrée l’envie de venir. Cela correspond à mon univers, le fantastique par les êtres de la nature. Le site est magnifique, inspirant, favorisant équilibre et il y a une harmonie entre rivière et montagne. Le thème donné est le domaine des fées, je ne pouvais les oublier. J’en ai donc créé plusieurs. Elles semblent déjà heureuses. Ce monde fantastique laisse beaucoup de marge à l’imaginaire. Je ne fais jamais de figure imposée. Mes personnages ont toujours leurs racines ancrées au sol. Ils y puisent l’énergie. Tous les arbres renferment de petits trésors. Encore faut-il le déceler et les faire ressortir. N’oublions pas que le végétal fait partie de nous. Je veux surtout que mes sculptures restent un message aux humains et rappellent que la nature est vivante, comme eux. » Et chaque arbre devient une œuvre selon les révélations de Myriam qui raconte. « Plusieurs fées ont émergé, la fée oiseleuse vient par exemple d’accueillir dans ses bras le héron surgi de la rivière. Quant au chevaucheur d’escargot, j’en rêvais depuis 10 ans, il est apparu, j’ai pu le faire naître. L’homme fée ? J’aime bien le paradoxe masculin féminin. Pourquoi y aurait-il que des fées femmes ? Ils tiennent ensemble un enfant dans leurs bras. Le côté féminin du masculin. La suite ? Elle va se révéler au fur et à mesure. Deux arbres sont liés par leurs racines. J’imagine déjà un couple d’hommes-arbres, un couple torsadé, enlacé le long de la rivière. Les aléas de la vie. » Myriam, poétesse à la tronçonneuse, continue de tisser, au logis des fées, sur sa toile de rêve des sujets qui interpelleront le touriste une à deux décennies, encore.",
				article_paru: "Article du Pays Dolois du 25 mars 2021 (page 20 à 22)",
				article_paru2: "Article du Progrès.fr du 29 août 2021",
				article_paru3: "Article paru le 16.02.2022",
				voir_article: "Voir l'article",
				titre5:
					"Le Domaine des Fées... Une soixantaine de demandes en mariage en 13 ans...",
				titre6: "Une piscine, un arboretum et divers équipements de bien-être",
				titre7:
					"Myriam Eckert redonne une seconde vie aux arbres touchés par la maladie des frênes.",
				titre8: "Saint Valentin",
				titre9: "Gallerie photo",
				titre10: "Intérieur",
				titre11: "Extérieur",
				titre12: "Jura",
			},
			contact: {
				titre: "Contact",
				mail: " E-Mail :",
				phone: " Téléphone :",
				portable: " Portable :",
				memento: " (pensez à Whatsapp depuis l'étranger 🙂)",
				carte: "Carte",
			},
			navbar: {
				accueil: "Accueil",
				chambres: "Chambres",
				tourisme: "Tourisme",
				galerie: "Galerie",
				contact: "Contact",
				reserver: "Réserver",
				prestations: "Prestations",
				explorer: "Explorer",
			},
			equipments: {
				equipe_dans: "Équipé dans :",
			},
			footer: {
				droits_reserves: "Tous droits réservés.",
			},
			booking: {
				titre: "Réservation",
				titre2: "Réserver",
				nom: "Nom",
				veuillez_nom: "Veuillez entrer votre nom complet",
				mail: "Mail",
				veuillez_mail: "Veuillez entrer une adresse mail valide",
				phone: "Téléphone",
				veuillez_phone: "Veuillez entrer un numéro valide",
				chambre: "Chambre",
				veuillez_chambre: "Veuillez choisir une chambre",
				people: "Occupants",
				veuillez_people: "Veuillez saisir le nombre d’occupants",
				nuits: "Nuit(s)",
				veuillez_nuits: "Veuillez sélectionner une nuit",
				legende: " Tarif week-ends, vacances et jours feriés",
				titre2: "Comment sélectionner une durée ?",
				paragraphe: "Sélectionnez d'abord une chambre.",
				paragraphe2: "Puis sélectionnez une ou plusieurs nuits consécutives.",
				paragraphe3:
					"Si une date est désactivée, c'est qu'elle est déjà réservée.",
				accepter_conditions: "J'ai lu et accepté les",
				conditions: "conditions",
				titre3: "Conditions de vente et d'annulation",
				paragraphe4bis:
					"Pour toute réservation définitive, nous demandons au client un acompte de 50 % ou de nous confier un numéro de carte bancaire accompagné de sa date de validité… (aucun paiement ne sera effectué avan séjour, il ne s'agit là, que d'une empreinte bancaire en cas d'annulation ou de détérioration de la chambre durant le séjour).",
				paragraphe4:
					"Toute annulation doit être notifiée par lettre recommandée ou mail avec accusé de réception -> Domaine des fées, 39110 Pretin ",
				paragraphe5:
					" Le client bénéficie d'une assurance - annulation : se reporter à la fiche assurance jointe au contrat. ",
				paragraphe6:
					" Le client ne bénéficie pas d’une assurance annulation : pour toute annulation du fait du client, la somme remboursée à ce dernier par l’Agence de Réservation Touristique, à l’exception des frais de dossier (si ceux-ci ont été perçus lors de la réservation) sera la suivante : ",
				list_item:
					"Annulation plus de 30 jours avant le début du séjour : il sera retenu 10% du montant du séjour ; ",
				list_item2:
					"Annulation entre le 30<sup>e</sup> et le 21<sup>e</sup> jour inclus avant le début du séjour : il sera retenu 25% du prix du séjour ;",
				list_item4:
					"Annulation entre le 20<sup>e</sup> et le 8<sup>e</sup> jour inclus avant le début du séjour : il sera retenu 50% du prix du séjour ; ",
				list_item5:
					"Annulation entre le 7<sup>e</sup> et le 2<sup>e</sup> jour inclus avant le début du séjour : il sera retenu 75% du prix du séjour ; ",
				list_item6:
					"Annulation à moins de 2 jours avant le début du séjour : il sera retenu 100% du prix du séjour ;",
				paragraphe7:
					"En cas de non-présentation du client : il ne sera procédé à aucun remboursement. ",
				paragraphe8:
					" Nos hôtes sont accueillis le jour de leur arrivée à partir de 17 heures. Les départs sont jusqu’à 11 heures. Afin prolonger le séjour chez les Fées, il est possible de venir plus tôt ou pa plus tard moyennant un supplément, merci de vous renseigner.",
				paragraphe9:
					"Les animaux sont bienvenus sous certaines conditions : Education parfaite, propre et toujours en compagnie de leur maître. ",
				paragraphe10:
					"Puis sélectionnez une ou plusieurs nuits consécutives.Tarif des chambres avec petits déjeuner régional : ",
				paragraphe11: "Semaine/curiste",
				paragraphe12: "nous consulter",
				paragraphe13:
					"Dès la seconde nuitée en chambre d'hôte, une remise de 10% est accordée. ",
				bouton: "Réserver",
				bouton2: "Rétablir",
				titre4: "Confirmation de réservation",
				titre5: "Votre réservation",
				people2: "personnes",
				conditions_acceptees: "J'ai lu et accepté les conditions",
				titre6: "Coût du séjour",
				remise: " Remise de 10%",
				total: "Total : ",
				paragraphe14: "Supplément par personnes",
				paragraphe15: "En cas d'anomalie ou de doute, veuillez nous contacter.",
				paragraphe16:
					"Vous allez être redirigé vers une page de paiement sécurisée.",
				paragraphe17:
					"Une fois le paiement effectué, vous serez contacté pour vous confirmer la réservation, et échanger avec vos hôtes.",
				bouton3: "Annuler",
				bouton4: "Payer",
				date: " (à partir de 17 h)",
				date2: "lendemain du ",
				date3: "(avant 11h du lendemain matin).",
				nuit: "1 nuit",
			},
		},
		en: {
			hello: "hello!",
		},
		ja: {
			hello: "こんにちは！",
		},
	},
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar, {
	plugins: {}, // import Quasar plugins and add here
	lang: langFr,
});
app.use(i18n);

app.mount("#app");
