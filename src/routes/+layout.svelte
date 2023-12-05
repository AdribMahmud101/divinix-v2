
  
  <script lang="ts">
  import { ModeWatcher } from "mode-watcher";
  import Navbar from "$lib/components/ui/navbar/navbar.svelte";
  import Footer from "$lib/components/ui/footer/footer.svelte";
  import "../app.pcss";

</script>
<ModeWatcher />
<Navbar/>
<slot />
<Footer/>

