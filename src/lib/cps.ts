import { Boost } from "./boosts/class";
import { Building } from "./boosts/building/class";
import { Worker } from "./boosts/worker/class";
import type { Skill } from "./skills/class";
import { getSkill } from "./skills/list";

export function CpS(dick: Boost, hand: Boost, orgasm: number, big_orgasm: number, excitement: number, buildings: Building[], workers: Worker[], skills: Skill[]) {
    let total: number = 0;
    let multiplier: number = 1;

    //chaque main produits l'équivalent d'un clic par seconde
    let hand_boost: number = 1;
    if (getSkill("Agilité", skills).unlock) {
        hand_boost += 0.1;
    }
    if (getSkill("Dexterité", skills).unlock) {
        hand_boost += 0.1;
    }
    if (getSkill("Adresse", skills).unlock) {
        hand_boost += 0.1;
    }
    if (getSkill("Massage intégral", skills).unlock) {
        hand_boost += 0.1;
    }
    if (getSkill("Mains de velour", skills).unlock) {
        hand_boost += 0.1;
    }
    if (getSkill("Doigts de fée", skills).unlock) {
        hand_boost += 0.5;
    }
    total += dick.level * hand.level * hand_boost;

    //ajoute la production des bâtiments
    let building_boost: number = 1;
    if (getSkill("Précision", skills).unlock) {
        building_boost += 0.1;
    }
    if (getSkill("Pistolet à cum", skills).unlock) {
        building_boost += 0.1;
    }
    if (getSkill("Fusil à cum", skills).unlock) {
        building_boost += 0.1;
    }
    if (getSkill("Mitraillette de cum", skills).unlock) {
        building_boost += 0.1;
    }
    if (getSkill("Canon à cum", skills).unlock) {
        building_boost += 0.1;
    }
    if (getSkill("Cum-kata", skills).unlock) {
        building_boost += 0.5;
    }
    for (let i = 0; i < buildings.length; i++) {
        total += buildings[i].CpS() * building_boost;
    }

    //ajoute la production des personnages
    let worker_boost: number = 1;
    if (getSkill("Intelligence", skills).unlock) {
        worker_boost += 0.1;
    }
    if (getSkill("Sagesse", skills).unlock) {
        worker_boost += 0.1;
    }
    if (getSkill("Sexologue", skills).unlock) {
        worker_boost += 0.1;
    }
    if (getSkill("Docteur en cumologie", skills).unlock) {
        worker_boost += 0.1;
    }
    if (getSkill("Prix nobel du cum", skills).unlock) {
        worker_boost += 0.1;
    }
    if (getSkill("Devin de l'orgasme", skills).unlock) {
        worker_boost += 0.5;
    }
    for (let i = 0; i < workers.length; i++) {
        total += workers[i].CpS() * worker_boost;
    }

    //plus le joueur se branle plus la jauge d'excitation progresse et augmente le Cps
    multiplier += excitement / 100;

    let orgasm_boost: number = 1;
    if (getSkill("Pénis de sang", skills).unlock) {
        orgasm_boost += 0.1;
    }
    if (getSkill("Filtration", skills).unlock) {
        orgasm_boost += 0.1;
    }
    if (getSkill("Clair comme du cum", skills).unlock) {
        orgasm_boost += 0.1;
    }
    if (getSkill("Alcumiste", skills).unlock) {
        orgasm_boost += 0.1;
    }
    if (getSkill("Foutraine de jouvence", skills).unlock) {
        orgasm_boost += 0.1;
    }
    if (getSkill("Le dernier maître du cum", skills).unlock) {
        orgasm_boost += 0.5;
    }
    //si un orgasme est en cours alors le Cps est multiplié par 6.9
    if (orgasm > 0) {
        multiplier += 6.9 * orgasm_boost;
    }
    //si un énoooorme orgasme est en cours alors le Cps est multiplié par 69
    if (big_orgasm > 0) {
        multiplier += 69 * orgasm_boost;
    }

    total = Math.floor(total * multiplier);

    return total;
};