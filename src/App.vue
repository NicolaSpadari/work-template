<template>
	<SkipLink />

	<TheHeader />

	<D40Sidebar />

	<router-view />

	<TheFooter />
</template>

<script lang="ts" setup>
	const router = useRouter();
	const route = useRoute();

	const toInit = () => {
		if (route.meta.fixedHeader) {
			console.log("header is fixed");
			$("body").addClass("reduced");
		} else {
			$("body").removeClass("reduced");
			console.log("header is dynamic");
			initNavbar();
		}

		initD40Sidebar();
	};

	onMounted(() => nextTick(() => import.meta.hot ? toInit() : ""));
	router.afterEach(() => nextTick(() => import.meta.hot ? toInit() : ""));
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

	#skip-link {
		@apply tw:m-0;

		a,
		a:visited {
			@apply tw:block tw:w-full tw:pt-[2px] tw:pb-[3px] tw:text-center tw:bg-gray-800 tw:text-white;
		}

		.element-invisible {
			@apply tw:fixed tw:overflow-hidden tw:h-[1px] tw:-top-[10000px] tw:-z-1;

			&.element-focusable {
				&:active,
				&:focus {
					@apply tw:fixed tw:overflow-visible tw:h-auto tw:z-99999 tw:top-0;
				}
			}
		}
	}
</style>
