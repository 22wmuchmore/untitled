input.onPinPressed(TouchPin.P0, function () {
    stopwatch_number_vaule = input.runningTime() - STARTSTOPWATCH
    basic.showNumber(stopwatch_number_vaule / 1000)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    if (sprite) {
        if (sprite.get(LedSpriteProperty.X) == 2) {
            game.addScore(1)
        } else {
            game.gameOver()
        }
        if (sprite.get(LedSpriteProperty.X) == 3) {
            game.addScore(1)
        } else {
            game.gameOver()
        }
        if (sprite.get(LedSpriteProperty.X) == 4) {
            game.addScore(1)
        } else {
            game.gameOver()
        }
    }
})
input.onGesture(Gesture.TiltLeft, function () {
	
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showNumber(minutes)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Steps)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    STARTSTOPWATCH = input.runningTime()
    basic.showString("stopwatch started")
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showNumber(input.temperature())
})
input.onGesture(Gesture.Shake, function () {
    Steps += 1
})
let sprite: game.LedSprite = null
let STARTSTOPWATCH = 0
let stopwatch_number_vaule = 0
let Steps = 0
let minutes = 0
minutes = 0
Steps = 0
basic.forever(function () {
    basic.pause(60000)
    if (minutes > 60) {
        minutes += 1
    } else {
        minutes = 100
    }
    if (minutes > 160) {
        minutes += 1
    } else {
        minutes = 200
    }
    if (minutes > 260) {
        minutes += 1
    } else {
        minutes = 300
    }
    if (minutes > 360) {
        minutes += 1
    } else {
        minutes = 400
    }
    if (minutes > 460) {
        minutes += 1
    } else {
        minutes = 500
    }
    if (minutes > 560) {
        minutes += 1
    } else {
        minutes = 600
    }
    if (minutes > 660) {
        minutes += 1
    } else {
        minutes = 700
    }
    if (minutes > 760) {
        minutes += 1
    } else {
        minutes = 800
    }
    if (minutes > 860) {
        minutes += 1
    } else {
        minutes = 900
    }
    if (minutes > 960) {
        minutes += 1
    } else {
        minutes = 1000
    }
    if (minutes > 1060) {
        minutes += 1
    } else {
        minutes = 1100
    }
    if (minutes > 1160) {
        minutes += 1
    } else {
        minutes = 1200
    }
    if (minutes > 1260) {
        minutes += 1
    } else {
        minutes = 1300
    }
    if (minutes > 1360) {
        minutes += 1
    } else {
        minutes = 1400
    }
    if (minutes > 1460) {
        minutes += 1
    } else {
        minutes = 1500
    }
    if (minutes > 1560) {
        minutes += 1
    } else {
        minutes = 1600
    }
    if (minutes > 1660) {
        minutes += 1
    } else {
        minutes = 1700
    }
    if (minutes > 1760) {
        minutes += 1
    } else {
        minutes = 1800
    }
    if (minutes > 1860) {
        minutes += 1
    } else {
        minutes = 1900
    }
    if (minutes > 1960) {
        minutes += 1
    } else {
        minutes = 2000
    }
    if (minutes > 2060) {
        minutes += 1
    } else {
        minutes = 2100
    }
    if (minutes > 2160) {
        minutes += 1
    } else {
        minutes = 2200
    }
    if (minutes > 2260) {
        minutes += 1
    } else {
        minutes = 2300
    }
    if (minutes > 2360) {
        minutes += 1
    } else {
        minutes = 2400
    }
    if (minutes == 730) {
        music.ringTone(262)
    }
    if (10 <= Steps) {
        music.stopAllSounds()
    }
    if (minutes == 830) {
        basic.showString("exercise")
    }
    if (minutes == 930) {
        basic.showString("exercise")
    }
    if (minutes == 1030) {
        basic.showString("exercise")
    }
    if (minutes == 1130) {
        basic.showString("exercise")
    }
    if (minutes == 2400) {
        Steps = 0
    }
    if (input.isGesture(Gesture.TiltLeft)) {
        sprite = game.createSprite(2, 2)
        sprite.move(1)
        basic.pause(100)
        sprite.ifOnEdgeBounce()
    }
})
