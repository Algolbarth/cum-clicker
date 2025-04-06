import { Boost } from "./Boost/Class";
import { Building } from "./Building/Class";
import { Worker } from "./Worker/Class";

export function CpS(dick: Boost, hand: Boost, buildings: Building[], workers: Worker[]) {
    let total: number = 0;
    total += dick.level * hand.level;

    for (let i = 2; i < buildings.length; i++) {
        total += buildings[i].CpS();
    }

    for (let i = 2; i < workers.length; i++) {
        total += workers[i].CpS();
    }

    return total;
}