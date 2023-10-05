import { Color } from "../models/Color";
import { Effect } from "../models/Effect";

export class Move implements Effect {
    name = "Move"
    description = "Move a color"

    color: Color = { r: 0, g: 0, b: 0 }

    counter: number = 0

    constructor(color: Color) {
        this.color = color;
    }

    update(previous: Array<Color>): Array<Color> {
        previous[this.counter] = this.color;
        
        this.counter++;
        if (this.counter >= previous.length) this.counter = 0;

        return previous;
    }
}