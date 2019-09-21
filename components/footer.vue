<template>
	<section class="mt-3 footer-height text-12-xs">
		<div class="d-none d-md-flex footer justify-content-start align-items-center px-5 py-2 h-100">
			<div class="mr-4">
				<fa class="mr-2" :icon="['fa', 'map-marker-alt']" />
				<span>Con Anima Agency</span>
			</div>
			<div class="mr-4">
				<fa class="mr-2" :icon="['fa', 'pencil-alt']" />
				<span>contact@con-anima-agency.com</span>
			</div>
			<div class="mr-4">
				<fa class="mr-2" :icon="['fa', 'phone']" />
				<span>+33 6 03 49 69 50</span>
			</div>
		</div>
		<div class="d-md-none d-flex footer flex-column justify-content-center text-center py-3">
			<div>
				<fa class="mr-2" :icon="['fa', 'map-marker-alt']" />
				<span>Con Anima Agency</span>
			</div>
			<div>
				<fa class="mr-2" :icon="['fa', 'pencil-alt']" />
				<span>contact@con-anima-agency.com</span>
			</div>
			<div>
				<fa class="mr-2" :icon="['fa', 'phone']" />
				<span>+33 6 03 49 69 50</span>
			</div>
		</div>
  	</section>
</template>

<style lang="scss">
.footer {
	background-color: #d7d9e6;
	color: black;
}
</style>