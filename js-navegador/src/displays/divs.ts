import { Color } from "../models/Color";

export function setup(length: number): (state: Array<Color>) => void {
    const app = document.getElementById("app");
    const leds: HTMLDivElement[] = [];

    for (let i = 0; i < length; i++) {
        const newElement = document.createElement("div");
        newElement.classList.add("led");

        app!.appendChild(newElement);

        leds.push(newElement);
    }

    return (state: Array<Color>) => {
        state.forEach((color, index) => {
            leds[index].style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
        });
    };
}

