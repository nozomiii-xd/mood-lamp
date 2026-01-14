let strip = neopixel.create(DigitalPin.P0, 1, NeoPixelMode.RGB)
strip.setBrightness(40)

basic.forever(function () {
    for (let hue = 0; hue <= 360; hue++) {
        strip.showColor(neopixel.hsl(hue, 100, 50))
        basic.pause(20)
    }
})

