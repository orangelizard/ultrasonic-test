basic.forever(function () {
    if (input.logoIsPressed()) {
        Acebott.stopcar()
    } else {
        if (Acebott.UltrasonicDistance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) < 25) {
            basic.showIcon(IconNames.No)
            Acebott.colorLight(Acebott.RGBLights.ALL, 0xff0000)
            Acebott.moveTime(Acebott.Direction.backward, 50)
            basic.pause(500)
            Acebott.moveTime(Acebott.Direction.right, 50)
        } else {
            basic.showIcon(IconNames.Happy)
            Acebott.colorLight(Acebott.RGBLights.ALL, 0x00ff00)
            Acebott.moveTime(Acebott.Direction.forward, 50)
        }
    }
})
