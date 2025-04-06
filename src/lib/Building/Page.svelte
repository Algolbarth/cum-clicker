<script lang="ts">
    import Taskbar from "../Taskbar.svelte";
    import BuildingView from "./View.svelte";
    import { Building } from "./Class";

    export let page: string;
    export let cum: number;
    export let buildings: Building[];
</script>

<div class="window page">
    <div class="body">
        {#each buildings as building, index}
            <BuildingView bind:cum bind:building bind:buildings {index} />
        {/each}
    </div>

    <Taskbar bind:page />
</div>
