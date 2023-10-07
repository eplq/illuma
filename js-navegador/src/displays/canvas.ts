import { Color } from "../models/Color";

const PIXELS_PER_LED = 10;

function createLED(initialColor?: Color) {
    let state: Color = initialColor ?? { r: 0, g: 0, b: 0 };

    const functions = {
        getColor: () => state,
        setColor: (color: Color) => {
            state = color;
        }
    };

    return functions;
}

function drawLEDS(ctx: CanvasRenderingContext2D, leds: ReturnType<typeof createLED>[]) {
    leds.forEach((led, index) => {
        const color = led.getColor();
        ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
        ctx.fillRect(index * PIXELS_PER_LED, 0, PIXELS_PER_LED, PIXELS_PER_LED);
    });
}

export function setup(length: number): (state: Array<Color>) => void {
    const app = document.getElementById("app");

    const leds: ReturnType<typeof createLED>[] = [];
    for (let i = 0; i < length; i++) {
        leds.push(createLED({ r: 255, g: 0, b: 0 }));
    }

    const canvas: HTMLCanvasElement = document.createElement("canvas");
    canvas.width = length * PIXELS_PER_LED;
    canvas.height = PIXELS_PER_LED;

    app!.appendChild(canvas);

    const context = canvas.getContext("2d")!;

    return (state: Array<Color>) => {
        state.forEach((color, index) => {
            leds[index].setColor(color);
        });

        drawLEDS(context, leds);
    };
}