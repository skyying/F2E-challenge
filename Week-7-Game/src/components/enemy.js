import {
    degreeToRadian,
    getRandomInt,
    posofPointOnCircle,
    Distance,
    RandomPoint,
    posAfterRotate,
} from "./calc.js"
import {Bullet, TrigBullet} from "./Bullet.js"
import {CENTER_POS} from "./Const.js"
import Emitter from "./Eimtter.js"


// all kinds of enemy
export default class Enemy extends Emitter {
    constructor() {
        super()
        this.positionRadius = window.innerHeight / 2 - 10
        this.radius = window.innerWidth / 2 - 10
        this.life = 2
        this.isDead = this.life === 0
        this.setPos()
    }
    setPos() {
        this.pos = posofPointOnCircle(
            CENTER_POS.x,
            CENTER_POS.y,
            this.positionRadius,
            this.angle,
        )
    }
    // change this enemy's postion so that they looks like they are moving
    move() {
        let start = new Date().getTime()
        const update = () => {
            let current = new Date().getTime(),
                dt = current - start
            if (dt > 1 && this.positionRadius > 130) {
                this.positionRadius -= 0.1
                this.setPos()
                start = new Date().getTime()
            }
            requestAnimationFrame(update)
        }
        update()
    }
}


export class CircleEnemy extends Enemy {
    constructor(radius = 50, angle = getRandomInt(0, 360)) {
        super()
        this.isFill = true
        this.side = 0
        this.angle = angle
        this.bulletSize = 6
        this.lineWidth = 0
        this.type = "Circle"
        this.color = "#F6AF5F"
        this.radius = radius
        this.setPos()
    }
    collide(player) {
        let playerBulletList = player.bulletList
        playerBulletList.forEach((bullet, i) => {
            if (Distance(bullet.pos, this.pos) <= this.radius + bullet.size) {
                playerBulletList.splice(i, 1)
                this.life -= 1
                return true
            }
            return false
        })
    }
}

export class TriangleEnemey extends Enemy {
    constructor(radius = 40, angle = getRandomInt(0, 360)) {
        super()
        this.radius = radius // how big the trainagle is
        this.color = "#2878cc"
        this.dx = (Math.random() - 0.5) * getRandomInt(1, 5)
        this.dy = (Math.random() - 0.5) * getRandomInt(1, 5)
        this.type = "Polygon"
        this.sides = 3
        this.angle = angle
        this.initCoordinate = RandomPoint(
            {x: 0, y: 0},
            this.sides,
            this.radius,
        )
        this.cord = this.initCoordinate
        this.setPos()
        this.bulletSize = 5
    }
    collide(player) {
        let playerBulletList = player.bulletList
        playerBulletList.forEach((bullet, i) => {
            if (Distance(bullet.pos, this.pos) <= this.radius + bullet.size) {
                playerBulletList.splice(i, 1)
                this.life -= 1
                return true
            }
            return false
        })
    }
}

export class PolygonEnemy extends TriangleEnemey {
    constructor(radius = 50, angle = getRandomInt(0, 360)) {
        super()
        this.radius = radius
        this.color = "#E8465D"
        this.dx = Math.random() - 0.5
        this.dy = Math.random() - 0.5
        this.type = "Polygon"
        this.angle = angle
        this.sides = 6
        this.setPos()
        this.bulletSize = 5
        this.initCoordinate = RandomPoint(
            {x: 0, y: 0},
            this.sides,
            this.radius,
        )
        this.cord = this.initCoordinate
    }
}

