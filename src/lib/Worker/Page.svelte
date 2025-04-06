<script lang="ts">
    import Taskbar from "../Taskbar.svelte";
    import WorkerView from "./View.svelte";
    import { Worker } from "./Class";

    export let page: string;
    export let cum: number;
    export let workers: Worker[];
</script>

<div class="window page">
    <div class="body">
        {#each workers as worker, index}
            <WorkerView bind:cum bind:worker bind:workers {index} />
        {/each}
    </div>

    <Taskbar bind:page />
</div>
