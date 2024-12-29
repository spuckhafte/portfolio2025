<script lang="ts">
    import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";

    interface Props {
        text?: string
        icon?: IconDefinition
        link?: string
        invert?: boolean
        square?: boolean
        className?: string
    };

    let { text, icon, link, invert, square, className }: Props = $props();
</script>

<button class={`font-[600] ${ invert ? "bg-white text-black" : "bg-black text-white" } rounded-md`}>
    {#snippet content()}
        {#if text}
            <div>{ text }</div>
        {/if}

        {#if icon}
            <Fa icon={icon} class="rounded-full "/>
        {/if}
    {/snippet}
    
    {#if link}
        <a href={link} class={
            "flex justify-center items-center gap-2 w-full h-full " + 
            (square ? "p-3 aspect-square" : "py-2 px-5") + " "
            + className
        }>
            {@render content()}
        </a>
    {:else}
        <div class={
            "flex justify-center items-center gap-2 w-full h-full " + 
            (square ? "p-3 aspect-square" : "py-2 px-5") + " " 
            + className}
        >
            {@render content()}
        </div>
    {/if}
</button>
