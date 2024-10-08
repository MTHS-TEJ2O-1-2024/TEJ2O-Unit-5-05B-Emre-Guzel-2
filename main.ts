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
traficlLigth=neopixel.create(DigitalPin.P16, 4,NeoPixelMode.RGB)
traficlLigth.setPixelColor(0,neopixel.colors(NeoPixelColors.Black))
traficlLigth.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
traficlLigth.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
traficlLigth.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
basic.showIcon(IconNames.Happy)

//Setting up the our trafic lights and truing on
input.onButtonPressed(Button.A,function(){
basic.showIcon(IconNames.Square)
    traficlLigth.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    pause(1000)
    traficlLigth.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    pause(1000)
    traficlLigth.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
   pause(1000)
})

//Trun off