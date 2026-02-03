<script lang="ts">
    import Taskbar from "../Taskbar.svelte";
    
    export let page: string;
    export let skill: number;
    export let orgasm: number;
    export let can_orgasm: number;
</script>

<div class="window page">
    <div class="body">
        {skill} Points de compétence
    </div>

    <Taskbar bind:page bind:orgasm bind:can_orgasm />
</div>
