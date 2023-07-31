radio.onReceivedString(function (receivedString) {
    serial.writeLine(receivedString)
})
radio.setGroup(99)
basic.showLeds(`
    # # # . .
    # . # . .
    # # . . .
    # # . . .
    # . # . .
    `)
