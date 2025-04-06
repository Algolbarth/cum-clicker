<script lang="ts">
    import { Building } from "./Class";

    export let cum: number;
    export let building: Building;
    export let buildings: Building[];
    export let index: number;

    function buy(building: Building) {
        cum -= building.price;
        building.level++;
        building.price += Math.pow(5, building.rank);
        buildings = buildings;
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
                    }}>Acheter ({building.price})</button
                >
            {:else}
                <button class="buy desactivate"
                    >Acheter ({building.price})</button
                >
            {/if}
        </div>
        <div class="level">
            Nv {building.level}
        </div>
        <div class="name">
            {building.name}
        </div>
    </div>
{/if}
