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
        @apply font-text overflow-x-hidden;
    }
    img {
        -webkit-user-drag: none;
        @apply select-none;
    }

    #body-content {
        .btn {
            @apply whitespace-normal;

            &:focus {
                @apply ring-0;
            }
        }
    }

    #skip-link {
        @apply m-0;

        a,
        a:visited {
            @apply block w-full pt-[2px] pb-[3px] text-center bg-gray-800 text-white;
        }

        .element-invisible {
            @apply fixed overflow-hidden h-[1px] -top-[10000px] -z-1;

            &.element-focusable {
                &:active,
                &:focus {
                    @apply fixed overflow-visible h-auto z-99999 top-0;
                }
            }
        }
    }

    #d40-sidebar{
        &:not(.visible){
            @apply pointer-events-none;

            .sidebar-backdrop, .sidebar-icon{
                @apply opacity-0;
            }

            .sidebar-wrapper{
                @apply translate-x-full;
            }
        }
        &.visible{
            @apply pointer-events-auto;

            .sidebar-backdrop, .sidebar-icon{
                @apply opacity-100;
            }

            .sidebar-wrapper{
                @apply translate-x-0;
            }
        }
    }
</style>
