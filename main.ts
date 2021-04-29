controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += -100
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    mySprite.vy += -400
})
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 . . . . 
    . . . . 2 2 e e 2 . . . . 
    . . . . 2 e e e e . . . . 
    . . . . 2 e 1 f e e . . . 
    . . . . . e e e e . . . . 
    . . . . . e e e e . . . . 
    . . . . . . e . . . . . . 
    . . . 4 4 4 e 4 4 4 . . . 
    . . . 4 4 4 4 4 4 4 . . . 
    . . . 4 4 4 4 4 4 4 . . . 
    . . . e 4 4 4 4 4 e . . . 
    . . . . 4 4 4 4 4 . . . . 
    . . . . 4 4 . 4 4 . . . . 
    . . . . 4 4 . 4 4 . . . . 
    . . . . f f . f f . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
mySprite.setPosition(15, 105)
controller.moveSprite(mySprite, 100, 0)
scene.setBackgroundImage(assets.tile`myTile18`)
forever(function () {
    mySprite.ay = 200
})
