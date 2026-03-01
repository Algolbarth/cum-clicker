import { Boost } from '../boost/class';

export class Worker extends Boost {
    CpS = () => {
        return this.level * Math.pow(2, this.rank);
    };
};