<script lang="ts">
    import { faDiscord, faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
    import Button from "./util/Button.svelte";
    import { innerWidth } from "svelte/reactivity/window";

    const socialMediaLinks = [
        { icon: faGithub, link: "https://github.com/spuckhafte" },
        { icon: faLinkedin, link: "https://linkedin.com/in/rakshitj" },
        { icon: faTwitter, link: "https://x.com/spuckhafte" },
        { icon: faDiscord, link: "https://discord.com/users/856184519442694154" },
    ]

    let main: HTMLElement = $state(null!);
    let maxChildHeight = $state(-1);

    $effect(() => {
        if (main) {
            main.style.height = `${maxChildHeight}px`;
        }
    });

</script>
<main id="about" class="relative pt-24 xl:px-[5rem] px-[1rem]" bind:this={main}>
    <div class="absolute flex flex-col md:h-full lg:w-[45%] md:w-[50%] sm:w-[80%] z-20 md:pr-[0rem] pr-[0.5rem]">
        <div class="lg:text-4xl text-2xl sm:h-full h-fit flex items-end">
            <span>Hello I'am <b>Rakshit</b>.<br>
            <b>Fullstack</b> Developer<br>
            Based in <b>India</b></span>
        </div>
        <div class="text-xs text-gray-400 font-[550] h-full lg:pt-7 pt-3 ">
            Fluent in Typescript, learning C and Gleam... "meh" in Python. I can develop beautiful frontends and efficient backends by utilizing modern technologies. Currently diving into systems programming and music production!        
        </div>
        <div class="flex gap-4 transform translate-y-[50%]">
            {#each socialMediaLinks as link }
                <Button icon={link.icon} link={link.link} square />
            {/each}
        </div>
    </div>

    {#if (innerWidth.current ?? 0) > 768}
        <div 
            bind:clientHeight={maxChildHeight} 
            class="absolute flex justify-end w-[70%] left-[100%] transform translate-x-[-100%]"
        >
            <img src="/Banner.svg" alt="banner"/>
        </div>
    {/if}
</main>
