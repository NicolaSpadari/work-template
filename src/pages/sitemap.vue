<template>
	<div class="container tw-pt-52">
		<ul class="tw-list-disc">
			<template v-for="(page, index) in routes">
				<li v-if="page.name != 'sitemap'" :key="index">
					<router-link :to="page.path">
						{{ page.name }}
					</router-link>
				</li>
			</template>
		</ul>
	</div>
</template>

<script setup>
	import routes from "virtual:generated-pages";
</script>