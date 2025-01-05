<script lang="ts">
    import Button from "./util/Button.svelte";


    function handleFormSubmit(e: SubmitEvent) {
        console.log(e);
        e.preventDefault();
    }
</script>

<main class={
    "flex flex-col px-[1rem] md:px-[2.5rem] xl:px-[5rem] py-10 pt-10 bg-gradient-to-br from-black to-black/85 text-white"
}>
    <div class="text-center text-xl pb-10"><b>Contact</b> Me</div>
    <div class="flex flex-col gap-8 sm:flex-row sm:justify-between sm:gap-10 sm:items-center lg:gap-20 xl:gap-24">
        <div class="w-full">
            <form class="flex flex-col gap-3" id="user-msg" onsubmit={handleFormSubmit}>
                <div>
                    {@render Input("Name")}
                </div>
                <div>
                    {@render Input("Email")}
                </div>    
                <div>
                    {@render Input("Website*")}
                </div>
                <div>
                    <textarea 
                        class={`
                            outline-none border-[1.5px] border-gray-300 focus:border-white 
                            transition-colors duration-200 bg-black text-white rounded-sm text-xs 
                            w-full h-20 px-4 py-2 resize-none
                        `}
                        placeholder="Message" 
                        autocomplete="off"
                    ></textarea>
                </div>
                <div>
                    <Button className="text-sm px-[0.8rem]" lessRounded invert text="Get In Touch"/>
                </div>
            </form>
        </div>
        <div class="w-full flex flex-col gap-5 sm:pb-14">
            <div class="text-3xl font-bold">
                Let's talk for Something special
            </div>
            <div class="text-lg font-[500]">
                rakshit240405@gmail.com<br>
                +91 827388 5676
            </div>
        </div>
    </div>
</main>

{#snippet Input(placeholder:string)}
    <input 
        class={`
            outline-none border-[1.5px] border-gray-300 focus:border-white transition-colors 
            duration-200 bg-black text-white rounded-sm text-xs w-full px-4 py-2
        `}
        placeholder={placeholder} 
        autocomplete="off" 
    />
{/snippet}
