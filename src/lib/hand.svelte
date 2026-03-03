<script lang="ts">
    import { Boost } from "./boost/class";

    export let cum: number;
    export let dick: Boost;
    export let hand: Boost;
    export let orgasm: number;
    export let big_orgasm: number;
    export let can_orgasm: number;
    export let excitement: number;

    function ejaculate() {
        cum += dick.level;
        if (excitement < 100) {
            excitement++;
        }
    }

    function buy(boost: Boost) {
        cum -= boost.price;

        boost.level++;
        boost.price += Math.pow(5, boost.rank);
    }

    function start_orgasm() {
        can_orgasm = 0;

        // 10% de chance qu'un orgasme soit 10 fois plus puissant
        if (Math.random() < 0.1) {
            big_orgasm = 60;
        } else {
            orgasm = 60;
        }
    }
</script>

<div class="body">
    <div class="cum">
        <div>
            <button class="ejaculate" on:click={ejaculate}>Branler</button>
        </div>

        <div class="jauge">
            <div class="bar" style={"width:" + excitement + "%"}>
                {excitement}%
            </div>
        </div>
    </div>

    <div class="boost">
        <div>
            {#if cum >= dick.price}
                <button
                    class="buy"
                    on:click={() => {
                        buy(dick);
                        dick = dick;
                    }}
                >
                    Acheter ({dick.price})
                </button>
            {:else}
                <button class="buy desactivate">Acheter ({dick.price})</button>
            {/if}
        </div>

        <div class="level">
            Nv {dick.level}
        </div>

        <div class="center">
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
                        hand = hand;
                    }}
                >
                    Acheter ({hand.price})
                </button>
            {:else}
                <button class="buy desactivate">Acheter ({hand.price})</button>
            {/if}
        </div>

        <div class="level">
            Nv {hand.level}
        </div>

        <div class="center">
            {hand.name}
        </div>

        <div class="center">
            {hand.level * dick.level}/s
        </div>
    </div>

    {#if can_orgasm > 0}
        <button class="orgasm" on:click={start_orgasm}>Orgasme</button>
    {/if}

    {#if orgasm > 0}
        <button class="orgasm" style="color:gold">
            Orgasme en cours ! (Cum x6,9)
            <br />
            {orgasm}s restantes
        </button>
    {/if}

    {#if big_orgasm > 0}
        <button class="orgasm" style="color:goldenrod">
            Énoooooorme Orgasme en cours ! (Cum x69)
            <br />
            {big_orgasm}s restantes
        </button>
    {/if}
</div>

<style>
    div.cum {
        display: grid;
        text-align: center;

        margin-top: 5vh;
        margin-bottom: 5vh;
    }

    div.jauge {
        background: grey;
        border-radius: 5px;
        margin-left: 14vw;
        margin-top: 1vh;
        width: 70vw;
        color: black;
    }

    div.bar {
        background: white;
        text-align: left;
        border-radius: 5px;
        padding-left: 8px;
    }

    button.ejaculate {
        width: 200px;
        height: 200px;
        max-width: 40vw;
        max-height: 40vw;
    }

    button.buy {
        width: 100%;
    }

    button.orgasm {
        width: 100%;
    }
</style>
