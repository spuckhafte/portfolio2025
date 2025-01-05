<script lang="ts">
    import Fa from "svelte-fa";
    import Button from "./util/Button.svelte";
    import { faBars, faFileDownload } from "@fortawesome/free-solid-svg-icons";
    import { MID_BP } from "./util/helpers.js";
    
    const MEDIUM_BP = MID_BP;

    const links: { [index: string]: string } = {
        "About": "#about",
        "Experience": "#experience",
        "Projects": "#projects",
        "Contact": "#contact",
    };

    let screenWidth = $state(window.innerWidth);
    let showNavLinks = $state(false);

    $effect(() => {
        const resize = () => {
            if (window.innerWidth > MEDIUM_BP && screenWidth <= MEDIUM_BP)
                showNavLinks = false;

            screenWidth = window.innerWidth;;
        };

        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
        }
    });

    function handleLinkClick() {
        if (showNavLinks) 
            showNavLinks = false;
    }

</script>

<nav class="absolute w-full py-5 flex *:w-full justify-center items-center z-50 bg-white xl:px-[5rem] px-[1rem] shadow-lg">
    
    <div class="flex items-center font-extrabold">
        <img src="/logo.png" alt="" width="40px" height="40px" fetchpriority="high"/>
        <div class="w-fit cursor-pointer transform translate-x-[-9px]">akshit</div>
    </div>
    {#if screenWidth > MEDIUM_BP}
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

{#if screenWidth <= MEDIUM_BP}
    <div class={
        `absolute z-40 flex backdrop-blur-2xl bg-gradient-to-r from-white/80 to-white/30 
        flex-col justify-center items-center gap-3 p-2.5 w-full rounded-es-lg rounded-ee-lg 
        transform text-black shadow-lg ` 
            + (showNavLinks ? "translate-y-[29.5%]" : "translate-y-[-100%]") 
            + " transition-transform ease-in-out duration-300"
    }>
        
        <div class="*:font-[600] *:cursor-pointer *:text-center flex flex-col gap-3 py-3">
            {@render navlinks()}
        </div>
        <div class="pb-3">
            <Button text="Resume" icon={faFileDownload} link="/resume.pdf" />
        </div>
    </div>
{/if}

{#snippet navlinks()}
    {#each Object.keys(links) as link}
        <a onclick={handleLinkClick} href={links[link]}> {link} </a>
    {/each}
{/snippet}
