<script lang="ts">
    import type { Building } from "./boosts/building/class";
    import type { Boost } from "./boosts/class";
    import type { Worker } from "./boosts/worker/class";
    import { is_desktop } from "./is_desktop";
    import { load } from "./load";
    import type { Skill } from "./skills/class";
    import { open } from "@tauri-apps/plugin-dialog";
    import { readTextFile } from "@tauri-apps/plugin-fs";
    import { localDataDir, join } from "@tauri-apps/api/path";
    import { save } from "./save";

    export let username: string | undefined;
    export let skills: Skill[];
    export let skill_point: number;
    export let cum: number;
    export let dick: Boost;
    export let hand: Boost;
    export let buildings: Building[];
    export let workers: Worker[];
    export let orgasm: number;
    export let big_orgasm: number;
    export let can_orgasm: number;
    export let excitement: number;

    let name: string = username!;
    let files: any;
    let saved: boolean = false;

    async function loadFile() {
        if (files) {
            let file = files[0];
            const content = await file.text();
            let log = await load(content, workers, buildings, skills);
            if (log != undefined) {
                username = log.username;
                name = username!;
                cum = log.cum;
                dick.level = log.dick;
                hand.level = log.hand;
                workers = log.workers;
                buildings = log.buildings;
                skill_point = log.skill_point;
                skills = log.skills;
            }
        }
    }

    async function login() {
        const localData = await localDataDir();
        const savesPath = await join(localData, "Cum Clicker", "Saves");

        const selected = await open({
            defaultPath: savesPath,
            multiple: false,
            filters: [{ name: "CumClicker", extensions: ["txt"] }],
        });

        if (selected) {
            const content = await readTextFile(selected as string);
            let log = await load(content, workers, buildings, skills);
            if (log != undefined) {
                username = log.username;
                name = username!;
                cum = log.cum;
                dick.level = log.dick;
                hand.level = log.hand;
                workers = log.workers;
                buildings = log.buildings;
                skill_point = log.skill_point;
                skills = log.skills;
            }
        }
    }

    async function logout() {
        username = undefined;

        orgasm = 0;
        big_orgasm = 0;
        can_orgasm = 0;

        excitement = 0;

        dick.reset();
        dick.level = 1;
        hand.reset();

        for (const worker of workers) {
            worker.reset();
        }

        for (const building of buildings) {
            building.reset();
        }

        skill_point = 0;
        for (const skill of skills) {
            skill.reset();
        }
    }
</script>

<div class="body">
    {#if username == undefined}
        {#if is_desktop}
            <button on:click={login}> Se connecter </button>
        {:else}
            <input type="file" id="files" bind:files on:change={loadFile} />
        {/if}

        <br />
        <br />

        <button
            on:click={() => {
                username = "Invité";
                name = username;
            }}
        >
            Créer un compte
        </button>
    {:else}
        <input
            type="text"
            bind:value={name}
            on:change={() => {
                if (!name.includes("_")) {
                    username = name;
                }
            }}
        />

        <br />
        <br />

        <button on:click={logout} class="logout">Se déconnecter</button>

        <br />
        <br />

        <button
            class="save"
            on:click={() => {
                save(username!, cum, dick, hand, workers, buildings, skill_point, skills);
                if (is_desktop) {
                    saved = true;
                    setTimeout(() => {
                        saved = false;
                    }, 1000);
                }
            }}
        >
            <div></div>

            <div class="title">Sauvegarder</div>
        </button>
    {/if}
</div>

{#if saved}
    <div class="window shadow"></div>

    <div class="window saved">Sauvegarde effectuée avec succès</div>
{/if}

<style>
    div.body {
        text-align: center;
    }

    div.shadow {
        background-color: rgba(0, 0, 0, 0.3);
    }

    div.saved {
        left: 30vw;
        width: 40vw;

        top: 25vh;
        height: 50vh;

        border: solid;
        border-color: white;

        display: grid;
        align-items: center;
        text-align: center;
    }

    input#files {
        border: solid;
        border: 1px solid #ccc;
        border-radius: 2px;
        width: 20vw;
    }

    input#files:hover {
        border-color: var(--deaths);
    }

    input[type="text"] {
        border-width: 0 0 0.1em 0;
        border-radius: 0;
        background: transparent;
        width: 20vw;
        padding: 0;
        text-align: center;
    }

    button {
        width: 20vw;
    }

    button.save {
        color: green;
        border-color: green;
    }

    button.logout {
        color: red;
        border-color: red;
    }
</style>
