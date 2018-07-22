import {CENTER_POS} from "./Const.js"
import Emitter from "./Eimtter.js"
import {degreeToRadian} from "./calc.js"
export default class Player extends Emitter {
    constructor(pos = CENTER_POS) {
        super()
        this.dashColor = "#74878E"
        this.glowColor = "rgba(255, 255, 255, 0.6)"
        this.radius = 90
        this.color = "#fff"
        this.innerRadius = this.radius * 0.58
        this.splitLines = 3
        this.splitLineWidth = 3
        this.innerGlowLevel = this.innerRadius * 0.35
        this.bulletSize = 8
        this.bulletHead = {
            width: 40,
            height: 26,
            shrink: 6,
        }
        this.outerArc = 80
        this.outerArcWidth = 6
        this.turnSpeed = 5
        this.positionRadius=90
    }
    // get new angle so that we can reset player's shooting direction
    setAngle(mx, my) {
        let dy = my - this.pos.y,
            dx = mx - this.pos.x,
            theta = Math.atan2(dy, dx)
        theta *= 180 / Math.PI
        this.angle = theta < 0 ? theta + 360 : theta
    }
}
