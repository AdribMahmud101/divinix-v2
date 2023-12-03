<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import * as Dialog from "$lib/components/ui/dialog";
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";

    import { Search } from "lucide-svelte";

    import SearchboxSmallerScreen from "./searchbox-smaller-screen.svelte";

    import { Icon, MagnifyingGlass } from "svelte-hero-icons";

</script>

<Dialog.Root>
    <div class="sm:flex items-center hidden">
        <Dialog.Trigger>
            <Search class="h-9 w-9 p-2 rounded-md text-neutral-600 border" />
        </Dialog.Trigger>
    </div>



    <Dialog.Content class="sm:max-w-[700px] mx-2 h-[70%]">
        <Dialog.Header>
            <div class="flex flex-col gap-10">
                <Dialog.Title> <span class="text-emerald-500"> Search documents </span></Dialog.Title>
                <Input class='dark:focus:ring-emerald-500 focus:ring-emerald-500 focus:border-emerald-500  py-6' id="search" placeholder="search here" />
            </div>

        </Dialog.Header>
        <div class=""> 
            <div class="">
                
                
            </div>

        </div>

    </Dialog.Content>
</Dialog.Root>


<SearchboxSmallerScreen/>