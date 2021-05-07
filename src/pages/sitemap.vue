<template>
	<div class="container tw-pt-52">
		<ul class="tw-list-disc">
			<li v-for="(page, index) in routes" :key="index">
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