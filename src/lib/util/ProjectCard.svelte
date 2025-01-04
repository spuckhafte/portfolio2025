<script lang="ts">
    import { faGithub } from "@fortawesome/free-brands-svg-icons";
    import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";

    type ProjectCardProps = {
        serial: string
        banner: string
        title: string
        description: string
        tech: string[]
        link: string | null
        github: string
    }

    const { 
        serial, banner, title, description, 
        tech, link, github 
    }: ProjectCardProps = $props();
</script>

<main class="flex gap-3 sm:gap-10 md:items-center">
    <div class={`
        max-w-[350px] relative left-1/2 transform translate-x-[-50%] sm:left-0 sm:transform-none
        sm:flex-[1]
    `}>
        <img class="rounded-lg w-fit aspect-square" src={banner} alt={title} />
    </div>
    <div class="flex flex-col gap-3 sm:flex-[1.5] sm:gap-1">
        <div class="text-lg font-bold sm:text-2xl">{serial}</div>
        <div class="font-bold">{title}</div>
        <div class="text-xs text-gray-500 font-[500] sm:py-2">{description}</div>
        <div class="flex flex-wrap gap-[0.4rem] cursor-default sm:pb-2">
            {#each tech as t}
                <span class="bg-gradient-to-r from-gray-300 to-gray-300/90 shadow border border-gray-300 text-black text-xs font-[600] px-[0.6rem] py-1 rounded-md sm:hover:transform sm:hover:translate-y-[-0.15rem] sm:transition-transform">{t}</span>
            {/each}
        </div>
        <div class="flex gap-4">
            {#if link}
                <a href={link} target="_blank"><Fa icon={faExternalLink} class="text-lg" /></a>
            {/if}
            <a href={github} target="_blank"><Fa icon={faGithub} class="text-lg" /></a>
        </div>
    </div>
</main>

