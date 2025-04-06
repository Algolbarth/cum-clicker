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

    function ejaculate() {
        cum += dick.level;
    }

    function buy(boost: Boost) {
        cum -= boost.price;
        boost.level++;
        boost.price += Math.pow(5, boost.rank);
        buildings = buildings;
    }
</script>

<div class="window page">
    <div class="body">
        <div class="cum">
            <div>
                {cum} Cum
                <br />
                {CpS(dick, hand, buildings, workers)}/s
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
    </div>

    <Taskbar bind:page />
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
</style>
