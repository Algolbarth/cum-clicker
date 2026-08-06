<script lang="ts">
    import { printNumber } from "$lib/print-number";
    import { Worker } from "./class";

    export let cum: number;
    export let lot: string;
    export let worker: Worker;
    export let workers: Worker[];
    export let index: number;
</script>

{#if index == 0 || workers[index - 1].level >= 10}
    <div class="boost">
        <div>
            {#if worker.canBuy(cum, lot)}
                <button
                    class="buy"
                    on:click={() => {
                        worker.buy(cum, lot);
                        workers = workers;
                    }}
                >
                    Acheter ({printNumber(worker.price(cum, lot))})
                </button>
            {:else}
                <button class="buy desactivate">Acheter ({printNumber(worker.price(cum, lot))})</button>
            {/if}
        </div>

        <div class="level">
            Nv {printNumber(worker.level)}
        </div>

        <div class="center">
            {worker.name}
        </div>

        <div class="center">
            {printNumber(worker.CpS())}/s
        </div>
    </div>
{/if}

<style>
    button.buy {
        width: 100%;
    }
</style>
