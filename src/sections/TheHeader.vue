<template>
	<nav id="navbar" class="navbar navbar-expand-lg fixed-top tw:bg-gray-400">
		<div class="container-fluid container-fluid-max-xl">
			<a
				class="navbar-brand tw:text-white"
				href="#"
				@click="$router.push('/sitemap')"
			>
				Header
			</a>

			<div class="navbar-nav tw:ml-auto">
				<button type="button" class="d40-sidebar-toggler btn btn-link">
					<i class="fas fa-cog tw:text-dark" />
				</button>
			</div>
		</div>
	</nav>
</template>
