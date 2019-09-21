<template>
	<section class="collabs open-sans-font my-md-5 my-3">
		<div class="container mt-3">
      <!-- <b-tabs content-class="mt-3" fill>
        <b-tab title="Agnès Letestu, Étoile/Principal Leading Dancer from the Paris National Opera Ballet"> -->
          <h1 class="mt-3 text-center">{{ $t('collaborations.titre') }}</h1>
        	<div class="my-3 p-3">
            <img class="w-100" src="~/assets/images/agnes-letestu-edna-stern-spectacle.jpg" alt="agnes letestu edna stern spectacle">
          </div>
          <p class="my-3 text-center">
            {{ $t('collaborations.description') }}
          </p>
          <div class="d-flex justify-content-center">
            <youtube video-id="8GC4fmZAzgU"></youtube>
          </div>
          <div class="d-flex justify-content-center">
            <youtube video-id="eWgNUhFBYH8"></youtube>
          </div>
        <!-- </b-tab>
        <b-tab title="Amos Gitaï, film director, stage director"><p>Amos Gitai content</p></b-tab>
      </b-tabs> -->
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
						title: 'Chopin - Walz op. 64 no.2',
						id: 'H8CTMH0acNM'
					},
					{
						title: 'Galuppi',
						id: 'l5gL2ytGrD8'
					}
				]
			}
		},
		head () {
			const i18nSeo = this.$nuxtI18nSeo()
			return {
				title: this.$t("collaborations.meta.title"),
				htmlAttrs: {
					...i18nSeo.htmlAttrs
				},
				meta: [
					{ hid: 'description', name: 'description', content: this.$t("collaborations.meta.description") },
					...i18nSeo.meta
				]
			}
		}
	}
</script>

<style lang="scss">
  @import '../assets/scss/variables.scss';

  .collabs {
    .nav-item {
      width: 50% !important;

      .nav-link {
        height: 100%;
        background-color: #dddddd;
        color: $classical-grey !important;
      }
    }

    .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
      background-color: white;
      color: black !important;
    }

	.open-sans-font {
	font-family: 'Open Sans', sans-serif;
}
  }
  
</style>
