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
            if (dt > 1 && this.radius > 130 + this.height / 2  ) {
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
        this.height = 50
    }
}
