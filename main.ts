/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Emre Guzel
 * Created on: Oct8 2024
 * This program ligths the trafic lights 
*/

//idenfifying the trafic light 
let traficlLigth: neopixel.Strip = null

//seting the screen and setup
basic.clearScreen()
traficlLigth = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
traficlLigth.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
traficlLigth.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
traficlLigth.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
traficlLigth.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
traficlLigth.show()
basic.showIcon(IconNames.Happy)
let showLamps = true;

//Setting up the our trafic lights and truing on
input.onButtonPressed(Button.A, function () { 
    // Red    
    traficlLigth.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    traficlLigth.show()
    basic.pause(1000)
    traficlLigth.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    basic.pause(1000)
    
    // Yellow
    traficlLigth.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    traficlLigth.show()
    basic.pause(1000)
    traficlLigth.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    basic.pause(1000)
    
    // Green
    traficlLigth.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    traficlLigth.show()
    basic.pause(1000)
    traficlLigth.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    basic.pause(1000)
})

//Trun off
input.onButtonPressed(Button.B, function () {
    showLamps = false;
    traficlLigth.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    traficlLigth.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    traficlLigth.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    traficlLigth.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    traficlLigth.show()
    basic.showIcon(IconNames.SmallDiamond)
})
