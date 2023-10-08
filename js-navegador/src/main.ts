import { Controller } from "./controller";
import { setup } from "./displays/canvas";
import { Flash } from "./effects/Flash";
import { Move } from "./effects/Move";
import { Show } from "./effects/Show";
import { Volume } from "./effects/audio/Volume";

const NUMBER_OF_LEDS = 180;

const controller = new Controller(NUMBER_OF_LEDS);
const callback = setup(NUMBER_OF_LEDS);

controller.setCallback(callback);

controller.start();

controller.addEffect(new Show({ r: 0, g: 0, b: 0 }));
controller.addEffect(new Move({ r: 0, g: 255, b: 0 }, 15, 2.5, 100));
controller.addEffect(new Flash(50));

navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then((stream) => {
        let ctx = new AudioContext();
        let source = ctx.createMediaStreamSource(stream);

        source.connect(ctx.destination);

        controller.addEffect(new Volume(ctx, source, { r: 255, g: 255, b: 255 }));
    });