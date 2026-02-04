<script lang="ts">
    import type { Boost } from "./Boost/Class";
    import type { Building } from "./Building/Class";
    import { CpS } from "./CpS";
    import type { Worker } from "./Worker/Class";

    export let cum: number;
    export let dick: Boost;
    export let hand: Boost;
    export let orgasm: number;
    export let big_orgasm: number;
    export let buildings: Building[];
    export let workers: Worker[];
    export let excitement: number;
</script>

<div class="body infobar">
    {cum} Cum

    <br />

    {#if orgasm > 0}
        <span style="color:gold">{CpS(dick, hand, orgasm, big_orgasm, excitement, buildings, workers)}/s</span>
    {:else}
        {CpS(dick, hand, orgasm, big_orgasm, excitement, buildings, workers)}/s
    {/if}
</div>

<style>
    div.infobar {
        text-align: center;
    }
</style>
