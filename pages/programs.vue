<template>
	<section class="open-sans-font programs container my-md-5 my-3">
		<div class="row">
			<div class="col-md-4 col-12">
  				<img class="w-100" src="~/assets/images/edna-stern-red-sweater.jpg" alt="edna stern red sweater">
			</div>
			<div class="col-md-8 col-12 d-flex align-items-center p-md-0 p-3 text-center">
				<h1 class="font-weight-normal" v-html="$t('programs.title')"></h1>
			</div>
		</div>
		<!-- <div v-for="article in articles" :key="article.title" class="border p-3 my-md-5 my-3">
			<h2 class="font-weight-bold">{{ article.title }}</h2>
			<div class="my-3">
				<p v-for="content in article.contents" :key="content">
					{{ content }}
				</p>
			</div>
			<ul class="my-3">
				<li v-for="work in article.works" :key="work">
					{{ work }}
				</li>
			</ul>
		</div> -->
	</section>
</template>

<script>
    export default {
		data() {
				return {
					articles: [
						{
							title: 'Hélène de Montgeroult- at the crossroad of styles between Mozart and Mendelssohn Text Edna Stern',
							contents: [
								'Imagine a composer, a woman, living during the classical times of the late 18th century. France, her country, is torn by a terrible revolution and grand revolutionary ideas. It is astonishing that France, which produced great composers throughout music history, failed to produce a great one during the classical times. Or maybe it has and we don’t know about it.',
								'Georges Perec wrote a short story in 1979 called “Le Voyage d’hiver” (The Winter Journeys) in which a young professor discovers in an old country library a book by an unknown writer. He is very amused to read here and there whole phrases that he recognizes from Mallarmé or Victor Hugo. However, following a deeper research, he discovers to his astonishment that this unknown writer lived and published his book much before Hugo and Mallarmé wrote theirs.',
								'The musicologist Jérôme Dorival, who discovered Hélène de Montgeroult, had a similar experience, and indeed it is hard not to see the similarities between Chopin’s Revolutionary Etude and Montgeroult’s Etude no. 107, or between the F minor Fugue and Mendelssohn’s Fugue op. 35 no.1. Like in the Perec story, Hélène de Montgeroult wrote and published all her music between 1795 and 1812, either before or just around the time Chopin and Mendelssohn were born.',
								'It is fitting that the ideas of equality of the French Revolution coincided with the life of a great woman composer. It is fitting as well, that her importance and influence in the history of music be recognized today and her oversight corrected.'		
							],
							works: [
								"Montgeroult- 10 Etudes 20'",
								"Mozart- Fantasy K.475 in C minorr 12'",
								"Montgeroult- Fugue No. 1 in F minor 5’",
								"Mendelssohn- Prelude and Fugue Op. 35 No. 1 in E minor 8’",
								"Montgeroult- Thème varié dans le genre moderne 9’",
								"Mendelssohn- Variations Sérieuses Op. 54 10’",
								"Chopin- Etude Op. 10 No. 12 “Revolutionary Etude”"
							]
						},
						{
							title: 'Beethoven in Theresienstadt Text Edna Stern',
							contents: [
								'Gideon Klein and Karel Reiner are Czech composers who lived during World War II in the concentration camp of Theresienstadt. Klein was 25 years old when he died just days before the end of the war. He has left several unique pieces of music, including his piano sonata, in which his genius and greatness are evident despite his young age.',
								'Karel Reiner, his elder by a few years, was the only classical composer to survive Theresienstadt, and he continued to live and compose in Czechoslovakia under the communist regime which limited considerably the possibilities of his music reaching the rest of the world. His music bears a close relation to Bach in its use of polyphony and it is undoubtedly the work of a great master.',
								'This recital program, allying the two composers’ sonatas with Beethoven sonatas, is constructed in such a way that gives these composers back their rightful place within the greatest and well-known classical repertoire. It aspires as well to bring them out of the ghetto that was forced on them by their destiny, and above all-give the public the opportunity to hear their music- mirror of their time, of their lives, and of their Jewish identity.',
							],
							works: [
								'Beethoven- Sonate Op. 13 “Pathétique”',
								'Karel Reiner- Sonate No. 2 Op. 35 “Victoire”',
								'Beethoven- Sonate Op. 57 “Appassionata”',
								'Gideon Klein- Sonate'
							]
						},
						{
							title: 'Fire of Black and White Text Edna Stern',
							contents: [
								'This program explores art and creation at times of war and a disintegrating world. How do composers react to the horrors of a crumbling world under fire? The title obviously refers to the black and white keys of the piano, as well as to the written notes on white paper; to noise and silence. A fiery response in black and white to a world which is no longer so.'
							],
							works: [
								'Lili Boulanger- Theme and Variations',
								'Gideon Klein- Sonata',
								'Benjamin Britten- Notturno',
								'Samuel Barber- Sonata Op. 26'
							]
						},
						{
							title: 'From Bach to Schumann, a chain of reactions Text Pierre Gervasoni',
							contents: [
								'Of Kreisler, the character created by E.T.A. Hoffman, Schumann notes that he is “a strange Kapellmeister, violent and spiritual”. The composer of the Kreisleriana might not be actually thinking of the cantor of Leipzig when he dresses this portrait, nevertheless his music refers to it in many ways. With its poised and majestic chorales, the varying moods of his adventurous preludes, his visions of disconcerting fugues and the array of ornamented notes, that continuously reveal the baroque prominence. The one of Bach that is respected for the tour de force of its rigorous composition and its counterpoint under the appearance of fantasy. And even of Phantasie, a sub-title that grants the Kreisleriana cycle its seat with the fantastic, with the hallucination, with irrational imagery…Schumann alternates fiery “scherzando”  beginnings with wide “cantabile” dreamy horizons. He juxtaposes them in the manner of contrasted panels. His constructions, a firmly articulated polyptique of panels that are almost strange to each other. The uniting link between them belongs to the realm of inspiration. One part can come to life from the sudden explosion of the previous one, or by its slow dissolution. The Kreisleriana embody a chain of reactions. Their character is multiple, as is Schumann’s, who holds in himself many characters. Their path however, does not consist in a forward escape. This identity quest on the contrary includes many returns to the beginning. By its circular form and its choreographic potential, Schumann’s expressive undertakings produce the effect of an infinite dance ring.'
							],
							works: [
								'J.S. Bach- Partita No. 6',
								'Schumann- Kreisleriana Op. 16',
							]
						}
					]
				}
		},
		head () {
			const i18nSeo = this.$nuxtI18nSeo()
			return {
				title: this.$t("programs.meta.title"),
				htmlAttrs: {
					...i18nSeo.htmlAttrs
				},
				meta: [
					{ hid: 'description', name: 'description', content: this.$t("programs.meta.description") },
					...i18nSeo.meta
				]
			}
		}
	}
</script>

<style lang="scss">
  @import '../assets/scss/variables.scss';

  .programs {
	  .border {
			border-color: $classical-grey !important;
			border-width: 3px !important;
		}
  }

  .open-sans-font {
	font-family: 'Open Sans', sans-serif;
}
  
</style>
