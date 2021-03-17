let minutes = 0
basic.forever(function () {
    basic.pause(6000)
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
    }
})
