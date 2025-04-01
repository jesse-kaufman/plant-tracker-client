<template>
  <ol class="flex items-center mb-4 w-full lg:mt-4 sm:ml-2 sm:pr-2 sm:mb-5">
    <li
      class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-green-900/80 after:border-4 after:inline-block"
    >
      <div
        data-tooltip-target="tooltip-seed"
        data-tooltip-placement="bottom"
        class="inline-flex justify-center items-center p-2.5 w-10 h-10 text-gray-300 rounded-full shrink-0 sm:h-12 sm:w-12 bg-green-900/80"
      >
        <sourceSeed />
      </div>
      <div
        id="tooltip-seed"
        role="tooltip"
        class="inline-block absolute invisible z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg opacity-0 transition-opacity duration-300 shadow-xs tooltip dark:bg-gray-700"
      >
        Sourced from seed
      </div>
    </li>
    <li
      class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-green-900/80 after:border-4 after:inline-block"
    >
      <div
        data-tooltip-target="tooltip-seedling"
        data-tooltip-placement="bottom"
        class="inline-flex justify-center items-center p-2.5 w-10 h-10 text-gray-300 rounded-full shrink-0 sm:h-12 sm:w-12 bg-green-900/80"
      >
        <svg
          fill="currentColor"
          stroke="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
        >
          <path
            d="M440-120v-319q-64 0-123-24.5T213-533q-45-45-69-104t-24-123v-80h80q63 0 122 24.5T426-746q31 31 51.5 68t31.5 79q5-7 11-13.5t13-13.5q45-45 104-69.5T760-720h80v80q0 64-24.5 123T746-413q-45 45-103.5 69T520-320v200h-80Z"
          />
        </svg>
      </div>
      <div
        id="tooltip-seedling"
        role="tooltip"
        class="inline-block absolute invisible z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg opacity-0 transition-opacity duration-300 shadow-xs tooltip dark:bg-gray-700"
      >
        Seedling
      </div>
    </li>
    <li
      class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block after:border-zinc-900/30"
    >
      <div
        data-tooltip-target="tooltip-veg"
        data-tooltip-placement="bottom"
        class="flex justify-center items-center p-2.5 w-10 h-10 text-gray-300 rounded-full sm:h-12 sm:w-12 bg-green-900/80 shrink-0"
      >
        <svg
          fill="currentColor"
          stroke="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
        >
          <path
            d="M450-80q-33 0-66.5-7.5T315-109q12-121 70-226t149-185q-110 56-190.5 148T231-162q-4-3-7.5-6.5L216-176q-47-47-71.5-105T120-402q0-68 27-130t75-110q81-81 210-105.5t362-4.5q18 239-6 364.5T684-182q-49 49-109.5 75.5T450-80Z"
          />
        </svg>
      </div>
      <div
        id="tooltip-veg"
        role="tooltip"
        class="inline-block absolute invisible z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg opacity-0 transition-opacity duration-300 shadow-xs tooltip dark:bg-gray-700"
      >
        Vegetative stage
      </div>
    </li>
    <li
      class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block after:border-zinc-900/30"
    >
      <div
        data-tooltip-target="tooltip-flower"
        data-tooltip-placement="bottom"
        class="flex justify-center items-center p-2.5 w-10 h-10 rounded-full text-gray-500/20 sm:h-12 sm:w-12 bg-zinc-900/30 shrink-0"
      >
        <svg
          fill="currentColor"
          stroke="none"
          viewBox="0 -960 960 960"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m440-80q-100 0-170-70t-70-170v-80q71-1 134 29t106 81v-153q-86-14-143-80.5t-57-156.5v-136q0-26 23-36.5t43 6.5l74 64 69-84q12-14 31-14t31 14l69 84 74-64q20-17 43-6.5t23 36.5v136q0 90-57 156.5t-143 80.5v153q43-51 106-81t134-29v80q0 100-70 170t-170 70z"
          />
        </svg>
      </div>
      <div
        id="tooltip-flower"
        role="tooltip"
        class="inline-block absolute invisible z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg opacity-0 transition-opacity duration-300 shadow-xs tooltip dark:bg-gray-700"
      >
        Flower stage
      </div>
    </li>
    <li
      class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block after:border-zinc-900/30"
    >
      <div
        data-tooltip-target="tooltip-harvest"
        data-tooltip-placement="bottom"
        class="flex justify-center items-center p-2.5 w-10 h-10 rounded-full text-gray-500/20 sm:h-12 sm:w-12 bg-zinc-900/30 shrink-0"
      >
        <svg
          fill="currentColor"
          stroke="none"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m296.625 25.406c-63.794.388-135.81 14.683-206.03 32.844-3.472 34.08 2.226 68.906 14.03 104.25 76.55-86.564 289.025-117.675 382.095-34.5-30.7-77.534-102.674-103.126-190.096-102.594zm-230.97 36.032-37.749 9.562c5.643 78.022 28.546 132.393 60.44 174.47-16.54 10.348-40.693 19.673-68.782 26.843 5.664 6.597 14.25 16.18 30.53 18.53 24.846-4.33 39.912-14.982 53.75-26.593 76.24 85.145 190.22 118.955 253.126 224.22l49.436-.126c-115.41-213.028-325.396-123.54-340.75-426.906z"
          />
        </svg>
      </div>
      <div
        id="tooltip-harvest"
        role="tooltip"
        class="inline-block absolute invisible z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg opacity-0 transition-opacity duration-300 shadow-xs tooltip dark:bg-gray-700"
      >
        Harvested
      </div>
    </li>
    <li class="flex items-center">
      <div
        data-tooltip-target="tooltip-cure"
        data-tooltip-placement="bottom"
        class="flex justify-center items-center p-2.5 w-10 h-10 rounded-full text-gray-500/20 sm:h-12 sm:w-12 bg-zinc-900/30 shrink-0"
      >
        <svg
          fill="currentColor"
          stroke="none"
          viewBox="0 0 382.421 382.422"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m297.209 80.934v-29.574h-213.862v28.365c-22.312 14.323-33.62 37.431-33.62 68.758v145.688c0 58.56 40.534 88.251 120.473 88.251h42.023c79.936 0 120.472-29.691 120.472-88.251v-145.689c0-30.224-11.935-52.922-35.486-67.548zm18.676 213.241c0 48.076-33.905 71.442-103.662 71.442h-42.023c-69.757 0-103.662-23.366-103.662-71.442v-145.686c0-27.115 9.588-45.651 29.311-56.667l4.309-2.405v-21.247h180.242v22.569l4.371 2.394c20.937 11.453 31.114 29.558 31.114 55.35zm-237.787-266.859v-16.109c0-6.186 5.02-11.207 11.206-11.207h203.819c6.187 0 11.206 5.021 11.206 11.207v16.109c0 6.187-5.02 11.207-11.206 11.207h-203.819c-6.191-.001-11.206-5.021-11.206-11.207zm-.354 150.275h226.936v91.051h-226.936z"
          />
        </svg>
      </div>
      <div
        id="tooltip-cure"
        role="tooltip"
        class="inline-block absolute invisible z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg opacity-0 transition-opacity duration-300 shadow-xs tooltip dark:bg-gray-700"
      >
        In storage
      </div>
    </li>
  </ol>
</template>

<script setup>
import sourceSeed from "@/assets/icons/source-seed.svg"
</script>
