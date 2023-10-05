import { Color } from "./Color";

export interface Effect {
    name: string;
    description: string;

    update(previous: Array<Color>): Array<Color>;
}