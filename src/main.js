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
			lang: "français",
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
			lang: "english",
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
			lang: "deutsch",
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
			lang: "italiano",
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
		pt: {
			lang: "Português",

			home: {
				bienvenue: "Le Domaine des Fées dá-lhe as boas-vindas",
				bienvenue2: "Le Domaine des Fées dá-lhe as boas-vindas",
				intro:
					"As Fadas tomaram posse do local, no sopé das montanhas do Jura e à beira de um pequeno rio chamado...« La Vache ».",
				paragraphe1_titre: "Bem-vindo a este ambiente natural",
				paragraphe1_texte:
					"As fadas aproveitaram o tempo dedicado ao trabalho para embelezar-se e permitir que você realmente tome posse do local com um <strong>parque zen</strong> onde a magia da água e da luz o encantará neste <strong >Parque Zen</strong> strong>cenário idílico</strong>.",
				paragraphe1_texte2:
					"Um cenário natural onde o inverno chega para permitir que a natureza recarregue suas energias na companhia das fadas.",
				paragraphe1_texte3:
					"A magia irá acompanhá-lo durante a sua estadia num <strong>ambiente de bem-estar e encasulo</strong> para relaxar neste mundo mágico. Então pegue a chave destes caminhos encantadores...",
				paragraphe2_titre: "Verdadeiro refúgio de paz",
				paragraphe2_texte:
					"No Domaine des Fées, quando o sol brilha e o céu fica azul, você acessa um mundo maravilhoso.",
				paragraphe2_texte2:
					'A <strong class="text-brand">piscina aquecida</strong> mergulhando sobre o vale, com sua água cristalina considerada mágica no <strong class="text-brand">Jura</strong>, adornado com reflexos de cores prateadas e uma soberba <strong class="text-brand">cachoeira cintilante</strong>, oferecerá a você a possibilidade de <strong class="text-brand">nadar contra a corrente</strong>, um <strong class="text-brand">tratamento de reflexologia Kneippwalk</strong> que irá aperfeiçoar o seu momento de relaxamento e bem-estar...',
				nos_chambres: "Nossos quartos",
				nos_equipements: "Nosso equipamento",
				carte: "Mapa",
			},
			services: {
				titre: "Benefícios",
				titre2: "Momentos únicos...",
				titre3: "Momentos únicos...",
				paragraphe:
					"No Domaine des Fées, quando o sol brilha e o céu fica azul, acede-se a um mundo maravilhoso.<br /> A piscina climatizada (profundidade: 1,50m.) que mergulha no vale, cujas águas cristalinas dizem ser ser mágico no Jura, adornado com reflexos prateados e uma soberba cascata cintilante, oferece-lhe a possibilidade de nadar contra a corrente, um tratamento de reflexologia Kneippwalk que irá aperfeiçoar o seu momento de relaxamento e bem-estar...",
				paragraphe2:
					"Neste cenário natural e ainda preservado, « a dona do milho quis preservar os valores dos séculos passados, integrando o conforto atual para atender às expectativas do cliente. Há 25 anos, Isabelle trabalha na indústria hoteleira. criando este lugar, seu sonho finalmente se torna realidade para receber e mimar seus próprios clientes.",
				paragraphe3:
					"Os quartos, a suite e a casa de campo oferecem ar condicionado e Wi-Fi de alta velocidade (fibra ótica) em todos os quartos. Os interiores do Domaine des Fées são para não fumadores.",
				paragraphe4:
					"O salão das fadas. Quer ler um livro ou melhor passear num ambiente acolhedor onde o crepitar da lareira e a pedra talhada refrescarão o ambiente, o salão das fadas espera por si...",
				paragraphe5: "Uma biblioteca e uma área de TV estão à sua disposição.",
				paragraphe6:
					"Uma atmosfera suave e um ambiente zen espera por você ao acordar de manhã em nosso quarto ou em nosso terraço para desfrutar de um café da manhã benéfico com produtos regionais exclusivos que lhe dará energia perto de nossa cachoeira e sua bacia. saberá como recarregar as suas baterias e dar-lhe energia para descobrir o nosso magnífico Jura... No regresso, uma escolha de produtos regionais ou gourmet cuidadosamente preparados pela fada da casa irão deliciar o seu paladar, tudo num cabaz pick nick pronto a usar que irá tenha a oportunidade de descobrir seja no nosso parque ou melhor à beira de água ou no terraço ou ainda no andar de cima e no seu pátio... Possibilidades não faltam!",
				paragraphe7:
					"Uma adega abobadada com algumas garrafas para um aperitivo com os amigos.",
				paragraphe8:
					"Relaxamento garantido a caminho do bem-estar... O Kneippwalk. O método Kneipp assenta em cinco pilares: hidroterapia, fitoterapia, actividade física, dietética e um estilo de vida saudável e equilibrado. Para saber mais",
				texte8: "visualizar o PDF",
				paragraphe9:
					"Camas de bebê podem ser emprestadas a pedido, assim como um cercadinho, uma cadeira alta e brinquedos. Para caminhadas, um circuito de caminhadas de longa distância passa em frente à fazenda. Tobogãs, bolas de petanca estão à sua disposição , ela também pode organizar para você: Pescarias no rio, cavalgadas, mountain bike, passeios de balão, aviões, parapente, arranjos florais <strong>sob encomenda</strong>, buquês de flores, cestas de piquenique, diversas massagens de bem-estar e se você tem outros desejos, conte-nos sobre eles, estamos empenhados em fazer você viver um momento único!",
			},
			tourism: {
				titre: "Turismo",
				titre2: "Os prazeres da mesa…",
				titre3: "… do lado da vinha, os nossos favoritos ♥",
				titre4: "… do lado da mesa e do paladar, os nossos preferidos ♥",
				paragraphe:
					"O Jura e as suas famosas castas vão seduzir os amadores pela sua diversidade e tipicidade, não deixe de provar uma das sete maravilhas bacanais deste mundo, o famoso Vin Jaune de preferência com um pedaço de Comté no final da refeição. Para visitar sem moderação, os vinhedos de Arbois, Pupillin, l'Etoile, Château-Chalon e Côtes du Jura... Possibilidades de degustação.",
				visiter_le_site: "Visite o site",
				paragraphe3:
					"O Jura e suas renomadas tradições culinárias seduzirão os epicuristas mais exigentes. Truta em Vin Jaune, especialidades à base de Comté, Coq au Vin Jaune e morels, cancoillotte, morbiflette e a variedade de restaurantes com excelente custo-benefício / preço é muito real , boa descoberta… Todos esses endereços estão entre 3-10 km de Les Fées…",
				paragraphe4: "A um passo de distância...",
				titre5: "Um pouco de história...",
				paragraphe7:
					"Como em todas as férias ou fim de semana, uma boa preparação ajudará você a planejar sua programação da maneira ideal. Vários locais e locais devem ser visitados na região:",
				paragraphe8: "Descubra as visitas de Franche-Comté",
				titre6: "A estrada dos vinhos e dos lagos",
				titre7: "Ao nosso redor...",
				titre8: "Atividades anuais",
				titre9: "Atividades de verão",
				titre10: "Atividades de inverno",
			},
			gallery: {
				titre: "Galeria",
				titre2: "Eles falam de nós",
				titre3: "Os quartos mágicos recebem suas 5ª espigas de milho.",
				paragraphe:
					"Momentos únicos num cenário mágico... Neste cenário natural e ainda preservado pela loucura do mundo de hoje, «a fada da casa» quis preservar os valores dos séculos passados integrando o conforto atual para ir ao encontro das expetativas dos seus clientes, anfitriões, até os mais exigentes. Há 25 anos, Isabelle trabalha na indústria hoteleira de luxo. Ao criar este lugar, seu sonho finalmente se tornou realidade de receber e mimar seus próprios clientes.",
				paragraphe2:
					"A história começou há algumas semanas. Uma vida de árvores que continuará em um conto de fadas, por mais uma década ou mais. Por Do nosso correspondente, Jacques FAIVRE.",
				paragraphe3:
					"“Amo muito a natureza. Quis homenagear essas árvores, por esses anos, dando-lhes uma segunda vida, explica a escultora Isabelle. Cada árvore cortada no meio do caule teve uma sucessora em harmonia com o clima: sicômoros, bordos vermelhos e prateados, tulipa e coulommier, caqui, lilás indiano, etc. Frédéric Godin, paisagista, foi nosso conselheiro. Desejo aos recém-chegados um belo e longo crescimento. Para ir até ao fim, permitimos que 14 dos nossos pacientes voltassem a viver ao longo de um caminho lúdico ao longo do rio. » O domínio das fadas Myriam Eckert e Isabelle Gisler se conheceram. A artista escultora conquistada então entrou em cena com sua motosserra. A construção está em andamento há alguns meses. “Em fase com Isabelle, tive vontade de vir desde o início. Isso corresponde ao meu universo, o fantástico pelos seres da natureza. O local é magnífico, inspirador, promove o equilíbrio e existe uma harmonia entre o rio e a montanha. O tema apresentado é o domínio das fadas, não as poderia esquecer. Então criei vários. Eles já parecem felizes. Este mundo fantástico deixa muito espaço para a imaginação. Eu nunca estabeleço números. Meus personagens sempre têm suas raízes ancoradas no chão. Eles extraem energia disso. Todas as árvores contêm pequenos tesouros. Ainda é necessário detectá-los e trazê-los para fora. Não esqueçamos que as plantas fazem parte de nós. Acima de tudo, quero que minhas esculturas continuem sendo uma mensagem para os humanos e nos lembrem que a natureza está viva, como eles. E cada árvore se torna uma obra de acordo com as revelações de Myriam que conta. “Várias fadas surgiram, a fada dos pássaros, por exemplo, acaba de receber em seus braços a garça que emergiu do rio. Quanto ao cavaleiro do caracol, sonhei com ele por 10 anos, apareceu, consegui dar à luz. O homem das fadas? Eu gosto do paradoxo masculino feminino. Por que haveria apenas fadas femininas? Eles seguram uma criança nos braços. O lado feminino do masculino. A seguir ? Ele se revelará com o tempo. Duas árvores estão ligadas por suas raízes. Já imagino um casal de homens-árvore, um casal retorcido, entrelaçado ao longo do rio. Os caprichos da vida. Myriam, uma poetisa motosserra, continua tecendo, na casa das fadas, em sua tela de sonho, temas que vão desafiar o turista por mais uma ou duas décadas.",
				article_paru:
					"Artigo do Pays Dolois de 25 de março de 2021 (página 20 a 22)",
				article_paru2: "Artigo de Progrès.fr de 29 de agosto de 2021",
				article_paru3: "Artigo publicado em 16.02.2022",
				voir_article: "Ver artigo",
				titre5:
					"Le Domaine des Fées... Uns sessenta pedidos de casamento em 13 anos...",
				titre6: "Uma piscina, um arboreto e várias instalações de bem-estar",
				titre7:
					"Myriam Eckert dá uma segunda vida às árvores afetadas pela doença das cinzas.",
				titre8: "Dia dos Namorados",
				titre9: "Galeria de fotos",
				titre10: "Interior",
				titre11: "Exterior",
				titre12: "Jura",
			},
			contact: {
				titre: "Contato",
				mail: " E-Mail :",
				phone: " Telefone :",
				portable: " Celular :",
				memento: " (pense no Whatsapp do exterior 🙂)",
				carte: "Mapa",
			},
			navbar: {
				accueil: "Casa",
				chambres: "Quartos",
				tourisme: "Turismo",
				galerie: "Galeria",
				contact: "Contato",
				reserver: "Livro",
				prestations: "Benefícios",
				explorer: "Explorar",
			},
			equipments: {
				equipe_dans: "Equipado em :",
			},
			footer: {
				droits_reserves: "Todos os direitos reservados.",
			},
			booking: {
				titre: "Reserva",
				titre2: "Livro",
				nom: "Nome",
				veuillez_nom: "Veuillez entrer votre nom complet",
				mail: "Mail",
				veuillez_mail: "Veuillez entrer une adresse mail valide",
				phone: "Telefone",
				veuillez_phone: "Veuillez entrer un numéro valide",
				chambre: "Quarto",
				veuillez_chambre: "Veuillez choisir une chambre",
				people: "Ocupantes",
				veuillez_people: "Veuillez saisir le nombre d’occupants",
				nuits: "Noite(s)",
				veuillez_nuits: "Veuillez sélectionner une nuit",
				legende: " Tarifa para finais de semana, feriados e feriados",
				titre2: "Como selecionar uma duração?",
				paragraphe: "Selecione um quarto primeiro.",
				paragraphe2: "Em seguida, selecione uma ou mais noites consecutivas.",
				paragraphe3: "Se uma data estiver desativada, ela já está reservada.",
				accepter_conditions: "Eu li e aceito o",
				conditions: "condições",
				titre3: "Condições de venda e cancelamento",
				paragraphe4bis:
					"Para qualquer reserva final no local, pedimos ao cliente um depósito de 50% ou que nos forneça um número de cartão de crédito acompanhado da data de validade... (não será feito pagamento antes da estadia, trata-se apenas de uma impressão bancária em caso de cancelamento ou deterioração do quarto durante a estadia).",
				paragraphe4:
					"Qualquer cancelamento deve ser comunicado por carta registrada ou e-mail com aviso de recebimento -> Domaine des Fées, 39110 Pretin",
				paragraphe5:
					" O cliente beneficia de seguro - cancelamento: consulte a ficha de seguro anexa ao contrato. ",
				paragraphe6:
					" O cliente não beneficia do seguro de cancelamento: por qualquer cancelamento devido ao cliente, o valor reembolsado a este pela Agência de Reservas Turísticas, com exceção dos custos administrativos (se estes tiverem sido cobrados no momento da reserva) será o seguinte : ",
				list_item:
					"Cancelamento mais de 30 dias antes do início da estadia: será retido 10% do valor da estadia; ",
				list_item2:
					"Cancelamento entre o 30<sup>th</sup> e o 21<sup>th</sup> dia inclusive antes do início da estadia: será retido 25% do preço da estadia;",
				list_item4:
					"Cancelamento entre o 20<sup>th</sup> e o 8<sup>th</sup> dia inclusive antes do início da estadia: será retido 50% do preço da estadia; ",
				list_item5:
					"Cancelamento entre o 7<sup>º</sup> e o 2<sup>º</sup> dia inclusive antes do início da estadia: será retido 75% do preço da estadia; ",
				list_item6:
					"Cancelamento menos de 2 dias antes do início da estadia: 100% do preço da estadia será retido;",
				paragraphe7:
					"Em caso de não comparecimento do cliente: não haverá reembolso. ",
				paragraphe8:
					" Nossos hóspedes são recebidos no dia de sua chegada a partir das 17h. As saídas são até as 11h. Para prolongar a estadia em Les Fées, é possível chegar mais cedo ou mais tarde por uma taxa adicional, informe.",
				paragraphe9:
					"Os animais são bem-vindos sob certas condições: Educação perfeita, limpa e sempre na companhia de seu dono. ",
				paragraphe10:
					"Então selecione uma ou mais noites consecutivas. Tarifa com café da manhã regional: ",
				paragraphe11: "Semana/curista",
				paragraphe12: "fale conosco",
				paragraphe13:
					"A partir da segunda noite em quarto de hóspede é concedido 10% de desconto. ",
				bouton: "Reservar",
				bouton2: "Restaurar",
				titre4: "Confirmação de reserva",
				titre5: "Sua reserva",
				people2: "pessoas",
				conditions_acceptees: "Li e aceito as condições",
				titre6: "Custo da estadia",
				remise: " Custo da estadia",
				total: "Total : ",
				paragraphe14: "Supplemento per persona",
				paragraphe15:
					"Em caso de anomalia ou dúvida, entre em contato conosco.",
				paragraphe16:
					"Você será redirecionado para uma página de pagamento segura.",
				paragraphe17:
					"Assim que o pagamento for efetuado, você será contatado para confirmar a reserva e discutir com seus anfitriões.",
				bouton3: "Cancelar",
				bouton4: "Pagar",
				date: " (a partir das 17h)",
				date2: "dia seguinte ",
				date3: "(antes das 11h da manhã seguinte).",
				nuit: "1 noite",
			},
		},
		ru: {
			lang: "Русский",
			home: {
				bienvenue: "Domaine des Fées приветствует вас",
				bienvenue2: "Domaine des Fées приветствует вас",
				intro:
					"Феи завладели местом, у подножия гор Юра и на краю небольшой реки, называемой...« Ла Ваше ».",
				paragraphe1_titre: "Добро пожаловать в эту естественную обстановку",
				paragraphe1_texte:
					"Феи воспользовались временем, посвященным работе, чтобы украсить себя и позволить вам действительно завладеть помещением с <strong>дзен-парком</strong>, где магия воды и света очарует вас в этом <strong> >Дзен-парк</strong> strong>идиллическая обстановка</strong>.",
				paragraphe1_texte2:
					"Природная обстановка, в которой наступает зима, чтобы природа могла перезарядить свои батареи в компании фей.",
				paragraphe1_texte3:
					"Волшебство будет сопровождать вас во время вашего пребывания в <strong>обстановке благополучия и уединения</strong>, чтобы расслабиться в этом волшебном мире. Так что возьмите ключик от этих чарующих троп...",
				paragraphe2_titre: "Настоящая гавань мира",
				paragraphe2_texte:
					"В Domaine des Fées, когда светит солнце и небо становится голубым, вы можете получить доступ к чудесному миру.",
				paragraphe2_texte2:
					'<strong class="text-brand">бассейн с подогревом</strong>, омывающий долину, с кристально чистой водой, которая считается волшебной в <strong class="text-brand">Юре</strong>, украшенный серебристыми отблесками и превосходным <strong class="text-brand">сверкающим водопадом</strong>, даст вам возможность <strong class="text-brand">плыть против течения</strong>, <strong class="text-brand">рефлексотерапия по Кнайппуоку</strong>, которая подарит вам момент расслабления и хорошего самочувствия...',
				nos_chambres: "Наши комнаты",
				nos_equipements: "Наше оборудование",
				carte: "Карта",
			},
			services: {
				titre: "Преимущества",
				titre2: "Уникальные моменты...",
				titre3: "Уникальные моменты...",
				paragraphe:
					"В Domaine des Fées, когда светит солнце и небо становится голубым, вы можете получить доступ к чудесному миру.<br /> Бассейн с подогревом (глубина: 1,50 м.), погружающийся в долину, с кристально чистой водой, которая считается быть волшебным в Юре, украшенной серебряными отблесками и великолепным сверкающим водопадом, предложит вам возможность плыть против течения, рефлексотерапия Кнайпволка, которая подарит вам момент расслабления и хорошего самочувствия...",
				paragraphe2:
					"В этой естественной и до сих пор сохранившейся обстановке «хозяйка кукурузы хотела сохранить ценности прошлых веков, интегрировав современный комфорт, чтобы оправдать ожидания клиентов. В течение 25 лет Изабель работала в гостиничном бизнесе. Создавая это место, его наконец-то сбывается мечта приветствовать и баловать своих клиентов.",
				paragraphe3:
					"В номерах, люксе и доме есть кондиционер и высокоскоростной Wi-Fi (оптоволокно) во всех комнатах. Курение в отеле Domaine des Fées запрещено.",
				paragraphe4:
					"Гостиная фей. Хотите почитать книгу или, скорее, прогуляться в уютной обстановке, где потрескивающий камин и ограненный камень сохранят прохладу, вас ждет гостиная фей...",
				paragraphe5: "В вашем распоряжении библиотека и ТВ-уголок.",
				paragraphe6:
					"Нежная атмосфера и обстановка дзен ждут вас, когда вы проснетесь утром в нашем номере или на нашей террасе, чтобы насладиться полезным завтраком с эксклюзивными региональными продуктами, которые придадут вам энергии возле нашего водопада и его бассейна. ваши батареи и дать вам энергию, чтобы открыть для себя нашу великолепную Юру... По вашему возвращению выбор региональных или деликатесных продуктов, заботливо приготовленных домашней феей, порадует ваши вкусовые рецепторы, все в корзине, готовой к использованию, которую вы будете есть возможность открыть для себя либо в нашем парке, либо, скорее, у кромки воды, или на террасе, или даже наверху и во внутреннем дворике... Нет недостатка в возможностях!",
				paragraphe7:
					"Сводчатый погреб с несколькими бутылками для аперитива с друзьями.",
				paragraphe8:
					"Расслабление гарантировано на пути к хорошему самочувствию... Прогулка по Кнайпу. Метод Кнайпа основан на пяти столпах: водолечение, фитотерапия, физическая активность, диетология и здоровый и сбалансированный образ жизни. Узнайте больше",
				texte8: "просмотреть PDF",
				paragraphe9:
					"Детские кроватки могут быть предоставлены по запросу, а также манеж, стульчик для кормления и игрушки. Для прогулок перед фермой проходит маршрут для дальних походов. В вашем распоряжении тобогганы, мячи для игры в петанк, она также может Вы: рыбалка на реке, катание на лошадях, катание на горных велосипедах, полеты на воздушном шаре, самолеты, полеты на параплане, <strong>на заказ</strong> цветочные композиции, букеты цветов, корзины для пикника, различные оздоровительные массажи и, если вы есть другие желания, расскажите нам о них, мы стремимся сделать так, чтобы вы прожили уникальный момент!",
			},
			tourism: {
				titre: "Туризм",
				titre2: "Удовольствия за столом...",
				titre3: "… на винограднике, наши любимые ♥",
				titre4: "… со стороны стола и неба, наши любимые ♥",
				paragraphe:
					"Юра и его знаменитые сорта винограда соблазнят любителей своим разнообразием и типичностью, не забудьте попробовать одно из семи вакханальных чудес света, знаменитое желтое вино, желательно с кусочком Конте в конце трапезы. Чтобы посетить без модерации виноградники Арбуа, Пюпиллен, Л'Этуаль, Шато-Шалон и Кот-дю-Жура... Возможности дегустации.",
				visiter_le_site: "Посетить сайт",
				paragraphe3:
					"Юра и ее знаменитые кулинарные традиции соблазнят самых требовательных гурманов. Форель в Жоне, фирменные блюда из Конте, Coq au Vin Jaune и сморчки, канкойлот, морбифлет и множество ресторанов с отличным соотношением цены и качества. , приятное открытие… Все эти адреса находятся в 3-10 км от Ле Фе…",
				paragraphe4: "В двух шагах...",
				titre5: "Немного истории...",
				paragraphe7:
					"Как и любой отпуск или выходные, хорошая подготовка поможет вам спланировать свое расписание оптимальным образом. В регионе нужно посетить разные места и места:",
				paragraphe8: "Откройте для себя визиты Франш-Конте",
				titre6: "Дорога вин и озер",
				titre7: "Вокруг нас...",
				titre8: "Годовая деятельность",
				titre9: "Летние развлечения",
				titre10: "Зимние развлечения",
			},
			gallery: {
				titre: "Галерея",
				titre2: "Они говорят о нас",
				titre3: "Волшебные гостевые комнаты получают пятый початок кукурузы.",
				paragraphe:
					"Уникальные моменты в волшебной обстановке... В этой естественной обстановке, все еще сохранившейся в безумии сегодняшнего мира, «фея дома» хотела сохранить ценности прошлых веков, интегрируя современный комфорт, чтобы оправдать ожидания. своих клиентов. хозяев, даже самых требовательных. В течение 25 лет Изабель работает в индустрии роскошных отелей. Создав это место, ее мечта, наконец, сбылась, чтобы приветствовать и баловать своих клиентов.",
				paragraphe2:
					"История началась несколько недель назад. Жизнь деревьев, которая продолжится в сказке еще примерно десять лет. От нашего корреспондента Jacques FAIVRE.",
				paragraphe3:
					"« Я так люблю природу. Я хотела отдать дань уважения этим деревьям за эти годы, подарив им вторую жизнь, — объясняет скульптор Изабель. Каждое дерево, срезанное посередине ствола, имело преемника, гармонирующего с климатом: платаны, красные и серебристые клены, тюльпаны и куломье, хурма, индийская сирень и т. д. Нашим консультантом был Фредерик Годен, ландшафтный садовник. Желаю новичкам красивого и долгого роста. Чтобы пройти весь путь, мы позволили 14 нашим пациентам снова жить по игровой дорожке вдоль реки. » Познакомились владения фей Мириам Эккерт и Изабель Гислер. Затем на сцену вышла покорённая художница-скульптор со своей бензопилой. Строительство велось несколько месяцев. «В фазе с Изабель у меня было желание прийти с самого начала. Это соответствует моей вселенной, фантастической по существам природы. Место великолепное, вдохновляющее, способствующее равновесию и гармонии между рекой и горой. Приведенная тема - это владения фей, я не могла их забыть. Поэтому я создал несколько. Они уже кажутся счастливыми. Этот фантастический мир оставляет большой простор для воображения. Я никогда не ставлю цифры. Мои персонажи всегда уходят корнями в землю. Они черпают из него энергию. Все деревья содержат маленькие сокровища. Их еще нужно обнаружить и вывести. Не будем забывать, что растения являются частью нас. Прежде всего, я хочу, чтобы мои скульптуры оставались посланием людям и напоминали нам, что природа жива, как и они. И каждое дерево становится произведением согласно откровениям рассказывающей Мириам. «Появилось несколько фей, например, птичья фея только что приняла в свои объятия цаплю, вышедшую из реки. Что касается наездника на улитке, я мечтала о нем 10 лет, он появился, я смогла его родить. Сказочный человек? Мне нравится мужской женский парадокс. Почему существуют только женщины-феи? Они держат вместе ребенка на руках. Женская сторона мужского. Следующее ? Это проявится со временем. Два дерева связаны своими корнями. Я уже представляю себе парочку человечков-деревьев, закрученную парочку, сплетшихся вдоль реки. Капризы жизни. Мириам, поэтесса с бензопилой, продолжает ткать в доме фей на холсте своей мечты сюжеты, которые будут бросать вызов туристу еще десять или два десятилетия.",
				article_paru:
					"Статья из Pays Dolois от 25 марта 2021 г. (страницы с 20 по 22)",
				article_paru2: "Статья на Progrès.fr от 29 августа 2021 г.",
				article_paru3: "Статья опубликована 16.02.2022",
				voir_article: "Посмотреть статью",
				titre5:
					"Le Domaine des Fées... Около шестидесяти предложений руки и сердца за 13 лет...",
				titre6: "Бассейн, дендрарий и различные велнес-услуги",
				titre7:
					"Мириам Эккерт дает вторую жизнь деревьям, пораженным пепельной болезнью.",
				titre8: "День святого Валентина",
				titre9: "Фотогалерея",
				titre10: "Интерьер",
				titre11: "Внешний вид",
				titre12: "Jura",
			},
			contact: {
				titre: "Контакты",
				mail: " Электронная почта :",
				phone: " Телефон :",
				portable: " Мобильный :",
				memento: " (думаю, WhatsApp из-за границы 🙂)",
				carte: "Карта",
			},
			navbar: {
				accueil: "Дом",
				chambres: "Комнаты",
				tourisme: "Туризм",
				galerie: "Галерея",
				contact: "Контакты",
				reserver: "Книга",
				prestations: "Преимущества",
				explorer: "Исследовать",
			},
			equipments: {
				equipe_dans: "Экипирован в:",
			},
			footer: {
				droits_reserves: "Все права защищены.",
			},
			booking: {
				titre: "Бронирование",
				titre2: "Книга",
				nom: "имя",
				veuillez_nom: "Veuillez entrer votre nom complet",
				mail: "Электронная почта",
				veuillez_mail: "Veuillez entrer une adresse mail valide",
				phone: "Телефон",
				veuillez_phone: "Veuillez entrer un numéro valide",
				chambre: "Комната",
				veuillez_chambre: "Veuillez choisir une chambre",
				people: "оккупанты",
				veuillez_people: "Veuillez saisir le nombre d’occupants",
				nuits: "Ночь(и)",
				veuillez_nuits: "Veuillez sélectionner une nuit",
				legende: " Тариф на выходные, праздничные и праздничные дни",
				titre2: "Как выбрать продолжительность?",
				paragraphe: "Сначала выберите комнату.",
				paragraphe2: "Затем выберите одну или несколько ночей подряд.",
				paragraphe3: "Если дата отключена, значит она уже забронирована.",
				accepter_conditions: "Я прочитал и принимаю",
				conditions: "условия",
				titre3: "Условия продажи и отмены",
				paragraphe4bis:
					"Для любого окончательного бронирования на месте мы просим клиента внести 50% депозита или предоставить нам номер кредитной карты с указанием даты истечения срока ее действия... (оплата не производится до прибытия, это всего лишь отпечаток банка в в случае аннулирования или ухудшения состояния номера во время пребывания)",
				paragraphe4:
					"О любой отмене необходимо уведомлять заказным письмом или по электронной почте с подтверждением получения -> Domaine des Fées, 39110 Pretin ",
				paragraphe5:
					" Клиент получает выгоду от страхования - аннулирование: см. страховой лист, прилагаемый к договору. ",
				paragraphe6:
					" Клиент не имеет права на страхование отмены: при любой отмене по вине клиента сумма, возмещаемая последнему Агентством по бронированию туристических услуг, за исключением административных расходов (если они были взимаются при бронировании), будет следующей: : ",
				list_item:
					"Отмена более чем за 30 дней до начала пребывания: удерживается 10% от суммы проживания; ",
				list_item2:
					"Отмена в период с 30<sup>го</sup> до 21<sup>го</sup> дня включительно до начала проживания: удерживается 25% от стоимости проживания;",
				list_item4:
					"Отмена в период с 20<sup>го</sup> до 8<sup>го</sup> дня включительно до начала проживания: удерживается 50% стоимости проживания;",
				list_item5:
					"Отмена в период с 7<sup>го</sup> до 2<sup>го</sup> дня включительно до начала проживания: удерживается 75% от стоимости проживания;",
				list_item6:
					"Отмена менее чем за 2 дня до начала пребывания: удерживается 100% стоимости проживания;",
				paragraphe7:
					"В случае неявки клиента: возврат средств не производится. ",
				paragraphe8:
					" Наших гостей встречают в день приезда с 17:00. Выезд до 11:00. Для продления пребывания в Les Fées возможен приезд раньше или позже за дополнительную плату, сообщаем вам.",
				paragraphe9:
					"Животные приветствуются при определенных условиях: идеальное воспитание, чистота и всегда в компании своего хозяина",
				paragraphe10:
					"Затем выберите одну или несколько ночей подряд. Стоимость номера с региональным завтраком: ",
				paragraphe11: "Неделя/курист",
				paragraphe12: "свяжитесь с нами",
				paragraphe13:
					"Со второй ночи в гостевом номере предоставляется скидка 10%. ",
				bouton: "Забронировать",
				bouton2: "Восстановить",
				titre4: "Подтверждение бронирования",
				titre5: "Ваше бронирование",
				people2: "люди",
				conditions_acceptees: "Я прочитал и принял условия",
				titre6: "Стоимость проживания",
				remise: " скидка 10%",
				total: "Всего : ",
				paragraphe14: "Дополнение на человека",
				paragraphe15:
					"В случае аномалии или сомнения, пожалуйста, свяжитесь с нами.",
				paragraphe16:
					"Вы будете перенаправлены на безопасную платежную страницу.",
				paragraphe17:
					"После оплаты с вами свяжутся для подтверждения бронирования и обсуждения с хозяевами.",
				bouton3: "Отмена",
				bouton4: "Оплатить",
				date: " (с 17:00)",
				date2: "день после ",
				date3: "(до 11 утра следующего дня).",
				nuit: "1 ночь",
			},
		},
		es: {
			lang: "español",
			home: {
				bienvenue: "Le Domaine des Fées le da la bienvenida",
				bienvenue2: "Le Domaine des Fées le da la bienvenida",
				intro:
					"Las hadas se han apoderado del lugar, al pie de las montañas del Jura y al borde de un pequeño río llamado...«La Vache».",
				paragraphe1_titre: "Bienvenidos a este paraje natural",
				paragraphe1_texte:
					"Las hadas aprovecharon el tiempo dedicado a la obra para embellecerse y permitir que realmente te apoderes del recinto con un <strong>parque zen</strong> donde la magia del agua y la luz te hechizarán en este <strong> >Parque zen</strong> strong>entorno idílico</strong>.",
				paragraphe1_texte2:
					"Un escenario natural donde se instala el invierno para que la naturaleza recargue sus pilas en compañía de las hadas.",
				paragraphe1_texte3:
					"La magia te acompañará durante tu estancia en un <strong>escenario de bienestar y arropamiento</strong> para relajarte en este mundo mágico. Así que toma la llave de estos caminos encantadores...",
				paragraphe2_titre: "Verdadero remanso de paz",
				paragraphe2_texte:
					"En el Domaine des Fées, cuando brilla el sol y el cielo se vuelve azul, puedes acceder a un mundo maravilloso",
				paragraphe2_texte2:
					'La <strong class="text-brand">piscina climatizada</strong> que se sumerge en el valle, con su agua cristalina considerada mágica en el <strong class="text-brand">Jura</strong>, adornada con reflejos de colores plateados y una soberbia <strong class="text-brand">cascada centelleante</strong>, te ofrecerá la posibilidad de <strong class="text-brand">nadar contra corriente</strong>, un < strong class="text-brand">tratamiento de reflexología Kneippwalk</strong> que perfeccionará tu momento de relajación y bienestar...',
				nos_chambres: "Nuestras habitaciones",
				nos_equipements: "Nuestro equipo",
				carte: "Mapa",
			},
			services: {
				titre: "Beneficios",
				titre2: "Momentos únicos...",
				titre3: "Momentos únicos...",
				paragraphe:
					"En el Domaine des Fées, cuando brilla el sol y el cielo se vuelve azul, se puede acceder a un mundo maravilloso.<br /> La piscina climatizada (profundidad: 1,50 m.) que se sumerge en el valle, con su agua cristalina conocida como ser mágico en el Jura, adornado con reflejos plateados y una magnífica cascada centelleante, le ofrecerá la posibilidad de nadar contra la corriente, un tratamiento de reflexología Kneippwalk que perfeccionará su momento de relajación y bienestar...",
				paragraphe2:
					'En este entorno natural y aún conservado, "la dueña del maíz quiso preservar los valores de siglos pasados ​​al tiempo que integraba el confort actual para satisfacer las expectativas de los clientes. Durante 25 años, Isabelle ha trabajado en la industria hotelera creando este lugar, su el sueño finalmente se hace realidad para dar la bienvenida y mimar a sus propios clientes.',
				paragraphe3:
					"Las habitaciones, la suite y la casa rural ofrecen aire acondicionado y WiFi de muy alta velocidad (fibra óptica) en todas las habitaciones. Los interiores del Domaine des Fées son para no fumadores",
				paragraphe4:
					"El salón de las hadas. Si quieres leer un libro o más bien dar un paseo en un entorno acogedor donde la chimenea crepitante y la piedra cortada mantendrán el lugar fresco, el salón de las hadas te espera...",
				paragraphe5: "Una biblioteca y un rincón de TV están a su disposición.",
				paragraphe6:
					"Un ambiente apacible y un ambiente zen te espera cuando te despiertes por la mañana en nuestra habitación o en nuestra terraza para disfrutar de un provechoso desayuno con exclusivos productos regionales te dará energía cerca de nuestra cascada y su cuenca. sabrás recargar pilas y energías para descubrir nuestro magnífico Jura... A la vuelta, una selección de productos regionales o gourmet cuidadosamente elaborados por el hada de la casa hará las delicias de su paladar, todo ello en una cesta de pick nick lista para usar que le tener la oportunidad de descubrir ya sea en nuestro parque o más bien a la orilla del agua o en la terraza o incluso arriba y su patio... ¡No faltan posibilidades!",
				paragraphe7:
					"Una bodega abovedada con algunas botellas para un aperitivo entre amigos.",
				paragraphe8:
					"La détente assurée sur le chemin du bien-être... Le Kneippwalk. La méthode Kneipp est fondée sur cinq piliers: l'hydrothérapie, la phytothérapie, l'activité physique, la diététique et un style de vie sain et équilibré. Pour Más información",
				texte8: "ver el PDF",
				paragraphe9:
					"Se pueden prestar cunas bajo petición, así como un parque infantil, una trona y juguetes. Para los paseos, un circuito de senderismo de larga distancia pasa frente a la finca. Toboganes, bolas de petanca están a su disposición, ella también puede organizar para usted: Salidas de pesca en el río, cabalgatas, bicicleta de montaña, paseos en globo aerostático, aviones, parapente, arreglos florales <strong>a pedido</strong>, ramos de flores, canastas de picnic, masajes de bienestar varios y si usted tienes otros deseos, cuéntanos sobre ellos, ¡nos comprometemos a hacerte vivir un momento único!",
			},
			tourism: {
				titre: "Turismo",
				titre2: "Los placeres de la mesa...",
				titre3: "... del lado del viñedo, nuestros favoritos ♥",
				titre4: "... del lado de la mesa y del paladar, nuestros favoritos ♥",
				paragraphe:
					"El Jura y sus famosas variedades de uva seducirán a los aficionados con su diversidad y tipicidad, no olvides probar una de las siete maravillas bacanales de este mundo, el famoso Vin Jaune, preferiblemente con un trozo de Comté al final de la comida. Para visitar sin moderación, los viñedos de Arbois, Pupillin, l'Etoile, Château-Chalon y Côtes du Jura... Posibilidades de degustación.",
				visiter_le_site: "Visita el sitio web",
				paragraphe3:
					"El Jura y sus reconocidas tradiciones culinarias seducirán a los epicúreos más exigentes. Truchas al Vin Jaune, especialidades a base de Comté, Coq au Vin Jaune y colmenillas, cancoillotte, morbiflette y la oferta de restaurantes con una excelente relación calidad-precio es muy real , buen descubrimiento… Todas estas direcciones están entre 3-10 km de Les Fées…",
				paragraphe4: "A tiro de piedra...",
				titre5: "Un poco de historia...",
				paragraphe7:
					"Como cualquier vacación o fin de semana, una buena preparación te ayudará a planear tu agenda de manera óptima. Diferentes sitios y lugares son para visitar en la región:",
				paragraphe8: "Descubra las visitas de Franche-Comté",
				titre6: "El camino de los vinos y los lagos",
				titre7: "A nuestro alrededor...",
				titre8: "Actividades anuales",
				titre9: "Actividades de verano",
				titre10: "Actividades de invierno",
			},
			gallery: {
				titre: "Galería",
				titre2: "Hablan de nosotros",
				titre3: "Las habitaciones mágicas reciben su quinta mazorca de maíz.",
				paragraphe:
					'Momentos únicos en un entorno mágico... En este entorno natural y aún conservado por la locura del mundo actual, "el hada de la casa" ha querido conservar los valores de siglos pasados ​​integrando el confort actual para satisfacer las expectativas de sus clientes anfitriones, incluso los más exigentes. Durante 25 años, Isabelle ha estado trabajando en la industria hotelera de lujo. Al crear este lugar, su sueño finalmente se ha hecho realidad para recibir y mimar a sus propios clientes',
				paragraphe2:
					"La historia comenzó hace unas semanas. Una vida de árboles que continuará en un cuento de hadas, durante otra década más o menos. Por De nuestro corresponsal, Jacques FAIVRE.",
				paragraphe3:
					"« Amo tanto la naturaleza. Quería rendir homenaje a estos árboles, por estos años, dándoles una segunda vida, explica Isabelle la escultora. Cada árbol cortado a la mitad del tallo tuvo un sucesor en armonía con el clima: sicomoros, arces rojos y plateados, tulipán y coulommier, caqui, lila india, etc. Frédéric Godin, paisajista fue nuestro asesor. Les deseo a los recién llegados un hermoso y largo crecimiento. Para llegar hasta el final, permitimos que 14 de nuestros pacientes volvieran a vivir a lo largo de un camino lúdico a lo largo del río. » El dominio de las hadas Myriam Eckert e Isabelle Gisler se conocieron. La artista escultora conquistada entró entonces en escena con su motosierra. La construcción ha estado en marcha durante unos meses. “En fase con Isabelle, tenía ganas de venir desde el principio. Esto corresponde a mi universo, lo fantástico por los seres de la naturaleza. El sitio es magnífico, inspirador, promueve el equilibrio y hay una armonía entre el río y la montaña. El tema dado es el dominio de las hadas, no podía olvidarlas. Así que creé varios. Ya parecen felices. Este mundo fantástico deja mucho espacio para la imaginación. Nunca pongo cifras. Mis personajes siempre tienen sus raíces ancladas en la tierra. Extraen energía de él. Todos los árboles contienen pequeños tesoros. Todavía es necesario detectarlos y sacarlos a la luz. No olvidemos que las plantas son parte de nosotros. Sobre todo, quiero que mis esculturas sigan siendo un mensaje para los humanos y nos recuerden que la naturaleza está viva, como ellos. Y cada árbol se convierte en una obra según las revelaciones de Myriam que cuenta. “Han emergido varias hadas, el hada pájaro, por ejemplo, acaba de recibir en sus brazos a la garza que ha emergido del río. En cuanto al jinete del caracol, lo había soñado durante 10 años, apareció, pude parirlo. ¿El hombre de las hadas? Me gusta la paradoja hombre mujer. ¿Por qué solo habría hadas femeninas? Sostienen a un niño en sus brazos. El lado femenino del masculino. La continuación ? Se revelará con el tiempo. Dos árboles están unidos por sus raíces. Ya me imagino a un par de hombres-árbol, una pareja retorcida, entrelazados a lo largo del río. Los caprichos de la vida. Myriam, una poeta de la motosierra, continúa tejiendo, en la casa de las hadas, en su lienzo de ensueño, temas que desafiarán al turista durante una o dos décadas más.",
				article_paru:
					"Artículo del Pays Dolois del 25 de marzo de 2021 (página 20 a 22)",
				article_paru2: "Artículo de Progrès.fr del 29 de agosto de 2021",
				article_paru3: "Artículo publicado el 16.02.2022",
				voir_article: "Ver artículo",
				titre5:
					"Le Domaine des Fées... Unas sesenta propuestas de matrimonio en 13 años...",
				titre6: "Una piscina, un arboreto y varias instalaciones de bienestar",
				titre7:
					"Myriam Eckert da una segunda vida a los árboles afectados por la enfermedad del fresno.",
				titre8: "Día de San Valentín",
				titre9: "Galería de fotos",
				titre10: "Interiores",
				titre11: "Exterior",
				titre12: "Jura",
			},
			contact: {
				titre: "Contacto",
				mail: " Correo electrónico :",
				phone: " Teléfono :",
				portable: " Móvil :",
				memento: " (piensa en Whatsapp desde el extranjero 🙂)",
				carte: "Mapa",
			},
			navbar: {
				accueil: "Hogar",
				chambres: "Habitaciones",
				tourisme: "Turismo",
				galerie: "Galería",
				contact: "Contacto",
				reserver: "Libro",
				prestations: "Beneficios",
				explorer: "Explorar",
			},
			equipments: {
				equipe_dans: "Equipado en:",
			},
			footer: {
				droits_reserves: "Todos los derechos reservados.",
			},
			booking: {
				titre: "Reserva",
				titre2: "Libro",
				nom: "Nombre",
				veuillez_nom: "Veuillez entrer votre nom complet",
				mail: "Correo electrónico",
				veuillez_mail: "Veuillez entrer une adresse mail valide",
				phone: "Teléfono",
				veuillez_phone: "Veuillez entrer un numéro valide",
				chambre: "Habitación",
				veuillez_chambre: "Veuillez choisir une chambre",
				people: "Ocupantes",
				veuillez_people: "Veuillez saisir le nombre d’occupants",
				nuits: "Noche(s)",
				veuillez_nuits: "Veuillez sélectionner une nuit",
				legende: " Tarifa para fines de semana, festivos y festivos",
				titre2: "¿Cómo seleccionar una duración?",
				paragraphe: "Seleccione una habitación primero.",
				paragraphe2: "Entonces seleccione una o más noches consecutivas.",
				paragraphe3: "Si una fecha está deshabilitada, ya está reservada.",
				accepter_conditions: "He leído y acepto las",
				conditions: "condiciones",
				titre3: "Condiciones de venta y cancelación",
				paragraphe4bis:
					"Para cualquier reserva final en el sitio, solicitamos al cliente un depósito del 50% o que nos proporcione un número de tarjeta de crédito acompañado de su fecha de vencimiento... (no se realizará ningún pago antes de la estadía, esto es solo una impresión bancaria en en caso de cancelación o deterioro de la habitación durante la estancia).",
				paragraphe4:
					"Cualquier cancelación debe ser notificada por carta certificada o correo electrónico con acuse de recibo -> Domaine des Fées, 39110 Pretin",
				paragraphe5:
					" El cliente se beneficia del seguro - cancelación: consulte la hoja de seguro adjunta al contrato. ",
				paragraphe6:
					" El cliente no se beneficia de un seguro de cancelación: para cualquier cancelación debida al cliente, la cantidad reembolsada a este último por la Agencia de Reservas Turísticas, a excepción de los gastos administrativos (si se han cobrado al hacer la reserva) será la siguiente : ",
				list_item:
					"Cancelación con más de 30 días de antelación al inicio de la estancia: se retendrá el 10% del importe de la estancia; ",
				list_item2:
					"Anulación entre el día 30<sup>th</sup> y el día 21<sup>th</sup> inclusive antes del inicio de la estancia: se retendrá el 25% del precio de la estancia;",
				list_item4:
					"Anulación entre el día 20<sup>th</sup> y el día 8<sup>th</sup> inclusive antes del inicio de la estancia: se retendrá el 50% del precio de la estancia;",
				list_item5:
					"Cancelación entre el 7<sup>th</sup> y el 2<sup>th</sup> día inclusive antes del inicio de la estancia: se retendrá el 75% del precio de la estancia; ",
				list_item6:
					"Cancelación con menos de 2 días antes del inicio de la estancia: se retendrá el 100% del precio de la estancia;",
				paragraphe7:
					"En caso de no presentación del cliente: no se realizará ningún reembolso.",
				paragraphe8:
					" Nuestros huéspedes son recibidos el día de su llegada a partir de las 17:00 horas. Las salidas son hasta las 11:00 horas. Para prolongar la estancia en Les Fées, es posible llegar antes o después por un cargo adicional, infórmese.",
				paragraphe9:
					"Los animales son bienvenidos bajo ciertas condiciones: Perfecta educación, limpios y siempre en compañía de su amo. ",
				paragraphe10:
					"Luego seleccione una o más noches consecutivas. Tarifa de habitación con desayuno regional: ",
				paragraphe11: "Semana/curista",
				paragraphe12: "contáctenos",
				paragraphe13:
					"A partir de la segunda noche en habitación de huéspedes se otorga un 10% de descuento. ",
				bouton: "Reservar",
				bouton2: "Restaurar",
				titre4: "Confirmación de reserva",
				titre5: "Tu reserva",
				people2: "gente",
				conditions_acceptees: "He leído y acepto las condiciones",
				titre6: "Coste de la estancia",
				remise: " 10% de descuento",
				total: "Total : ",
				paragraphe14: "Supplemento per persona",
				paragraphe15:
					"En caso de anomalía o duda, póngase en contacto con nosotros.",
				paragraphe16: "Será redirigido a una página de pago segura.",
				paragraphe17:
					"Una vez que se haya realizado el pago, se lo contactará para confirmar la reserva y discutir con sus anfitriones.",
				bouton3: "Cancelar",
				bouton4: "Pagar",
				date: " (a partir de las 17:00 horas)",
				date2: "día después ",
				date3: "(antes de las 11 am de la mañana siguiente).",
				nuit: "1 noche",
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
