<template>
	<section class="open-sans-font biography container my-md-5 my-3">
		<div class="p-3">
			<img class="w-100" src="~/assets/images/edna-stern-biography.jpg" alt="edna stern in red dress">
		</div>
		<div v-for="article in articles" :key="article.title" class="p-3 my-md-5 my-3">
			<h2 class="font-weight-bold">{{ article.title }}</h2>
			<div class="my-3">
				<p v-for="content in article.contents" :key="content">
					<span v-html="content"></span>
				</p>
			</div>
		</div>
	</section>
</template>

<script>
    export default {
		data() {
				return {
					articles: [
						{
							title:  this.$t('biography.articles.a1.title'),
							contents: [
								this.$t('biography.articles.a1.contents.c1'),
								this.$t('biography.articles.a1.contents.c2'),
								this.$t('biography.articles.a1.contents.c3'),
							]
						},
						{
							title:  this.$t('biography.articles.a2.title'),
							contents: [
								this.$t('biography.articles.a2.contents.c1'),
								this.$t('biography.articles.a2.contents.c2'),
								this.$t('biography.articles.a2.contents.c3'),
								this.$t('biography.articles.a2.contents.c4'),
								this.$t('biography.articles.a2.contents.c5'),
								this.$t('biography.articles.a2.contents.c6'),
								this.$t('biography.articles.a2.contents.c7'),
								this.$t('biography.articles.a2.contents.c8'),
								this.$t('biography.articles.a2.contents.c9'),
								this.$t('biography.articles.a2.contents.c10')
							]	
						}
					]
				}
		},
		head () {
			const i18nSeo = this.$nuxtI18nSeo()
			return {
				title: this.$t("biography.meta.title"),
				htmlAttrs: {
					...i18nSeo.htmlAttrs
				},
				meta: [
					{ hid: 'description', name: 'description', content: this.$t("biography.meta.description") },
					...i18nSeo.meta
				]
			}
		}
	}
</script>

<style lang="scss">
  @import '../assets/scss/variables.scss';

  .biography {
	  .border {
			border-color: $classical-grey !important;
			border-width: 3px !important;
		}
  }

   .open-sans-font {
		font-family: 'Open Sans', sans-serif;
	}
  
</style>
