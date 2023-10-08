import { Color } from "../models/Color";
import { Effect } from "../models/Effect";

export class Move implements Effect {
    name = "Move"
    description = "Move a color"

    color: Color = { r: 0, g: 0, b: 0 }

    counter: number = 0
    period: number = 1
    length: number = 1

    constructor(color: Color, offset: number = 0, period: number = 1, length: number = 1) {
        this.color = color;
        this.counter = offset;
        this.period = period;
        this.length = length;
    }

    update(previous: Array<Color>): Array<Color> {

        const currentIndex = Math.floor(this.counter);
        for (let i = currentIndex; i < currentIndex + this.length; i++) {
            if (i < previous.length)
                previous[i] = this.color;
            else
                previous[i - previous.length] = this.color;
        }
        
        this.counter += this.period;
        if (this.counter >= previous.length) this.counter = 0;

        return previous;
    }
}