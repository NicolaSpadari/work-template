<template>
	<TheHeader />

	<div class="tw-pt-24 xl:tw-pt-36">
		<router-view></router-view>
	</div>

	<TheFooter />
</template>

<script setup>
	import { onMounted } from "vue";
	import TheHeader from "@components/TheHeader.vue";
	import TheFooter from "@components/TheFooter.vue";

	import initLazyLoad from "@js/initLazyLoad.js";

	onMounted(() => {
		setTimeout(() => {
			initLazyLoad();
		}, 50);
	});
</script>

<style lang="scss">
	html {
		-webkit-tap-highlight-color: transparent;
	}
	body {
		background-color: #f2f2f2;
	}
</style>