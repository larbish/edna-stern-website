<template class="header-css">
	<div class="header-shadow">
	<div class="w-100 position-relative">
		<nuxt-link :to="localePath('index')">
			<img class="w-100" src="~/assets/images/edna-stern-playing-piano.jpg" alt="edna stern playing piano">
		</nuxt-link>
		<div class="baner w-100" v-if="displayBaner">
			<div class="d-flex justify-content-between p-3">
				<div></div>
				<div class="m-3 m-md-0 text-center">
					<span>{{ $t('header.baner') }}</span>
					<a :href="`mailto:${mail}`" class="mail text-black fw-bold">{{ mail }}</a>
				</div>
				<div v-on:click="closeBaner()">
					<fa class="m-2 m-md-0 mr-md-5" :icon="['fa', 'times']" />
				</div>
			</div>
		</div>
	</div>
		<section class="header-container">
			<b-navbar class="header-height" toggleable="md"  variant="faded" type="light">

				<b-navbar-toggle target="nav_collapse" class="mx-3"></b-navbar-toggle>

				<b-collapse is-nav id="nav_collapse" class="mx-3 d-md-flex justify-content-between">
					<!-- Right aligned nav items -->
					<b-navbar-nav class="ml-auto">
						<!-- DESKTOP -->
						<b-nav-item-dropdown class="d-none d-md-block" text="Menu" right>
							<b-dropdown-item :to="localePath('index')">{{ $t('menu.home') }}</b-dropdown-item>
							<b-dropdown-item :to="localePath('recordings')">{{ $t('menu.recordings') }}</b-dropdown-item>
							<b-dropdown-item :to="localePath('listen')">{{ $t('menu.listen') }}</b-dropdown-item>
							<b-dropdown-item :to="localePath('collaborations')">{{ $t('menu.collaborations') }}</b-dropdown-item>
							<b-dropdown-item :to="localePath('programs')">{{ $t('menu.programs') }}</b-dropdown-item>
							<b-dropdown-item :to="localePath('biography')">{{ $t('menu.biography') }}</b-dropdown-item>
							<b-dropdown-item :to="localePath('contact')">{{ $t('menu.contact') }}</b-dropdown-item>
						</b-nav-item-dropdown>
						
						<!-- MOBILE -->
						<b-nav-item class="d-block d-md-none" :to="localePath('index')">{{ $t('menu.home') }}</b-nav-item>
						<b-nav-item class="d-block d-md-none" :to="localePath('recordings')">{{ $t('menu.recordings') }}</b-nav-item>
						<b-nav-item class="d-block d-md-none" :to="localePath('listen')">{{ $t('menu.listen') }}</b-nav-item>
						<b-nav-item class="d-block d-md-none" :to="localePath('collaborations')">{{ $t('menu.collaborations') }}</b-nav-item>
						<b-nav-item class="d-block d-md-none" :to="localePath('programs')">{{ $t('menu.programs') }}</b-nav-item>
						<b-nav-item class="d-block d-md-none" :to="localePath('biography')">{{ $t('menu.biography') }}</b-nav-item>
						<b-nav-item class="d-block d-md-none" :to="localePath('contact')">{{ $t('menu.contact') }}</b-nav-item>

					</b-navbar-nav>

					<div class="ml-5 px-3 border d-none d-md-block">
						<nuxt-link class="lang text-black" :to="switchLocalePath('en')">EN</nuxt-link> /
						<nuxt-link class="lang text-black" :to="switchLocalePath('fr')">FR</nuxt-link>
					</div>

				</b-collapse>

				<div class="ml-5 mx-3 px-3 border d-block d-md-none">
					<nuxt-link class="lang text-black" :to="switchLocalePath('en')">EN</nuxt-link> /
					<nuxt-link class="lang text-black" :to="switchLocalePath('fr')">FR</nuxt-link>
				</div>
			</b-navbar>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			mail: 'ednastern.luna@gmail.com',
			displayBaner: true
		} 
	},
	methods: {
		closeBaner() {
			this.displayBaner = false;
		}
  	}

}
</script>

<style lang="scss">	
	@import '../assets/scss/variables.scss';

	.baner {
		color: black;
		background-color: white;
		-moz-box-shadow: 0px -5px 5px grey, 0px 5px 5px grey;
		-webkit-box-shadow:0px -5px 5px grey, 0px 5px 5px grey;
		box-shadow: 0px -5px 5px grey, 0px 5px 5px grey;
		font-family: 'Open Sans', sans-serif;
		font-size: 14px;
		position: fixed;
		right: 0px;
		z-index: 100;

		@media (max-width: 992px) { 
			bottom: 0px;
		}

		@media (min-width: 992px) { 
			font-size: 18px;
			top: 0px;
		}
    }

	.lang:hover, .mail:hover {
		text-decoration: none;
		color: black;
	}

	.header-shadow {
		box-shadow: 1px 1px 5px grey;
	}

	.font-logo {
		font-size: 20px;

		@media (min-width: 992px) { 
			font-size: 2vw !important;
		}
	}

	.header-container {
		// Mobile
		@media (max-width: 992px) { 
			.navbar-collapse {
				background-color: #3b3b42;
				z-index: 1000;
				font-weight: bold;
				font-size: 14px;
	
				.nav-link {
					color: white !important;
				}
	
				.dropdown-item {
					font-weight: bold;
					font-size: 14px;
				}
			}
		}

		@media (min-width: 992px) { 
			margin-left: 20%;
			margin-right: 20%
		}

		.navbar-nav li:hover>.dropdown-menu {
			display: block;
		}

		.dropdown-toggle::after {
			display: none;
		}


		// Underline header title
		.nav-item {
			color: #fff;
			text-transform: uppercase;
			text-decoration: none;
			letter-spacing: 0.1em;
			
			display: inline-block;
			padding: 1px 10px;
			position: relative;
		}
		.nav-item:after {    
			background: none repeat scroll 0 0 transparent;
			bottom: 0;
			content: "";
			display: block;
			height: 2px;
			left: 50%;
			position: absolute;
			background: grey;
			transition: width 0.3s ease 0s, left 0.3s ease 0s;
			width: 0;
		}
		.nav-item:hover:after { 
			width: 60%; 
			left: 20%;
		}

		.dropdown-item {
			text-transform: uppercase;
		}

		.dropdown-item:active {
			background-color: $classical-grey;
		}

		// Effect on dropdown
		@media (min-width: 992px) {
			.dropdown-menu {
				animation-duration: 0.3s;
				-webkit-animation-duration: 0.3s;
				animation-fill-mode: both;
				-webkit-animation-fill-mode: both;
				border-radius: 0;
				box-shadow: 5px 5px 10px grey;
			}
		}

		@keyframes dropdown-menu {
			0% {
				transform: translateY(1rem);
				opacity: 0;
			}
			100% {
				transform:translateY(0rem);
				opacity: 1;
			}
			0% {
				transform: translateY(1rem);
				opacity: 0;
			}
		}

		@-webkit-keyframes dropdown-menu {
			0% {
				-webkit-transform: transform;
				-webkit-opacity: 0;
			}
			100% {
				-webkit-transform: translateY(0);
				-webkit-opacity: 1;
			}
			0% {
				-webkit-transform: translateY(1rem);
				-webkit-opacity: 0;
			}
		}

		.dropdown-menu {
			-webkit-animation-name: dropdown-menu;
			animation-name: dropdown-menu;
		}
	}

</style>
