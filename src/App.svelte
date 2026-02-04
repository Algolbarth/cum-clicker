<script lang="ts">
  import Hand from "./lib/Hand.svelte";
  import Buildings from "./lib/Building/Page.svelte";
  import Workers from "./lib/Worker/Page.svelte";
  import Skills from "./lib/Skills/Page.svelte";
  import Settings from "./lib/Settings.svelte";
  import { Boost } from "./lib/Boost/Class";
  import { Building } from "./lib/Building/Class";
  import { Worker } from "./lib/Worker/Class";
  import { CpS } from "./lib/CpS";
  import Taskbar from "./lib/Taskbar.svelte";
  import Infobar from "./lib/Infobar.svelte";

  let cum: number = 0;

  let dick: Boost = new Boost("Bite", 1);
  let hand: Boost = new Boost("Main", 2);
  dick.level = 1;

  let buildind_list = [
    "Magasin X",
    "Maison close",
    "Cinéma porno",
    "Banque de sperme",
    "Site porno",
    "Lac de cum",
    "Pompe à cum",
    "Usine à cum",
    "Data center",
    "Temple du sexe",
    "Voie lactée",
    "Portail vers la cum zone",
  ];
  let buildings: Building[] = [];
  let rank: number = 4;
  for (const name of buildind_list) {
    buildings.push(new Building(name, rank));
    rank += 2;
  }

  let worker_list = [
    "Petite amie",
    "Maitresse",
    "Travailleuse du sexe",
    "Acteur porno",
    "Réalisateur porno",
    "HH chan",
    "Cumologue",
    "Alchimiste",
    "Branlix 2000",
    "Magicien de cum",
    "Golem de cum",
    "Élémentaire de cum",
  ];
  let workers: Worker[] = [];
  rank = 3;
  for (const name of worker_list) {
    workers.push(new Worker(name, rank));
    rank += 2;
  }

  let orgasm: number = 0;
  let can_orgasm: number = 0;
  let excitement: number = 0;

  let skill: number = 0;

  function step() {
    cum += CpS(dick, hand, orgasm, excitement, buildings, workers);

    if (orgasm == 0 && can_orgasm == 0 && Math.random() < 0.005) {
      can_orgasm = 10;
    }
    if (can_orgasm > 0) {
      can_orgasm--;
    }
    if (orgasm > 0) {
      orgasm--;
    }

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

  <Taskbar bind:page bind:orgasm bind:can_orgasm />
</div>
