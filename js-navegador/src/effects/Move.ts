import { Color } from "../models/Color";
import { Effect } from "../models/Effect";

export class Move implements Effect {
    name = "Move"
    description = "Move a color"

    color: Color = { r: 0, g: 0, b: 0 }

    counter: number = 0
    period: number = 1

    constructor(color: Color, offset: number = 0, period: number = 1) {
        this.color = color;
        this.counter = offset;
        this.period = period;
    }

    update(previous: Array<Color>): Array<Color> {
        previous[Math.floor(this.counter)] = this.color;
        
        this.counter += this.period;
        if (this.counter >= previous.length) this.counter = 0;

        return previous;
    }
}