"""
Created by: Emre Guzell
Created on: Oct 10 2024
This module is a Micro:bit MicroPython program  ligths the trafic lights 
"""

from microbit import *

# Setting the neopixle
trafic_Light = neopixel.NeoPixel(pin16, 4)

# Setting the screen and colors
trafic_Light[0] = (0, 0, 0)
trafic_Light[1] = (0, 0, 0)
trafic_Light[2] = (0, 0, 0)
display.clear()
display.show(Image.HAPPY)
trafic_Light.show()
