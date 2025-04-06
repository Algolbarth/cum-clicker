<script lang="ts">
    export let page: string;
</script>

<div class="body taskbar">
    <div class="cell">
        <button
            on:click={() => {
                page = "Hand";
            }}>Cum</button
        >
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
        padding:2px;
    }

    button {
        width: 100%;
    }
</style>
