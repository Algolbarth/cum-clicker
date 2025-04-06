import { Boost } from '../Boost/Class';

export class Building extends Boost {
    CpS = () => {
        return this.level * Math.pow(2, this.rank);
    };
}