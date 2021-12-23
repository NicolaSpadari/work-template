<template>
	<div class="container tw:pt-10">
		<p class="tw:(text-dark text-xl mb-5)">Pagine del sito:</p>
		<ul class="tw:list-disc">
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