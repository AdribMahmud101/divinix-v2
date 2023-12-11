<script lang="ts">
  import {invoke} from "@tauri-apps/api"
  import { Button } from "$lib/components/ui/button";
  import { mode } from "mode-watcher";
  import logo_dark from "$lib/assets/logo-dark.svg";
  import logo_light from "$lib/assets/logo-white.svg";

 
  </script>


<main>
  <div class="flex h-[90vh] sm:min-h-[90vh] justify-center items-center">
    <div
      class="flex flex-col justify-center items-center sm:grid grid-cols-2 gap-10 sm:gap-12 md:gap-5 lg:gap-32 sm:mx-14"
    >
      {#if $mode == "dark"}
        <div class="invert dark:invert-10 sm:dark:invert-0">
          <img class="logo" alt="Dire" src={logo_dark} />
        </div>
      {:else if $mode == 'light'}
        <div class=""><img class="logo" alt="Dire" src={logo_light} /></div>
      {/if}
      <div
        class="flex flex-col gap-5 sm:gap-7 lg:gap-8 justify-center items-center sm:justify-start sm:items-start md:items-baseline"
      >
        <p class="divinix">Divinix</p>
        <p class="font-[Rubik] text-sm sm:text-medium">
          Knowledge is the weapon of choice to conquer <span class="sm:hidden"
            ><br /></span
          > - Adrib Mahmud
        </p>

        <a href="subjects"> <Button variant="outline">Get Started</Button></a>


      </div>
    </div>
  </div>
</main>
