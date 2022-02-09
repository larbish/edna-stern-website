<template>
	<section>
		<div class="container my-3 open-sans-font">
			<img class="w-100" src="~/assets/images/edna-stern-banner.jpg" alt="edna stern recordings">
			<div class="mt-5">
				<h3 class="lato-font font-weight-bold">{{ $t('recordings.title') }}</h3>
				<p>{{ $t('recordings.p1') }}</p>
				<p>{{ $t('recordings.p2') }}</p>
				<p>{{ $t('recordings.p3') }}</p>
			</div>
			<div class="row mt-md-5 mt-0 p-3">
				<h1 class="lato-font mb-3 text-uppercase">{{ $t('recordings.records.title') }}</h1>
				<div class="container-fluid">
					<div class="row mb-5" v-for="record in records" :key="record.image.alt">
						<div class="col-md-4 col-12 d-flex flex-column pl-0">
							<div class="py-3 pr-3">
								<img class="w-100" :src="'/' + record.image.name" :alt="record.image.name">
							</div>
							<div class="">
								<img v-for="prize in record.prizes" :key="prize.alt" class="h-max-100 img-responsive mr-3" :src="'/' + prize.name" :alt="prize.alt">
							</div>
						</div>
						<div class="col-md-8 col-12 px-md-5 px-3 d-flex align-items-center mt-3 mt-md-0">
							<div>
								<p v-html="record.description.recordInfo"></p>
								<p class="font-italic" v-for="(critic, index) in record.description.critics" :key="'critic_' + index">
									<span v-html="critic"></span>
								</p>
								<p class="font-italic" v-for="(link, index) in record.description.links" :key="'link_' + index">
									<a :href="link" target="_blank">{{ link }}</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
    export default {
		data() {
			return {
				records: [
					{
						image: {
							name: 'disque-schubert-on-tape.png',
							alt: 'Schubert | On tape | Edna Stern'
						},
						description: {
							recordInfo: this.$t('recordings.records.r15.title'),
							links: [
								this.$t('recordings.records.r15.quotes.q1'),
								this.$t('recordings.records.r15.quotes.q2')
							]
						},
						prizes: []
	
					},
					{
						image: {
							name: 'mayr-haydn-georgisches-kammerorchester-ingolstadt-ruben-gazarian-edna-stern.jpg',
							alt: 'Mayr Haydn | Georgisches Kammerorchester Ingolstadt | Ruben Gazarian | Edna Stern'
						},
						description: {
							recordInfo: this.$t('recordings.records.r0.title'),
							critics: [
								this.$t('recordings.records.r0.quotes.q1'),
							]
						},
						prizes: []
	
					},
					{
						image: {
							name: 'disque-the-young-beethoven.png',
							alt: 'The young Ludwig Beethoven by Edna Stern'
						},
						description: {
							recordInfo: this.$t('recordings.records.r1.title')
						},
						prizes: []
	
					},
					{
						image: {
							name: 'disque-fire-of-black-and-white.png',
							alt: 'Fire of black and white by Edna Stern'
						},
						description: {
							recordInfo: this.$t('recordings.records.r2.title'),
						},
						prizes: []
	
					},
					{
						image: {
							name: 'helene-de-montgeroult-by-edna-stern.jpg',
							alt: 'Hélène de Montgeroult by Edna Stern'
						},
						description: {
							recordInfo: this.$t('recordings.records.r3.title'),
							critics: [
								this.$t('recordings.records.r3.quotes.q1'),
								this.$t('recordings.records.r3.quotes.q2')
							]
						},
						prizes: [
							{
								name: 'critic-choice-helene-de-montgeroult-by-edna-stern.jpg',
								alt: 'Hélène de Montgeroult critic choice 2017'
							},						 
							{
								name: 'france-musique-helene-de-montgeroult-by-edna-stern.jpg',
								alt: 'Hélène de Montgeroult france musique'
							}					 
						]
	
					},
					{
						image: {
							name: 'me-su-bach-by-edna-stern.jpg',
							alt: 'ME SU BACH by Edna Stern'
						},
						description: {
							recordInfo: this.$t('recordings.records.r4.title'),
							critics: [
								this.$t('recordings.records.r4.quotes.q1')
							]
						},
						prizes: [
							{
								name: 'classica-awards.gif',
								alt: '4 starts classica awards'
							}				 
						]
					},
					{
						image: {
							name: 'disque-beethoven-tempete-by-edna-stern.jpg',
							alt: 'Beethoven Sonate Tempete by Edna Stern'
						},
						description: {
							recordInfo: this.$t('recordings.records.r5.title'),
							critics: [
								this.$t('recordings.records.r5.quotes.q1')							
							]
						},
						prizes: [
							{
								name: 'topmonde2014-awards.gif',
								alt: 'Top Monde 2014 awards'
							}			 
						]
					},
					{
						image: {
							name: 'disque-beethoven-appasionata-by-edna-stern.jpg',
							alt: 'Beethoven Sonate Appassionata by Edna Stern'
						},
						description: {
							recordInfo: this.$t('recordings.records.r6.title'),
							critics: []
						},
						prizes: [
							{
								name: 'topmonde2014-awards.gif',
								alt: 'Top Monde 2014 awards'
							}			 
						]
					},
					{
						image: {
							name: 'disque-lumieres-by-edna-stern.jpg',
							alt: 'Disque Lumieres by Edna Stern'
						},
						description: {
							recordInfo: this.$t('recordings.records.r7.title'),
							critics: [
								this.$t('recordings.records.r7.quotes.q1'),								
							]
						},
						prizes: []
					},
					{
						image: {
							name: 'disque-mozart-by-edna-stern.jpg',
							alt: 'Disque Mozart by Edna Stern'
						},
						description: {
							recordInfo: this.$t('recordings.records.r8.title'),
							critics: [
								this.$t('recordings.records.r8.quotes.q1'),								
								this.$t('recordings.records.r8.quotes.q2'),								
								this.$t('recordings.records.r8.quotes.q3'),								
							]
						},
						prizes: [
							{
								name: 'topmonde2010-awards.gif',
								alt: 'Top Monde 2010 awards'
							}			 
						]
					},
					{
						image: {
							name: 'disque-chopin-by-edna-stern.jpg',
							alt: 'Disque Chopin by Edna Stern'
						},
						description: {
							recordInfo: this.$t('recordings.records.r9.title'),
							critics: [
								this.$t('recordings.records.r9.quotes.q1'),								
								this.$t('recordings.records.r9.quotes.q2'),								
							]
						},
						prizes: []
					},
					{
						image: {
							name: 'disque-ophelie-by-edna-stern.jpg',
							alt: 'Disque Ophelie by Edna Stern'
						},
						description: {
							recordInfo: this.$t('recordings.records.r10.title'),
							critics: [
								this.$t('recordings.records.r10.quotes.q1')								
							]
						},
						prizes: [
							{
								name: 'diapason-5-awards.gif',
								alt: 'Diapason 5 awards'
							}
						]
					},
					{
						image: {
							name: 'disque-bach-by-edna-stern.jpg',
							alt: 'Disque Bach by Edna Stern'
						},
						description: {
							recordInfo: this.$t('recordings.records.r11.title'),
							critics: [
								this.$t('recordings.records.r11.quotes.q1'),
								this.$t('recordings.records.r11.quotes.q2'),
								this.$t('recordings.records.r11.quotes.q3'),
								this.$t('recordings.records.r11.quotes.q4'),
								this.$t('recordings.records.r11.quotes.q5'),
							]
						},
						prizes: [
							{
								name: 'diapasondor-awards.gif',
								alt: 'Diapasondor awards'
							}			 
						]
					},
					{
						image: {
							name: 'disque-schumann-by-edna-stern.jpg',
							alt: 'Disque Schumann by Edna Stern'
						},
						description: {
							recordInfo: this.$t('recordings.records.r12.title'),
							critics: [
								this.$t('recordings.records.r12.quotes.q1'),
								this.$t('recordings.records.r12.quotes.q2'),
								this.$t('recordings.records.r12.quotes.q3'),
								this.$t('recordings.records.r12.quotes.q4'),
							]
						},
						prizes: [
							{
								name: 'diapason-5-awards.gif',
								alt: 'Diapason 5 awards'
							},						 
							{
								name: 'mondmus-awards.gif',
								alt: 'Mondmus Awards'
							}				 
						]
					},
					{
						image: {
							name: 'disque-brahms-by-edna-stern.jpg',
							alt: 'Disque Brahms by Edna Stern'
						},
						description: {
							recordInfo: this.$t('recordings.records.r13.title'),
							critics: [
								this.$t('recordings.records.r13.quotes.q1'),
								this.$t('recordings.records.r13.quotes.q2'),
								this.$t('recordings.records.r13.quotes.q3'),
								this.$t('recordings.records.r13.quotes.q4'),
							]
						},
						prizes: [
							{
								name: 'diapason-decouverte-awards.gif',
								alt: 'Diapason Decouverte awards'
							},						 
							{
								name: 'r9-classica-awards.gif',
								alt: 'R9 Classica Awards'
							}			 
						]
					},
					{
						image: {
							name: 'disque-cpbach-by-edna-stern.jpg',
							alt: 'Disque CP Bach by Edna Stern'
						},
						description: {
							recordInfo: this.$t('recordings.records.r14.title'),
							critics: [
								this.$t('recordings.records.r14.quotes.q1'),
							]
						},
						prizes: [
							{
								name: 'diapason-5-awards.gif',
								alt: 'Diapason 5 awards'
							},						 
							{
								name: 'r9-classica-awards.gif',
								alt: 'R9 Classica Awards'
							}			 
						]
					},
					
				]
			}
		},
		head () {
			const i18nSeo = this.$nuxtI18nSeo()
			return {
				title: this.$t("recordings.meta.title"),
				htmlAttrs: {
					...i18nSeo.htmlAttrs
				},
				meta: [
					{ hid: 'description', name: 'description', content: this.$t("recordings.meta.description") },
					...i18nSeo.meta
				]
			}
		}
	}
</script>

<style>
ul {
	margin-left:5px;
}

.h-max-100 {
	max-height: 70px !important;
}

/* .lato-font {
	font-family: 'Lato', sans-serif;
} */

.open-sans-font {
	font-family: 'Open Sans', sans-serif;
}
</style>
