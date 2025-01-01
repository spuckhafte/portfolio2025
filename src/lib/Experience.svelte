<script lang="ts">
    import type { Action } from "svelte/action";
    import { Xps } from "./util/helpers";
    import XpCard from "./util/XpCard.svelte";

    const xpCardData = Xps;

</script>

<main class="mt-20 py-5 md:pb-10 px-[1rem] md:px-[2.5rem] xl:px-[7rem] border bg-black text-white" id="experience">
    <div>
        <div class="text-center text-xl py-5">My <b>Experience</b></div>
        <div class="flex flex-col gap-4 py-4">
            {#each xpCardData as xpData }
                <XpCard {...xpData} />
            {/each}
        </div>
    </div>
</main>
