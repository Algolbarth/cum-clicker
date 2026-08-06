<script lang="ts">
    import WorkerView from "./view.svelte";
    import { Worker } from "./class";

    export let cum: number;
    export let lot: string;
    export let workers: Worker[];
</script>

<div class="body">
    {#each workers as worker, index}
        <WorkerView bind:cum bind:lot bind:worker bind:workers {index} />
    {/each}
</div>
