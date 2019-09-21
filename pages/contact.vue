<template>
	<section class="my-md-5 my-3 p-3 p-md-0">
		<div class="container border p-3">
			<h1 class="font-weight-bold">Management: Con Anima Agency</h1>
			<div class="d-flex align-items-center">
				<fa class="mr-2" :icon="['fa', 'pencil-alt']" />
				<span>contact@con-anima-agency.com</span>
			</div>
			<div class="d-flex align-items-center">
				<fa class="mr-2" :icon="['fa', 'globe']" />
				<a class="text-black" href="https://www.con-anima-agency.com/en" target="blank">www.con-anima-agency.com</a>
			</div>
			<div class="d-flex align-items-center">
				<fa class="mr-2" :icon="['fa', 'phone']" />
				<span>+33 6 03 49 69 50</span>
			</div>
			<hr>
			<div class="d-flex align-items-center">
				<fa class="mr-2" :icon="['fa', 'pencil-alt']" />
				<span>ednastern@yahoo.com</span>
			</div>
		</div>
		<div class="mt-custom p-3 text-muted">
			<div class="font-weight-bold">Credits:</div> 
			<div>Photography: Barbara Gandenheimer, Cédric Azan</div>
			<div>Webmaster: leproux.baptiste@gmail.com</div>
		</div>
	</section>
</template>

<script>
    export default {
		head () {
			const i18nSeo = this.$nuxtI18nSeo()
			return {
				title: this.$t("contact.meta.title"),
				htmlAttrs: {
					...i18nSeo.htmlAttrs
				},
				meta: [
					{ hid: 'description', name: 'description', content: this.$t("contact.meta.description") },
					...i18nSeo.meta
				]
			}
		}
	}
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';

.contact {
	min-height: calc(100vh - 226px) !important;

	.border {
		border-color: $classical-grey !important;
		border-width: 2px !important;
	}
} 

.mt-custom {
	margin-top: 5%;
	font-size: 14px;

	@media (min-width: 992px) { 
		font-size: 1vw !important;
	}

}
</style>
