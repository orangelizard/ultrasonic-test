let Chosen = 0
let Line = 0
let Ultra = 0
Acebott.stopcar()
while (Chosen == 0) {
    Acebott.colorLight(Acebott.RGBLights.ALL, 0x7f00ff)
    if (input.buttonIsPressed(Button.A)) {
        Chosen = 1
        Ultra = 1
    }
    if (input.buttonIsPressed(Button.B)) {
        Chosen = 1
        Line = 1
    }
}
basic.forever(function () {
    if (Ultra == 1) {
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
        if (input.logoIsPressed()) {
            Chosen = 0
            Line = 0
            Ultra = 0
            Acebott.stopcar()
            while (Chosen == 0) {
                Acebott.colorLight(Acebott.RGBLights.ALL, 0x7f00ff)
                if (input.buttonIsPressed(Button.A)) {
                    Chosen = 1
                    Ultra = 1
                }
                if (input.buttonIsPressed(Button.B)) {
                    Chosen = 1
                    Line = 1
                }
            }
        }
    }
})
basic.forever(function () {
    if (Line == 1) {
        basic.showIcon(IconNames.Sad)
    }
    if (Line == 1) {
    	
    }
    if (input.logoIsPressed()) {
        Chosen = 0
        Line = 0
        Ultra = 0
        Acebott.stopcar()
        while (Chosen == 0) {
            Acebott.colorLight(Acebott.RGBLights.ALL, 0x7f00ff)
            if (input.buttonIsPressed(Button.A)) {
                Chosen = 1
                Ultra = 1
            }
            if (input.buttonIsPressed(Button.B)) {
                Chosen = 1
                Line = 1
            }
        }
    }
})
