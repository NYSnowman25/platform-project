namespace SpriteKind {
    export const punch = SpriteKind.create()
    export const guard = SpriteKind.create()
    export const dumbGuard = SpriteKind.create()
    export const unconsciousGuard = SpriteKind.create()
    export const fightingGuard = SpriteKind.create()
    export const prisoner = SpriteKind.create()
    export const riotCop = SpriteKind.create()
    export const riotCop_Fight = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += -100
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (facing == 2) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 . . . . 
            . . . . 5 d d d 5 . . . . 
            . . . . 5 d d d d . . . . 
            . . . . 5 d 1 f d d . . . 
            . . . . . d d d d . . . . 
            . . . . . d d d d . . . . 
            . . . . . . d . . . . . . 
            . . . 4 4 4 d 4 4 4 . . . 
            . . . 4 4 4 4 4 4 4 . . . 
            . . . 4 4 4 4 4 4 4 . . . 
            . . . d 4 4 4 4 4 d . . . 
            . . . . 4 4 4 4 4 . . . . 
            . . . . 4 4 . 4 4 . . . . 
            . . . . 4 4 . 4 4 . . . . 
            . . . . f f . f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 . . . . 
            . . . . 5 d d d 5 . . . . 
            . . . . 5 d d d d . . . . 
            . . . . 5 d 1 f d d . . . 
            . . . . . d d d d . . . . 
            . . . . . d d d d . . . . 
            . . . . . . d . . . . . . 
            . . . 4 4 4 d 4 4 4 4 4 d 
            . . . 4 4 4 4 4 4 . . . . 
            . . . 4 d 4 4 4 4 . . . . 
            . . . . 4 4 4 4 4 . . . . 
            . . . . 4 4 4 4 4 . . . . 
            . . . . 4 4 . 4 4 . . . . 
            . . . . 4 4 . 4 4 . . . . 
            . . . . f f . f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 . . . . 
            . . . . 5 d d d 5 . . . . 
            . . . . 5 d d d d . . . . 
            . . . . 5 d 1 f d d . . . 
            . . . . . d d d d . . . . 
            . . . . . d d d d . . . . 
            . . . . . . d . . . . . . 
            . . . 4 4 4 d 4 4 4 . . . 
            . . . 4 4 4 4 4 4 4 . . . 
            . . . 4 4 4 4 4 4 4 . . . 
            . . . d 4 4 4 4 4 d . . . 
            . . . . 4 4 4 4 4 . . . . 
            . . . . 4 4 . 4 4 . . . . 
            . . . . 4 4 . 4 4 . . . . 
            . . . . f f . f f . . . . 
            `],
        100,
        false
        )
    } else {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . 
            . . . . 5 5 5 5 . . . . . 
            . . . . 5 d d d 5 . . . . 
            . . . . d d d d 5 . . . . 
            . . . d d f 1 d 5 . . . . 
            . . . . d d d d . . . . . 
            . . . . d d d d . . . . . 
            . . . . . . d . . . . . . 
            . . . 4 4 4 d 4 4 4 . . . 
            . . . 4 4 4 4 4 4 4 . . . 
            . . . 4 4 4 4 4 4 4 . . . 
            . . . d 4 4 4 4 4 d . . . 
            . . . . 4 4 4 4 4 . . . . 
            . . . . 4 4 . 4 4 . . . . 
            . . . . 4 4 . 4 4 . . . . 
            . . . . f f . f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . 5 5 5 5 . . . . . 
            . . . . 5 d d d 5 . . . . 
            . . . . d d d d 5 . . . . 
            . . . d d f 1 d 5 . . . . 
            . . . . d d d d . . . . . 
            . . . . d d d d . . . . . 
            . . . . . . d . . . . . . 
            d 4 4 4 4 4 d 4 4 4 . . . 
            . . . . 4 4 4 4 4 4 . . . 
            . . . . 4 4 4 4 d 4 . . . 
            . . . . 4 4 4 4 4 . . . . 
            . . . . 4 4 4 4 4 . . . . 
            . . . . 4 4 . 4 4 . . . . 
            . . . . 4 4 . 4 4 . . . . 
            . . . . f f . f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . 5 5 5 5 . . . . . 
            . . . . 5 d d d 5 . . . . 
            . . . . d d d d 5 . . . . 
            . . . d d f 1 d 5 . . . . 
            . . . . d d d d . . . . . 
            . . . . d d d d . . . . . 
            . . . . . . d . . . . . . 
            . . . 4 4 4 d 4 4 4 . . . 
            . . . 4 4 4 4 4 4 4 . . . 
            . . . 4 4 4 4 4 4 4 . . . 
            . . . d 4 4 4 4 4 d . . . 
            . . . . 4 4 4 4 4 . . . . 
            . . . . 4 4 . 4 4 . . . . 
            . . . . 4 4 . 4 4 . . . . 
            . . . . f f . f f . . . . 
            `],
        100,
        false
        )
    }
    mySprite.setKind(SpriteKind.punch)
    pause(100)
    mySprite.setKind(SpriteKind.Player)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    mySprite.vy += -400
})
function fight () {
    animation.runImageAnimation(
    jailCop2,
    [img`
        ....................
        ......8888..........
        .....888888.........
        ......dddd..........
        .....ddf1d..........
        ......dddd..........
        ......dddd..........
        ........d...........
        ...d.888d888........
        ...99.88889.........
        ......88d98.........
        ......88888.........
        ......88888.........
        .....88..88.........
        ....88...88.........
        ....ff...ff.........
        `,img`
        ....................
        ......8888..........
        .....888888.........
        ......dddd..........
        .....ddf1d..........
        ......dddd..........
        ......dddd..........
        ........d...........
        ..d99888d888........
        ......88889.........
        ......88d98.........
        ......88888.........
        ......88888.........
        .....88..88.........
        ....88...88.........
        ....ff...ff.........
        `,img`
        ....................
        ......8888..........
        .....888888.........
        ......dddd..........
        .....ddf1d..........
        ......dddd..........
        ......dddd..........
        ........d...........
        ...d.888d888........
        ...99.88889.........
        ......88d98.........
        ......88888.........
        ......88888.........
        .....88..88.........
        ....88...88.........
        ....ff...ff.........
        `],
    100,
    true
    )
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    riotCopfight.destroy(effects.fire, 500)
})
sprites.onOverlap(SpriteKind.punch, SpriteKind.dumbGuard, function (sprite, otherSprite) {
    animation.runImageAnimation(
    dumbGuard,
    [img`
        ....................
        .....8888...........
        ....888888..........
        .....dddd...........
        .....d1fdd..........
        .....dddd...........
        .....dddd...........
        ......d.............
        ...888d888..........
        ...8888888..........
        ...8888588..........
        ...d88888d..........
        ....88888...........
        ....88.88...........
        ....88.88...........
        ....ff.ff...........
        `,img`
        .....8888...........
        ....888888..........
        .....dddd...........
        .....d1fdd..........
        .....dddd...........
        .....dddd...........
        ......d.............
        ...888d888..........
        ...8888888..........
        ...8888588..........
        ...d88888d..........
        ....88888...........
        ....88.88...........
        ....88.88...........
        ....ff.ff...........
        ....................
        `,img`
        ....................
        ....................
        ....................
        ......d888..........
        ..f8888888.....8....
        ..f8888888.dddd88...
        .....8888dddd1d88...
        ..f8888588.ddfd88...
        ..f8888888.dddd88...
        ......d888...d.8....
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `,img`
        ....................
        ....................
        ....................
        ....................
        ....................
        .......d888.........
        ...f8888888.....8...
        ...f8888888.dddd88..
        ......8888dddd1d88..
        ...f8888588.ddfd88..
        ...f8888888.dddd88..
        .......d888...d.8...
        ....................
        ....................
        ....................
        ....................
        `,img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ........d888........
        ....f8888888.....8..
        ....f8888888.dddd88.
        .......8888dddd1d88.
        ....f8888588.ddfd88.
        ....f8888888.dddd88.
        ........d888...d.8..
        ....................
        ....................
        `,img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .........d888.......
        .....f8888888.....8.
        .....f8888888.dddd88
        ........8888dddd1d88
        .....f8888588.ddfd88
        .....f8888888.dddd88
        .........d888...d.8.
        `],
    100,
    false
    )
})
sprites.onOverlap(SpriteKind.punch, SpriteKind.riotCop_Fight, function (sprite, otherSprite) {
    statusbar.value += -2
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile31`, function (sprite, location) {
    level2()
})
sprites.onOverlap(SpriteKind.punch, SpriteKind.guard, function (sprite, otherSprite) {
    jailCop2.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . d d f 1 d . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . . . d . . . . . . . 
        . . . d 9 9 8 d 9 9 8 . . . . . 
        . . . . . . 8 8 8 8 8 . . . . . 
        . . . . . . 8 8 8 5 8 . . . . . 
        . . . . . . 8 8 8 8 8 . . . . . 
        . . . . . . 8 8 8 8 8 . . . . . 
        . . . . . 8 8 . . 8 8 . . . . . 
        . . . f 8 8 . f 8 8 . . . . . . 
        . . . f 8 . . f 8 . . . . . . . 
        `)
    jailCop2.setFlag(SpriteFlag.Ghost, true)
    jailCop2.setFlag(SpriteFlag.AutoDestroy, true)
    jailCop2.ax = 30000
})
function level2 () {
    tiles.setTilemap(tilemap`level3`)
    jailCop1.destroy()
    dumbGuard.destroy()
    mySprite.setPosition(0, 55)
    riotCopfight = sprites.create(img`
        . . . . . . . . . . . . . 
        . . . . . . a a a a . . . 
        . . . . . a a a a a a . . 
        . . . . . b b a a a a . . 
        . . . . . b b a a a a . . 
        . . 9 . . b b a a a a . . 
        . . 9 . . . a a a a . . . 
        . . 9 . . . . 6 6 6 . . . 
        . . f 6 6 6 6 6 6 6 6 6 . 
        . . 9 . . . 6 6 6 6 6 6 . 
        . . . . . . 6 6 6 6 6 6 . 
        . . . . . . 6 6 6 6 6 f . 
        . . . . . . 6 6 6 6 6 . . 
        . . . . . . 6 6 . 6 6 . . 
        . . . . . . 6 6 . 6 6 . . 
        . . . . . . f f . f f . . 
        `, SpriteKind.riotCop_Fight)
    riotCopfight.setPosition(250, 55)
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.value = 10
    statusbar.setColor(4, 2)
    statusbar.attachToSprite(riotCopfight, 2, 2)
}
scene.onOverlapTile(SpriteKind.punch, assets.tile`myTile30`, function (sprite, location) {
    tiles.setTilemap(tilemap`level2`)
    game.showLongText("All cell doors are now open.", DialogLayout.Top)
    p1 = sprites.create(img`
        . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 . . . . 
        . . . . 2 d d d 2 . . . . 
        . . . . 2 d d d d . . . . 
        . . . . 2 d 1 f d d . . . 
        . . . . . d d d d . . . . 
        . . . . . d d d d . . . . 
        . . . . . . d . . . . . . 
        . . . 4 4 4 d 4 4 4 . . . 
        . . . 4 4 4 4 4 4 4 . . . 
        . . . 4 4 4 4 4 4 4 . . . 
        . . . d 4 4 4 4 4 d . . . 
        . . . . 4 4 4 4 4 . . . . 
        . . . . 4 4 . 4 4 . . . . 
        . . . . 4 4 . 4 4 . . . . 
        . . . . f f . f f . . . . 
        `, SpriteKind.prisoner)
    p2 = sprites.create(img`
        . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 . . . . 
        . . . . 2 d d d 2 . . . . 
        . . . . 2 d d d d . . . . 
        . . . . 2 d 1 f d d . . . 
        . . . . . d d d d . . . . 
        . . . . . d d d d . . . . 
        . . . . . . d . . . . . . 
        . . . 4 4 4 d 4 4 4 . . . 
        . . . 4 4 4 4 4 4 4 . . . 
        . . . 4 4 4 4 4 4 4 . . . 
        . . . d 4 4 4 4 4 d . . . 
        . . . . 4 4 4 4 4 . . . . 
        . . . . 4 4 . 4 4 . . . . 
        . . . . 4 4 . 4 4 . . . . 
        . . . . f f . f f . . . . 
        `, SpriteKind.prisoner)
    p3 = sprites.create(img`
        . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 . . . . 
        . . . . 2 d d d 2 . . . . 
        . . . . 2 d d d d . . . . 
        . . . . 2 d 1 f d d . . . 
        . . . . . d d d d . . . . 
        . . . . . d d d d . . . . 
        . . . . . . d . . . . . . 
        . . . 4 4 4 d 4 4 4 . . . 
        . . . 4 4 4 4 4 4 4 . . . 
        . . . 4 4 4 4 4 4 4 . . . 
        . . . d 4 4 4 4 4 d . . . 
        . . . . 4 4 4 4 4 . . . . 
        . . . . 4 4 . 4 4 . . . . 
        . . . . 4 4 . 4 4 . . . . 
        . . . . f f . f f . . . . 
        `, SpriteKind.prisoner)
    p4 = sprites.create(img`
        . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 . . . . 
        . . . . 2 d d d 2 . . . . 
        . . . . 2 d d d d . . . . 
        . . . . 2 d 1 f d d . . . 
        . . . . . d d d d . . . . 
        . . . . . d d d d . . . . 
        . . . . . . d . . . . . . 
        . . . 4 4 4 d 4 4 4 . . . 
        . . . 4 4 4 4 4 4 4 . . . 
        . . . 4 4 4 4 4 4 4 . . . 
        . . . d 4 4 4 4 4 d . . . 
        . . . . 4 4 4 4 4 . . . . 
        . . . . 4 4 . 4 4 . . . . 
        . . . . 4 4 . 4 4 . . . . 
        . . . . f f . f f . . . . 
        `, SpriteKind.prisoner)
    p5 = sprites.create(img`
        . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 . . . . 
        . . . . 2 d d d 2 . . . . 
        . . . . 2 d d d d . . . . 
        . . . . 2 d 1 f d d . . . 
        . . . . . d d d d . . . . 
        . . . . . d d d d . . . . 
        . . . . . . d . . . . . . 
        . . . 4 4 4 d 4 4 4 . . . 
        . . . 4 4 4 4 4 4 4 . . . 
        . . . 4 4 4 4 4 4 4 . . . 
        . . . d 4 4 4 4 4 d . . . 
        . . . . 4 4 4 4 4 . . . . 
        . . . . 4 4 . 4 4 . . . . 
        . . . . 4 4 . 4 4 . . . . 
        . . . . f f . f f . . . . 
        `, SpriteKind.prisoner)
    p1.setFlag(SpriteFlag.Ghost, true)
    p2.setFlag(SpriteFlag.Ghost, true)
    p3.setFlag(SpriteFlag.Ghost, true)
    p4.setFlag(SpriteFlag.Ghost, true)
    p5.setFlag(SpriteFlag.Ghost, true)
    p1.setPosition(130, 105)
    p2.setPosition(160, 105)
    p3.setPosition(190, 105)
    p4.setPosition(220, 105)
    p5.setPosition(250, 105)
    p1.vx = 300
    p2.vx = 300
    p3.vx = 300
    p4.vx = 300
    p5.vx = 300
})
let p5: Sprite = null
let p4: Sprite = null
let p3: Sprite = null
let p2: Sprite = null
let p1: Sprite = null
let statusbar: StatusBarSprite = null
let riotCopfight: Sprite = null
let facing = 0
let jailCop2: Sprite = null
let jailCop1: Sprite = null
let dumbGuard: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555
    9999999999999999999999999999999999991111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555
    9999999999999999999999999999999111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555555555
    9999999999999999999999999999111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555
    9999999999999999999999999111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555
    9999999999999999999999991111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555555
    9999999999999999911111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555
    9999999999999999991111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555
    9999999999999999991111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555
    9999999999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555
    9999999999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555
    9999999999999999999999911111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555
    9999999999999999999999999999991111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555
    9999999999999999999999999999999991111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555
    9999999999999999999999999999999999991199999999999999999999999999999999999999999999999999999999999999999911199999999999999999999999999999999999999999999999999955
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111119999999999999999999999999999999999999999999999999995
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111199999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111199999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111199999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111199999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111119999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111199999999999999999999999999999999999999999999999
    9999999999999999999999999999799999999999999999999999999999999999999999999999999999999999999999999999999111111199999999999999999999999999999999999999999999999999
    9999999999999999999999999997799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999997779999999999999999997999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999977777999999999999999977799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999777777799999999999999977799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999797777999999999999999777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999997777799999dd99999999777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999997777777999dddd9999999977779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999977779779dd55dd999997777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999977777799dd5555dd99999777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999779777779dd5555dd99997777797799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999bbbbbffddd55dddff977777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999bbbbbbffddddddddffb99777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999979999999999bbbbbbbbffddddddffbbb9977777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999977799999999bbbbbbbbbbffffffffbbbbbbbb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999997799999999bbbbbbbbbbbbffffffbbbbbbbbbb99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999977799999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999977777999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999977799999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999777999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999777799bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999997bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddddddd
    999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddddddd
    99999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddddddd
    9999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddddddd
    99999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddddddd
    9999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddddddd
    999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999999999999999999999999999999999999999dddddddd99ddddddddddddddddddddddddd
    99999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999999999999999999ddddddddd99ddddddddddddddddddddddddd
    999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999999999dddddddddd99ddddddddddddddddddddddddd
    99bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999999999999999dddddddddd99ddddddddddddddddddddddddd
    9bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999999dddddddddd99ddddddddddddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999999ddd99ddd999ddddddddddddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999ddd99ddd999ddddddddddddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 . . . . 
    . . . . 5 d d d 5 . . . . 
    . . . . 5 d d d d . . . . 
    . . . . 5 d 1 f d d . . . 
    . . . . . d d d d . . . . 
    . . . . . d d d d . . . . 
    . . . . . . d . . . . . . 
    . . . 4 4 4 d 4 4 4 . . . 
    . . . 4 4 4 4 4 4 4 . . . 
    . . . 4 4 4 4 4 4 4 . . . 
    . . . d 4 4 4 4 4 d . . . 
    . . . . 4 4 4 4 4 . . . . 
    . . . . 4 4 . 4 4 . . . . 
    . . . . 4 4 . 4 4 . . . . 
    . . . . f f . f f . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(15, 105)
controller.moveSprite(mySprite, 100, 0)
dumbGuard = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . . . 8 8 8 8 . . . . 
    . . . . 8 8 8 8 8 8 . . . 
    . . . . . d d d d . . . . 
    . . . . . d 1 f d d . . . 
    . . . . . d d d d . . . . 
    . . . . . d d d d . . . . 
    . . . . . . d . . . . . . 
    . . . 8 8 8 d 8 8 8 . . . 
    . . . 8 8 8 8 8 8 8 . . . 
    . . . 8 8 8 8 5 8 8 . . . 
    . . . d 8 8 8 8 8 d . . . 
    . . . . 8 8 8 8 8 . . . . 
    . . . . 8 8 . 8 8 . . . . 
    . . . . 8 8 . 8 8 . . . . 
    . . . . f f . f f . . . . 
    `, SpriteKind.dumbGuard)
dumbGuard.setPosition(65, 105)
jailCop1 = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . . 8 8 8 8 . . . . . 
    . . . 8 8 8 8 8 8 . . . . 
    . . . . d d d d . . . . . 
    . . . d d f 1 d . . . . . 
    . . . . d d d d . . . . . 
    . . . . d d d d . . . . . 
    . . . . . . d . . . . . . 
    . . . 8 8 8 d 8 8 8 . . . 
    . . . 8 8 8 8 8 8 8 . . . 
    . . . 8 8 8 8 5 8 8 . . . 
    . . . d 8 8 8 8 8 d . . . 
    . . . . 8 8 8 8 8 . . . . 
    . . . . 8 8 . 8 8 . . . . 
    . . . . 8 8 . 8 8 . . . . 
    . . . . f f . f f . . . . 
    `, SpriteKind.guard)
jailCop1.setPosition(130, 72)
jailCop2 = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . . 8 8 8 8 . . . . . 
    . . . 8 8 8 8 8 8 . . . . 
    . . . . d d d d . . . . . 
    . . . d d f 1 d . . . . . 
    . . . . d d d d . . . . . 
    . . . . d d d d . . . . . 
    . . . . . . d . . . . . . 
    . . . 8 8 8 d 8 8 8 . . . 
    . . . 8 8 8 8 8 8 8 . . . 
    . . . 8 8 8 8 5 8 8 . . . 
    . . . d 8 8 8 8 8 d . . . 
    . . . . 8 8 8 8 8 . . . . 
    . . . . 8 8 . 8 8 . . . . 
    . . . . 8 8 . 8 8 . . . . 
    . . . . f f . f f . . . . 
    `, SpriteKind.guard)
jailCop2.setPosition(130, 40)
forever(function () {
    mySprite.ay = 200
    scene.cameraFollowSprite(mySprite)
})
forever(function () {
    if (mySprite.vx < 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . 
            . . . . 5 5 5 5 . . . . . 
            . . . . 5 d d d 5 . . . . 
            . . . . d d d d 5 . . . . 
            . . . d d f 1 d 5 . . . . 
            . . . . d d d d . . . . . 
            . . . . d d d d . . . . . 
            . . . . . . d . . . . . . 
            . . . 4 4 4 d 4 4 4 . . . 
            . . . 4 4 4 4 4 4 4 . . . 
            . . . 4 4 4 4 4 4 4 . . . 
            . . . d 4 4 4 4 4 d . . . 
            . . . . 4 4 4 4 4 . . . . 
            . . . . 4 4 . 4 4 . . . . 
            . . . . 4 4 . 4 4 . . . . 
            . . . . f f . f f . . . . 
            `)
        facing = 1
    }
})
forever(function () {
    if (sight.isInSight(
    jailCop2,
    mySprite,
    20,
    false
    )) {
        fight()
    }
})
forever(function () {
    if (mySprite.vx > 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 . . . . 
            . . . . 5 d d d 5 . . . . 
            . . . . 5 d d d d . . . . 
            . . . . 5 d 1 f d d . . . 
            . . . . . d d d d . . . . 
            . . . . . d d d d . . . . 
            . . . . . . d . . . . . . 
            . . . 4 4 4 d 4 4 4 . . . 
            . . . 4 4 4 4 4 4 4 . . . 
            . . . 4 4 4 4 4 4 4 . . . 
            . . . d 4 4 4 4 4 d . . . 
            . . . . 4 4 4 4 4 . . . . 
            . . . . 4 4 . 4 4 . . . . 
            . . . . 4 4 . 4 4 . . . . 
            . . . . f f . f f . . . . 
            `)
        facing = 2
    }
})
