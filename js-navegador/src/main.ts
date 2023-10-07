import { Controller } from "./controller";
import { setup } from "./displays/divs";
import { Move } from "./effects/Move";
import { Show } from "./effects/Show";

const NUMBER_OF_LEDS = 50;

const controller = new Controller(NUMBER_OF_LEDS);
const callback = setup(NUMBER_OF_LEDS);

controller.setCallback(callback);

controller.start();

controller.addEffect(new Show({ r: 255, g: 0, b: 0 }));
controller.addEffect(new Move({ r: 0, g: 255, b: 0 }, 5));
controller.addEffect(new Move({ r: 0, g: 255, b: 0 }, 10));
controller.addEffect(new Move({ r: 0, g: 255, b: 0 }, 15));
controller.addEffect(new Move({ r: 0, g: 255, b: 0 }));