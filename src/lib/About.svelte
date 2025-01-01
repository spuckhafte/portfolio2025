<script lang="ts">
    import { faDiscord, faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
    import Button from "./util/Button.svelte";
    import { innerWidth } from "svelte/reactivity/window";
    import { onMount } from "svelte";
    import { MID_BP } from "./util/helpers.js";

    const MEDIUM_BP = MID_BP;
    const TOP_OFFSET = 130;

    const socialMediaLinks = [
        { icon: faGithub, link: "https://github.com/spuckhafte" },
        { icon: faLinkedin, link: "https://linkedin.com/in/rakshitj" },
        { icon: faTwitter, link: "https://x.com/spuckhafte" },
        { icon: faDiscord, link: "https://discord.com/users/856184519442694154" },
    ]

    let main: HTMLElement = $state(null!);
    let maxChildHeight = $state(-1);
    let maxChildHeight2 = $state(-1);

    $effect(() => {
        if (main) {
            if ((innerWidth.current ?? 0) >= MEDIUM_BP)
                main.style.height = `${maxChildHeight + TOP_OFFSET}px`;
            else main.style.height = `${maxChildHeight + maxChildHeight2}px`;
        }
    });

    onMount(() => {

        const skillsContainer = document.querySelector(".skills-container");
        const skills = skillsContainer?.querySelectorAll("span");
        if (!skills) return;

        let allIndices: number[] = Array.from({ length: skills.length }, (_, i) => i);
        let lastIndex = -1;

        setInterval(() => {
            if (allIndices.length === 0)
                allIndices = Array.from({ length: skills.length }, (_, i) => i);

            let index = Math.floor(Math.random() * allIndices.length);
            const selectedIndex = allIndices[index];
    
            allIndices.splice(index, 1);
    
            if (lastIndex !== -1)
                skills[lastIndex].classList.remove("skills-color");
    
            skills[selectedIndex].classList.add("skills-color");
            lastIndex = selectedIndex;
        }, 500);
    });

</script>
<main id="about" class="relative xl:px-[5rem] px-[1rem]" bind:this={main}>
    {#if (innerWidth.current ?? 0) < MEDIUM_BP}
        <div 
            class="flex justify-center pb-6 pt-[96px]"
            bind:clientHeight={maxChildHeight} 
        >
            <img src="/banner-sm.svg" alt="banner"/>
        </div>
    {/if}

    <div 
        class="md:absolute flex flex-col md:h-full lg:w-[45%] md:w-[50%] sm:w-[80%] z-20 md:pr-[0rem] pr-[0.5rem]"
        bind:clientHeight={maxChildHeight2}
    >
        <div class="lg:text-4xl text-2xl sm:h-full h-fit flex items-end">
            <span>Hello I am <b>Rakshit</b>.<br>
            <b>Fullstack</b> Developer<br>
            Based in <b>India</b>.</span>
        </div>
        <div class="text-xs text-gray-400 font-[550] h-full lg:pt-7 pt-3 ">
            <div class="skills-container cursor-default">
                Fluent in <span class="skills">TypeScript</span> and <span class="skills">Python</span>, I am learning <span class="skills">C++</span> and <span class="skills">Rust</span> while exploring low-level programming and algorithms. My expertise includes frameworks like <span class="skills">React</span>, <span class="skills">Next.js</span>, <span class="skills">Svelte</span>, <span class="skills">Node.js</span>, and <span class="skills">Socket.io</span>. I can also work with <span class="skills">Flask</span> and machine learning tools like <span class="skills">NumPy</span> and <span class="skills">Scikit</span>. Skilled in <span class="skills">SQL</span> and <span class="skills">NoSQL</span> databases, including <span class="skills">MongoDB</span> and <span class="skills">MySQL</span> with <span class="skills">Prisma</span>, I also use <span class="skills">Redis</span> for caching. Beyond tech, I am passionate about <span class="skills">Music Production</span> and <span class="skills">Victorian-era Literature</span>.
            </div>
        </div>
        <div class="flex gap-4 transform translate-y-[50%]">
            {#each socialMediaLinks as link }
                <Button icon={link.icon} link={link.link} square />
            {/each}
        </div>
    </div>

    {#if (innerWidth.current ?? 0) >= MEDIUM_BP}
        <div 
            bind:clientHeight={maxChildHeight} 
            class="absolute flex justify-end w-[70%] left-[100%] transform translate-x-[-100%] mt-[130px]"
        >
            <img src="/Banner.svg" alt="banner"/>
        </div>
    {/if}
</main>
