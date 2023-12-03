<script lang="ts">
    import Button from "../button/button.svelte";
    import { Moon } from "radix-icons-svelte";
    import { SunDim } from "lucide-svelte";

    import { toggleMode } from "mode-watcher";
</script>

<Button on:click={toggleMode} variant="outline" size="icon">
    <SunDim
        class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-neutral-500"
    />
    <Moon
        class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-neutral-600"
    />
    <span class="sr-only">Toggle theme</span>
</Button>
