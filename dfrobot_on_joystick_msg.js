function move(leftSpeed: number, rightSpeed: number) {
    if (leftSpeed > 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, leftSpeed*2)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, -leftSpeed*2)
    }
    if (rightSpeed > 0) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, rightSpeed*2)
    } else {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, -rightSpeed*2)
    }
}

radio.onReceivedValue(function (name, value) {
    // Run by rocker value
    if (name == "x") {
        xValue = value
    }
    if (name == "y") {
        yValue = value
    }
    // Only use rocker value when it is greater than 10
    // If we don't have this condition, the robot will stop when the joystick is in the middle
    if (Math.abs(xValue) > 10 || Math.abs(yValue) > 10) {
        // map xValue and yValue to two wheel speed
        // if xValue is 0, yValue > 0, then going forward.
        leftSpeed = yValue + xValue / 5
        rightSpeed = yValue - xValue / 5
        move(leftSpeed, rightSpeed)
    }
    // Run by joystick button pressed.
    if (name == "Button") {
        // basic.showString(value.toString())
        if (value == 13) {
            // D, forward
            move(50, 50)
        } else if (value == 14) {
            // E, stop
            move(0, 0)
        } else if (value == 15) {
            // F, right turn
            move(30, -30)
        } else if (value == 12) {
            // C, left turn
            move(-30, 30)
        }
    }
})
let rightSpeed = 0
let leftSpeed = 0
let yValue = 0
let xValue = 0
let zValue = 0
radio.setGroup(1)