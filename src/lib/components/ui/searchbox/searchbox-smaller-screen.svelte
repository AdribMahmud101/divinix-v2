<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import * as Dialog from "$lib/components/ui/dialog";
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";

    import { Search } from "lucide-svelte";

    import { Icon, MagnifyingGlass } from "svelte-hero-icons";
</script>

<Dialog.Root>
    <div class="">
        <Dialog.Trigger class='w-full'>
            <button
                class="flex w-[90%] mb-2 dark:bg-neutral-900 dark:sm:bg-[#0a0a0a] bg-neutral-100 mx-auto sm:mx-1 sm:mb-0 rounded-md"
            >
                <div
                    class="flex sm:hidden items-center justify-between w-full p-2"
                >
                    <span class="text-sm">Search</span>

                    <Icon
                        src={MagnifyingGlass}
                        class="w-9 p-2 text-neutral-500 border border-neutral-300 dark:border-neutral-800 rounded-md dark:text-neutral-600"
                    />
                </div>
            </button>
        </Dialog.Trigger>
    </div>
    <Dialog.Content class="sm:max-w-[700px] max-h-[50rem] w-[85%] h-[90%]">
        <Dialog.Header>
            <div class="flex flex-col gap-10">
                <Dialog.Title> <span class="text-emerald-500"> Search documents </span></Dialog.Title>
                <Input class='dark:focus:ring-emerald-500 focus:ring-none py-6 focus:border-emerald-500 ' id="search" placeholder="search here" />
            </div>

        </Dialog.Header>
        <div class=""> 
            <div class="">
                
                
            </div>

        </div>

    </Dialog.Content>
</Dialog.Root>
