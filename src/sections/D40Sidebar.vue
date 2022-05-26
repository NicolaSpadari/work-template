<template>
    <div id="d40-sidebar" class="position-fixed" overflow-hidden pointer-events-none z-fixed inset-0>
        <div class="position-absolute" inset-0 absolute overflow-hidden>
            <div class="sidebar-backdrop position-absolute" bg-dark bg-opacity-75 opacity-0 inset-0 transition-opacity ease-in-out duration-500 />

            <div class="position-absolute d-flex pl-5" max-w-full inset-y-0 right-0>
                <div class="sidebar-wrapper" max-w-lg w-screen transform translate-x-full transition ease-in-out duration-500>
                    <div class="sidebar-icon position-absolute d-flex pt-2 pr-2" ml--10 opacity-0 ease-in-out top-0 left-0 duration-500>
                        <button type="button" class="d40-sidebar-toggler">
                            <div class="i-fa-solid-times" text-white w-6 h-6 />
                        </button>
                    </div>
                    <div class="bg-white d-flex flex-column h-100" overflow-y-auto shadow-xl>
                        <div class="mt-3 px-3" flex-1>
                            CONTENT
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
