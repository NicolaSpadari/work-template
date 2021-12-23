<template>
	<TheHeader />

	<div class="tw:pt-24 xl:tw:pt-36">
		<router-view></router-view>
	</div>

	<TheFooter />
</template>

<script setup>
	import initLazyLoad from "@js/initLazyLoad.js";

	const router = useRouter();

	function toInit() {
		initLazyLoad();
	}

	onMounted(() => {
		setTimeout(() => {
			if (import.meta.hot) {
				toInit();
			}
		}, 500);
	});

	if (import.meta.hot) {
		import.meta.hot.on("module-update", () => {
			console.clear();

			setTimeout(() => {
				toInit();
			}, 100);
		});

		router.afterEach(() => {
			window.scrollTo(0, 0);

			setTimeout(() => {
				initLazyLoad();
			}, 100);
		});
	}
</script>

<style lang="scss">
	html {
		-webkit-tap-highlight-color: transparent;
		scroll-behavior: smooth;
	}
	img {
		-webkit-user-drag: none;
		@apply tw:select-none;
	}
	.btn {
		@apply tw:whitespace-normal;
		&:focus {
			@apply tw:ring-0;
		}
	}
</style>