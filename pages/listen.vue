<template>
	<section class="mt-md-5 mt-3">
		<div class="container">
			<div class="row m-3">
				<div class="col-12">
					<div class="p-3">
        				<img class="w-100" src="~/assets/images/edna-stern-red-dress.jpeg" alt="edna stern in red dress">
					</div>
				</div>
				<div class="col-12">
					<div class="border h-100 p-3">
						<h1 class="font-weight-bold text-center my-5">{{ $t('listen.title') }}</h1>
						<div class="row mt-5">
							<div class="col text-center">
								<a class="text-dark icon" target="_blank" rel="noreferrer" href="https://itunes.apple.com/us/artist/edna-stern/258908768">
									<fa :icon="['fab', 'itunes']" />
								</a>
							</div>
							<div class="col text-center">
								<a class="text-dark icon" target="_blank" rel="noreferrer" href="https://www.amazon.com/s?k=edna+stern&ref=nb_sb_noss_1">
									<fa :icon="['fab', 'amazon']" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="pb-5">
				<div v-for="video in videos" :key="video.id" class="d-flex justify-content-center mt-5">
					<div>
						<h2 class="text-center">{{video.title}}</h2>
						<youtube :video-id="video.id"></youtube>
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
				videos: [
					{
						title: 'Bach Prelude & Fugue in E minor',
						id: 'gQ6L0wUVZo8'
					},
					{
						title: 'VISA',
						id: 'i7oFWM_TvvQ'
					},
					{
						title: 'Beethoven Sonata Appassionata 1st mov',
						id: 'GyLfz4bJXBM'
					},
					{
						title: 'Bach Partita no 1 BWV 825 Prelude',
						id: '2MoiNTdyFqs'
					},
					{
						title: 'Bach Partita no 1 BWV 825 Allemande',
						id: 'wjY2aejr3J0'
					},
					{
						title: 'Chopin - Walz op. 64 no.2',
						id: 'H8CTMH0acNM'
					},
				]
			}
		},
		head () {
			const i18nSeo = this.$nuxtI18nSeo()
			return {
				title: this.$t("listen.meta.title"),
				htmlAttrs: {
					...i18nSeo.htmlAttrs
				},
				meta: [
					{ hid: 'description', name: 'description', content: this.$t("listen.meta.description") },
					...i18nSeo.meta
				]
			}
		}
	}
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';

.icon {
	font-size: 5vw !important;
}

.border {
	border-color: $classical-grey !important;
	border-width: 2px !important;
}
</style>
