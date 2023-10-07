import { Color } from "./models/Color";
import { Effect } from "./models/Effect";

type CallbackType = (state: Array<Color>) => void;

export class Controller {
    effects: Array<Effect> = [];
    state: Array<Color> = [];
    interval: ReturnType<typeof setInterval> | null = null;
    callback: CallbackType = () => {};

    /**
     * @param leds Number of LEDs
     */
    constructor(leds: number) {
        this.effects = [];
        this.state = new Array<Color>(leds);

        this.state.fill({ r: 0, g: 0, b: 0 });
    }

    addEffect(effect: Effect) {
        this.effects.push(effect);
    }

    setCallback(callback: CallbackType) {
        this.callback = callback;
    }

    update() {
        let currentState = this.state.map((color) => ({ ...color }));

        this.effects.forEach((effect) => {
            currentState = effect.update(currentState);
        });

        this.state = currentState;

        return this.state;
    }

    start() {
        if (this.interval) {
            return;
        }

        this.interval = setInterval(() => {
            this.callback(this.update());
        }, 1000 / 200);
    }

    stop() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
}
