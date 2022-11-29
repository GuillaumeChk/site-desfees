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
	locale: "en",
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
				titre: "Gallerie",
				titre2: "On parle de nous",
				titre3: "Les chambres d'hôtes féériques reçoivent leur 5ème épis.",
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
