def on_received_string(receivedString):
    serial.write_line(receivedString)
radio.on_received_string(on_received_string)

radio.set_group(99)
basic.show_leds("""
        # # # . .
        # . # . .
        # # . . .
        # # . . .
        # . # . .
""")
