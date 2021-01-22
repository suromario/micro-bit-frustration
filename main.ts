input.onButtonPressed(Button.A, function () {
    sturen.change(LedSpriteProperty.X, -1)
    if (sturen.isTouching(doel)) {
        score += 1
        basic.showNumber(score)
        basic.pause(100)
        basic.clearScreen()
        sturen.set(LedSpriteProperty.X, 2)
        sturen.set(LedSpriteProperty.Y, 2)
        doel.set(LedSpriteProperty.X, randint(0, 4))
        doel.set(LedSpriteProperty.Y, randint(0, 4))
        while (doel.get(LedSpriteProperty.X) == 2 && doel.get(LedSpriteProperty.Y) == 2) {
            doel.set(LedSpriteProperty.X, randint(0, 4))
            doel.set(LedSpriteProperty.Y, randint(0, 4))
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    sturen.change(LedSpriteProperty.Y, 1)
    if (sturen.isTouching(doel)) {
        score += 1
        basic.showNumber(score)
        basic.pause(100)
        basic.clearScreen()
        sturen.set(LedSpriteProperty.X, 2)
        sturen.set(LedSpriteProperty.Y, 2)
        doel.set(LedSpriteProperty.X, randint(0, 4))
        doel.set(LedSpriteProperty.Y, randint(0, 4))
        while (doel.get(LedSpriteProperty.X) == 2 && doel.get(LedSpriteProperty.Y) == 2) {
            doel.set(LedSpriteProperty.X, randint(0, 4))
            doel.set(LedSpriteProperty.Y, randint(0, 4))
        }
    }
})
input.onButtonPressed(Button.B, function () {
    sturen.change(LedSpriteProperty.X, 1)
    if (sturen.isTouching(doel)) {
        score += 1
        basic.showNumber(score)
        basic.pause(100)
        basic.clearScreen()
        sturen.set(LedSpriteProperty.X, 2)
        sturen.set(LedSpriteProperty.Y, 2)
        doel.set(LedSpriteProperty.X, randint(0, 4))
        doel.set(LedSpriteProperty.Y, randint(0, 4))
        while (doel.get(LedSpriteProperty.X) == 2 && doel.get(LedSpriteProperty.Y) == 2) {
            doel.set(LedSpriteProperty.X, randint(0, 4))
            doel.set(LedSpriteProperty.Y, randint(0, 4))
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    sturen.change(LedSpriteProperty.Y, -1)
    if (sturen.isTouching(doel)) {
        score += 1
        basic.showNumber(score)
        basic.pause(100)
        basic.clearScreen()
        sturen.set(LedSpriteProperty.X, 2)
        sturen.set(LedSpriteProperty.Y, 2)
        doel.set(LedSpriteProperty.X, randint(0, 4))
        doel.set(LedSpriteProperty.Y, randint(0, 4))
        while (doel.get(LedSpriteProperty.X) == 2 && doel.get(LedSpriteProperty.Y) == 2) {
            doel.set(LedSpriteProperty.X, randint(0, 4))
            doel.set(LedSpriteProperty.Y, randint(0, 4))
        }
    }
})
let doel: game.LedSprite = null
let sturen: game.LedSprite = null
let score = 0
score = 0
let hled = 2
let vled = 2
sturen = game.createSprite(hled, vled)
let hdoel = randint(0, 4)
let vdoel = randint(0, 4)
doel = game.createSprite(hdoel, vdoel)
