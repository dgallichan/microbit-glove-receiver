radio.onReceivedString(function (receivedString) {
    serial.writeLine(receivedString)
    led.toggle(4, 4)
})
radio.setGroup(99)
basic.showLeds(`
    # # # . .
    # . # . .
    # # . . .
    # # . . .
    # . # . .
    `)
