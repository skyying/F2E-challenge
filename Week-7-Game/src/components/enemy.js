import {
    degreeToRadian,
    getRandomInt,
    posofPointOnCircle,
    Distance,
    posAfterRotate,
} from "./calc.js"
import {Bullet, TrigBullet} from "./Bullet.js"
import {CENTER_POS} from "./Const.js"
import Emitter from "./Eimtter.js"
import Vector from "./vector.js"

export default class Enemy extends Emitter {
    constructor() {
        super()
        this.radius = 300
        this.life = 2
        this.isDead = this.life === 0
        this.setPos()
    }
    setPos() {
        this.pos = posofPointOnCircle(
            CENTER_POS.x,
            CENTER_POS.y,
            this.radius,
            this.angle,
        )
    }
    move() {
        let start = new Date().getTime()
        const update = () => {
            let current = new Date().getTime(),
                dt = current - start
            if (dt > 1 && this.radius > 130 + this.height / 2) {
                this.radius -= 0.1
                this.setPos()
                start = new Date().getTime()
            }
            requestAnimationFrame(update)
        }
        update()
    }
}

export class SplitEnemy extends Enemy {
    constructor() {
        super()
        this.shadowColor = "rgba(40, 120, 204, .5)"
        this.shape = "triangle"
        this.color = "#2878CC"
        // let traingle veritce face player at center
        this.offsetAngle = 180
        this.width = 40
        this.bulletSize = 5
        this.height = 50
        this.coordinatesForDraw = [
            [this.width, 0],
            [0, 0 - this.height / 2],
            [0, this.height / 2],
        ]
    }
    verticeAftrRotate() {
        let vertices = []
        for (let i = 0; i < this.getVertice().length; i++) {
            let v = this.getVertice()[i]
            vertices.push(posAfterRotate(this.angle))
        }
        return vertices
    }
    getVertice() {
        return [
            {
                x: this.pos.x + this.width,
                y: this.pos.y,
            },
            {
                x: this.pos.x,
                y: this.pos.y - this.height / 2,
            },
            {
                x: this.pos.x,
                y: this.pos.y + this.height / 2,
            },
        ]
    }
    collide(player) {
        let playerBulletList = player.bulletList
        playerBulletList.forEach((bullet, i) => {
            this.getVertice().forEach((point, j) => {
                let nextIndex = j == 2 ? 0 : j,
                    nextPoint = this.getVertice()[nextIndex]
                let edge = new Vector(point.x, point.y, nextPoint)
                if (edge.collide(bullet)) {
                    playerBulletList.splice(i, 1)
                    this.life -= 1;
                    return true
                }
            })
        })
        return false
    }
}

// helper
//
