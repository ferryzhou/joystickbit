joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    // basic.showString("E")
    radio.sendValue("Button", 14)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    // basic.showString("F")
    radio.sendValue("Button", 15)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    // basic.showString("D")
    radio.sendValue("Button", 13)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    // basic.showString("C")
    radio.sendValue("Button", 12)
})
joystickbit.initJoystickBit()
music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)

let y = 0
let x = 0
joystickbit.initJoystickBit()
radio.setGroup(1)
basic.forever(function () {
    x = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.X), 1023, 0, -100, 100)
    y = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.Y), 1023, 0, 100, -100)
    radio.sendValue("x", x)
    radio.sendValue("y", y)
})
