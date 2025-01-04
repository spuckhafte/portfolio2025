<script>
    import ProjectCard from "./util/ProjectCard.svelte";
    import { Projects } from "./util/helpers";
</script>

<main class="mt-8 py-5 md:pb-10 px-[1rem] xl:px-[5rem]" id="projects">
    <div class="text-center text-xl pb-8">My <b>Projects</b></div>
    <div class="flex flex-col gap-10 sm:gap-14 [&>*]:flex-col sm:[&>*:nth-child(odd)]:flex-row sm:[&>*:nth-child(even)]:flex-row-reverse">
        {#each Projects as project}
            <ProjectCard {...project} />
        {/each}
    </div>
</main>
