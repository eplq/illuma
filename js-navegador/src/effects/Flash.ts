import { Color } from "../models/Color";
import { Effect } from "../models/Effect";

export class Flash implements Effect {
    name = "Flash";
    description = "Flash previous state";

    period: number = 1;
    counter: number = 1;

    constructor(period: number = 1) {
        this.period = period;
    }

    update(previous: Array<Color>): Array<Color> {
        let result = previous.map((led: Color): Color => {
            if (this.counter <= this.period)
                return led;

            if (this.counter <= this.period * 2)
                return { r: 0, g: 0, b: 0 };

            return led; // dead code, ts things
        });

        this.counter++;

        if (this.counter > this.period * 2)
            this.counter = 1;

        return result;
    }
}