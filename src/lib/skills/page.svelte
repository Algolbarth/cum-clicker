<script lang="ts">
    import SkillView from "./view.svelte";
    import type { Boost } from "$lib/boosts/class";
    import type { Building } from "$lib/boosts/building/class";
    import type { Worker } from "$lib/boosts/worker/class";
    import type { Skill } from "./class";
    import { printNumber } from "$lib/print-number";

    export let skills: Skill[];
    export let skill_point: number;
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
        skill_point += gain_xp();
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
        dick.level = 1;
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
            Gagner {printNumber(gain_xp())} niveau{#if gain_xp() > 1}x{/if}
        </button>

        <span style="color:red">ATTENTION : Monter de niveau réinitialise votre progression !</span>
    {:else}
        Encore {printNumber(1000000 - cum)} Cum pour gagner un niveau
    {/if}

    <br />
    <br />

    {printNumber(skill_point)} Point{#if skill_point > 1}s{/if} de compétence

    <br />
    <br />
    <hr />
    <br />

    {#each skills as skill}
        <SkillView bind:skill_point bind:skill bind:skills />
    {/each}
</div>

<style>
    hr {
        color: white;
    }
</style>
