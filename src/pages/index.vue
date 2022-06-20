<route>
{
    meta: {
        fixedheader: false
    }
}
</route>

<template>
    <div class="container" mt-20>
        <p class="mb-5" text-dark text-xl>
            Pagine del sito:
        </p>
        <ul list-disc>
            <li>
                <a href="/__unocss">
                    Uno generated css
                </a>
            </li>
            <li v-for="page in routes" :key="page.name">
                <router-link :to="page.path">
                    {{ page.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import routes from "virtual:generated-pages";
</script>
