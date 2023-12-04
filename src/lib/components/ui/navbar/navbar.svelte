<script lang="ts">
  import {
    
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from "@rgossiaux/svelte-headlessui";
  import {
    Icon,
    Bars3,
    XMark,
    ArrowLeftCircle,
    ArrowRightCircle,
  } from "svelte-hero-icons";


  //Search Dialog Box

  import SearchBox from "../searchbox/searchbox.svelte";

  // stores


  import StateStore from "./NavbarState";


  // theme-switcher

  import ModeSwitch from "../mode-switch/mode-switch.svelte";
  
  const navigation = [
    { name: "Home", path: "/", current: true },
    { name: "About", path: "/bookmarks", current: false },
    { name: "Adrib Mahmud", path: "/cheatsheets", current: false },
   
  ];

  let NavbarHide: boolean;

  StateStore.subscribe((value) => {
    NavbarHide = value;
  });


</script>

<main>


  <div class="cursor-pointer text-emerald-500 flex items-center">
    {#if NavbarHide}
      <button
        on:click={() => StateStore.set(false)}
        class="w-5 mx-2 sm:inline fixed right-0 top-2 rounded-sm"
      >
        <Icon src={ArrowRightCircle} />
      </button>
    

    {/if}
  </div>



  <Disclosure as="nav" class={NavbarHide ? "hidden" : "fixed z-10 bg-[#ffffff] dark:bg-[#000000] w-full border-b-2 border-neutral-200 md:dark:border-neutral-900 dark:border-neutral-800"} let:open>
    <!-- v-slot="{ open } -->

    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-14 sm:h-16 items-center justify-center">
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md px-1 py-2 text-neutral-400 dark:text-neutral-700 hover:bg-neutral-200 dark:hover:bg-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-300 dark:focus:ring-neutral-800"
          >
            <span class="sr-only">Open main menu</span>
            {#if !open}
              <Icon class="w-6 h-6 mx-2" src={Bars3} />
            {:else}
              <Icon class="w-6 h-6 mx-2" src={XMark} />
            {/if}
          </DisclosureButton>
        </div>

        <div class="absolute inset-y-0 left-0 lg:left-0 ml-1 flex items-center">
          <!-- ============ My logo ============ -->

          <button
            class="pr-2 py-1 nav-item"
            on:click={() => StateStore.set(true)}
            ><span
              ><Icon
                src={ArrowLeftCircle}
                class="w-5 inline text-emerald-500"
              /></span
            ></button
          >

          <b class="text-sm tracking-[1px] font-[Rubik] font-bold text-emerald-500 dark:text-emerald-600"
            >Divinix<b />
          </b>
        </div>

        <div
          class="absolute inset-y-0 left-0 flex items-center ml-3 sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <div class="flex flex-shrink-0 items-center" />
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              {#each navigation as item}
                <a
                  href={item.path}
                  class="px-3 py-1 text-sm font-medium duration-75 ease-out border-b-2 border-b-transparent hover:border-b-2"
                  aria-current={item.current ? "page" : undefined}
                  >{item.name}</a
                >
              {/each}
            </div>
          </div>
        </div>


        <div class="absolute inset-y-0 right-0 hidden sm:flex items-center gap-3">


          <div class="mt-6"><SearchBox/></div>


          
       <div>  <ModeSwitch/>
      </div> 



      
        </div>




      </div>
    </div>

    <!-- ============== Disclosure panel for small screen devices ========== -->

    <DisclosurePanel
      class="sm:hidden mb-3"
    >
    
      <div class="space-y-1 px-2 py-2  flex flex-col">
        <div class="flex flex-col ml-4 gap-1">
          {#each navigation as item}
            <a
              href={item.path}
              class="block px-3 py-2 rounded-md text-sm"
              aria-current={item.current ? "page" : undefined}>{item.name}</a
            >
          {/each}
        </div>

        <div class="flex flex-col w-full">

          
          <!-- search component -->
          <button>
          <SearchBox /> 
        </button>  
        
          <button
            class="flex my-1 w-[90%] dark:bg-neutral-900 dark:sm:bg-[#0a0a0a] bg-neutral-100 mx-auto rounded-md"
          >
            <div class="flex justify-between items-center w-full p-2">
              <span class="text-sm">Interface</span>

<ModeSwitch/>
            </div>
          </button>
        </div>
      </div>
    </DisclosurePanel>

    <!-- ============== Disclosure panel for medium screen devices ========== -->

    <!--  !Not implemented -->


  </Disclosure>
</main>

<style>
  button {
    letter-spacing: 0.25px;
    font-size: 12px;
  }
</style>
