namespace SpriteKind {
    export const punch = SpriteKind.create()
    export const guard = SpriteKind.create()
    export const dumbGuard = SpriteKind.create()
    export const unconsciousGuard = SpriteKind.create()
    export const fightingGuard = SpriteKind.create()
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
            . . . . . 2 2 2 2 . . . . 
            . . . . 2 5 5 5 2 . . . . 
            . . . . 2 5 5 5 5 . . . . 
            . . . . 2 5 1 f 5 5 . . . 
            . . . . . 5 5 5 5 . . . . 
            . . . . . 5 5 5 5 . . . . 
            . . . . . . 5 . . . . . . 
            . . . 4 4 4 5 4 4 4 . . . 
            . . . 4 4 4 4 4 4 4 . . . 
            . . . 4 4 4 4 4 4 4 . . . 
            . . . 5 4 4 4 4 4 5 . . . 
            . . . . 4 4 4 4 4 . . . . 
            . . . . 4 4 . 4 4 . . . . 
            . . . . 4 4 . 4 4 . . . . 
            . . . . f f . f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . 2 2 2 2 . . . . 
            . . . . 2 5 5 5 2 . . . . 
            . . . . 2 5 5 5 5 . . . . 
            . . . . 2 5 1 f 5 5 . . . 
            . . . . . 5 5 5 5 . . . . 
            . . . . . 5 5 5 5 . . . . 
            . . . . . . 5 . . . . . . 
            . . . 4 4 4 5 4 4 4 4 4 5 
            . . . 4 4 4 4 4 4 . . . . 
            . . . 4 5 4 4 4 4 . . . . 
            . . . . 4 4 4 4 4 . . . . 
            . . . . 4 4 4 4 4 . . . . 
            . . . . 4 4 . 4 4 . . . . 
            . . . . 4 4 . 4 4 . . . . 
            . . . . f f . f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . 2 2 2 2 . . . . 
            . . . . 2 5 5 5 2 . . . . 
            . . . . 2 5 5 5 5 . . . . 
            . . . . 2 5 1 f 5 5 . . . 
            . . . . . 5 5 5 5 . . . . 
            . . . . . 5 5 5 5 . . . . 
            . . . . . . 5 . . . . . . 
            . . . 4 4 4 5 4 4 4 . . . 
            . . . 4 4 4 4 4 4 4 . . . 
            . . . 4 4 4 4 4 4 4 . . . 
            . . . 5 4 4 4 4 4 5 . . . 
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
            . . . . 2 2 2 2 . . . . . 
            . . . . 2 5 5 5 2 . . . . 
            . . . . 5 5 5 5 2 . . . . 
            . . . 5 5 f 1 5 2 . . . . 
            . . . . 5 5 5 5 . . . . . 
            . . . . 5 5 5 5 . . . . . 
            . . . . . . 5 . . . . . . 
            . . . 4 4 4 5 4 4 4 . . . 
            . . . 4 4 4 4 4 4 4 . . . 
            . . . 4 4 4 4 4 4 4 . . . 
            . . . 5 4 4 4 4 4 5 . . . 
            . . . . 4 4 4 4 4 . . . . 
            . . . . 4 4 . 4 4 . . . . 
            . . . . 4 4 . 4 4 . . . . 
            . . . . f f . f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . 2 2 2 2 . . . . . 
            . . . . 2 5 5 5 2 . . . . 
            . . . . 5 5 5 5 2 . . . . 
            . . . 5 5 f 1 5 2 . . . . 
            . . . . 5 5 5 5 . . . . . 
            . . . . 5 5 5 5 . . . . . 
            . . . . . . 5 . . . . . . 
            5 4 4 4 4 4 5 4 4 4 . . . 
            . . . . 4 4 4 4 4 4 . . . 
            . . . . 4 4 4 4 5 4 . . . 
            . . . . 4 4 4 4 4 . . . . 
            . . . . 4 4 4 4 4 . . . . 
            . . . . 4 4 . 4 4 . . . . 
            . . . . 4 4 . 4 4 . . . . 
            . . . . f f . f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . 2 2 2 2 . . . . . 
            . . . . 2 5 5 5 2 . . . . 
            . . . . 5 5 5 5 2 . . . . 
            . . . 5 5 f 1 5 2 . . . . 
            . . . . 5 5 5 5 . . . . . 
            . . . . 5 5 5 5 . . . . . 
            . . . . . . 5 . . . . . . 
            . . . 4 4 4 5 4 4 4 . . . 
            . . . 4 4 4 4 4 4 4 . . . 
            . . . 4 4 4 4 4 4 4 . . . 
            . . . 5 4 4 4 4 4 5 . . . 
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
    jailCop2.setImage(img`
        . . . . . . . . . . . . . 
        . . . . . . 8 8 8 8 . . . 
        . . . . . 8 8 8 8 8 8 . . 
        . . . . . . 5 5 5 5 . . . 
        . . . . . 5 5 f 1 5 . . . 
        . . . . . . 5 5 5 5 . . . 
        . . . . . . 5 5 5 5 . . . 
        . . . . . . . . 5 . . . . 
        . . . 1 . 8 8 8 5 8 8 8 . 
        . . . 9 9 . 8 8 8 8 9 . . 
        . . . . . . 8 8 1 9 8 . . 
        . . . . . . 8 8 8 8 8 . . 
        . . . . . . 8 8 8 8 8 . . 
        . . . . . 8 8 . . 8 8 . . 
        . . . . 8 8 . . . 8 8 . . 
        . . . . f f . . . f f . . 
        `)
    animation.runImageAnimation(
    jailCop2,
    [img`
        ....................
        ......8888..........
        .....888888.........
        ......5555..........
        .....55f15..........
        ......5555..........
        ......5555..........
        ........5...........
        ...1.8885888........
        ...99.88889.........
        ......88198.........
        ......88888.........
        ......88888.........
        .....88..88.........
        ....88...88.........
        ....ff...ff.........
        `,img`
        ....................
        ......8888..........
        .....888888.........
        ......5555..........
        .....55f15..........
        ......5555..........
        ......5555..........
        ........5...........
        ..1998885888........
        ......88889.........
        ......88198.........
        ......88888.........
        ......88888.........
        .....88..88.........
        ....88...88.........
        ....ff...ff.........
        `,img`
        ....................
        ......8888..........
        .....888888.........
        ......5555..........
        .....55f15..........
        ......5555..........
        ......5555..........
        ........5...........
        ...1.8885888........
        ...99.88889.........
        ......88198.........
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
sprites.onOverlap(SpriteKind.punch, SpriteKind.dumbGuard, function (sprite, otherSprite) {
    animation.runImageAnimation(
    dumbGuard,
    [img`
        ....................
        .....8888...........
        ....888888..........
        .....5555...........
        .....51f55..........
        .....5555...........
        .....5555...........
        ......5.............
        ...8885888..........
        ...8888888..........
        ...8888588..........
        ...1888881..........
        ....88888...........
        ....88.88...........
        ....88.88...........
        ....ff.ff...........
        `,img`
        .....8888...........
        ....888888..........
        .....5555...........
        .....51f55..........
        .....5555...........
        .....5555...........
        ......5.............
        ...8885888..........
        ...8888888..........
        ...8888588..........
        ...1888881..........
        ....88888...........
        ....88.88...........
        ....88.88...........
        ....ff.ff...........
        ....................
        `,img`
        ....................
        ....................
        ....................
        ......1888..........
        ..f8888888.....8....
        ..f8888888.555588...
        .....888855551588...
        ..f8888588.55f588...
        ..f8888888.555588...
        ......1888...5.8....
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
        .......1888.........
        ...f8888888.....8...
        ...f8888888.555588..
        ......888855551588..
        ...f8888588.55f588..
        ...f8888888.555588..
        .......1888...5.8...
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
        ........1888........
        ....f8888888.....8..
        ....f8888888.555588.
        .......888855551588.
        ....f8888588.55f588.
        ....f8888888.555588.
        ........1888...5.8..
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
        .........1888.......
        .....f8888888.....8.
        .....f8888888.555588
        ........888855551588
        .....f8888588.55f588
        .....f8888888.555588
        .........1888...5.8.
        `],
    100,
    false
    )
})
sprites.onOverlap(SpriteKind.punch, SpriteKind.guard, function (sprite, otherSprite) {
    animation.runImageAnimation(
    jailCop2,
    [img`
        ....................
        ....8888............
        ...888888...........
        ....5555............
        ...55f15............
        ....5555............
        ....5555............
        ......5.............
        ...8885888..........
        ...8888888..........
        ...8858888..........
        ...1888881..........
        ....88888...........
        ....88.88...........
        ....88.88...........
        ....ff.ff...........
        `,img`
        ....................
        ....................
        ....................
        ....................
        ......1888...5.8....
        ..f8888888.555588...
        ..f8888588.55f588...
        .....888855551588...
        ..f8888888.555588...
        ..f8888888.....8....
        ......1888..........
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
        ....................
        .......1888...5.8...
        ...f8888888.555588..
        ...f8888588.55f588..
        ......888855551588..
        ...f8888888.555588..
        ...f8888888.....8...
        .......1888.........
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
        ....................
        ........1888...5.8..
        ....f8888888.555588.
        ....f8888588.55f588.
        .......888855551588.
        ....f8888888.555588.
        ....f8888888.....8..
        ........1888........
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
        .........1888...5.8.
        .....f8888888.555588
        .....f8888588.55f588
        ........888855551588
        .....f8888888.555588
        .....f8888888.....8.
        .........1888.......
        `],
    100,
    false
    )
})
function level2 () {
	
}
let facing = 0
let jailCop2: Sprite = null
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
    . . . . . 2 2 2 2 . . . . 
    . . . . 2 5 5 5 2 . . . . 
    . . . . 2 5 5 5 5 . . . . 
    . . . . 2 5 1 f 5 5 . . . 
    . . . . . 5 5 5 5 . . . . 
    . . . . . 5 5 5 5 . . . . 
    . . . . . . 5 . . . . . . 
    . . . 4 4 4 5 4 4 4 . . . 
    . . . 4 4 4 4 4 4 4 . . . 
    . . . 4 4 4 4 4 4 4 . . . 
    . . . 5 4 4 4 4 4 5 . . . 
    . . . . 4 4 4 4 4 . . . . 
    . . . . 4 4 . 4 4 . . . . 
    . . . . 4 4 . 4 4 . . . . 
    . . . . f f . f f . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(15, 105)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
dumbGuard = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . . . 8 8 8 8 . . . . 
    . . . . 8 8 8 8 8 8 . . . 
    . . . . . 5 5 5 5 . . . . 
    . . . . . 5 1 f 5 5 . . . 
    . . . . . 5 5 5 5 . . . . 
    . . . . . 5 5 5 5 . . . . 
    . . . . . . 5 . . . . . . 
    . . . 8 8 8 5 8 8 8 . . . 
    . . . 8 8 8 8 8 8 8 . . . 
    . . . 8 8 8 8 5 8 8 . . . 
    . . . 1 8 8 8 8 8 1 . . . 
    . . . . 8 8 8 8 8 . . . . 
    . . . . 8 8 . 8 8 . . . . 
    . . . . 8 8 . 8 8 . . . . 
    . . . . f f . f f . . . . 
    `, SpriteKind.dumbGuard)
dumbGuard.setPosition(65, 105)
let jailCop1 = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . . 8 8 8 8 . . . . . 
    . . . 8 8 8 8 8 8 . . . . 
    . . . . 5 5 5 5 . . . . . 
    . . . 5 5 f 1 5 . . . . . 
    . . . . 5 5 5 5 . . . . . 
    . . . . 5 5 5 5 . . . . . 
    . . . . . . 5 . . . . . . 
    . . . 8 8 8 5 8 8 8 . . . 
    . . . 8 8 8 8 8 8 8 . . . 
    . . . 8 8 8 8 5 8 8 . . . 
    . . . 1 8 8 8 8 8 1 . . . 
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
    . . . . 5 5 5 5 . . . . . 
    . . . 5 5 f 1 5 . . . . . 
    . . . . 5 5 5 5 . . . . . 
    . . . . 5 5 5 5 . . . . . 
    . . . . . . 5 . . . . . . 
    . . . 8 8 8 5 8 8 8 . . . 
    . . . 8 8 8 8 8 8 8 . . . 
    . . . 8 8 8 8 5 8 8 . . . 
    . . . 1 8 8 8 8 8 1 . . . 
    . . . . 8 8 8 8 8 . . . . 
    . . . . 8 8 . 8 8 . . . . 
    . . . . 8 8 . 8 8 . . . . 
    . . . . f f . f f . . . . 
    `, SpriteKind.guard)
jailCop2.setPosition(130, 40)
forever(function () {
    mySprite.ay = 200
})
forever(function () {
    if (mySprite.vx < 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . 
            . . . . 2 2 2 2 . . . . . 
            . . . . 2 5 5 5 2 . . . . 
            . . . . 5 5 5 5 2 . . . . 
            . . . 5 5 f 1 5 2 . . . . 
            . . . . 5 5 5 5 . . . . . 
            . . . . 5 5 5 5 . . . . . 
            . . . . . . 5 . . . . . . 
            . . . 4 4 4 5 4 4 4 . . . 
            . . . 4 4 4 4 4 4 4 . . . 
            . . . 4 4 4 4 4 4 4 . . . 
            . . . 5 4 4 4 4 4 5 . . . 
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
            . . . . . 2 2 2 2 . . . . 
            . . . . 2 5 5 5 2 . . . . 
            . . . . 2 5 5 5 5 . . . . 
            . . . . 2 5 1 f 5 5 . . . 
            . . . . . 5 5 5 5 . . . . 
            . . . . . 5 5 5 5 . . . . 
            . . . . . . 5 . . . . . . 
            . . . 4 4 4 5 4 4 4 . . . 
            . . . 4 4 4 4 4 4 4 . . . 
            . . . 4 4 4 4 4 4 4 . . . 
            . . . 5 4 4 4 4 4 5 . . . 
            . . . . 4 4 4 4 4 . . . . 
            . . . . 4 4 . 4 4 . . . . 
            . . . . 4 4 . 4 4 . . . . 
            . . . . f f . f f . . . . 
            `)
        facing = 2
    }
})
