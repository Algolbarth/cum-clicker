import { Boost } from '../class';

export class Building extends Boost {
    CpS = () => {
        return this.level * Math.pow(2, this.rank);
    };
};