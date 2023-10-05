import { Color } from "../models/Color";
import { Effect } from "../models/Effect";

export class Show implements Effect {
    name = "Show";
    description = "Show a color";

    color: Color = { r: 0, g: 0, b: 0 };

    constructor(color: Color) {
        this.color = color;
    }

    update(previous: Array<Color>): Array<Color> {
        return previous.map(() => this.color);
    }
}