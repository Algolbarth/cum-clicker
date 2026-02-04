<script lang="ts">
    import { Worker } from "./Class";

    export let cum: number;
    export let worker: Worker;
    export let workers: Worker[];
    export let index: number;

    function buy(worker: Worker) {
        cum -= worker.price;
        worker.level++;
        worker.price += Math.pow(5, worker.rank);
    }
</script>

{#if index == 0 || workers[index - 1].level >= 10}
    <div class="boost">
        <div>
            {#if cum >= worker.price}
                <button
                    class="buy"
                    on:click={() => {
                        buy(worker);
                        workers = workers;
                    }}
                >
                    Acheter ({worker.price})
                </button>
            {:else}
                <button class="buy desactivate">Acheter ({worker.price})</button>
            {/if}
        </div>

        <div class="level">
            Nv {worker.level}
        </div>

        <div class="center">
            {worker.name}
        </div>

        <div class="center">
            {worker.CpS()}/s
        </div>
    </div>
{/if}
