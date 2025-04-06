<script lang="ts">
  import Hand from "./lib/Hand.svelte";
  import Buildings from "./lib/Building/Page.svelte";
  import Workers from "./lib/Worker/Page.svelte";
  import { Boost } from "./lib/Boost/Class";
  import { Building } from "./lib/Building/Class";
  import { Worker } from "./lib/Worker/Class";
  import { CpS } from "./lib/CpS";

  let cum: number = 0;

  let dick: Boost = new Boost("Bite", 1);
  let hand: Boost = new Boost("Main", 2);
  dick.level = 1;
  let orgasm: number = 0;
  let can_orgasm: number = 0;

  let buildind_list = [
    "Magasin X",
    "Maison close",
    "Cinéma porno",
    "Banque de sperme",
    "Lac de cum",
    "Pompe à cum",
    "Usine à cum",
    "Data center",
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
    "Travailleur du sexe",
    "Acteur porno",
    "Réalisateur porno",
    "Cumologue",
    "Alchimiste",
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

  function step() {
    cum += CpS(dick, hand, orgasm, buildings, workers);

    if (orgasm == 0 && can_orgasm == 0 && Math.random() < 0.05) {
      can_orgasm = 10;
    }
    if (can_orgasm > 0) {
      can_orgasm--;
    }
    if (orgasm > 0) {
      orgasm--;
    }
  }

  setInterval(step, 1000);

  let page = "Hand";
</script>

{#if page == "Hand"}
  <Hand bind:page bind:cum bind:buildings bind:workers bind:dick bind:hand bind:orgasm bind:can_orgasm />
{:else if page == "Buildings"}
  <Buildings bind:page bind:cum bind:buildings bind:orgasm bind:can_orgasm />
{:else if page == "Workers"}
  <Workers bind:page bind:cum bind:workers bind:orgasm bind:can_orgasm />
{/if}
