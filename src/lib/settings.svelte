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

    let name: string = username!;
    let files: any;
    let saved: boolean = false;

    async function loadFile() {
        if (files) {
            let file = files[0];
            const content = await file.text();
            let log = await load(content);
            if (log != undefined) {
                username = log.username;
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
            let log = await load(content);
            if (log != undefined) {
                username = log.username;
            }
        }
    }

    async function logout() {
        username = undefined;
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

        <button on:click={logout}>Se déconnecter</button>

        <br />
        <br />

        <button
            on:click={() => {
                save(username!);
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
    <div class="shadow"></div>

    <div class="window">Sauvegarde effectuée avec succès</div>
{/if}

<style>
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
    }

    button {
        width: 20vw;
    }
</style>
