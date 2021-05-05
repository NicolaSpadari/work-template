<template>
	<TheHeader />

	<div class="tw-pt-24 xl:tw-pt-36">
		<router-view></router-view>
	</div>

	<TheFooter />
</template>

<script setup>
	import { onMounted } from "vue";
	import TheHeader from "@sections/TheHeader.vue";
	import TheFooter from "@sections/TheFooter.vue";

	import initLazyLoad from "@js/initLazyLoad.js";

	onMounted(() => {
		setTimeout(() => {
			initLazyLoad();
		}, 50);
	});

	if (import.meta.hot) {
		import.meta.hot.on("module-update", () => {
			console.clear();

			setTimeout(() => {
				initLazyLoad();
			}, 50);
		});
	}
</script>

<style lang="scss">
	html {
		-webkit-tap-highlight-color: transparent;
	}
	img {
		-webkit-user-drag: none;
		user-select: none;
	}
	.outline {
		text-shadow: 0 0 3px black;
	}
	.btn {
		white-space: normal !important;
	}
</style>