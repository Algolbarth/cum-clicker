<script lang="ts">
  import Hand from "../lib/hand.svelte";
  import Buildings from "../lib/building/page.svelte";
  import Workers from "../lib/worker/page.svelte";
  import Skills from "../lib/skills/page.svelte";
  import Settings from "../lib/settings.svelte";
  import Taskbar from "../lib/taskbar.svelte";
  import Infobar from "../lib/infobar.svelte";
  import { CpS } from "../lib/cps";
  import { InitBoost } from "../lib/boost/init";
  import type { Boost } from "../lib/boost/class";
  import type { Building } from "../lib/building/class";
  import type { Worker } from "../lib/worker/class";
  import "../styles/app.css";
  import "../styles/div.css";
  import "../styles/button.css";

  let cum: number = 0;

  //on initialise les valeurs pour les boosts
  let init_log = InitBoost();
  let dick: Boost = init_log.dick;
  let hand: Boost = init_log.hand;
  let buildings: Building[] = init_log.buildings;
  let workers: Worker[] = init_log.workers;

  let orgasm: number = 0;
  let big_orgasm: number = 0;
  let can_orgasm: number = 0;
  let excitement: number = 0;

  let skill: number = 0;

  function step() {
    cum += CpS(dick, hand, orgasm, big_orgasm, excitement, buildings, workers);

    //si aucun orgasme en cours alors ya 0.5% de chance d'en trouver un, le joueur a 10s pour le déclencher
    if (orgasm == 0 && can_orgasm == 0 && Math.random() < 0.005) {
      can_orgasm = 10;
    }
    if (can_orgasm > 0) {
      can_orgasm--;
    }

    //la durée de l'orgasme diminue au fur et à mesure
    if (orgasm > 0) {
      orgasm--;
    }

    //la jauge d'excitation diminue petit à petit
    if (excitement > 0) {
      excitement--;
    }
  }

  setInterval(step, 1000);

  let page = "Hand";
</script>

<div class="window page">
  <Infobar
    bind:cum
    bind:dick
    bind:hand
    bind:orgasm
    bind:big_orgasm
    bind:buildings
    bind:workers
    bind:excitement
  />

  {#if page == "Hand"}
    <Hand
      bind:cum
      bind:dick
      bind:hand
      bind:orgasm
      bind:big_orgasm
      bind:can_orgasm
      bind:excitement
    />
  {:else if page == "Buildings"}
    <Buildings bind:cum bind:buildings />
  {:else if page == "Workers"}
    <Workers bind:cum bind:workers />
  {:else if page == "Skills"}
    <Skills bind:skill />
  {:else if page == "Settings"}
    <Settings />
  {/if}

  <Taskbar bind:page bind:orgasm bind:big_orgasm bind:can_orgasm />
</div>
