<script lang="ts">
    import { Skill } from "./class";

    export let skill_point: number;
    export let skill: Skill;
    export let skills: Skill[];

    function buy(skill: Skill) {
        skill_point -= skill.price;
        skill.unlock = true;
    }

    function check_needed(skill: Skill) {
        for (const condition of skill.skill_needed) {
            for (const s of skills) {
                if (condition == s.name && !s.unlock) {
                    return false;
                }
            }
        }
        return true;
    }
</script>

{#if !skill.unlock && check_needed(skill)}
    <div class="skill">
        <div>
            {#if skill_point >= skill.price}
                <button
                    class="buy"
                    on:click={() => {
                        buy(skill);
                        skills = skills;
                    }}
                >
                    Acheter ({skill.price})
                </button>
            {:else}
                <button class="buy desactivate">Acheter ({skill.price})</button>
            {/if}
        </div>

        <div class="center">
            {skill.name}
        </div>

        <div class="center description">
            {skill.description}
        </div>
    </div>
{/if}

<style>
    button.buy {
        width: 100%;
        height: 100%;
    }

    div.description {
        text-align: left;
    }
</style>
