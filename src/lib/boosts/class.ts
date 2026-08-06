export class Boost {
    name: string;
    level: number = 0;
    rank: number;
    actual_price: number;

    constructor(name: string, rank: number) {
        this.name = name;
        this.rank = rank;
        this.actual_price = Math.pow(5, rank);
    };

    reset() {
        this.level = 0;
        this.actual_price = Math.pow(5, this.rank);
    };

    canBuy(cum: number, lot: string) {
        return (lot == "Max" && this.maxUpgrade(cum) > 0) || cum >= this.price(cum, lot);
    };

    buy(cum: number, lot: string) {
        let price = this.price(cum, lot);

        if (lot == "Max") {
            this.level += this.maxUpgrade(cum);
        }
        else if (cum >= price) {
            this.level += parseInt(lot);
        }

        this.actual_price = price + Math.pow(5, this.rank);
        cum -= price;

        return cum;
    };

    price(cum: number, lot: string) {
        let price: number = this.actual_price;
        let value: number = price;
        let number: number = 0;
        while ((lot == "Max" && value + price + Math.pow(5, this.rank) <= cum) || parseInt(lot) > number + 1) {
            number++;
            price += Math.pow(5, this.rank);
            value += price;
        }
        return value;
    };

    maxUpgrade(cum: number) {
        let price: number = this.actual_price;
        let value: number = price;
        let number: number = 0;
        while (value <= cum) {
            number++;
            price += Math.pow(5, this.rank);
            value += price;
        }
        return number;
    };
};