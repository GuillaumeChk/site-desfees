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
	locale: "de",
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
					"Pour toute réservation définitive sur place, nous demandons au client un acompte de 50 % ou de nous confier un numéro de carte bancaire accompagné de sa date de validité… (aucun paiement ne sera effectué avan séjour, il ne s'agit là, que d'une empreinte bancaire en cas d'annulation ou de détérioration de la chambre durant le séjour).",
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
				paragraphe14: "Supplemento per persona",
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
			home: {
				bienvenue: "The Domaine des Fées welcomes you",
				bienvenue2: "The Domaine des Fées welcomes you",
				intro:
					"The Fairies have taken possession of the premises, at the foot of the Jura mountains and on the banks of a small river called... « La Vache. »",
				paragraphe1_titre: "Welcome to this natural setting",
				paragraphe1_texte:
					"The fairies have taken the opportunity to beautify themselves and allow them to really take possession of the premises with a Zen park where the magic of water and light will charm you in this idyllic setting.",
				paragraphe1_texte2:
					"A natural setting where winter sets in to allow nature to recharge its batteries in the company of the fairies.",
				paragraphe1_texte3:
					"The magic will accompany you during your stay in a setting of well-being and cocooning to relax in this magical world. So take the key to these enchanting paths…",
				paragraphe2_titre: "Véritable havre de paix",
				paragraphe2_texte:
					"At the Domaine des Fées, when the sun shines and the sky turns blue, you can enter a wonderful world.",
				paragraphe2_texte2:
					"The heated swimming pool (depth: 1.50m.) plunging into the valley, with its crystalline water reputed to be magical in the Jura, adorned with silvery reflections and a superb sparkling waterfall, will offer you the possibility of swimming against the current, a treatment Kneippwalk reflexology that will perfect your moment of relaxation and well-being.",
				nos_chambres: "Our rooms",
				nos_equipements: "Our equipments",
				carte: "Map",
			},
			services: {
				titre: "Services",
				titre2: "Unique moments...",
				titre3: "Unique moments...",
				paragraphe:
					"At the Domaine des Fées, when the sun shines and the sky turns blue, you can enter a wonderful world. The heated swimming pool (depth: 1.50m.) plunging into valley, with its crystalline water reputed to be magical the Jura, adorned with silvery reflections and a sparkling waterfall, will offer you the possibility swimming against the current, a treatment reflexology that will perfect your moment of relaxation well-being...",
				paragraphe2:
					"In this natural and still preserved setting, the hostess wanted to preserve the values ​​of past centuries while integrating current comfort to meet customer expectations. For 25 years, Isabelle has worked in the hospitality industry. By creating this place, his dream finally came true to welcome and pamper his own customers.",
				paragraphe3:
					"The guest rooms, the suite and the gîte offer air conditioning and very high speed WiFi in all rooms. The interiors of the Domaine des Fées are non-smoking.",
				paragraphe4:
					"The Fairies Lounge. Want to read a book or rather stroll in a cocooning environment where the crackling fireplace and the cut stone will keep the place cool, the fairies' lounge awaits you...",
				paragraphe5: "A library and TV corner are at your disposal.",
				paragraphe6:
					"A gentle atmosphere and an environment of zen awaits you when you wake up in the morning in our room or on our terrace to enjoy a beneficial breakfast with exclusive regional products will give you energy near our waterfall and its basin they will know how to recharge your batteries and give you the energy to discover our magnificent Jura... On your return, a choice of regional or gourmet products carefully prepared by the house fairy will delight your taste buds, all in a pick nick basket ready to the job that you will have the opportunity to discover either in our park or rather at the water's edge or on the terrace or even upstairs and its patio... The possibilities are not lacking!",
				paragraphe7:
					"A vaulted cellar with a few bottles for an aperitif with friends.",
				paragraphe8:
					"Relaxation guaranteed on the way to well-being... The Kneippwalk. The Kneipp method is based on five pillars: hydrotherapy, phytotherapy, physical activity, dietetics and a healthy and balanced lifestyle. For more information",
				texte8: "see the PDF",
				paragraphe9:
					"Baby cots can be lent on request, as well as a playpen, high chair and toys. For walks, a circuit of great hikes passes in front of the farm. Toboggans, pétanque balls are at your disposal, she can also organize you: Fishing trips in the river, horseback riding, mountain biking, hot air balloon flights, planes, paragliding, on order floral arrangements, bouquets of flowers, picnic baskets. picnics, different well-being massages and if you have other desires, tell us about them, we are committed to making you experience a unique moment!",
			},
			tourism: {
				titre: "Tourism",
				titre2: "The pleasures of the table…",
				titre3: "…As for the vineyard, our favorites ♥",
				titre4: "…As for the table and the palate, our favorites ♥",
				paragraphe:
					"The Jura and its famous grape varieties will seduce amateurs with their diversity and their typicality, do not forget to taste one of the seven bacchic wonders of this world, the famous Vin Jaune preferably with a piece of Comté at the end of the meal. To be visited without moderation, the vineyards of Arbois, Pupillin, l'Etoile, Château-Chalon and Côtes du Jura… Tasting possibilities.",
				visiter_le_site: "Visit the website",
				paragraphe3:
					"The Jura and its recognized culinary traditions will seduce the most demanding epicureans. Trout in Vin Jaune, Comté-based specialties, Coq au Vin Jaune and morels, Cancoillotte, Morbiflette and the range of restaurants with an excellent quality/price ratio is very real, a great discovery… All these addresses can be found between 3-10 km from the Fairies…",
				paragraphe4: "A stone's throw away...",
				titre5: "A bit of history...",
				paragraphe7:
					"Like all holidays or weekends, good preparation will help you plan your schedule in the best possible way. Different sites and places are to be visited in the region:",
				paragraphe8: "Discover the visits of Franche-Comté				",
				titre6: "The wine and lake",
				titre7: "Around us...",
				titre8: "Annual activities",
				titre9: "Summer activities",
				titre10: "Winter activities",
			},
			gallery: {
				titre: "Gallery",
				titre2: "We talk about us",
				titre3: "The magical guest rooms receive their 5th ears of corn.",
				paragraphe:
					"Unique moments in a magical setting... In this natural setting and still preserved by the madness of the current world, «the fairy of the house» wished to preserve the values of past centuries while integrating current comfort to meet the expectations of its guests. , even the most demanding. For 25 years, Isabelle has been working in the luxury hotel industry. By creating this place, his dream finally comes true to welcome and pamper his own customers .",
				paragraphe2:
					"The story started a few weeks ago. A life of trees that will continue in a fairy tale, for another decade or so. By From our correspondent, Jacques FAIVRE.",
				paragraphe3:
					"“I love nature so much. I wanted to pay tribute to these trees, for these years, by giving them a second life, explains Isabelle the sculptor. Each tree cut at mid-stem had a successor in harmony with the climate: sycamores, red and silver maples, tulip and coulommier, persimmon, Indian lilac, etc. Frédéric Godin, landscape gardener was our adviser. I wish the newcomers a beautiful and long growth. To go all the way, we allowed 14 of our patients to live again along a playful path along the river. » The domain of the fairies Myriam Eckert and Isabelle Gisler met. The conquered sculptor artist then entered the scene with her chainsaw. The construction has been underway for a few months. “In tune with Isabelle, I immediately wanted to come. This corresponds to my universe, the fantastic by the beings of nature. The site is magnificent, inspiring, promoting balance and there is a harmony between river and mountain. The theme given is the domain of the fairies, I could not forget them. So I created several. They already seem happy. This fantastic world leaves a lot of room for the imagination. I never do set figures. My characters always have their roots anchored in the ground. They draw energy from it. All trees contain small treasures. It is still necessary to detect them and bring them out. Let's not forget that plants are part of us. Above all, I want my sculptures to remain a message to humans and remind us that nature is alive, like them. » And each tree becomes a work according to the revelations of Myriam who tells. “Several fairies have emerged, the bird fairy, for example, has just welcomed into her arms the heron that has emerged from the river. As for the snail rider, I dreamed about it for 10 years, it appeared, I was able to bring it to life. The fairy man? I like the male female paradox. Why would there only be female fairies? They hold together a child in their arms. The feminine side of the masculine. The following ? It will reveal itself over time. Two trees are linked by their roots. I already imagine a couple of tree-men, a twisted couple, entwined along the river. The vagaries of life. » Myriam, a chainsaw poet, continues to weave, in the home of the fairies, on her dream canvas subjects that will appeal to the tourist for another decade or two.",
				article_paru:
					"Article from the Pays Dolois of March 25, 2021 (page 20 to 22)",
				article_paru2: "Article from Progrès.fr of August 29, 2021",
				article_paru3: "Article published on 16.02.2022",
				voir_article: "See the article",
				titre5:
					"Le Domaine des Fées... Some sixty marriage proposals in 13 years... ",
				titre6: "A swimming pool, an arboretum and various wellness facilities",
				titre7:
					"Myriam Eckert gives a second life to trees affected by ash disease.",
				titre8: "Valentine's day",
				titre9: "Photo gallery",
				titre10: "Interior",
				titre11: "Exterior",
				titre12: "Jura",
			},
			contact: {
				titre: "Contact",
				mail: " E-Mail :",
				phone: " Phone :",
				portable: " Mobile :",
				memento: " (think Whatsapp from abroad 🙂)",
				carte: "Map",
			},
			navbar: {
				accueil: "Home",
				chambres: "Bedrooms",
				tourisme: "Tourism",
				galerie: "Gallery",
				contact: "Contact",
				reserver: "Reserve",
				prestations: "Services",
				explorer: "Explore",
			},
			equipments: {
				equipe_dans: "Equipped in:",
			},
			footer: {
				droits_reserves: "All rights reserved.",
			},
			booking: {
				titre: "Booking",
				titre2: "Reserve",
				nom: "Name",
				veuillez_nom: "Veuillez entrer votre nom complet",
				mail: "Mail",
				veuillez_mail: "Veuillez entrer une adresse mail valide",
				phone: "Phone",
				veuillez_phone: "Veuillez entrer un numéro valide",
				chambre: "Bedroom",
				veuillez_chambre: "Veuillez choisir une chambre",
				people: "Pepole",
				veuillez_people: "Veuillez saisir le nombre d’occupants",
				nuits: "Night(s)",
				veuillez_nuits: "Veuillez sélectionner une nuit",
				legende: " Tariff weekends, holidays and public holidays",
				titre2: "How to select a duration?",
				paragraphe: "First select a room.",
				paragraphe2: "Then select one or more consecutive nights.",
				paragraphe3: "If a date is disabled, it is already reserved.",
				accepter_conditions: "I have read and accept the",
				conditions: "conditions",
				titre3: "Conditions of sale and cancellation",
				paragraphe4bis:
					"For any final reservation on site, we ask the customer for a 50% deposit or to entrust us with a credit card number accompanied by its expiry date... (no payment will be made before the stay, this is only bank imprint in case of cancellation or deterioration of the room during the stay).",
				paragraphe4:
					"Any cancellation must be notified by registered letter or email with acknowledgment of receipt -> Domaine des Fées, 39110 Pretin",
				paragraphe5:
					" The customer benefits from insurance - cancellation: refer to the insurance sheet attached to the contract.",
				paragraphe6:
					" The customer does not benefit from cancellation insurance: for any cancellation caused by the customer, the sum reimbursed to the latter by the Tourist Reservation Agency, with the exception of the administration fees (if these were collected during of the reservation) will be as follows:",
				list_item:
					"Cancellation more than 30 days before the start of the stay: 10% of the amount of the stay will be retained;",
				list_item2:
					"Cancellation between the 30<sup>th</sup> and the 21<sup>th</sup> day inclusive before the start of the stay: 25% of the price of the stay will be retained;",
				list_item4:
					"Cancellation between the 20<sup>th</sup> and the 8<sup>th</sup> day inclusive before the start of the stay: 50% of the price of the stay will be retained;",
				list_item5:
					"Cancellation between the 7<sup>th</sup> and the 2<sup>th</sup> day inclusive before the start of the stay: 75% of the price of the stay will be retained;",
				list_item6:
					"Cancellation less than 2 days before the start of the stay: 100% of the price of the stay will be retained;",
				paragraphe7:
					"In case of no-show of the customer: there will be no refund.",
				paragraphe8:
					" Our guests are welcomed the day of their arrival from 5 p.m. Departures are until 11 am. In order to extend the stay at Les Fées, it is possible to come earlier or later for an additional fee, please inquire.",
				paragraphe9:
					"Animals are welcome under certain conditions: Perfect education, clean and always in the company of their master.",
				paragraphe10:
					"Then select one or more consecutive nights. Room rates with regional breakfast:",
				paragraphe11: "Week/curist",
				paragraphe12: "Consult us",
				paragraphe13:
					"From the second night in a guest room, a 10% discount is granted.",
				bouton: "Reserve",
				bouton2: "Reset",
				titre4: "Confirmation de réservation",
				titre5: "Votre réservation",
				people2: "people",
				conditions_acceptees: "I have read and accepted the conditions",
				titre6: "Cost of stay",
				remise: " 10% discount",
				total: "Total : ",
				paragraphe14: "Supplement per person",
				paragraphe15: "In case of anomaly or doubt, please contact us.",
				paragraphe16: "You will be redirected to a secure payment page.",
				paragraphe17:
					"Once the payment has been made, you will be contacted to confirm the reservation and discuss with your hosts.",
				bouton3: "Cancel",
				bouton4: "Pay",
				date: " (starting at 17h)",
				date2: "day after ",
				date3: "(before 11 a.m. the next morning).",
				nuit: "1 night",
			},
		},
		de: {
			home: {
				bienvenue: "Die Domaine des Fées heißt Sie herzlich willkommen.",
				bienvenue2: "Die Domaine des Fées heißt Sie herzlich willkommen.",
				intro:
					"Die Feen haben das Gelände am Fuße des Juragebirges und am Ufer eines kleinen Flusses namens ... « La Vache » in Besitz genommen.",
				paragraphe1_titre: "Willkommen in dieser natürlichen Umgebung",
				paragraphe1_texte:
					"Die Feen nutzten die Zeit, die sie mit der Arbeit verbrachten, um sich zu verschönern und Ihnen zu ermöglichen, das Gelände mit einem <strong>Zen-Park</strong>, in dem Sie der Zauber von Wasser und Licht verzaubern wird, wirklich in Besitz zu nehmen <strong > idyllisch gelegen</strong>.",
				paragraphe1_texte2:
					"Eine natürliche Umgebung, in der der Winter einsetzt, damit die Natur in Gesellschaft der Feen neue Energie tanken kann.",
				paragraphe1_texte3:
					"Die Magie begleitet Sie während Ihres Aufenthaltes in einer <strong>Wellness- und Cocooning-Umgebung</strong>, um sich in dieser magischen Welt zu entspannen. Nehmen Sie also den Schlüssel zu diesen bezaubernden Pfaden …",
				paragraphe2_titre: "Eine wahre Oase der Ruhe",
				paragraphe2_texte:
					"Wenn die Sonne scheint und der Himmel blau wird, können Sie auf der Domaine des Fées in eine wunderbare Welt eintauchen.",
				paragraphe2_texte2:
					'Das <strong class="text-brand">beheizte Schwimmbad</strong> mit Blick auf das Tal, mit seinem kristallklaren Wasser, das im <strong class="text-brand">Jura</strong> als magisch gilt, geschmückt mit Silberreflexionen und ein herrlicher <strong class="text-brand">glitzernder Wasserfall</strong> bieten Ihnen die Möglichkeit, <strong class="text-brand">gegen den Strom zu schwimmen</strong>, ein <strong class="text-brand">Kneippgang-Reflexzonenbehandlung</strong>, die Ihren Moment der Entspannung und des Wohlbefindens perfektioniert...',
				nos_chambres: "Unsere Zimmer",
				nos_equipements: "Unsere Ausrüstung",
				carte: "Karte",
			},
			services: {
				titre: "Vorteile",
				titre2: "Einzigartige Momente...",
				titre3: "Einzigartige Momente...",
				paragraphe:
					"Wenn die Sonne scheint und der Himmel blau wird, können Sie auf der Domaine des Fées in eine wunderbare Welt eintauchen.<br /> Das beheizte Schwimmbad (Tiefe: 1,50 m), das mit seinem kristallklaren Wasser ins Tal eintaucht, gilt als der Jura, geschmückt mit silbernen Reflexen und einem herrlich funkelnden Wasserfall, bietet Ihnen die Möglichkeit, gegen den Strom zu schwimmen, eine Kneipp-Reflexzonenbehandlung, die Ihren Moment der Entspannung und des Wohlbefindens perfektioniert...",
				paragraphe2:
					"In dieser natürlichen und noch erhaltenen Umgebung „wollte die Maitresse die Werte vergangener Jahrhunderte bewahren und gleichzeitig den aktuellen Komfort integrieren, um die Erwartungen der Kunden zu erfüllen. Isabelle ist seit 25 Jahren im Gastgewerbe tätig. Mit der Schaffung dieses Ortes wurde sein Traum endlich wahr, seine eigenen Kunden willkommen zu heißen und zu verwöhnen.",
				paragraphe3:
					"Die Gästezimmer, die Suite und das Cottage bieten Klimaanlage und sehr schnelles WLAN (Glasfaser) in allen Zimmern. Die Innenräume der Domaine des Fées sind rauchfrei.",
				paragraphe4:
					"Die Feenlounge. Möchten Sie ein Buch lesen oder lieber in einer Cocooning-Umgebung spazieren, wo der knisternde Kamin und der geschnittene Stein den Ort kühl halten, erwartet Sie die Feenlounge ...",
				paragraphe5:
					"Eine Bibliothek und eine TV-Ecke stehen Ihnen zur Verfügung.",
				paragraphe6:
					"Eine sanfte Atmosphäre und eine Umgebung des Zen erwartet Sie, wenn Sie morgens in unserem Zimmer oder auf unserer Terrasse aufwachen, um ein wohltuendes Frühstück mit exklusiven regionalen Produkten zu genießen. In der Nähe unseres Wasserfalls und seines Beckens werden Sie Energie tanken Energie tanken und Energie tanken, um unseren herrlichen Jura zu entdecken... Bei Ihrer Rückkehr verwöhnt Sie eine Auswahl an regionalen oder Gourmetprodukten, die von der Hausfee sorgfältig zubereitet werden, und das alles in einem Picknickkorb, der für Ihre Arbeit bereitsteht haben die Möglichkeit, entweder in unserem Park oder eher am Rand des Wassers oder auf der Terrasse oder sogar im Obergeschoss und seinem Patio zu entdecken ... An Möglichkeiten mangelt es nicht!",
				paragraphe7:
					"Ein Gewölbekeller mit ein paar Flaschen für einen Aperitif mit Freunden.",
				paragraphe8:
					"Entspannung garantiert auf dem Weg zum Wohlbefinden... Der Kneippgang. Die Kneipp-Methode basiert auf fünf Säulen: Hydrotherapie, Phytotherapie, körperliche Aktivität, Ernährungslehre und eine gesunde und ausgewogene Lebensweise. Mehr wissen",
				texte8: "PDF ansehen",
				paragraphe9:
					"Babybetten können auf Anfrage ausgeliehen werden, ebenso Laufstall, Hochstuhl und Spielzeug. Für Spaziergänge führt ein Rundgang mit tollen Wanderungen direkt vor dem Hof ​​vorbei. Schlitten, Pétanque-Kugeln stehen zu Ihrer Verfügung, sie kann auch für Sie organisieren: Angeltouren im Fluss, Reiten, Mountainbiken, Heißluftballonfahrten, Flugzeuge, Paragliding, <strong>auf Bestellung</strong> Blumenarrangements, Blumensträuße von Blumen, Picknickkörbe, verschiedene Wohlfühlmassagen und wenn Sie andere Wünsche haben, teilen Sie uns diese mit, wir setzen uns dafür ein, dass Sie einen einzigartigen Moment erleben!",
			},
			tourism: {
				titre: "Tourismus",
				titre2: "Tafelfreuden…",
				titre3: "… auf der Weingartenseite unsere Favoriten ♥",
				titre4: "… auf der Tafel- und Gaumenseite unsere Lieblinge ♥",
				paragraphe:
					"Der Jura und seine berühmten Rebsorten werden Liebhaber mit ihrer Vielfalt und ihrer Typizität verführen, vergessen Sie nicht, eines der sieben Bacchic-Wunder dieser Welt zu probieren, den berühmten Vin Jaune, am besten mit einem Stück Comté-Käse am Ende des Essens. Ohne Mäßigung zu besuchen, die Weinberge von Arbois, Pupillin, l'Etoile, Château-Chalon und Côtes du Jura... Verkostungsmöglichkeiten.",
				visiter_le_site: "Besuche die Website",
				paragraphe3:
					"Der Jura und seine anerkannten kulinarischen Traditionen werden die anspruchsvollsten Feinschmecker verführen. Forelle in Vin Jaune, Spezialitäten auf Comté-Basis, Coq au Vin Jaune und Morcheln, Cancoillotte, Morbiflette und die Auswahl an Restaurants mit einem hervorragenden Preis-Leistungs-Verhältnis ist sehr real, eine große Entdeckung… Alle diese Adressen finden Sie zwischen 3-10 km von den Feen…",
				paragraphe4: "Zwei schritte...",
				titre5: "Eine kleine Geschichte...",
				paragraphe7:
					"Wie bei jedem Urlaub oder Wochenende hilft Ihnen eine gute Vorbereitung, Ihren Zeitplan bestmöglich zu planen. Verschiedene Sehenswürdigkeiten und Orte in der Region sind zu besuchen:",
				paragraphe8: "Entdecken Sie die Touren der Franche-Comté",
				titre6: "Die Wein- und Seenstraße",
				titre7: "Um uns herum...",
				titre8: "Jährliche Aktivitäten",
				titre9: "Sommeraktivitäten",
				titre10: "Winteraktivitäten",
			},
			gallery: {
				titre: "Galerie",
				titre2: "Wir reden über uns",
				titre3: "Die zauberhaften Gästezimmer erhalten ihre 5. Ähre.",
				paragraphe:
					"Einzigartige Momente in einer magischen Umgebung ... In dieser natürlichen Umgebung, die immer noch vom Wahnsinn der heutigen Welt bewahrt wird, wollte «die Fee des Hauses» die Werte vergangener Jahrhunderte bewahren und gleichzeitig den aktuellen Komfort integrieren, um die Erwartungen zu erfüllen von seine Gäste, auch die anspruchsvollsten. Seit 25 Jahren ist Isabelle in der Luxushotellerie tätig. Mit der Schaffung dieses Ortes wurde sein Traum endlich wahr, seine eigenen Kunden willkommen zu heißen und zu verwöhnen.",
				paragraphe2:
					"Die Geschichte begann vor ein paar Wochen. Ein Leben der Bäume, das sich märchenhaft fortsetzen wird, noch etwa ein Jahrzehnt. Von Von unserem Korrespondenten Jacques FAIVRE.",
				paragraphe3:
					"„Ich liebe die Natur so sehr. Ich wollte diesen Bäumen für diese Jahre Tribut zollen, indem ich ihnen ein zweites Leben gab, erklärt Isabelle, die Bildhauerin. Jeder Baum, der in der Mitte des Stammes gefällt wurde, hatte einen Nachfolger in Harmonie mit dem Klima: Platanen, Rot- und Silberahorn, Tulpe und Coulommier, Kaki, Indischer Flieder usw. Frédéric Godin, Landschaftsgärtner, war unser Berater. Ich wünsche den Neuankömmlingen ein schönes und langes Wachstum. Um den ganzen Weg zu gehen, haben wir 14 unserer Patienten erlaubt, wieder entlang eines spielerischen Pfades entlang des Flusses zu leben. » Die Domäne der Feen Myriam Eckert und Isabelle Gisler trafen sich. Die eroberte Bildhauerkünstlerin betrat dann mit ihrer Kettensäge die Szene. Die Bauarbeiten sind seit einigen Monaten im Gange. „In Phase mit Isabelle hatte ich von Anfang an den Wunsch zu kommen. Das entspricht meinem Universum, dem Phantastischen durch die Wesen der Natur. Der Ort ist großartig, inspirierend, fördert das Gleichgewicht und es herrscht eine Harmonie zwischen Fluss und Berg. Das gegebene Thema ist die Domäne der Feen, ich konnte sie nicht vergessen. Also habe ich mehrere erstellt. Sie scheinen bereits zufrieden zu sein. Diese fantastische Welt lässt viel Raum für die Fantasie. Ich setze nie Figuren. Meine Figuren haben ihre Wurzeln immer im Boden verankert. Daraus schöpfen sie Energie. Alle Bäume enthalten kleine Schätze. Es ist immer noch notwendig, sie zu erkennen und herauszubringen. Vergessen wir nicht, dass Pflanzen ein Teil von uns sind. Vor allem möchte ich, dass meine Skulpturen eine Botschaft an die Menschen bleiben und uns daran erinnern, dass die Natur genauso lebt wie sie. Und jeder Baum wird zu einem Werk gemäß den Offenbarungen von Myriam, die erzählt. „Einige Feen sind aufgetaucht, die Vogelfee zum Beispiel hat gerade den Reiher, der aus dem Fluss aufgetaucht ist, in ihre Arme aufgenommen. Was den Schneckenreiter betrifft, so hatte ich 10 Jahre lang davon geträumt, es schien, ich konnte ihn gebären. Der Feenmann? Ich mag das männlich-weibliche Paradoxon. Warum sollte es nur weibliche Feen geben? Sie halten zusammen ein Kind in ihren Armen. Die weibliche Seite des Männlichen. Folgende ? Es wird sich mit der Zeit zeigen. Zwei Bäume sind durch ihre Wurzeln verbunden. Ich stelle mir bereits ein paar Baummenschen vor, ein verdrehtes Paar, verschlungen entlang des Flusses. Die Launen des Lebens. Myriam, eine Kettensägen-Dichterin, webt weiterhin im Haus der Feen auf ihrer Traumleinwand Themen, die den Touristen noch ein oder zwei Jahrzehnte lang herausfordern werden.",
				article_paru:
					"Artikel aus dem Pays Dolois vom 25. März 2021 (Seite 20 bis 22)",
				article_paru2: "Artikel von Progrès.fr vom 29. August 2021",
				article_paru3: "Artikel veröffentlicht am 16.02.2022",
				voir_article: "Siehe Artikel",
				titre5:
					"Die Domaine des Fées... Etwa sechzig Heiratsanträge in 13 Jahren...",
				titre6:
					"Ein Schwimmbad, ein Arboretum und verschiedene Wellnesseinrichtungen",
				titre7:
					"Ein Schwimmbad, ein Arboretum und verschiedene Wellnesseinrichtungen",
				titre8: "Valentinstag",
				titre9: "Fotogallerie",
				titre10: "Innere",
				titre11: "Außen",
				titre12: "Jura",
			},
			contact: {
				titre: "Kontakt",
				mail: " Email :",
				phone: " Telefon :",
				portable: " Tragbar :",
				memento: " (denken Sie an WhatsApp aus dem Ausland 🙂)",
				carte: "Karte",
			},
			navbar: {
				accueil: "Startseite",
				chambres: "Schlafzimmer",
				tourisme: "Tourismus",
				galerie: "Galerie",
				contact: "Kontact",
				reserver: "Buchen",
				prestations: "Vorteile",
				explorer: "Erkunden",
			},
			equipments: {
				equipe_dans: "Ausgestattet in:",
			},
			footer: {
				droits_reserves: "Alle Rechte vorbehalten.",
			},
			booking: {
				titre: "Reservierung",
				titre2: "Buchen",
				nom: "Name",
				veuillez_nom: "Veuillez entrer votre nom complet",
				mail: "Email",
				veuillez_mail: "Veuillez entrer une adresse mail valide",
				phone: "Telefon",
				veuillez_phone: "Veuillez entrer un numéro valide",
				chambre: "Schlafzimmer",
				veuillez_chambre: "Veuillez choisir une chambre",
				people: "Insassen",
				veuillez_people: "Veuillez saisir le nombre d’occupants",
				nuits: "Nacht(s)",
				veuillez_nuits: "Veuillez sélectionner une nuit",
				legende: " Tarif Wochenenden, Feiertage und Feiertage",
				titre2: "Wie wähle ich eine Dauer aus?",
				paragraphe: "Wählen Sie zunächst einen Raum aus.",
				paragraphe2:
					"Wählen Sie dann eine oder mehrere aufeinanderfolgende Nächte aus.",
				paragraphe3: "Wenn ein Datum deaktiviert ist, ist es bereits gebucht.",
				accepter_conditions: "Ich habe die gelesen und akzeptiere sie",
				conditions: "bedingungen",
				titre3: "Verkaufsbedingungen und Widerruf",
				paragraphe4bis:
					"Für jede endgültige Reservierung vor Ort bitten wir den Kunden um eine Anzahlung von 50% oder um die Angabe einer Kreditkartennummer mit Ablaufdatum... (es erfolgt keine Zahlung vor dem Aufenthalt, dies ist ggf. nur ein Bankabdruck). Stornierung oder Verschlechterung des Zimmers während des Aufenthaltes).",
				paragraphe4:
					"Jede Stornierung muss per Einschreiben oder E-Mail mit Rückschein erfolgen -> Domaine des Fées, 39110 Pretin",
				paragraphe5:
					" Der Kunde profitiert von der Versicherung - Storno: Siehe Versicherungsblatt, das dem Vertrag beigefügt ist. ",
				paragraphe6:
					" Der Kunde profitiert nicht von einer Reiserücktrittsversicherung: Für jede vom Kunden verursachte Stornierung wird der letztere Betrag von der Tourist Reservation Agency mit Ausnahme der Verwaltungsgebühren (falls diese während der Reservierung eingezogen wurden) wie folgt erstattet : ",
				list_item:
					"Stornierung mehr als 30 Tage vor Beginn des Aufenthalts: 10 % des Aufenthaltsbetrags werden einbehalten; ",
				list_item2:
					"Stornierung zwischen dem 30<sup>.</sup> und einschließlich dem 21<sup>.</sup> Tag vor Beginn des Aufenthalts: 25 % des Aufenthaltspreises werden einbehalten;",
				list_item4:
					"Stornierung zwischen dem 20<sup>.</sup> und einschließlich 8<sup>ten</sup> Tag vor Beginn des Aufenthalts: 50 % des Aufenthaltspreises werden einbehalten; ",
				list_item5:
					"Stornierung zwischen dem 7<sup>ten</sup> und dem 2<sup>ten</sup> Tag einschließlich vor Beginn des Aufenthalts: 75 % des Aufenthaltspreises werden einbehalten;",
				list_item6:
					"Stornierung weniger als 2 Tage vor Aufenthaltsbeginn: 100 % des Aufenthaltspreises werden einbehalten;",
				paragraphe7:
					"Bei Nichterscheinen des Kunden: Es erfolgt keine Rückerstattung. ",
				paragraphe8:
					" Unsere Gäste werden am Anreisetag ab 17.00 Uhr empfangen. Abreise bis 11 Uhr. Um den Aufenthalt in Les Fées zu verlängern, ist es möglich, gegen Aufpreis früher oder später zu kommen, bitte erkundigen Sie sich.",
				paragraphe9:
					"Tiere sind unter bestimmten Bedingungen willkommen: Perfekte Erziehung, sauber und immer in Gesellschaft ihres Herrchens. ",
				paragraphe10:
					"Dann wählen Sie eine oder mehrere aufeinanderfolgende Übernachtungen aus Zimmerpreise mit regionalem Frühstück: ",
				paragraphe11: "Woche/kurist",
				paragraphe12: "konsultieren Sie uns.",
				paragraphe13:
					"Ab der zweiten Übernachtung im Gästezimmer werden 10 % Rabatt gewährt. ",
				bouton: "Buchen",
				bouton2: "Zurücksetzen",
				titre4: "Reservierungsbestätigung",
				titre5: "Deine Reservierung",
				people2: "personen",
				conditions_acceptees: "Ich habe die Bedingungen gelesen und akzeptiert",
				titre6: "Aufenthaltskosten",
				remise: " 10% Rabatt",
				total: "Gesamt : ",
				paragraphe14: "Zuschlag pro Person",
				paragraphe15:
					"Im Falle von Anomalien oder Zweifeln kontaktieren Sie uns bitte.",
				paragraphe16:
					"Sie werden auf eine sichere Zahlungsseite weitergeleitet.",
				paragraphe17:
					"Sobald die Zahlung erfolgt ist, werden Sie kontaktiert, um die Reservierung zu bestätigen und mit Ihren Gastgebern zu besprechen.",
				bouton3: "Abbrechen",
				bouton4: "Zahlen",
				date: " (ab 17 Uhr)",
				date2: "tag danach ",
				date3: "(vor 11 Uhr am nächsten Morgen).",
				nuit: "1 nacht",
			},
		},
		it: {
			home: {
				bienvenue: "Il Domaine des Fées vi dà il benvenuto",
				bienvenue2: "Il Domaine des Fées vi dà il benvenuto",
				intro:
					"Le Fate hanno preso possesso dei locali, ai piedi delle montagne del Giura e sulle rive di un piccolo fiume chiamato... « La Vache ».",
				paragraphe1_titre: "Benvenuti in questo ambiente naturale",
				paragraphe1_texte:
					"Le fate hanno approfittato del tempo dedicato ai lavori per abbellirsi e permettervi di prendere davvero possesso dei locali con un <strong>parco zen</strong> dove la magia dell'acqua e della luce vi affascinerà in questo <strong> ambiente idilliaco</strong>.",
				paragraphe1_texte2:
					"Un ambiente naturale dove arriva l'inverno per permettere alla natura di ricaricare le batterie in compagnia delle fate.",
				paragraphe1_texte3:
					"La magia ti accompagnerà durante il tuo soggiorno in un <strong>ambiente di benessere e coccole</strong> per rilassarti in questo mondo magico. Quindi prendi la chiave di questi incantevoli sentieri...",
				paragraphe2_titre: "Una vera oasi di pace",
				paragraphe2_texte:
					"Al Domaine des Fées, quando splende il sole e il cielo si tinge di blu, puoi entrare in un mondo meraviglioso.",
				paragraphe2_texte2:
					'La <strong class="text-brand">piscina riscaldata</strong> che domina la valle, con la sua acqua cristallina ritenuta magica nel <strong class="text-brand">Giura</strong>, impreziosita da riflessi argentati e una superba <strong class="text-brand">cascata scintillante</strong>, ti offriranno la possibilità di <strong class="text-brand">nuotare controcorrente</strong>, un <strong class="text-brand">Trattamento riflessologico Kneippwalk</strong> che perfezionerà il tuo momento di relax e benessere...',
				nos_chambres: "Le nostre camere",
				nos_equipements: "La nostra attrezzatura",
				carte: "Carta geografica",
			},
			services: {
				titre: "Benefici",
				titre2: "Momenti unici...",
				titre3: "Momenti unici...",
				paragraphe:
					"Al Domaine des Fées, quando il sole splende e il cielo si tinge di blu, si accede a un mondo meraviglioso.<br /> La piscina riscaldata (profondità: 1,50 m.) che si tuffa nella valle, con la sua acqua cristallina considerata il Jura, ornato di riflessi argentati e una superba cascata scintillante, vi offrirà la possibilità di nuotare controcorrente, un trattamento di riflessologia Kneippwalk che perfezionerà il vostro momento di relax e benessere...",
				paragraphe2:
					"In questo ambiente naturale e ancora preservato, “la maestra del mais ha voluto preservare i valori dei secoli passati integrando il comfort attuale per soddisfare le aspettative dei clienti. Per 25 anni, Isabelle ha lavorato nel settore dell'ospitalità. Creando questo locale, finalmente si è avverato il suo sogno di accogliere e coccolare i propri clienti.",
				paragraphe3:
					"Le camere, la suite e il cottage offrono aria condizionata e WiFi ad altissima velocità (fibra ottica) in tutte le stanze. Gli interni del Domaine des Fées sono non fumatori.",
				paragraphe4:
					"Il Salone delle Fate. Voglia di leggere un libro o meglio passeggiare in un ambiente avvolgente dove il caminetto scoppiettante e la pietra tagliata manterranno fresco l'ambiente, il salotto delle fate vi aspetta...",
				paragraphe5:
					"Una biblioteca e un angolo TV sono a vostra disposizione.",
				paragraphe6:
					"Un'atmosfera gentile e un ambiente zen ti aspettano quando ti svegli al mattino nella nostra camera o sulla nostra terrazza per gustare una colazione benefica con prodotti regionali esclusivi ti daranno energia vicino alla nostra cascata e al suo bacino sapranno come ricaricare il tuo batterie e darti l'energia per scoprire il nostro magnifico Giura... Al tuo ritorno, una scelta di prodotti regionali o gourmet preparati con cura dalla fata della casa delizierà le tue papille gustative, il tutto in un cesto pick nick pronto per il lavoro che farai avere l'opportunità di scoprire o nel nostro parco o piuttosto sul bordo dell'acqua o sulla terrazza o anche al piano di sopra e il suo patio... Le possibilità non mancano!",
				paragraphe7:
					"Una cantina a volta con poche bottiglie per un aperitivo con gli amici.",
				paragraphe8:
					"Relax garantito sulla via del benessere... La passeggiata Kneipp. Il metodo Kneipp si basa su cinque pilastri: idroterapia, fitoterapia, attività fisica, dietetica e uno stile di vita sano ed equilibrato. Per saperne di più",
				texte8: "visualizza il PDF",
				paragraphe9:
					"Le culle possono essere prestate su richiesta così come un box, seggiolone e giocattoli. Per le passeggiate, davanti al maso passa un circuito di grandi escursioni. Slittini, bocce sono a tua disposizione, può anche organizzarti: battute di pesca nel fiume, equitazione, mountain bike, voli in mongolfiera, aeroplani, parapendio, addobbi floreali <strong>su ordinazione</strong>, bouquet di fiori, cestini da picnic, vari massaggi benessere e se hai altri desideri raccontaceli, ci impegniamo per farti vivere un momento unico!",
			},
			tourism: {
				titre: "Turismo",
				titre2: "I piaceri della tavola...",
				titre3: "… lato vigneto, i nostri preferiti ♥",
				titre4: "… in tavola e al palato, i nostri preferiti ♥",
				paragraphe:
					"Il Giura e i suoi famosi vitigni sedurranno i dilettanti con la loro diversità e tipicità, non dimenticate di assaggiare una delle sette meraviglie bacchiche di questo mondo, il famoso Vin Jaune preferibilmente con un pezzo di formaggio Comté a fine pasto. Da visitare senza moderazione, i vigneti di Arbois, Pupillin, l'Etoile, Château-Chalon e Côtes du Jura... Possibilità di degustazione.",
				visiter_le_site: "Visita il sito web",
				paragraphe3:
					"Il Giura e le sue riconosciute tradizioni culinarie sedurranno gli epicurei più esigenti. Trote al Vin Jaune, specialità Comté, Coq au Vin Jaune e spugnole, Cancoillotte, Morbiflette e la gamma di ristoranti con un ottimo rapporto qualità/prezzo è molto reale, una grande scoperta... Tutti questi indirizzi si trovano tra 3-10 km da le Fate…",
				paragraphe4: "Due passi...",
				titre5: "Un po' di storia...",
				paragraphe7:
					"Come ogni vacanza o fine settimana, una buona preparazione ti aiuterà a pianificare il tuo programma nel miglior modo possibile. Diversi siti e luoghi sono da visitare nella regione:",
				paragraphe8: "Scopri i tour della Franca Contea",
				titre6: "La strada del vino e del lago",
				titre7: "Intorno a noi...",
				titre8: "Attività annuali",
				titre9: "Attività estive",
				titre10: "attività invernali",
			},
			gallery: {
				titre: "Galleria",
				titre2: "Parliamo di noi",
				titre3:
					"Le magiche camere degli ospiti ricevono le loro quinte spighe di grano.",
				paragraphe:
					"Momenti unici in un ambiente magico... In questo ambiente naturale e ancora preservato dalla follia del mondo attuale, «la fata della casa» ha voluto preservare i valori dei secoli passati integrando il comfort attuale per soddisfare le aspettative di i suoi ospiti, anche i più esigenti. Da 25 anni Isabelle lavora nel settore alberghiero di lusso. Creando questo locale, finalmente si è avverato il suo sogno di accogliere e coccolare i propri clienti.",
				paragraphe2:
					"La storia è iniziata qualche settimana fa. Una vita di alberi che continuerà in una fiaba, per un altro decennio circa. A cura del nostro inviato Jacques FAIVRE.",
				paragraphe3:
					"«Amo così tanto la natura. Ho voluto rendere omaggio a questi alberi, per questi anni, dando loro una seconda vita, spiega Isabelle la scultrice. Ogni albero tagliato a metà fusto ebbe un successore in armonia con il clima: platani, aceri rossi e argentati, tulipani e coulommier, cachi, lillà d'india, ecc. Frédéric Godin, paesaggista è stato il nostro consigliere. Auguro ai nuovi arrivati una bella e lunga crescita. Per andare fino in fondo, abbiamo permesso a 14 dei nostri pazienti di rivivere lungo un percorso giocoso lungo il fiume. » Il dominio delle fate Myriam Eckert e Isabelle Gisler si sono incontrate. L'artista scultrice conquistata è quindi entrata in scena con la sua motosega. La costruzione è in corso da alcuni mesi. “In fase con Isabelle, ho avuto il desiderio di venire dall'inizio. Questo corrisponde al mio universo, il fantastico degli esseri della natura. Il sito è magnifico, stimolante, promuove l'equilibrio e c'è un'armonia tra fiume e montagna. Il tema dato è il dominio delle fate, non potevo dimenticarle. Così ne ho creati diversi. Sembrano già felici. Questo fantastico mondo lascia molto spazio all'immaginazione. Non faccio mai cifre fisse. I miei personaggi hanno sempre le radici ancorate nel terreno. Traggono energia da esso. Tutti gli alberi contengono piccoli tesori. È ancora necessario individuarli e farli emergere. Non dimentichiamo che le piante fanno parte di noi. Voglio soprattutto che le mie sculture rimangano un messaggio per gli esseri umani e ci ricordino che la natura è viva, come loro. E ogni albero diventa un'opera secondo le rivelazioni di Myriam che racconta. “Sono emerse diverse fate, la fata degli uccelli, ad esempio, ha appena accolto tra le sue braccia l'airone che è emerso dal fiume. Per quanto riguarda il cavaliere di lumache, lo sognavo da 10 anni, è apparso, sono riuscito a farlo nascere. L'uomo delle fate? Mi piace il paradosso maschio femmina. Perché dovrebbero esserci solo fate femmine? Tengono insieme un bambino tra le braccia. Il lato femminile del maschile. Il seguente ? Si rivelerà nel tempo. Due alberi sono legati dalle loro radici. Immagino già una coppia di uomini-albero, una coppia contorta, avvinghiati lungo il fiume. I capricci della vita. Myriam, poetessa della motosega, continua a tessere, nella casa delle fate, sulla tela dei suoi sogni, soggetti che sfideranno il turista per un altro decennio o due.",
				article_paru:
					"Articolo del Pays Dolois del 25 marzo 2021 (pagine da 20 a 22)",
				article_paru2: "Articolo di Progrès.fr del 29 agosto 2021",
				article_paru3: "Articolo pubblicato il 16.02.2022",
				voir_article: "Vedi l'articolo",
				titre5:
					"Il Domaine des Fées... Una sessantina di proposte di matrimonio in 13 anni...",
				titre6: "Una piscina, un arboreto e varie strutture per il benessere",
				titre7:
					"Myriam Eckert dona una seconda vita agli alberi colpiti dalla malattia del frassino.",
				titre8: "San Valentino",
				titre9: "Galleria fotografica",
				titre10: "Interni",
				titre11: "Fuori",
				titre12: "Jura",
			},
			contact: {
				titre: "Contatto",
				mail: " E-Mail :",
				phone: " Telefono :",
				portable: " Portatile :",
				memento: " (pensa a Whatsapp dall'estero 🙂)",
				carte: "Carta geografica",
			},
			navbar: {
				accueil: "Accoglienza",
				chambres: "Camere da letto",
				tourisme: "Turismo",
				galerie: "Galleria",
				contact: "Contatto",
				reserver: "Prenotare",
				prestations: "Benefici",
				explorer: "Esplorare",
			},
			equipments: {
				equipe_dans: "Dotato di:",
			},
			footer: {
				droits_reserves: "Tutti i diritti riservati.",
			},
			booking: {
				titre: "Prenotazione",
				titre2: "Prenotare",
				nom: "Nome",
				veuillez_nom: "Veuillez entrer votre nom complet",
				mail: "Mail",
				veuillez_mail: "Veuillez entrer une adresse mail valide",
				phone: "Telefono",
				veuillez_phone: "Veuillez entrer un numéro valide",
				chambre: "Camera da letto",
				veuillez_chambre: "Veuillez choisir une chambre",
				people: "Occupanti",
				veuillez_people: "Veuillez saisir le nombre d’occupants",
				nuits: "Notti",
				veuillez_nuits: "Veuillez sélectionner une nuit",
				legende: " Tariffa fine settimana, festivi e festivi",
				titre2: "Come selezionare una durata?",
				paragraphe: "Prima seleziona una stanza.",
				paragraphe2: "Quindi seleziona una o più notti consecutive.",
				paragraphe3: "Se una data è disabilitata, è già prenotata.",
				accepter_conditions: "Ho letto e accetto l'",
				conditions: "termini",
				titre3: "Condizioni di vendita e cancellazione",
				paragraphe4bis:
					"Per qualsiasi prenotazione definitiva in loco, chiediamo al cliente un acconto del 50% o di affidarci un numero di carta di credito accompagnato dalla sua data di scadenza... (nessun pagamento verrà effettuato prima del soggiorno, questa è solo l'impronta bancaria nel caso di cancellazione o deterioramento della camera durante il soggiorno).",
				paragraphe4:
					"Qualsiasi cancellazione deve essere comunicata tramite lettera raccomandata o e-mail con avviso di ricevimento -> Domaine des Fées, 39110 Pretin",
				paragraphe5:
					" Il cliente usufruisce dell'assicurazione - annullamento: fare riferimento al foglio assicurativo allegato al contratto. ",
				paragraphe6:
					" Il cliente non beneficia dell'assicurazione annullamento: per qualsiasi annullamento causato dal cliente, la somma rimborsata a quest'ultimo dall'Agenzia di prenotazione turistica, ad eccezione delle spese amministrative (se queste sono state riscosse durante la prenotazione) sarà la seguente : ",
				list_item:
					"Disdetta oltre 30 giorni prima dell'inizio del soggiorno: verrà trattenuto il 10% dell'importo del soggiorno; ",
				list_item2:
					"Disdetta tra il 30<sup>esimo</sup> e il 21<sup>esimo</sup> giorno compreso prima dell'inizio del soggiorno: verrà trattenuto il 25% del prezzo del soggiorno;",
				list_item4:
					"Disdetta tra il 20<sup>esimo</sup> e l'8<sup>esimo</sup> giorno compreso prima dell'inizio del soggiorno: verrà trattenuto il 50% del prezzo del soggiorno;",
				list_item5:
					"Disdetta tra il 7<sup>esimo</sup> e il 2<sup>esimo</sup> giorno compreso prima dell'inizio del soggiorno: verrà trattenuto il 75% del prezzo del soggiorno; ",
				list_item6:
					"Disdetta meno di 2 giorni prima dell'inizio del soggiorno: verrà trattenuto il 100% del prezzo del soggiorno;",
				paragraphe7:
					"In caso di mancata presentazione del cliente: non è previsto alcun rimborso. ",
				paragraphe8:
					" I nostri ospiti vengono accolti il ​​giorno del loro arrivo dalle 17:00 alle 17:00. Le partenze sono fino alle 11:00. Per prolungare il soggiorno a Les Fées, è possibile arrivare prima o dopo a un costo aggiuntivo, si prega di informarsi.",
				paragraphe9:
					"Gli animali sono i benvenuti a determinate condizioni: Perfetta educazione, puliti e sempre in compagnia del loro padrone. ",
				paragraphe10:
					"Quindi seleziona una o più notti consecutive Tariffe camera con colazione regionale:",
				paragraphe11: "Settimana/curista",
				paragraphe12: "Consultaci",
				paragraphe13:
					"Dalla seconda notte in camera per gli ospiti viene concesso uno sconto del 10%. ",
				bouton: "Prenotare",
				bouton2: "Ristabilire",
				titre4: "Conferma della prenotazione",
				titre5: "La tua prenotazione",
				people2: "le persone",
				conditions_acceptees: "Ho letto e accettato le condizioni",
				titre6: "Costo del soggiorno",
				remise: " Sconto del 10%.",
				total: "Totale : ",
				paragraphe14: "Supplemento per persona",
				paragraphe15:
					"In caso di anomalia o dubbio, vi preghiamo di contattarci.",
				paragraphe16: "Verrai reindirizzato a una pagina di pagamento sicura.",
				paragraphe17:
					"Una volta effettuato il pagamento, verrai contattato per confermare la prenotazione e discutere con i tuoi host.",
				bouton3: "Cancellare",
				bouton4: "Paga",
				date: " (a partire dalle 17:00)",
				date2: "giorno dopo ",
				date3: "(entro le 11:00 del mattino successivo).",
				nuit: "1 notte",
			},
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
