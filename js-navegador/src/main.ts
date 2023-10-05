import { Controller } from "./controller";
import { Move } from "./effects/Move";
import { Show } from "./effects/Show";

const NUMBER_OF_LEDS = 50;
const LEDS: Array<HTMLDivElement> = [];

const app = document.getElementById("app");
for (let i = 0; i < NUMBER_OF_LEDS; i++) {
    const newElement = document.createElement("div");
    newElement.classList.add("led");

    app!.appendChild(newElement);

    LEDS.push(newElement);
}

const controller = new Controller(NUMBER_OF_LEDS);

controller.setCallback((state) => {
    state.forEach((color, index) => {
        LEDS[index].style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
    });
});

controller.start();

controller.addEffect(new Show({ r: 255, g: 0, b: 0 }));
controller.addEffect(new Move({ r: 0, g: 255, b: 0 }, 5));
controller.addEffect(new Move({ r: 0, g: 255, b: 0 }, 10));
controller.addEffect(new Move({ r: 0, g: 255, b: 0 }, 15));
controller.addEffect(new Move({ r: 0, g: 255, b: 0 }));