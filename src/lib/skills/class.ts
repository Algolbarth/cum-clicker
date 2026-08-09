export class Skill {
    name: string;
    price: number;
    skill_needed: string[];
    unlock: boolean = false;
    description: string;

    constructor(name: string, price: number, skill_needed: string[], description: string) {
        this.name = name;
        this.price = price;
        this.skill_needed = skill_needed;
        this.description = description;
    };

    reset() {
        this.unlock = false;
    };
};