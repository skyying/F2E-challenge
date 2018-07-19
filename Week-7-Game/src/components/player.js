const degree = angle => (Math.PI / 180) * angle
const startAngle = degree(0)

const cordOnCircle = (x, y, r, d) => {
    let nX = x + Math.cos(degree(d)) * r,
        nY = y + Math.sin(degree(d)) * r
    return {x: nX, y: nY}
}

export default class Player {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d")
        this.color = "white"
        this.radius = 110
        this.x = 200
        this.y = 300
        this.splitLines = 3
        this.angle = 0
        this.arcLen = 80
        this.bulletPos = 110 
        this.startArcDegree = 0
    }
    circle(x, y, r = this.radius, d = 0, l = 2, glow = 0) {
        this.ctx.beginPath()
        this.ctx.arc(x, y, r, 90, 0, 2 * Math.PI)
        this.ctx.strokeStyle = this.color
        this.ctx.setLineDash([d, d])
        this.ctx.lineWidth = l
        this.ctx.shadowColor = this.color
        this.ctx.shadowBlur = this.radius * glow
        this.ctx.shadowOffsetX = 0
        this.ctx.shadowOffsetY = 0
        this.ctx.stroke()
    }
    drawOuterArc(x, y) {
        this.ctx.beginPath()
        this.ctx.arc(
            x,
            y,
            this.radius + 30,
            degree(this.angle - this.arcLen / 2 - 180),
            degree(this.angle - 180 + this.arcLen / 2),
        )
        this.ctx.lineWidth = 10
        this.ctx.shadowBlur = 0
        this.ctx.stroke()
    }
    drawLines(x, y, r) {
        this.ctx.beginPath()
        for (let i = 0; i < this.splitLines; i++) {
            this.ctx.moveTo(x, y)
            let pos = cordOnCircle(
                x,
                y,
                r,
                this.angle + (360 / this.splitLines) * i,
            ) // start angle
            this.ctx.lineTo(pos.x, pos.y)
            this.ctx.lineWidth = 6
            this.ctx.stroke()
        }
    }
    point(x, y) {
        this.ctx.beginPath()
        this.ctx.arc(x, y, 5, 90, 0, 2 * Math.PI)
        this.ctx.fillStyle = "#fff"
        this.ctx.fill()
    }
    draw(x = this.x, y = this.y) {
        let ir = this.radius * 0.5
        let innerWidth = this.radius / 8.5
        // outer circle
        this.circle(x, y, this.radius, this.radius / 14, 2, 0)
        // inner circle
        this.circle(x, y, ir, 0, this.radius / 8.5, 0.16)

        this.drawLines(x, y, ir)
        this.drawOuterArc(x, y, this.radius)
        let bp = cordOnCircle(x, y, this.radius, this.angle)
        let bulletHead = new BulletHead(this.ctx, bp.x, bp.y, this.angle)
    }
    emit(speed) {
        this.bulletPos = this.radius + speed
        let pos = cordOnCircle(this.x, this.y, this.bulletPos, this.angle)
        let b = new Bullet(this.ctx ,pos.x, pos.y)
    }
}

class Bullet {
    constructor(ctx, x, y) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.draw()
    }
    draw() {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, 10, 90, 0, 2 * Math.PI)
        this.ctx.fillStyle = "#fff"
        this.ctx.fill()
    }
}

class BulletHead {
    constructor(ctx, x = 120, y = 120, d = 0) {
        this.ctx = ctx
        this.d = d
        this.w = 56
        this.h = 30
        this.x = x
        this.y = y
        this.color = "#fff"
        this.shrink = 8
        this.drawHead()
    }
    drawHead(x = this.x, y = this.y) {
        let w = this.w,
            h = this.h,
            s = this.shrink
        this.ctx.fillStyle = "#fff"
        this.ctx.translate(x, y)
        this.ctx.rotate(degree(this.d))
        let ox = 0 - w / 2,
            oy = 0 - h / 2
        // this.ctx.fillRect(ox, oy, w, h)
        this.ctx.beginPath()
        this.ctx.moveTo(ox, oy)
        this.ctx.lineTo(ox + w / 2, oy)
        this.ctx.lineTo(ox + w, oy + s)
        this.ctx.lineTo(ox + w, oy + h - s)
        this.ctx.lineTo(ox + w / 2, oy + h)
        this.ctx.lineTo(ox, oy + h)
        this.ctx.closePath()
        this.ctx.fill()
        this.ctx.rotate(-degree(this.d))
        this.ctx.translate(-x, -y)
    }
}
