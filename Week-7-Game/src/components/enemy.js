import {degreeToRadian, getRandomInt, posofPointOnCircle} from "./calc.js"
import {Bullet, TrigBullet} from "./Bullet.js"
import {CENTER_POS} from "./Const.js"
import Emitter from "./Eimtter.js"

export default class Enemy extends Emitter {
    constructor() {
        super()
        this.radius = 400
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
        this.width = 40
        this.bulletSize = 5
        this.offsetX =50 
        this.offsetY = 10 
        this.height = 50
        this.coordinates = [
            [this.offsetX + this.width, this.offsetY],
            [this.offsetX, this.offsetY - (this.height / 2)],
            [this.offsetX, this.offsetY + (this.height / 2)],
        ]
    }
    // if self be hit or not
    // will examine the bullet from players

    isHit(playerBulletList) {
        // I have every bullet's position
        // I need to check every postion of this bullet and see if they are inside this
        // enemy's area
    }
    getArea() {
        // let {x, y} = pos, [[x1, y1], [x2, y2], [x3, y3]] = coordinates,
    }

}

// helper
//
