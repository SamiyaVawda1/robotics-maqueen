function move_forward_until_wall () {
    while (true) {
        Line_patrol()
        distance = maqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14)
        console.log("Front Distance: " + distance);
if (distance < 15 && distance != 0) {
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 0)
            break;
        } else {
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 40)
        }
    }
}
function turn_left () {
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 0)
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 50)
    // Adjust as needed for a 90-degree turn
    basic.pause(807)
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 0)
}
function Line_patrol () {
    sensorL1 = maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL1)
    sensorM = maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorM)
    sensorR1 = maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR1)
    console.log("L1: " + sensorL1 + ", M: " + sensorM + ", R1: " + sensorR1);
if (sensorL1 == 0 && sensorM == 1 && sensorR1 == 0) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 80)
    } else if (sensorL1 == 1 && sensorM == 1 && sensorR1 == 0) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 30)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 80)
    } else if (sensorL1 == 1 && sensorM == 0 && sensorR1 == 0) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 0)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 80)
    } else if (sensorL1 == 0 && sensorM == 1 && sensorR1 == 1) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 80)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 30)
    } else if (sensorL1 == 0 && sensorM == 0 && sensorR1 == 1) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 80)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 0)
    }
}
function turn_right () {
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 0)
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 50)
    // Adjust as needed for a 90-degree turn
    basic.pause(807)
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 0)
}
let sensorR1 = 0
let sensorM = 0
let sensorL1 = 0
let distance = 0
maqueenPlusV2.I2CInit()
basic.forever(function () {
    music.play(music.stringPlayable("G B A G C5 B A B ", 122), music.PlaybackMode.LoopingInBackground)
    // Move forward until a wall is detected, then follow the sequence
    move_forward_until_wall()
    turn_left()
    move_forward_until_wall()
    turn_left()
    move_forward_until_wall()
    turn_right()
    move_forward_until_wall()
    turn_left()
    move_forward_until_wall()
    turn_right()
    move_forward_until_wall()
    turn_right()
    move_forward_until_wall()
    turn_left()
    move_forward_until_wall()
    turn_left()
    move_forward_until_wall()
    turn_right()
})
