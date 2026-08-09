import type { Building } from "./boosts/building/class";
import type { Worker } from "./boosts/worker/class";
import type { Skill } from "./skills/class";

let step: number;
let save: string;

export async function load(content: string, workers: Worker[], buildings: Building[], skills: Skill[]) {
    save = content;
    step = 0;

    if (readValue() != 'CumClicker') {
        console.log("Ce fichier n'est pas une sauvegarde pour New Monaco");
        return undefined;
    }

    let username = readValue();
    let cum = readNumber();
    let dick = readNumber();
    let hand = readNumber();

    let nb_workers = readNumber();
    for (let i = 0; i <= nb_workers; i++) {
        let worker_name = readString();
        for (const worker of workers) {
            if (worker.name == worker_name) {
                worker.level = readNumber();
            }
        }
    }

    let nb_buildings = readNumber();
    for (let i = 0; i <= nb_buildings; i++) {
        let building_name = readString();
        for (const building of buildings) {
            if (building.name == building_name) {
                building.level = readNumber();
            }
        }
    }

    let skill_point = readNumber();
    let nb_skills = readNumber();
    for (let i = 0; i <= nb_skills; i++) {
        let skill_name = readString();
        for (const skill of skills) {
            if (skill.name == skill_name) {
                skill.unlock = readBool();
            }
        }
    }

    return { username, cum, dick, hand, workers, buildings, skill_point, skills };
};

function readValue() {
    let value = '';
    while (save[step] != '_' && step < save.length) {
        value += save[step];
        step++;
    }
    step++;

    if (value != 'undefined') {
        return value;
    } else {
        return undefined;
    }
};

function readString() {
    let value = readValue();
    if (value != undefined) {
        return value;
    } else {
        return "undefined";
    }
};

function readNumber() {
    let value = readValue();
    if (value != undefined) {
        return parseInt(value);
    } else {
        return 0;
    }
};

function readBool() {
    let value = readValue();
    if (value == 'true') {
        return true;
    } else if (value == 'false') {
        return false;
    }
    return true;
};