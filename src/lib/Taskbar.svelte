<script lang="ts">
    export let page: string;
    export let orgasm: number;
    export let can_orgasm: number;
</script>

<div class="body taskbar">
    <div class="cell">
        <button
            on:click={() => {
                page = "Hand";
            }}
        >
            {#if orgasm > 0}<span style="color:gold">Cum</span>{:else}Cum{/if}
            {#if can_orgasm > 0}<span style="color:gold">!</span>{/if}
        </button>
    </div>
    <div class="cell">
        <button
            on:click={() => {
                page = "Workers";
            }}>Personnages</button
        >
    </div>
    <div class="cell">
        <button
            on:click={() => {
                page = "Buildings";
            }}>Bâtiments</button
        >
    </div>
</div>

<style>
    div.taskbar {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        text-align: center;
        width: 98vw;
    }

    div.cell {
        margin-top: auto;
        margin-bottom: auto;
        padding: 2px;
    }

    button {
        width: 100%;
    }
</style>
