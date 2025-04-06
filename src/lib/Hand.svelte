<script lang="ts">
    import Taskbar from "./Taskbar.svelte";
    import { Boost } from "./Boost/Class";
    import { Building } from "./Building/Class";
    import { Worker } from "./Worker/Class";
    import { CpS } from "./CpS";

    export let page: string;
    export let cum: number;
    export let buildings: Building[];
    export let workers: Worker[];
    export let dick: Boost;
    export let hand: Boost;
    export let orgasm: number;
    export let can_orgasm: number;

    function ejaculate() {
        cum += dick.level;
    }

    function buy(boost: Boost) {
        cum -= boost.price;
        boost.level++;
        boost.price += Math.pow(5, boost.rank);
        buildings = buildings;
    }

    function start_orgasm() {
        can_orgasm = 0;
        orgasm = 60;
    }
</script>

<div class="window page">
    <div class="body">
        <div class="cum">
            <div>
                {cum} Cum
                <br />
                {#if orgasm > 0}
                    <span style="color:gold"
                        >{CpS(dick, hand, orgasm, buildings, workers)}/s</span
                    >
                {:else}
                    {CpS(dick, hand, orgasm, buildings, workers)}/s
                {/if}
            </div>
            <div>
                <button class="ejaculate" on:click={ejaculate}>Branler</button>
            </div>
        </div>

        <div class="boost">
            <div>
                {#if cum >= dick.price}
                    <button
                        class="buy"
                        on:click={() => {
                            buy(dick);
                        }}>Acheter ({dick.price})</button
                    >
                {:else}
                    <button class="buy desactivate"
                        >Acheter ({dick.price})</button
                    >
                {/if}
            </div>
            <div class="level">
                Nv {dick.level}
            </div>
            <div class="name">
                {dick.name}
            </div>
        </div>

        <div class="boost">
            <div>
                {#if cum >= hand.price}
                    <button
                        class="buy"
                        on:click={() => {
                            buy(hand);
                        }}>Acheter ({hand.price})</button
                    >
                {:else}
                    <button class="buy desactivate"
                        >Acheter ({hand.price})</button
                    >
                {/if}
            </div>
            <div class="level">
                Nv {hand.level}
            </div>
            <div class="name">
                {hand.name}
            </div>
        </div>

        {#if can_orgasm > 0}
            <button class="orgasm" on:click={start_orgasm}>Orgasme</button>
        {/if}

        {#if orgasm > 0}
            <button class="orgasm" style="color:gold">
                Orgasme en cours !
                <br />
                {orgasm}s restantes
            </button>
        {/if}
    </div>

    <Taskbar bind:page bind:orgasm bind:can_orgasm />
</div>

<style>
    div.cum {
        display: grid;
        text-align: center;

        margin-top: 5vh;
        margin-bottom: 5vh;
    }

    button.ejaculate {
        width: 200px;
        height: 200px;
        max-width: 40vw;
        max-height: 40vw;
    }

    button.orgasm {
        width: 100%;
    }
</style>
