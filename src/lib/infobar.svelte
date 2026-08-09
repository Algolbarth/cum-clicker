<script lang="ts">
    import type { Boost } from "./boosts/class";
    import type { Building } from "./boosts/building/class";
    import { CpS } from "./cps";
    import type { Worker } from "./boosts/worker/class";
    import type { Skill } from "./skills/class";
    import { printNumber } from "./print-number";

    export let cum: number;
    export let lot: string;
    export let dick: Boost;
    export let hand: Boost;
    export let orgasm: number;
    export let big_orgasm: number;
    export let buildings: Building[];
    export let workers: Worker[];
    export let excitement: number;
    export let skills: Skill[];

    let lots: string[] = ["1", "10", "100", "Max"];
</script>

<div class="body infobar">
    <div></div>

    <div>
        {printNumber(cum)} Cum

        <br />

        {#if big_orgasm > 0}
            <span style="color:goldenrod">{printNumber(CpS(dick, hand, orgasm, big_orgasm, excitement, buildings, workers, skills))}/s</span>
        {:else if orgasm > 0}
            <span style="color:gold">{printNumber(CpS(dick, hand, orgasm, big_orgasm, excitement, buildings, workers, skills))}/s</span>
        {:else}
            {printNumber(CpS(dick, hand, orgasm, big_orgasm, excitement, buildings, workers, skills))}/s
        {/if}
    </div>

    <div style="display:grid;align-items:center;text-align:right;">
        <div>
            {#each lots as l}
                <button
                    class={"lot " + (l == lot ? "active" : "")}
                    on:click={() => {
                        lot = l;
                    }}
                >
                    {l}
                </button>
            {/each}
        </div>
    </div>
</div>

<style>
    div.infobar {
        text-align: center;
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        border: solid;
        border-width: 0 0 1px 0;
    }

    button.lot {
        margin-left: 8px;
    }

    button.active {
        border-color: gold;
        color: gold;
    }
</style>
