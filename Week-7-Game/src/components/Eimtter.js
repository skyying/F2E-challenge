import {Bullet} from "./Bullet.js"
import {CENTER_POS} from "./Const.js"
import {degreeToRadian, getRandomInt, posofPointOnCircle} from "./calc.js"
import {TimeOut} from "./timeout.js"



// a object will emmit bullet 
export default class Emitter {
    constructor(pos = CENTER_POS) {
        this.pos = pos
        this.angle = getRandomInt(0, 360)
        this.bulletList = []
        this.emitInterval = getRandomInt(2, 4)
        this.isDead = false
        this.life = 3
        this.isHit = false
        this.color
        this.bulletSpeed = 8
        this.setEmitInterval()
    }
    setEmitInterval() {
        this.emitInterval = getRandomInt(3, 10) * 1000
    }
    emit() {
        let self = this
        this.bulletList.push(new Bullet(self))
    }
    autoEmit() {
        let start = new Date().getTime()
        const update = () => {
            let current = new Date().getTime(),
                dt = current - start
            if (dt > this.emitInterval) {
                this.emit()
                start = new Date().getTime()
            }
            requestAnimationFrame(update)
        }
        update()
    }
    // when bullet is add to list, then change their position so that they looks like they
    // are moving
    moveBullet(dir = 1) {
        for (let i = 0; i < this.bulletList.length; i++) {
            let b = this.bulletList[i]
            b.currentRadius += 5 * dir
            b.pos = posofPointOnCircle(
                CENTER_POS.x,
                CENTER_POS.y,
                b.currentRadius,
                b.angle,
            )
            // if they are out of boundary, just remove them
            if (b.currentRadius > window.innerWidth && this.bulletList.length) {
                this.bulletList.splice(i, 1)
            }
        }
    }
}
