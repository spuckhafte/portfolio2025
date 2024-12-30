<script lang="ts">
    type XpCardProps = {
        title: string;
        date: string;
        description: string;
    }
    const { title, date, description }: XpCardProps = $props();

</script>

<main class="flex flex-col border border-gray-500 rounded-lg py-5 px-3 gap-3 ">
    <div class="flex flex-col gap-2 md:flex-row *:md:w-full">
        <div class="font-bold">{title}</div>
        <div class="font-bold text-xs text-gray-400 md:text-end">{date}</div>
    </div>
    <div class="font-[500] text-xs text-gray-400">{description}</div>
</main>
