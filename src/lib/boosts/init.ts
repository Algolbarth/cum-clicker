import { Building } from "./building/class";
import { buildind_list } from "./building/list";
import { Worker } from "./worker/class";
import { worker_list } from "./worker/list";
import { Boost } from "./class";

export let InitBoost = () => {
    let dick: Boost = new Boost("Bite", 1);
    dick.level = 1;

    let hand: Boost = new Boost("Main", 2);

    let buildings: Building[] = [];
    let rank: number = 4;
    for (const name of buildind_list) {
        buildings.push(new Building(name, rank));
        rank += 2;
    }

    let workers: Worker[] = [];
    rank = 3;
    for (const name of worker_list) {
        workers.push(new Worker(name, rank));
        rank += 2;
    }

    return { dick, hand, buildings, workers };
};