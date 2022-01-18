<template>
	<div
		id="d40-sidebar"
		class="tw:(fixed overflow-hidden pointer-events-none z-fixed inset-0)"
	>
		<div class="tw:(inset-0 absolute overflow-hidden)">
			<div
				class="
					sidebar-backdrop
					tw:(absolute
					bg-dark/75
					opacity-0
					inset-0
					transition-opacity
					ease-in-out
					duration-500)
				"
			/>

			<div class="tw:(absolute flex max-w-full pl-10 inset-y-0 right-0)">
				<div
					class="
						sidebar-wrapper
						tw:(max-w-lg
						w-screen
						transform
						translate-x-full
						transition
						ease-in-out
						duration-500)
					"
				>
					<div
						class="
							sidebar-icon
							tw:(absolute
							flex
							-ml-10
							opacity-0
							pt-4
							pr-4
							ease-in-out
							top-0
							left-0
							duration-500)
						"
					>
						<button type="button" class="d40-sidebar-toggler">
							<i
								class="
									fal
									fa-times fa-lg
									tw:(text-white
									w-6
									h-6)
								"
							/>
						</button>
					</div>
					<div
						class="
							tw:(bg-white
							overflow-y-auto
							flex flex-col
							h-full
							shadow-xl)
						"
					>
						<div class="tw:(flex-1 mt-6 px-6)">
							CONTENT
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
