<script lang="ts">
    export let page: string;
    export let orgasm: number;
    export let big_orgasm: number;
    export let can_orgasm: number;
</script>

<div class="body taskbar">
    <div class="cell">
        <button
            on:click={() => {
                page = "Hand";
            }}
        >
            {#if big_orgasm > 0}<span style="color:goldenrod">Cum</span>{:else if orgasm > 0}<span style="color:gold">Cum</span>{:else}Cum{/if}
            {#if can_orgasm > 0}<span style="color:gold">!</span>{/if}
        </button>
    </div>

    <div class="cell">
        <button
            on:click={() => {
                page = "Workers";
            }}
        >
            Personnages
        </button>
    </div>

    <div class="cell">
        <button
            on:click={() => {
                page = "Buildings";
            }}
        >
            Bâtiments
        </button>
    </div>

    <div class="cell">
        <button
            on:click={() => {
                page = "Skills";
            }}
        >
            Compétences
        </button>
    </div>

    <div class="cell"></div>

    <div class="cell">
        <button
            on:click={() => {
                page = "Settings";
            }}
        >
            Options
        </button>
    </div>
</div>

<style>
    div.taskbar {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        text-align: center;
    }

    div.cell {
        margin-top: auto;
        margin-bottom: auto;
        padding: 2px;
        height: 90%;
    }

    button {
        width: 100%;
        height: 100%;
    }
</style>
