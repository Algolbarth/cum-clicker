<script lang="ts">
    import type { Boost } from "./boosts/class";
    import type { Building } from "./boosts/building/class";
    import { CpS } from "./cps";
    import type { Worker } from "./boosts/worker/class";
    import type { Skill } from "./skills/class";

    export let cum: number;
    export let dick: Boost;
    export let hand: Boost;
    export let orgasm: number;
    export let big_orgasm: number;
    export let buildings: Building[];
    export let workers: Worker[];
    export let excitement: number;
    export let skills: Skill[];
</script>

<div class="body infobar">
    {cum} Cum

    <br />

    {#if big_orgasm > 0}
        <span style="color:goldenrod">{CpS(dick, hand, orgasm, big_orgasm, excitement, buildings, workers, skills)}/s</span>
    {:else if orgasm > 0}
        <span style="color:gold">{CpS(dick, hand, orgasm, big_orgasm, excitement, buildings, workers, skills)}/s</span>
    {:else}
        {CpS(dick, hand, orgasm, big_orgasm, excitement, buildings, workers, skills)}/s
    {/if}
</div>

<style>
    div.infobar {
        text-align: center;
    }
</style>
