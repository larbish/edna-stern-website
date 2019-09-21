<template>
	<section>
		<div class="container my-md-5 my-3">
			<h1 class="text-center font-weight-bold text-uppercase">Edna Stern</h1>
			<h2 class="text-muted text-center">{{ $t('home.title') }}</h2>
			<!-- <h2 class="text-muted text-center">uesh</h2> -->
		</div>
		<div class="container-fluid josefine-font text-black">
			<div class="row mx-3">
				<div class="col-md-4 col-12 bg-picture-light p-4">
					<div class="h-100 d-flex flex-column">
						<div class="mb-auto">
							<p class="mb-0">
								{{ $t('home.content.en.quote1') }}
							</p>
							<b>{{ $t('home.content.en.writer1') }}</b>
						</div>
						<div class="text-right mb-auto mt-4">	
							<p class="mb-0">
								{{ $t('home.content.en.quote2') }}
							</p>
							<b>{{ $t('home.content.en.writer2') }}</b>
						</div>
						<div class="mt-4">
							<p class="mb-0">
								{{ $t('home.content.en.quote3') }}
							</p>
							<b>{{ $t('home.content.en.writer3') }}</b>
						</div>
						<nuxt-link class="text-dark mt-4" to="/recordings">{{ $t('home.more.en') }}</nuxt-link>
					</div>
				</div>
				<div class="col-md-4 col-12 px-0 px-md-3 py-3 py-md-0">
					<div class="d-flex align-items-center mt-auto">
						<img class="w-100" src="~/assets/images/edna-stern.jpg" alt="edna stern">
					</div>
				</div>
				<div class="col-md-4 col-12 bg-picture-dark p-4">
					<div class="h-100 d-flex flex-column">
						<div class="mb-auto">
							<p class="mb-0">
								{{ $t('home.content.fr.quote1') }}
							</p>
							<b>{{ $t('home.content.fr.writer1') }}</b>
						</div>
						<div class="text-right mb-auto mt-4">	
							<p class="mb-0">
								{{ $t('home.content.fr.quote2') }}
							</p>
							<b>{{ $t('home.content.fr.writer2') }}</b>
						</div>
						<div class="mt-4">
							<p class="mb-0">
								{{ $t('home.content.fr.quote3') }}
							</p>
							<b>{{ $t('home.content.fr.writer3') }}</b>
						</div>
						<nuxt-link class="mt-4 text-dark cursor-pointer" to="/recordings">{{ $t('home.more.fr') }}</nuxt-link>
					</div>
				</div>
			</div>
		</div>	
		<Footer/>
	</section>

</template>

<script>
import Logo from '~/components/Logo.vue'
import Footer from '~/components/footer.vue';

export default {
  components: {
	Logo,
    Footer
  },
  head () {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
		title: this.$t("home.meta.title"),
		htmlAttrs: {
			...i18nSeo.htmlAttrs
		},
		meta: [
			{ hid: 'description', name: 'description', content: this.$t("home.meta.description") },
			...i18nSeo.meta
		]
    }
  }
}

</script>

<style lang="scss">
.bg-picture-light {
  	background-color: #eaeef1;
}

.bg-picture-dark {
  	background-color: #e6e7e9;
}

.josefine-font {
	/* font-family: 'Dancing Script', sans-serif; */
	font-style: italic;
}
</style>
