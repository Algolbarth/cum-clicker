<script lang="ts">
    import WorkerView from "./View.svelte";
    import { Worker } from "./Class";

    export let cum: number;
    export let workers: Worker[];
</script>

<div class="body">
    {#each workers as worker, index}
        <WorkerView bind:cum bind:worker bind:workers {index} />
    {/each}
</div>
