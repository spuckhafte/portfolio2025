<script lang="ts">
    import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";

    interface Props {
        text?: string
        icon?: IconDefinition
        link?: string
        invert?: boolean
    };

    let { text, icon, link, invert }: Props = $props();
</script>

<button class={`font-[600] ${ invert ? "bg-white text-black" : "bg-black text-white" } rounded-md`}>
    {#snippet content()}
        {#if text}
            <div>{ text }</div>
        {/if}

        {#if icon}
            <Fa icon={icon} />
        {/if}
    {/snippet}
    
    {#if link}
        <a href={link} class="flex justify-center items-center gap-2 w-full h-full py-2 px-5">
            {@render content()}
        </a>
    {:else}
        <div class="flex justify-center items-center gap-2 w-full h-full py-2 px-5">
            {@render content()}
        </div>
    {/if}
</button>
