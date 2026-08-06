<script lang="ts">
    import { Boost } from "./boosts/class";
    import { printNumber } from "./print-number";
    import type { Skill } from "./skills/class";
    import { getSkill } from "./skills/list";

    export let cum: number;
    export let lot: string;
    export let dick: Boost;
    export let hand: Boost;
    export let orgasm: number;
    export let big_orgasm: number;
    export let can_orgasm: number;
    export let excitement: number;
    export let skills: Skill[];

    function ejaculate() {
        let dick_boost = 1;
        if (getSkill("Force", skills).unlock) {
            dick_boost += 1;
        }
        if (getSkill("Vigueur", skills).unlock) {
            dick_boost += 1;
        }
        if (getSkill("Bras de fer", skills).unlock) {
            dick_boost += 1;
        }
        if (getSkill("Lancer de poids", skills).unlock) {
            dick_boost += 1;
        }
        if (getSkill("Ceinture noire", skills).unlock) {
            dick_boost += 1;
        }
        if (getSkill("Arme blanche", skills).unlock) {
            dick_boost += 5;
        }
        cum += dick.level * dick_boost;
        if (excitement < 100) {
            excitement++;
        }
    }

    function start_orgasm() {
        can_orgasm = 0;

        let duration_boost = 0;
        if (getSkill("Pénis de chair", skills).unlock) {
            duration_boost += 6;
        }
        if (getSkill("Xanogène", skills).unlock) {
            duration_boost += 6;
        }
        if (getSkill("Nitro XL", skills).unlock) {
            duration_boost += 6;
        }
        if (getSkill("Greffe de peau", skills).unlock) {
            duration_boost += 6;
        }
        if (getSkill("Cyborg", skills).unlock) {
            duration_boost += 6;
        }
        if (getSkill("Engin taille transformers", skills).unlock) {
            duration_boost += 30;
        }
        // 10% de chance qu'un orgasme soit 10 fois plus puissant
        if (Math.random() < 0.1) {
            big_orgasm = 60 + duration_boost;
        } else {
            orgasm = 60 + duration_boost;
        }
    }
</script>

<div class="body">
    <div class="cum">
        <div>
            <button class="ejaculate" on:click={ejaculate}>Branler</button>
        </div>

        <div class="jauge">
            <div class="bar" style={"width:" + excitement + "%"}>_</div>
            <div class="score">{excitement}%</div>
        </div>
    </div>

    <div class="boost">
        <div>
            {#if dick.canBuy(cum, lot)}
                <button
                    class="buy"
                    on:click={() => {
                        cum = dick.buy(cum, lot);
                        dick = dick;
                    }}
                >
                    Acheter ({printNumber(dick.price(cum, lot))})
                </button>
            {:else}
                <button class="buy desactivate">Acheter ({printNumber(dick.price(cum, lot))})</button>
            {/if}
        </div>

        <div class="level">
            Nv {printNumber(dick.level)}
        </div>

        <div class="center">
            {dick.name}
        </div>
    </div>

    <div class="boost">
        <div>
            {#if hand.canBuy(cum, lot)}
                <button
                    class="buy"
                    on:click={() => {
                        cum = hand.buy(cum, lot);
                        hand = hand;
                    }}
                >
                    Acheter ({printNumber(hand.price(cum, lot))})
                </button>
            {:else}
                <button class="buy desactivate">Acheter ({printNumber(hand.price(cum, lot))})</button>
            {/if}
        </div>

        <div class="level">
            Nv {printNumber(hand.level)}
        </div>

        <div class="center">
            {hand.name}
        </div>

        <div class="center">
            {printNumber(hand.level * dick.level)}/s
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
        margin-left: 15vw;
        margin-top: 1vh;
        width: 70vw;
        color: black;
        display: flex;
        position: relative;
    }

    div.score {
        padding: 8px;
        z-index: 1;
    }

    div.bar {
        height: 100%;
        position: absolute;
        background: white;
        text-align: left;
        border-radius: 5px;
        color: transparent;
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
