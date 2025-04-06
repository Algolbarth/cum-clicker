<script lang="ts">
    export let page: string;
</script>

<div class="body taskbar">
    <div>
        <button
            on:click={() => {
                page = "Hand";
            }}>Cum</button
        >
    </div>
    <div>
        <button
            on:click={() => {
                page = "Workers";
            }}>Bâtiments</button
        >
    </div>
    <div>
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
</style>
