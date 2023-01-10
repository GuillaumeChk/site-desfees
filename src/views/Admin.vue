<template>
	<q-page class="bg-grey-10 text-grey-5">
		<section class="section-video">
			<div class="video-container">
				<q-img
					src="../assets/rooms/exterieur/Pont_tonnelle_et_végétation_compressed60_033.jpg"
					class="carousel"
				>
					<div
						class="absolute-center bg-transparent text-h4 text-uppercase text-center text-weight-light"
						style="letter-spacing: 4px"
					>
						{{ $t("admin.titre") }}
					</div>
				</q-img>
				<div class="gt-md absolute-bottom text-center q-pb-lg">
					<q-img src="../assets/chevron_bas.svg" width="50px"></q-img>
				</div>
			</div>
		</section>

		<div class="wrapper">
			<!-- <h4 class="q-pa-md q-pt-xl text-uppercase text-weight-light">Contact</h4> -->

			<section class="q-pa-md q-pl-lg q-gutter-y-md">
				<p v-html="$t('admin.paragraphe')"></p>

				<q-btn rounded unelevated label="Accueil" color="orange" to="/" />
			</section>

			<!-- <CustomDivider></CustomDivider> -->

			<div class="q-px-md q-gutter-y-md q-py-xl">
				<h5 v-html="$t('admin.titre2')"></h5>

				<q-input
					v-model="password"
					filled
					bg-color="grey-5"
					label-color="grey-10"
					:type="isPwd ? 'password' : 'text'"
					color="orange"
					style="max-width: 500px"
				>
					<template v-slot:append>
						<q-icon
							:name="isPwd ? 'visibility_off' : 'visibility'"
							class="cursor-pointer"
							@click="isPwd = !isPwd"
						/>
					</template>
				</q-input>

				<div v-if="password === pwdEnvVariable" class="q-mt-xl q-gutter-y-md">
					<h6 class="text-uppercase">Calendrier des réservations</h6>

					<p>
						État du système de réservation :<br />
						<q-btn-toggle
							v-model="bookingSystemWorking"
							class="my-custom-toggle"
							rounded
							dark
							unelevated
							toggle-color="orange"
							color="grey-4"
							text-color="orange"
							:options="[
								{ label: 'ON', value: true },
								{ label: 'OFF', value: false },
							]"
						/>
					</p>
					<p>
						Sauvegarder l'agenda en l'état :<br />
						<q-btn
							unelevated
							label="Télécharger l'agenda"
							color="blue"
							@click="downloadCalendar()"
						/>
					</p>
					<p>Attention, chaque modification est envoyée en temps réel.</p>
					<!-- <p>
						En cas de fausse manipulation, annuler les changements en cours :<br />
						<q-btn unelevated label="Annuler tout" color="black" />
					</p>
					<p>
						Valider les changements en cours et les envoyer au serveur :<br />
						<q-btn unelevated label="Valider tout" color="green" />
					</p>
					Récapitulatif des changements en cours :
					</p> -->

					<FullCalendar :options="calendarOptions" />

					Pour ajouter une réservation : cliquer sur une date de début, puis
					remplir les infos. On peut déplacer et redimensionner toute
					réservation.
				</div>

				<q-dialog v-model="displayNewEvent">
					<q-card class="q-pa-sm bg-grey-10 text-grey-5">
						<q-card-section>
							<div class="text-h6 text-uppercase">Nouvelle réservation</div>
						</q-card-section>
						<q-form @submit="addNewEvent" greedy>
							<q-card-section class="q-gutter-y-sm">
								<div class="row justify-between items-baseline">
									<span> Désactiver toutes les chambres ? </span>

									<q-btn-toggle
										v-model="newEventData.allRoomsClosed"
										class="my-custom-toggle"
										rounded
										unelevated
										toggle-color="orange"
										color="grey-4"
										text-color="orange"
										:options="[
											{ label: 'Non', value: false },
											{ label: 'Oui', value: true },
										]"
									/>
								</div>

								<div class="row justify-between items-baseline">
									<span> Est-ce un cadeau ? </span>

									<q-btn-toggle
										v-model="newEventData.isItGift"
										class="my-custom-toggle"
										rounded
										unelevated
										toggle-color="orange"
										color="grey-4"
										text-color="orange"
										:options="[
											{ label: 'Non', value: false },
											{ label: 'Oui', value: true },
										]"
									/>
								</div>

								<template v-if="newEventData.isItGift">
									<h6>Bénéficiaire</h6>

									<q-input
										rounded
										filled
										bg-color="grey-5"
										label-color="grey-10"
										v-model="newEventData.beneficiaryFirstName"
										label="Prénom du beneficiary"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) || 'Veuillez entrer le prénom',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										bg-color="grey-5"
										label-color="grey-10"
										v-model="newEventData.beneficiaryLastName"
										label="Nom du beneficiary"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) ||
												'Veuillez entrer le nom de famille',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										bg-color="grey-5"
										label-color="grey-10"
										v-model="newEventData.beneficiaryAddress"
										label="Adresse du beneficiary"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) ||
												'Veuillez entrer une Adresse complète',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										bg-color="grey-5"
										label-color="grey-10"
										v-model="newEventData.beneficiaryPostalCode"
										label="Code postal du beneficiary"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) ||
												'Veuillez entrer une Adresse complète',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										bg-color="grey-5"
										label-color="grey-10"
										v-model="newEventData.beneficiaryCity"
										label="Ville du beneficiary"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) ||
												'Veuillez entrer une Adresse complète',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										bg-color="grey-5"
										label-color="grey-10"
										v-model="newEventData.beneficiaryMail"
										label="Adresse mail"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) || 'Veuillez entrer un mail',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										bg-color="grey-5"
										label-color="grey-10"
										v-model="newEventData.beneficiaryPhone"
										label="Téléphone"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) ||
												'Veuillez entrer un numéro de téléphone',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										bg-color="grey-5"
										label-color="grey-10"
										v-model="newEventData.beneficiaryVouchersQuantity"
										label="Nombre de bons"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) ||
												'Veuillez entrer le nombre de bons',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										bg-color="grey-5"
										label-color="grey-10"
										v-model="newEventData.beneficiaryVoucherValue"
										label="Valeur par bon"
									/>

									<q-checkbox
										v-model="newEventData.toWriteAmount"
										label="Inscrire le montant offert sur le bon."
										color="orange"
									/>

									<q-checkbox
										v-model="newEventData.sendGiftToBeneficiary"
										label="Envoyer directement le bon au bénéficiaire."
										color="orange"
									/>
								</template>

								<h6 class="q-pt-md">Client</h6>

								<q-input
									rounded
									filled
									bg-color="grey-5"
									label-color="grey-10"
									v-model="newEventData.clientFirstName"
									label="Prénom du client"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) || 'Veuillez entrer le prénom',
									]"
									hide-bottom-space
								/>

								<q-input
									filled
									bg-color="grey-5"
									label-color="grey-10"
									v-model="newEventData.clientLastName"
									label="Nom du client"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) ||
											'Veuillez entrer le nom de famille',
									]"
									hide-bottom-space
								/>

								<q-input
									filled
									bg-color="grey-5"
									label-color="grey-10"
									v-model="newEventData.clientAddress"
									label="Adresse du client"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) ||
											'Veuillez entrer une Adresse complète',
									]"
									hide-bottom-space
								/>

								<q-input
									filled
									bg-color="grey-5"
									label-color="grey-10"
									v-model="newEventData.clientPostalCode"
									label="Code postal du client"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) ||
											'Veuillez entrer une Adresse complète',
									]"
									hide-bottom-space
								/>

								<q-input
									filled
									bg-color="grey-5"
									label-color="grey-10"
									v-model="newEventData.clientCity"
									label="Ville du client"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) ||
											'Veuillez entrer une Adresse complète',
									]"
									hide-bottom-space
								/>

								<q-input
									filled
									bg-color="grey-5"
									label-color="grey-10"
									v-model="newEventData.clientMail"
									label="Adresse mail"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) || 'Veuillez entrer un mail',
									]"
									hide-bottom-space
								/>

								<q-input
									filled
									bg-color="grey-5"
									label-color="grey-10"
									v-model="newEventData.clientPhone"
									label="Téléphone"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) ||
											'Veuillez entrer un numéro de téléphone',
									]"
									hide-bottom-space
								/>

								<h6 class="q-pt-md">Réservation</h6>

								<q-select
									filled
									bg-color="grey-5"
									label-color="grey-10"
									color="orange"
									v-model="newEventData.room"
									:options="roomPathNameOptions"
									label="Chambre"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) || 'Veuillez choisir une chambre',
									]"
									hide-bottom-space
								/>

								<q-select
									filled
									bg-color="grey-5"
									label-color="grey-10"
									color="orange"
									v-model="newEventData.people"
									:options="peopleQuantityOptions"
									label="Occupants"
								/>

								<p v-if="newEventData.start">
									Le
									{{
										newEventData.start.toLocaleDateString({
											timeZone: "UTC",
											weekday: "long",
											year: "numeric",
											month: "long",
											day: "numeric",
										})
									}}.
								</p>
								<p class="text-italic text-grey-6">
									Pour modifier la date : cliquer/glisser la réservation. <br />
									Pour modifier la durée : redimensionner la réservation.
								</p>

								<!-- Heure d'arrivée -->
								<q-input
									class="no-padding"
									label-slot
									filled
									bg-color="grey-5"
									label-color="grey-10"
									v-model="newEventData.timeArrival"
									mask="time"
									:rules="['time']"
									color="orange"
								>
									<template v-slot:append>
										<q-icon name="access_time" class="cursor-pointer">
											<q-popup-proxy
												cover
												transition-show="scale"
												transition-hide="scale"
											>
												<q-time
													v-model="newEventData.timeArrival"
													color="orange"
												>
													<div class="row items-center justify-end">
														<q-btn
															v-close-popup
															label="X"
															color="orange"
															flat
														/>
													</div>
												</q-time>
											</q-popup-proxy>
										</q-icon>
									</template>
									<template v-slot:label> Heure d'arrivée </template>
								</q-input>

								<!-- Heure de départ -->
								<q-input
									class="no-padding"
									label-slot
									filled
									bg-color="grey-5"
									label-color="grey-10"
									v-model="newEventData.timeDeparture"
									mask="time"
									:rules="['time']"
									color="orange"
								>
									<template v-slot:append>
										<q-icon name="access_time" class="cursor-pointer">
											<q-popup-proxy
												cover
												transition-show="scale"
												transition-hide="scale"
											>
												<q-time
													v-model="newEventData.timeDeparture"
													color="orange"
													:options="optionsDepartureTime"
												>
													<div class="row items-center justify-end">
														<q-btn
															v-close-popup
															label="X"
															color="orange"
															flat
														/>
													</div>
												</q-time>
											</q-popup-proxy>
										</q-icon>
									</template>
									<template v-slot:label> Heure de départ </template>
								</q-input>

								<q-input
									v-model="newEventData.clientMessage"
									filled
									bg-color="grey-5"
									label-color="grey-10"
									placeholder="Message du client ou note"
									autogrow
									color="orange"
								/>
							</q-card-section>

							<q-card-actions align="right" class="q-py-lg">
								<q-btn flat unelevated label="Annuler" v-close-popup />
								<q-btn
									unelevated
									label="Ajouter"
									type="submit"
									color="green"
									v-close-popup
								/>
							</q-card-actions>
						</q-form>
					</q-card>
				</q-dialog>

				<q-dialog v-model="displayEventEdit">
					<q-card class="q-px-lg q-py-md bg-grey-10 text-grey-5">
						<q-card-section>
							<div class="text-h6 text-uppercase">Modifier une réservation</div>
						</q-card-section>

						<q-form @submit="editEvent" greedy>
							<q-card-section class="q-gutter-y-sm">
								<div class="row justify-between items-baseline">
									<span> Désactiver toutes les chambres ? </span>

									<q-btn-toggle
										v-model="eventData.allRoomsClosed"
										class="my-custom-toggle"
										rounded
										unelevated
										toggle-color="orange"
										color="grey-4"
										text-color="orange"
										:options="[
											{ label: 'Non', value: false },
											{ label: 'Oui', value: true },
										]"
									/>
								</div>

								<div class="row justify-between items-baseline">
									<span> Est-ce un cadeau ? </span>

									<q-btn-toggle
										v-model="eventData.isItGift"
										class="my-custom-toggle"
										rounded
										unelevated
										toggle-color="orange"
										color="grey-4"
										text-color="orange"
										:options="[
											{ label: 'Non', value: false },
											{ label: 'Oui', value: true },
										]"
									/>
								</div>

								<template v-if="eventData.isItGift">
									<h6>Bénéficiaire</h6>

									<q-input
										rounded
										filled
										bg-color="grey-5"
										label-color="grey-10"
										v-model="eventData.beneficiaryFirstName"
										label="Prénom du beneficiary"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) || 'Veuillez entrer le prénom',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										bg-color="grey-5"
										label-color="grey-10"
										v-model="eventData.beneficiaryLastName"
										label="Nom du beneficiary"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) ||
												'Veuillez entrer le nom de famille',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										bg-color="grey-5"
										label-color="grey-10"
										v-model="eventData.beneficiaryAddress"
										label="Adresse du beneficiary"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) ||
												'Veuillez entrer une Adresse complète',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										bg-color="grey-5"
										label-color="grey-10"
										v-model="eventData.beneficiaryPostalCode"
										label="Code postal du beneficiary"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) ||
												'Veuillez entrer une Adresse complète',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										bg-color="grey-5"
										label-color="grey-10"
										v-model="eventData.beneficiaryCity"
										label="Ville du beneficiary"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) ||
												'Veuillez entrer une Adresse complète',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										bg-color="grey-5"
										label-color="grey-10"
										v-model="eventData.beneficiaryMail"
										label="Adresse mail"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) || 'Veuillez entrer un mail',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										bg-color="grey-5"
										label-color="grey-10"
										v-model="eventData.beneficiaryPhone"
										label="Téléphone"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) ||
												'Veuillez entrer un numéro de téléphone',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										bg-color="grey-5"
										label-color="grey-10"
										v-model="eventData.beneficiaryVouchersQuantity"
										label="Nombre de bons"
										lazy-rules="ondemand"
										:rules="[
											(val) =>
												(val && val.length > 0) ||
												'Veuillez entrer le nombre de bons',
										]"
										hide-bottom-space
									/>

									<q-input
										filled
										bg-color="grey-5"
										label-color="grey-10"
										v-model="eventData.beneficiaryVouchersQuantity"
										label="Valeur par bon"
									/>

									<q-checkbox
										v-model="eventData.toWriteAmount"
										label="Inscrire le montant offert sur le bon."
										color="orange"
									/>

									<q-checkbox
										v-model="eventData.sendGiftToBeneficiary"
										label="Envoyer directement le bon au bénéficiaire."
										color="orange"
									/>
								</template>

								<h6 class="q-pt-md">Client</h6>

								<q-input
									rounded
									filled
									bg-color="grey-5"
									label-color="grey-10"
									v-model="eventData.clientFirstName"
									label="Prénom du client"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) || 'Veuillez entrer le prénom',
									]"
									hide-bottom-space
								/>

								<q-input
									filled
									bg-color="grey-5"
									label-color="grey-10"
									v-model="eventData.clientLastName"
									label="Nom du client"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) ||
											'Veuillez entrer le nom de famille',
									]"
									hide-bottom-space
								/>

								<q-input
									filled
									bg-color="grey-5"
									label-color="grey-10"
									v-model="eventData.clientAddress"
									label="Adresse du client"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) ||
											'Veuillez entrer une Adresse complète',
									]"
									hide-bottom-space
								/>

								<q-input
									filled
									bg-color="grey-5"
									label-color="grey-10"
									v-model="eventData.clientPostalCode"
									label="Code postal du client"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) ||
											'Veuillez entrer une Adresse complète',
									]"
									hide-bottom-space
								/>

								<q-input
									filled
									bg-color="grey-5"
									label-color="grey-10"
									v-model="eventData.clientCity"
									label="Ville du client"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) ||
											'Veuillez entrer une Adresse complète',
									]"
									hide-bottom-space
								/>

								<q-input
									filled
									bg-color="grey-5"
									label-color="grey-10"
									v-model="eventData.clientMail"
									label="Adresse mail"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) || 'Veuillez entrer un mail',
									]"
									hide-bottom-space
								/>

								<q-input
									filled
									bg-color="grey-5"
									label-color="grey-10"
									v-model="eventData.clientPhone"
									label="Téléphone"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) ||
											'Veuillez entrer un numéro de téléphone',
									]"
									hide-bottom-space
								/>

								<h6 class="q-pt-md">Réservation</h6>

								<q-select
									filled
									bg-color="grey-5"
									label-color="grey-10"
									color="orange"
									v-model="eventData.room"
									:options="roomPathNameOptions"
									label="Chambre"
									lazy-rules="ondemand"
									:rules="[
										(val) =>
											(val && val.length > 0) || 'Veuillez choisir une chambre',
									]"
									hide-bottom-space
								/>

								<q-select
									filled
									bg-color="grey-5"
									label-color="grey-10"
									color="orange"
									v-model="eventData.people"
									:options="peopleQuantityOptions"
									label="Occupants"
								/>

								<p v-if="eventData.start">
									Le
									{{
										eventData.start.toLocaleDateString({
											timeZone: "UTC",
											weekday: "long",
											year: "numeric",
											month: "long",
											day: "numeric",
										})
									}}
									<span v-if="eventData.end"
										><br />jusqu'au matin du
										{{
											eventData.end.toLocaleDateString({
												timeZone: "UTC",
												weekday: "long",
												year: "numeric",
												month: "long",
												day: "numeric",
											})
										}}. </span
									><br />
								</p>
								<p class="text-italic text-grey-6">
									Pour modifier la date : cliquer/glisser la réservation. <br />
									Pour modifier la durée : redimensionner la réservation.
								</p>

								<!-- Heure d'arrivée -->
								<q-input
									class="no-padding"
									label-slot
									filled
									bg-color="grey-5"
									label-color="grey-10"
									v-model="eventData.timeArrival"
									mask="time"
									:rules="['time']"
									color="orange"
								>
									<template v-slot:append>
										<q-icon name="access_time" class="cursor-pointer">
											<q-popup-proxy
												cover
												transition-show="scale"
												transition-hide="scale"
											>
												<q-time v-model="eventData.timeArrival" color="orange">
													<div class="row items-center justify-end">
														<q-btn
															v-close-popup
															label="X"
															color="orange"
															flat
														/>
													</div>
												</q-time>
											</q-popup-proxy>
										</q-icon>
									</template>
									<template v-slot:label> Heure d'arrivée </template>
								</q-input>

								<!-- Heure de départ -->
								<q-input
									class="no-padding"
									label-slot
									filled
									bg-color="grey-5"
									label-color="grey-10"
									v-model="eventData.timeDeparture"
									mask="time"
									:rules="['time']"
									color="orange"
								>
									<template v-slot:append>
										<q-icon name="access_time" class="cursor-pointer">
											<q-popup-proxy
												cover
												transition-show="scale"
												transition-hide="scale"
											>
												<q-time
													v-model="eventData.timeDeparture"
													color="orange"
													:options="optionsDepartureTime"
												>
													<div class="row items-center justify-end">
														<q-btn
															v-close-popup
															label="X"
															color="orange"
															flat
														/>
													</div>
												</q-time>
											</q-popup-proxy>
										</q-icon>
									</template>
									<template v-slot:label> Heure de départ </template>
								</q-input>

								<h6 class="q-pt-md">Message ou note</h6>

								<q-input
									v-model="eventData.clientMessage"
									filled
									bg-color="grey-5"
									label-color="grey-10"
									placeholder="Message du client ou note"
									autogrow
									color="orange"
								/>
							</q-card-section>

							<q-card-actions align="right" class="q-py-lg">
								<q-btn flat unelevated label="Annuler" v-close-popup />
								<q-btn
									unelevated
									label="Modifier"
									type="submit"
									color="blue"
									v-close-popup
								/>
								<q-btn
									unelevated
									label="Supprimer"
									@click="deleteEvent"
									color="red"
									v-close-popup
								/>
							</q-card-actions>
						</q-form>
					</q-card>
				</q-dialog>
			</div>
		</div>
	</q-page>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
// import CustomDivider from "../components/CustomDivider.vue";
import roomsData from "../data/roomsData.json";

import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import frLocale from "@fullcalendar/core/locales/fr";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import { exportFile } from "quasar";

import {
	collection,
	getDocs,
	getDoc,
	doc,
	setDoc,
	deleteDoc,
} from "firebase/firestore";
import { db } from "@/firebase";

const pwdEnvVariable = import.meta.env.VITE_ADMIN_BOOKING_PASSWORD;

let password = ref("");
let isPwd = ref(true);

const roomPathNameOptions = Array.from(
	roomsData,
	(element) => element.pathName
);
const peopleQuantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let calendar = ref([]);
let calendarOptions = computed(() => {
	return {
		// timeZone: "UTC",
		plugins: [dayGridPlugin, interactionPlugin],
		buttonIcons: false,
		locale: frLocale,
		initialView: "dayGridMonth",
		editable: true,
		dateClick: handleDateClick,
		eventClick: handleEventClick,
		eventDrop: handleEventDrop,
		eventResize: handleEventResize,
		events: calendar.value,
		eventOrder: "order",
	};
});

let schoolHolidays = ref([]); // set in onMounted

let bookingSystemWorking = ref();
watch(bookingSystemWorking, async (newValue) => {
	await setDoc(doc(db, "settings", "bookingStatus"), {
		bookingSystemActive: newValue,
	});
});

/// EVENTS HANDLERS
let displayNewEvent = ref(false);
let newEventData = ref();

// add new
function handleDateClick(info) {
	// let endDate = new Date(info.date);
	// endDate.setDate(endDate.getDate() + 1);

	newEventData.value = {
		id: Date.now().toString(),
		title: "",
		start: info.date,
		end: info.date,
		timeArrival: "",
		timeDeparture: "",
		room: "",
		clientMessage: "",
		isItGift: false,
		toWriteAmount: false,
		sendGiftToBeneficiary: false,
		beneficiaryVouchersQuantity: null,
		beneficiaryVoucherValue: null,
		clientFirstName: "",
		clientLastName: "",
		clientMail: "",
		clientAddress: "",
		clientPostalCode: "",
		clientCity: "",
		clientPhone: "",
		beneficiaryFirstName: "",
		beneficiaryLastName: "",
		beneficiaryMail: "",
		beneficiaryAddress: "",
		beneficiaryPostalCode: "",
		beneficiaryCity: "",
		beneficiaryPhone: "",
		people: 0,
		allDay: true,
		borderColor: "white",
		allRoomsClosed: false,
	};

	displayNewEvent.value = true;
}

let displayEventEdit = ref(false);
let eventData = ref();

// modify
function handleEventClick(info) {
	eventData.value = {
		id: info.event.id,
		title:
			info.event.extendedProps.clientTimeArrival +
			" " +
			info.event.extendedProps.clientLastName +
			" " +
			info.event.extendedProps.clientFirstName,
		start: info.event.start,
		end: info.event.end,
		timeArrival: info.event.extendedProps.timeArrival,
		timeDeparture: info.event.extendedProps.timeDeparture,
		allDay: true,
		toWriteAmount: info.event.extendedProps.toWriteAmount,
		sendGiftToBeneficiary: info.event.extendedProps.sendGiftToBeneficiary,
		beneficiaryVouchersQuantity:
			info.event.extendedProps.beneficiaryVouchersQuantity,
		beneficiaryVoucherValue: info.event.extendedProps.beneficiaryVoucherValue,
		room: info.event.extendedProps.room,
		people: info.event.extendedProps.people,
		isItGift: info.event.extendedProps.isItGift,
		clientMessage: info.event.extendedProps.clientMessage,
		clientFirstName: info.event.extendedProps.clientFirstName,
		clientLastName: info.event.extendedProps.clientLastName,
		clientMail: info.event.extendedProps.clientMail,
		clientPhone: info.event.extendedProps.clientPhone,
		clientAddress: info.event.extendedProps.clientAddress,
		clientPostalCode: info.event.extendedProps.clientPostalCode,
		clientCity: info.event.extendedProps.clientCity,
		beneficiaryFirstName: info.event.extendedProps.beneficiaryFirstName,
		beneficiaryLastName: info.event.extendedProps.beneficiaryLastName,
		beneficiaryMail: info.event.extendedProps.beneficiaryMail,
		beneficiaryPhone: info.event.extendedProps.beneficiaryPhone,
		beneficiaryAddress: info.event.extendedProps.beneficiaryAddress,
		beneficiaryPostalCode: info.event.extendedProps.beneficiaryPostalCode,
		beneficiaryCity: info.event.extendedProps.beneficiaryCity,
		borderColor: "white",
		allRoomsClosed: info.event.extendedProps.allRoomsClosed,
	};

	displayEventEdit.value = true;
}

let eventDroppedData = ref();

// modify date
async function handleEventDrop(info) {
	eventDroppedData.value = {
		id: info.event.id,
		title: info.event.title,
		start: info.event.start,
		end: info.event.end,
		timeArrival: info.event.extendedProps.timeArrival,
		timeDeparture: info.event.extendedProps.timeDeparture,
		allDay: true,
		toWriteAmount: info.event.extendedProps.toWriteAmount,
		sendGiftToBeneficiary: info.event.extendedProps.sendGiftToBeneficiary,
		beneficiaryVouchersQuantity:
			info.event.extendedProps.beneficiaryVouchersQuantity,
		beneficiaryVoucherValue: info.event.extendedProps.beneficiaryVoucherValue,
		room: info.event.extendedProps.room,
		people: info.event.extendedProps.people,
		isItGift: info.event.extendedProps.isItGift,
		clientMessage: info.event.extendedProps.clientMessage,
		clientFirstName: info.event.extendedProps.clientFirstName,
		clientLastName: info.event.extendedProps.clientLastName,
		clientMail: info.event.extendedProps.clientMail,
		clientPhone: info.event.extendedProps.clientPhone,
		clientAddress: info.event.extendedProps.clientAddress,
		clientPostalCode: info.event.extendedProps.clientPostalCode,
		clientCity: info.event.extendedProps.clientCity,
		beneficiaryFirstName: info.event.extendedProps.beneficiaryFirstName,
		beneficiaryLastName: info.event.extendedProps.beneficiaryLastName,
		beneficiaryMail: info.event.extendedProps.beneficiaryMail,
		beneficiaryPhone: info.event.extendedProps.beneficiaryPhone,
		beneficiaryAddress: info.event.extendedProps.beneficiaryAddress,
		beneficiaryPostalCode: info.event.extendedProps.beneficiaryPostalCode,
		beneficiaryCity: info.event.extendedProps.beneficiaryCity,
		borderColor: "white",
		allRoomsClosed: info.event.extendedProps.allRoomsClosed,
	};
	eventDroppedData.value.room = roomsData.find(
		(object) => object.pathName === eventDroppedData.value.room
	).pathName; // no need ?
	eventDroppedData.value.backgroundColor = eventDroppedData.value.allRoomsClosed
		? "black"
		: roomsData.find(
				(object) => object.pathName === eventDroppedData.value.room
		  ).color;

	// update event
	calendar.value.splice(
		calendar.value.findIndex((event) => event.id === eventDroppedData.value.id),
		1,
		eventDroppedData.value
	);

	await updateDB(eventDroppedData);

	eventDroppedData.value = {};

	calendarOptions.events = calendar.value;
}

let eventResizedData = ref();

// modify date duration
async function handleEventResize(info) {
	eventResizedData.value = {
		id: info.event.id,
		title: info.event.title,
		start: info.event.start,
		timeArrival: info.event.extendedProps.timeArrival,
		timeDeparture: info.event.extendedProps.timeDeparture,
		end: info.event.end,
		allDay: true,
		toWriteAmount: info.event.extendedProps.toWriteAmount,
		sendGiftToBeneficiary: info.event.extendedProps.sendGiftToBeneficiary,
		beneficiaryVouchersQuantity:
			info.event.extendedProps.beneficiaryVouchersQuantity,
		beneficiaryVoucherValue: info.event.extendedProps.beneficiaryVoucherValue,
		room: info.event.extendedProps.room,
		people: info.event.extendedProps.people,
		isItGift: info.event.extendedProps.isItGift,
		clientMessage: info.event.extendedProps.clientMessage,
		clientFirstName: info.event.extendedProps.clientFirstName,
		clientLastName: info.event.extendedProps.clientLastName,
		clientMail: info.event.extendedProps.clientMail,
		clientPhone: info.event.extendedProps.clientPhone,
		clientAddress: info.event.extendedProps.clientAddress,
		clientPostalCode: info.event.extendedProps.clientPostalCode,
		clientCity: info.event.extendedProps.clientCity,
		beneficiaryFirstName: info.event.extendedProps.beneficiaryFirstName,
		beneficiaryLastName: info.event.extendedProps.beneficiaryLastName,
		beneficiaryMail: info.event.extendedProps.beneficiaryMail,
		beneficiaryPhone: info.event.extendedProps.beneficiaryPhone,
		beneficiaryAddress: info.event.extendedProps.beneficiaryAddress,
		beneficiaryPostalCode: info.event.extendedProps.beneficiaryPostalCode,
		beneficiaryCity: info.event.extendedProps.beneficiaryCity,
		borderColor: "white",
		allRoomsClosed: info.event.extendedProps.allRoomsClosed,
	};
	eventResizedData.value.room = roomsData.find(
		(object) => object.pathName === eventResizedData.value.room
	).pathName; // no need ?
	eventResizedData.value.backgroundColor = eventResizedData.value.allRoomsClosed
		? "black"
		: roomsData.find(
				(object) => object.pathName === eventResizedData.value.room
		  ).color;

	// update event
	calendar.value.splice(
		calendar.value.findIndex((event) => event.id === eventResizedData.value.id),
		1,
		eventResizedData.value
	);

	await updateDB(eventResizedData);

	eventResizedData.value = {};

	calendarOptions.events = calendar.value;
}
/// EVENTS HANDLER - end

/// CRUD
async function addNewEvent() {
	newEventData.value.room = roomsData.find(
		(object) => object.pathName === newEventData.value.room
	).pathName;
	newEventData.value.backgroundColor = newEventData.value.allRoomsClosed
		? "black"
		: roomsData.find((object) => object.pathName === newEventData.value.room)
				.color;
	calendar.value.push({
		...newEventData.value,
		title:
			newEventData.value.clientTimeArrival +
			" " +
			newEventData.value.clientLastName +
			" " +
			newEventData.value.clientFirstName,
	});
	calendarOptions.events = calendar.value;

	// update db
	await updateDB(newEventData);

	newEventData.value = {};
}

async function editEvent() {
	eventData.value.room = roomsData.find(
		(object) => object.pathName === eventData.value.room
	).pathName;
	eventData.value.backgroundColor = eventData.value.allRoomsClosed
		? "black"
		: roomsData.find((object) => object.pathName === eventData.value.room)
				.color;

	// update event
	calendar.value.splice(
		calendar.value.findIndex((event) => event.id === eventData.value.id),
		1,
		eventData.value
	);

	// update db
	await updateDB(eventData);

	eventData.value = {};
	calendarOptions.events = calendar.value;
}

async function deleteEvent() {
	calendar.value.splice(
		calendar.value.findIndex((event) => event.id === eventData.value.id),
		1
	);

	await deleteDoc(doc(db, "calendar", eventData.value.id));
	calendarOptions.events = calendar.value;
}

// Add/update event to db
async function updateDB(eventRef) {
	let endDate = new Date(eventRef.value.end);
	endDate.setDate(endDate.getDate() - 1);

	let eventForDB = {
		clientName: eventRef.value.title,
		startDate: eventRef.value.start,
		endDate: endDate,
		timeArrival: eventRef.value.timeArrival,
		timeDeparture: eventRef.value.timeDeparture,
		room: eventRef.value.room,
		people: eventRef.value.people,
		isItGift: eventRef.value.isItGift,
		toWriteAmount: eventRef.value.toWriteAmount,
		sendGiftToBeneficiary: eventRef.value.sendGiftToBeneficiary,
		beneficiaryVouchersQuantity: eventRef.value.beneficiaryVouchersQuantity,
		beneficiaryVoucherValue: eventRef.value.beneficiaryVoucherValue,
		clientMessage: eventRef.value.clientMessage,
		clientFirstName: eventRef.value.clientFirstName,
		clientLastName: eventRef.value.clientLastName,
		clientMail: eventRef.value.clientMail,
		clientPhone: eventRef.value.clientPhone,
		clientAddress: eventRef.value.clientAddress,
		clientPostalCode: eventRef.value.clientPostalCode,
		clientCity: eventRef.value.clientCity,
		beneficiaryFirstName: eventRef.value.beneficiaryFirstName,
		beneficiaryLastName: eventRef.value.beneficiaryLastName,
		beneficiaryMail: eventRef.value.beneficiaryMail,
		beneficiaryPhone: eventRef.value.beneficiaryPhone,
		beneficiaryAddress: eventRef.value.beneficiaryAddress,
		beneficiaryPostalCode: eventRef.value.beneficiaryPostalCode,
		beneficiaryCity: eventRef.value.beneficiaryCity,
		allDay: true,
		paid: true,
		allRoomsClosed: eventRef.value.allRoomsClosed,
	};
	// console.log(eventForDB);
	await setDoc(doc(db, "calendar", eventRef.value.id), eventForDB);
}

// Get calendar data from firebase
onMounted(async () => {
	const docSnap = await getDoc(doc(db, "settings", "bookingStatus"));
	bookingSystemWorking.value = docSnap.data().bookingSystemActive;

	const querySnapshot = await getDocs(collection(db, "calendar"));
	let calendarData = [];
	querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		if (doc.data().paid) {
			const reservationEvent = {
				id: doc.id,
				title:
					(doc.data().clientMessage ? "✱" : "") +
					doc.data().timeArrival +
					" " +
					doc.data().clientLastName +
					" " +
					doc.data().clientFirstName,
				start: new Date(doc.data().startDate.seconds * 1000), // millisecond time
				end: new Date(doc.data().endDate.seconds * 1000 + 24 * 60 * 60 * 1000),
				allDay: true,
				backgroundColor: doc.data().allRoomsClosed
					? "black"
					: roomsData.find((object) => object.pathName === doc.data().room)
							.color,
				borderColor: roomsData.find(
					(object) => object.pathName === doc.data().room
				).color,
				extendedProps: {
					order: roomsData.find((object) => object.pathName === doc.data().room)
						.index,
					room: doc.data().room,
					timeArrival: doc.data().timeArrival,
					timeDeparture: doc.data().timeDeparture,
					people: doc.data().people,
					isItGift: doc.data().isItGift,
					clientMessage: doc.data().clientMessage,
					clientFirstName: doc.data().clientFirstName,
					clientLastName: doc.data().clientLastName,
					clientMail: doc.data().clientMail,
					clientPhone: doc.data().clientPhone,
					clientAddress: doc.data().clientAddress,
					clientPostalCode: doc.data().clientPostalCode,
					clientCity: doc.data().clientCity,
					beneficiaryFirstName: doc.data().beneficiaryFirstName,
					beneficiaryLastName: doc.data().beneficiaryLastName,
					beneficiaryMail: doc.data().beneficiaryMail,
					beneficiaryPhone: doc.data().beneficiaryPhone,
					beneficiaryAddress: doc.data().beneficiaryAddress,
					beneficiaryPostalCode: doc.data().beneficiaryPostalCode,
					beneficiaryCity: doc.data().beneficiaryCity,
					toWriteAmount: doc.data().toWriteAmount,
					sendGiftToBeneficiary: doc.data().sendGiftToBeneficiary,
					beneficiaryVouchersQuantity: doc.data().beneficiaryVouchersQuantity,
					beneficiaryVoucherValue: doc.data().beneficiaryVoucherValue,
					allRoomsClosed: doc.data().allRoomsClosed,
				},
			};

			calendarData.push(reservationEvent);
		}
	});

	// console.log(calendarData);
	// calendar.value = calendarData;

	// Holidays, specials dates...

	let currentYear =
		new Date().getFullYear() - 1 + "-" + new Date().getFullYear(); // 2022-2023
	let nextYear =
		new Date().getFullYear() + "-" + (new Date().getFullYear() + 1); //2023-2024

	// Zones A + B + C et 2022-2023 + 2023-2024
	let schoolHolidaysPromise_BesanconZoneA = await fetch(
		`https://data.education.gouv.fr/api/records/1.0/search/?dataset=fr-en-calendrier-scolaire&q=&sort=-end_date&refine.location=Besan%C3%A7on&refine.annee_scolaire=${currentYear}&timezone=Europe%2FParis`
	);
	let schoolHolidaysPromise_AixMarseilleZoneB = await fetch(
		`https://data.education.gouv.fr/api/records/1.0/search/?dataset=fr-en-calendrier-scolaire&q=&sort=-end_date&refine.annee_scolaire=${currentYear}&refine.location=Aix-Marseille&timezone=Europe%2FParis`
	);
	let schoolHolidaysPromise_CreteilZoneC = await fetch(
		`https://data.education.gouv.fr/api/records/1.0/search/?dataset=fr-en-calendrier-scolaire&q=&sort=-end_date&refine.annee_scolaire=${currentYear}&refine.location=Cr%C3%A9teil&timezone=Europe%2FParis`
	);
	let schoolHolidaysPromise_BesanconZoneA2 = await fetch(
		`https://data.education.gouv.fr/api/records/1.0/search/?dataset=fr-en-calendrier-scolaire&q=&sort=-end_date&refine.location=Besan%C3%A7on&refine.annee_scolaire=${nextYear}&timezone=Europe%2FParis`
	);
	let schoolHolidaysPromise_AixMarseilleZoneB2 = await fetch(
		`https://data.education.gouv.fr/api/records/1.0/search/?dataset=fr-en-calendrier-scolaire&q=&sort=-end_date&refine.annee_scolaire=${nextYear}&refine.location=Aix-Marseille&timezone=Europe%2FParis`
	);
	let schoolHolidaysPromise_CreteilZoneC2 = await fetch(
		`https://data.education.gouv.fr/api/records/1.0/search/?dataset=fr-en-calendrier-scolaire&q=&sort=-end_date&refine.annee_scolaire=${nextYear}&refine.location=Cr%C3%A9teil&timezone=Europe%2FParis`
	);

	if (schoolHolidaysPromise_BesanconZoneA.ok) {
		let responseA = await schoolHolidaysPromise_BesanconZoneA.json();
		let responseB = await schoolHolidaysPromise_AixMarseilleZoneB.json();
		let responseC = await schoolHolidaysPromise_CreteilZoneC.json();
		let responseA2 = await schoolHolidaysPromise_BesanconZoneA2.json();
		let responseB2 = await schoolHolidaysPromise_AixMarseilleZoneB2.json();
		let responseC2 = await schoolHolidaysPromise_CreteilZoneC2.json();
		let responses = [
			responseA,
			responseB,
			responseC,
			responseA2,
			responseB2,
			responseC2,
		];

		responses.forEach((response) => {
			schoolHolidays.value = schoolHolidays.value.concat(
				response.records.map((record) => {
					return {
						id: record.fields.start_date,
						start: new Date(record.fields.start_date),
						end: new Date(record.fields.end_date),
						display: "background",
						allDay: true,
					};
				})
			);
		});

		calendarData.push({
			start: "2023-01-24",
			end: "2023-01-28",
			overlap: false,
			display: "background",
		});

		calendar.value = calendarData.concat(schoolHolidays.value);

		console.log(calendar.value);

		// let holidays = holidaysTo2032.map((object) => {
		// 	return convertDateDDMMYYYYToYYYYMMDD(object.date);
		// });
	} else {
		console.log("api gouv holidays ERROR");
	}
});
/// CRUD - end

// Export Download
function downloadCalendar() {
	const status = exportFile(
		"calendar_" + new Date().getTime() + ".txt",
		JSON.stringify(calendar.value, null, "\t")
	);

	if (status === true) {
		// browser allowed it
	} else {
		// browser denied it
		console.log("Error: " + status);
	}
}
</script>

<style>
.fc-event-title {
	font-size: 14px;
	color: #eeeeee;
}

.fc-theme-standard td,
.fc-theme-standard th,
.fc-theme-standard .fc-scrollgrid {
	border-color: grey;
	border-radius: 5px;
}
</style>
