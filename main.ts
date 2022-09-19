input.onGesture(Gesture.TiltLeft, function () {
    sprite.move(-1)
})
input.onGesture(Gesture.TiltRight, function () {
    sprite.move(1)
})
let sprite: game.LedSprite = null
basic.showIcon(IconNames.Happy)
sprite = game.createSprite(2, 2)
basic.forever(function () {
	
})
