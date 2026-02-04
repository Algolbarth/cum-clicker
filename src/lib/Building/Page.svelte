<script lang="ts">
    import BuildingView from "./View.svelte";
    import { Building } from "./Class";

    export let cum: number;
    export let buildings: Building[];
</script>

<div class="body">
    {#each buildings as building, index}
        <BuildingView bind:cum bind:building bind:buildings {index} />
    {/each}
</div>
