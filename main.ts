controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += -100
})
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 7 7 7 7 7 . . . . . . 
    . . . . . 7 . . . 7 . . . . . . 
    . . . . . 7 . . . 7 . . . . . . 
    . . . . . 7 . . . 7 . . . . . . 
    . . . . . 7 7 7 7 7 . . . . . . 
    . . . . 7 . . 7 . . 7 . . . . . 
    . . . . . 7 7 7 7 7 . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . 7 . 7 . . . . . . . 
    . . . . . . 7 . 7 . . . . . . . 
    . . . . . 7 . . . 7 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
mySprite.setPosition(15, 105)
controller.moveSprite(mySprite, 100, 0)
scene.setBackgroundImage(assets.tile`myTile18`)
forever(function () {
    mySprite.ay = 200
})
