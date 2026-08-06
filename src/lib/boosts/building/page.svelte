<script lang="ts">
    import BuildingView from "./view.svelte";
    import { Building } from "./class";

    export let cum: number;
    export let lot: string;
    export let buildings: Building[];
</script>

<div class="body">
    {#each buildings as building, index}
        <BuildingView bind:cum bind:lot bind:building bind:buildings {index} />
    {/each}
</div>
