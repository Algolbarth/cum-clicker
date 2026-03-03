<script lang="ts">
    import type { Boost } from "$lib/boost/class";
    import type { Building } from "$lib/building/class";
    import type { Worker } from "$lib/worker/class";

    export let skill: number;
    export let cum: number;
    export let dick: Boost;
    export let hand: Boost;
    export let buildings: Building[];
    export let workers: Worker[];
    export let orgasm: number;
    export let big_orgasm: number;
    export let can_orgasm: number;
    export let excitement: number;

    function level_up() {
        skill += gain_xp();
        reset();
    }

    function gain_xp() {
        let total: number = 0;

        for (let i = cum.toString().length; i > 6; i--) {
            total += parseInt(cum.toString()[cum.toString().length - i]) * Math.pow(2, i - 7);
        }

        return total;
    }

    function reset() {
        cum = 0;

        orgasm = 0;
        big_orgasm = 0;
        can_orgasm = 0;

        excitement = 0;

        dick.reset();
        hand.reset();

        for (const worker of workers) {
            worker.reset();
        }

        for (const building of buildings) {
            building.reset();
        }
    }
</script>

<div class="body">
    {#if cum >= 1000000}
        <button on:click={level_up}>
            Gagner {gain_xp()} niveau{#if gain_xp() > 1}x{/if}
        </button>

        <span style="color:red">ATTENTION : Monter de niveau réinitialise votre progression !</span>
    {:else}
        Encore {1000000 - cum} Cum pour gagner un niveau
    {/if}

    <br />
    <br />

    {skill} Point{#if skill > 1}s{/if} de compétence
</div>
