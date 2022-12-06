<template>
	<q-page>
		<section class="section-video">
			<div class="video-container">
				<q-img
					src="../assets/rooms/exterieur/Terrasse_et_roseaux_1_compressed60_034.jpg"
					class="carousel"
				>
					<div
						class="absolute-center bg-transparent text-h4 text-uppercase text-center text-weight-light"
						style="letter-spacing: 4px"
					>
					{{ $t("terms") }}
					</div>
				</q-img>
			</div>
		</section>

		<div class="wrapper">
			<!-- <h4 class="q-pa-md q-pt-xl text-uppercase text-weight-light">Contact</h4> -->

			<section class="q-pa-md q-pl-lg">
				<q-card  class="q-px-lg q-py-md">
							<q-card-section>
								<div class="text-h6 text-uppercase">{{ $t("booking.titre3") }}</div>
							</q-card-section>

							<q-card-section class="q-pt-none">
								<p>{{ $t("booking.paragraphe4bis") }}</p> 
								
								<p>{{ $t("booking.paragraphe4") }}<br><br>

								<strong>a)</strong>{{ $t("booking.paragraphe5") }}<br><br>

								<strong>b)</strong>{{ $t("booking.paragraphe6") }}
								<ul>
									<li v-html="$t('booking.list_item')"></li>
									<li v-html="$t('booking.list_item2')"></li>
									<li v-html="$t('booking.list_item4')"></li>
									<li v-html="$t('booking.list_item5')"></li>
									<li v-html="$t('booking.list_item6')"></li>
								</ul> 
								
								{{ $t("booking.paragraphe7") }}</p>

								<p> {{ $t("booking.paragraphe8") }}</p> 

								<p>
									{{ $t("booking.paragraphe9") }}
								</p>

								{{ $t("booking.paragraphe10") }}
									<q-markup-table dense bordered flat class="q-my-sm">
										<tbody>
											<tr v-for="room in roomsData">
												<td>{{room.name}}</td>
												<td v-if="room.pathName !== 'gite'">{{room.tarifs[0]}} € 🠖 {{room.tarifs[room.tarifs.length -1]}} €</td>
												<td v-else>{{room.tarifs[0][0][0]}} € 🠖 {{room.tarifs[room.tarifs.length -1][room.tarifs[room.tarifs.length -1].length -1]}} €</td>
											</tr>
											<tr>
												<td>{{ $t("booking.paragraphe11") }}</td>
											<td>{{ $t("booking.paragraphe12") }}</td>
										</tr>
										</tbody>
									</q-markup-table>

								<p>
									{{ $t("booking.paragraphe13") }}
								</p>
								</q-card-section>
						</q-card>
			</section>
		</div>
	</q-page>
</template>

<script setup>
import roomsData from "../data/roomsData.json";

</script>
