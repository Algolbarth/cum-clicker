import { Skill } from "./class";

export let skill_list: Skill[] = [
    new Skill("Force", 1, [], "Augmente de 1 le cum généré lors d'une branlette manuelle"),
    new Skill("Vigueur", 5, ["Force"], "Augmente de 1 le cum généré lors d'une branlette manuelle"),
    new Skill("Bras de fer", 10, ["Vigueur"], "Augmente de 1 le cum généré lors d'une branlette manuelle"),
    new Skill("Lancer de poids", 25, ["Bras de fer"], "Augmente de 1 le cum généré lors d'une branlette manuelle"),
    new Skill("Ceinture noire", 50, ["Lancer de poids"], "Augmente de 1 le cum généré lors d'une branlette manuelle"),
    new Skill("Arme blanche", 100, ["Ceinture noire"], "Augmente de 5 le cum généré lors d'une branlette manuelle"),

    new Skill("Agilité", 1, [], "Augmente de 0.1 le nombre de branlette réalisé pour chacune de vos mains"),
    new Skill("Dexterité", 5, ["Agilité"], "Augmente de 0.1 le nombre de branlette réalisé pour chacune de vos mains"),
    new Skill("Adresse", 10, ["Dexterité"], "Augmente de 0.1 le nombre de branlette réalisé pour chacune de vos mains"),
    new Skill("Massage intégral", 25, ["Adresse"], "Augmente de 0.1 le nombre de branlette réalisé pour chacune de vos mains"),
    new Skill("Mains de velour", 50, ["Massage intégral"], "Augmente de 0.1 le nombre de branlette réalisé pour chacune de vos mains"),
    new Skill("Doigts de fée", 100, ["Mains de velour"], "Augmente de 0.5 le nombre de branlette réalisé pour chacune de vos mains"),

    new Skill("Intelligence", 1, [], "Augmente de 10% le cum généré par vos personnages"),
    new Skill("Sagesse", 5, ["Intelligence"], "Augmente de 10% le cum généré par vos personnages"),
    new Skill("Sexologue", 10, ["Sagesse"], "Augmente de 10% le cum généré par vos personnages"),
    new Skill("Docteur en cumologie", 25, ["Sexologue"], "Augmente de 10% le cum généré par vos personnages"),
    new Skill("Prix nobel du cum", 50, ["Docteur en cumologie"], "Augmente de 10% le cum généré par vos personnages"),
    new Skill("Devin de l'orgasme", 100, ["Prix nobel du cum"], "Augmente de 50% le cum généré par vos personnages"),

    new Skill("Précision", 1, [], "Augmente de 10% le cum généré par vos bâtiments"),
    new Skill("Pistolet à cum", 5, ["Précision"], "Augmente de 10% le cum généré par vos bâtiments"),
    new Skill("Fusil à cum", 10, ["Pistolet à cum"], "Augmente de 10% le cum généré par vos bâtiments"),
    new Skill("Mitraillette de cum", 25, ["Fusil à cum"], "Augmente de 10% le cum généré par vos bâtiments"),
    new Skill("Canon à cum", 50, ["Mitraillette de cum"], "Augmente de 10% le cum généré par vos bâtiments"),
    new Skill("Cum-kata", 100, ["Canon à cum"], "Augmente de 50% le cum généré par vos bâtiments"),

    new Skill("Pénis de chair", 1, [], "Augmente la durée des orgasmes de 6 secondes"),
    new Skill("Xanogène", 5, ["Pénis de chair"], "Augmente la durée des orgasmes de 6 secondes"),
    new Skill("Nitro XL", 10, ["Xanogène"], "Augmente la durée des orgasmes de 6 secondes"),
    new Skill("Greffe de peau", 25, ["Nitro XL"], "Augmente la durée des orgasmes de 6 secondes"),
    new Skill("Cyborg", 50, ["Nitro XL"], "Augmente la durée des orgasmes de 6 secondes"),
    new Skill("Engin taille transformers", 100, ["Cyborg"], "Augmente la durée des orgasmes de 30 secondes"),

    new Skill("Pénis de sang", 1, [], "Augmente de 10% le boost conféré par un orgasme"),
    new Skill("Filtration", 5, ["Pénis de sang"], "Augmente de 10% le boost conféré par un orgasme"),
    new Skill("Clair comme du cum", 10, ["Filtration"], "Augmente de 10% le boost conféré par un orgasme"),
    new Skill("Alcumiste", 25, ["Clair comme du cum"], "Augmente de 10% le boost conféré par un orgasme"),
    new Skill("Foutraine de jouvence", 50, ["Alcumiste"], "Augmente de 10% le boost conféré par un orgasme"),
    new Skill("Le dernier maître du cum", 100, ["Foutraine de jouvence"], "Augmente de 50% le boost conféré par un orgasme"),
];

export function getSkill(name: string, skills: Skill[]) {
    for (const skill of skills) {
        if (skill.name == name) {
            return skill;
        }
    }
    console.log("erreur ce skill n'existe pas : " + name);
    return new Skill(name, 0, [], "");
};