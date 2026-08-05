<script lang="ts">
    import { Building } from "./class";

    export let cum: number;
    export let building: Building;
    export let buildings: Building[];
    export let index: number;

    function buy(building: Building) {
        cum -= building.price;
        building.level++;
        building.price += Math.pow(5, building.rank);
    }
</script>

{#if index == 0 || buildings[index - 1].level >= 10}
    <div class="boost">
        <div>
            {#if cum >= building.price}
                <button
                    class="buy"
                    on:click={() => {
                        buy(building);
                        buildings = buildings;
                    }}
                >
                    Acheter ({building.price})
                </button>
            {:else}
                <button class="buy desactivate"
                    >Acheter ({building.price})</button
                >
            {/if}
        </div>

        <div class="level">
            Nv {building.level}
        </div>

        <div class="center">
            {building.name}
        </div>

        <div class="center">
            {building.CpS()}/s
        </div>
    </div>
{/if}

<style>
    button.buy {
        width: 100%;
    }
</style>
