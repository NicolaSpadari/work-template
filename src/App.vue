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

	const fixedHeader = computed(() => {
		return router.currentRoute.value.meta.fixedheader;
	});

	function toInit() {
		initLazyLoad();

		if (fixedHeader.value) {
			console.log("header is fixed");
			$("body").addClass("reduced");
		} else {
			console.log("header is dynamic");
			initNavbar();
		}
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
	body {
		@apply tw:font-text tw:overflow-x-hidden;
	}
	img {
		-webkit-user-drag: none;
		@apply tw:select-none;
	}

	#body-content {
		.btn {
			@apply tw:whitespace-normal;
			&:focus {
				@apply tw:ring-0;
			}
		}
	}
</style>