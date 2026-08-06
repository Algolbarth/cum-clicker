<script lang="ts">
    import { printNumber } from "$lib/print-number";
    import { Building } from "./class";

    export let cum: number;
    export let lot: string;
    export let building: Building;
    export let buildings: Building[];
    export let index: number;
</script>

{#if index == 0 || buildings[index - 1].level >= 10}
    <div class="boost">
        <div>
            {#if building.canBuy(cum, lot)}
                <button
                    class="buy"
                    on:click={() => {
                        building.buy(cum, lot);
                        buildings = buildings;
                    }}
                >
                    Acheter ({printNumber(building.price(cum, lot))})
                </button>
            {:else}
                <button class="buy desactivate">Acheter ({printNumber(building.price(cum, lot))})</button>
            {/if}
        </div>

        <div class="level">
            Nv {printNumber(building.level)}
        </div>

        <div class="center">
            {building.name}
        </div>

        <div class="center">
            {printNumber(building.CpS())}/s
        </div>
    </div>
{/if}

<style>
    button.buy {
        width: 100%;
    }
</style>
