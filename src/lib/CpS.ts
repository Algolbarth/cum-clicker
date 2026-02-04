import { Boost } from "./Boost/Class";
import { Building } from "./Building/Class";
import { Worker } from "./Worker/Class";

export function CpS(dick: Boost, hand: Boost, orgasm: number, excitement: number, buildings: Building[], workers: Worker[]) {
    let total: number = 0;
    let multiplier: number = 1;

    total += dick.level * hand.level;

    for (let i = 0; i < buildings.length; i++) {
        total += buildings[i].CpS();
    }

    for (let i = 0; i < workers.length; i++) {
        total += workers[i].CpS();
    }

    multiplier += excitement / 100;

    if (orgasm > 0) {
        multiplier += 7;
    }

    total = total * multiplier;

    return Math.floor(total);
};