<script lang="ts">
    import {
  Icon,
  MagnifyingGlass,
  Microphone,
} from "svelte-hero-icons";

export let placeholder:string;
</script>


<main>
    <form class="flex items-center">
        <label for="voice-search" class="sr-only">Search</label>
        <div class="relative w-full">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <Icon
              src={MagnifyingGlass}
              class="w-5 text-neutral-400 dark:text-neutral-700"
            />
          </div>
          <input
            type="text"
            id="voice-search"
            class="bg-gray-50 border border-gray-300 truncate text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-400 block w-full pl-10 p-2.5 dark:bg-[#141414] dark:border-neutral-800 dark:placeholder-neutral-700 dark:text-neutral-500 dark:focus:ring-green-500 dark:focus:border-green-500"
            placeholder="{placeholder}"
            required
          />
          <button
            type="button"
            class="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            <Icon
              src={Microphone}
              class="w-5 text-neutral-400 dark:text-neutral-700"
              solid
            />
          </button>
        </div>
      </form>
  </main>