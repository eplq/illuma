import Meyda from "meyda";
import { Effect } from "../../models/Effect";
import { Color } from "../../models/Color";

export class Volume implements Effect {
    name = "Volume";
    description = "Volume effect";

    analyzer: ReturnType<typeof Meyda.createMeydaAnalyzer>;
    currentVolume: number = 0;

    color: Color = { r: 0, g: 0, b: 0 };

    constructor(ctx: AudioContext, source: MediaStreamAudioSourceNode, color: Color) {
        this.analyzer = Meyda.createMeydaAnalyzer({
            audioContext: ctx,
            source: source,
            bufferSize: 512,
            featureExtractors: ["rms"],
            callback: (features: { rms: number }) => {
                this.volumeUpdate(features.rms);
            }
        });
        this.analyzer.start();

        this.color = color;
    }

    volumeUpdate(volume: number) {
        console.log(volume);
        this.currentVolume = volume;
    }

    update(previous: Array<Color>): Array<Color> {
        const ledsToIlluminate = Math.floor(this.currentVolume * previous.length);

        const result = previous.map((led: Color, index: number): Color => {
            if (index < ledsToIlluminate)
                return this.color;

            return led;
        });

        return result;
    }
}