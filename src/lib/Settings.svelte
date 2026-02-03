<script lang="ts">
    import Taskbar from "./Taskbar.svelte";
    
    export let page: string;
    export let orgasm: number;
    export let can_orgasm: number;
</script>

<div class="window page">
    <div class="body">
        Options
    </div>

    <Taskbar bind:page bind:orgasm bind:can_orgasm />
</div>