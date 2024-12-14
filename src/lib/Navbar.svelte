<script lang="ts">
    import Fa from "svelte-fa";
    import Button from "./util/Button.svelte";
    import { faBars, faFileDownload } from "@fortawesome/free-solid-svg-icons";
    
    const SMALL_VP = 768;

    const links: { [index: string]: string } = {
        "About": "#about",
        "Skills": "#skills",
        "Projects": "#projects",
        "Contact": "#contact",
    };

    let screenWidth = $state(window.innerWidth);
    let showNavLinks = $state(false);

    $effect(() => {
        const resize = () => {
            if (window.innerWidth > SMALL_VP && screenWidth <= SMALL_VP)
                showNavLinks = false;

            screenWidth = window.innerWidth;;
        };

        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
        }
    });

</script>

<nav class="absolute w-full py-5 flex *:w-full justify-center items-center z-50 bg-white xl:px-[5rem] px-[1rem] ">
    <div class="flex items-center font-extrabold">
        <img src="/logo.png" alt="" width="40px" height="40px" fetchpriority="high"/>
        <div class="w-fit cursor-pointer transform translate-x-[-9px]">akshit</div>
    </div>
    {#if screenWidth > SMALL_VP}
        <div class="flex justify-center lg:gap-[2.5rem] min-w-[500px] md:gap-[1.5rem] *:font-[600] *:cursor-pointer">
            {@render navlinks()}
        </div>
 
        <div class="flex justify-end">
            <Button text={"Resume"} icon={faFileDownload} link="/resume.pdf" />
        </div>
    
    {:else}
        <div class="flex justify-end">
            <button class="mr-2.5" onclick={() => showNavLinks = !showNavLinks}>
                <Fa class="cursor-pointer" icon={faBars} size={"lg"}/>
            </button>
        </div>
    {/if}
</nav>

{#if screenWidth <= SMALL_VP}
    <div class={
        "absolute z-40 flex flex-col border justify-center items-center gap-3 p-2.5 bg-black text-white w-full rounded-es-2xl rounded-ee-2xl transform " +
            (showNavLinks ? "translate-y-[41%]" : "translate-y-[-200%]") + 
            " transition-transform ease-in-out"
    }>
        <div class="*:font-[600] *:cursor-pointer *:text-center flex flex-col gap-1">
            {@render navlinks()}
        </div>
        <div>
            <Button text="Resume" icon={faFileDownload} link="/resume.pdf" invert />
        </div>
    </div>
{/if}

{#snippet navlinks()}
    {#each Object.keys(links) as link}
        <a href={links[link]}> {link} </a>
    {/each}
{/snippet}
