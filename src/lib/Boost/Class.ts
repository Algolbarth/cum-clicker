export class Boost {
    name: string;
    level: number = 0;
    rank: number;
    price: number;

    constructor(name: string, rank: number) {
        this.name = name;
        this.rank = rank;
        this.price = Math.pow(5, rank);
    };
};