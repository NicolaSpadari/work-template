<template>
    <nav id="navbar" class="navbar navbar-expand-lg fixed-top" bg-gray-400>
        <div class="container">
            <a
                class="navbar-brand" text-white
                href="#"
                @click="$router.push('/sitemap')"
            >
                Header
            </a>

            <div class="navbar-nav ml-auto">
                <button type="button" class="d40-sidebar-toggler btn btn-link">
                    <div class="i-fa-solid-cog" text-dark />
                </button>
            </div>
        </div>
    </nav>
</template>
