"""
Created by: Emre Guzell
Created on: Oct 10 2024
This module is a Micro:bit MicroPython program  ligths the trafic lights 
"""

from microbit import *
import neopixel

# Setting the neopixle
trafic_Light = neopixel.NeoPixel(pin16, 3)

# Setting the screen and colors
trafic_Light[0] = (0, 0, 0)
trafic_Light[1] = (0, 0, 0)
trafic_Light[2] = (0, 0, 0)
display.clear()
trafic_Light.show()

while True:
    # Setting up our RGB LED's
    if button_a.is_pressed():
        display.show(Image.SQUARE)

        # Red
        trafic_Light[0] = (255, 0, 0)
        trafic_Light.show()
        sleep(1000)
        # Turining off the Red LED
        trafic_Light[0] = (0, 0, 0)
        trafic_Light.show()
        sleep(1000)

        # Green LED
        trafic_Light[1] = (255, 234, 0)
        trafic_Light.show()
        sleep(1000)
        trafic_Light[1] = (0, 0, 0)
        trafic_Light.show()
        sleep(1000)

        # Yellow LED
        trafic_Light[2] = (255, 128, 0)
        trafic_Light.show()
        sleep(1000)
        trafic_Light[2] = (0, 0, 0)
        trafic_Light.show()
        sleep(1000)

        # Turn off
    if button_b.is_pressed:
        trafic_Light[0] = (0, 0, 0)
        trafic_Light[1] = (0, 0, 0)
        trafic_Light[2] = (0, 0, 0)
        display.show(Image.DIAMOND)
        trafic_Light.show()
