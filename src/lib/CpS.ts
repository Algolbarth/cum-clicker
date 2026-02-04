import { Boost } from "./Boost/Class";
import { Building } from "./Building/Class";
import { Worker } from "./Worker/Class";

export function CpS(dick: Boost, hand: Boost, orgasm: number, excitement: number, buildings: Building[], workers: Worker[]) {
    let total: number = 0;
    let multiplier: number = 1;

    //chaque main produits l'équivalent d'un clic par seconde
    total += dick.level * hand.level;

    //ajoute la production des bâtiments
    for (let i = 0; i < buildings.length; i++) {
        total += buildings[i].CpS();
    }

    //ajoute la production des personnages
    for (let i = 0; i < workers.length; i++) {
        total += workers[i].CpS();
    }

    //plus le joueur se branle plus la jauge d'excitation progresse et augmente le Cps
    multiplier += excitement / 100;

    //si un orgasme est en cours alors le Cps est multiplié par 6.9
    if (orgasm > 0) {
        multiplier += 6.9;
    }

    total = Math.floor(total * multiplier);

    return total;
};