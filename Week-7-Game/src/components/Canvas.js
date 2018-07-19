const degreeToRadian = deg => (Math.PI / 180) * deg

const posofPointOnCircle = (x, y, radius, deg) => {
    let nX = x + Math.cos(degreeToRadian(deg)) * radius,
        nY = y + Math.sin(degreeToRadian(deg)) * radius
    return {x: nX, y: nY}
}

export default class CanvasTool {
    constructor(parent) {
        this.parent = parent
        this.ctx = this.getCanvas()
        this.grid = {
            size: 80,
            color: "rgba(255, 255, 255, 0.05)",
        }
        this.canvas
    }
    getCanvas() {
        this.canvas = document.createElement("canvas")
        this.canvas.height = window.innerHeight || window.body.clientHeight
        this.canvas.width = window.innerWidth || window.body.clienWidth
        this.parent.appendChild(this.canvas)
        return this.canvas.getContext("2d")
    }
    drawGridBg() {
        let {size, color} = this.grid,
            i = 1
        this.ctx.lineWidth = 1
        this.ctx.strokeStyle = color
        while (i * size < this.canvas.width) {
            this.ctx.beginPath()
            this.ctx.moveTo(i * size, 0)
            this.ctx.lineTo(i * size, this.canvas.height)
            this.ctx.stroke()
            i++
        }
        i = 1
        while (i * size < this.canvas.height) {
            this.ctx.beginPath()
            this.ctx.moveTo(0, i * size)
            this.ctx.lineTo(this.canvas.width, i * size)
            this.ctx.stroke()
            i++
        }
    }
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
    drawCircleWithDash(player) {
        let {pos, radius, dashColor} = player
        const DASH_DENSITY = radius / 14
        this.ctx.beginPath()
        this.ctx.arc(pos.x, pos.y, radius, 90, 0, 2 * Math.PI)
        this.ctx.strokeStyle = dashColor
        this.ctx.setLineDash([DASH_DENSITY, DASH_DENSITY])
        this.ctx.lineWidth = 2
        this.ctx.stroke()
        this.ctx.setLineDash([0, 0])
    }
    drawCircleWithGlow(player) {
        let {
            pos,
            radius,
            innerRadius,
            color,
            innerGlowLevel,
            glowColor,
        } = player
        let LINE_WIDTH = radius / 8.5
        this.ctx.beginPath()
        this.ctx.arc(pos.x, pos.y, innerRadius, 90, 0, 2 * Math.PI)
        this.ctx.strokeStyle = color
        this.ctx.lineWidth = LINE_WIDTH
        this.ctx.shadowColor = glowColor
        this.ctx.shadowBlur = innerGlowLevel
        this.ctx.shadowOffsetX = 0
        this.ctx.shadowOffsetY = 0
        this.ctx.stroke()
        this.ctx.shadowBlur = 0
    }
    drawSplitLines(player) {
        let {
            pos,
            innerRadius,
            splitLines,
            splitLineWidth,
            innerGlowLevel,
            angle,
        } = player
        this.ctx.beginPath()
        for (let i = 0; i < splitLines; i++) {
            this.ctx.moveTo(pos.x, pos.y)
            let endPos = posofPointOnCircle(
                pos.x,
                pos.y,
                innerRadius,
                angle + (360 / splitLines) * i,
            )
            this.ctx.lineTo(endPos.x, endPos.y)
            this.ctx.shadowBlur = innerGlowLevel
            this.ctx.shadowOffsetX = 0
            this.ctx.shadowOffsetY = 0
            this.ctx.lineWidth = splitLineWidth
            this.ctx.stroke()
            this.ctx.shadowBlur = 0 // reset to default
        }
    }
    drawOuterArc(player) {
        let {pos, radius, angle, outerArc, outerArcWidth} = player
        this.ctx.beginPath()
        this.ctx.arc(
            pos.x,
            pos.y,
            radius + 24,
            degreeToRadian(angle - outerArc / 2 - 180),
            degreeToRadian(angle - 180 + outerArc / 2),
        )
        this.ctx.lineWidth = outerArcWidth
        this.ctx.stroke()
    }
    drawBulletHead(player) {
        let {pos, radius, color, angle, bulletHead} = player
        let {width, height, shrink} = bulletHead
        let {x, y} = posofPointOnCircle(pos.x, pos.y, radius, angle)
        this.ctx.translate(x, y)
        this.ctx.rotate(degreeToRadian(angle))
        let ox = 0 - width / 2,
            oy = 0 - height / 2
        this.ctx.beginPath()
        this.ctx.moveTo(ox, oy)
        this.ctx.lineTo(ox + width / 2, oy)
        this.ctx.lineTo(ox + width, oy + shrink)
        this.ctx.lineTo(ox + width, oy + height - shrink)
        this.ctx.lineTo(ox + width / 2, oy + height)
        this.ctx.lineTo(ox, oy + height)
        this.ctx.closePath()
        this.ctx.fillStyle = color
        this.ctx.fill()
        this.ctx.rotate(-degreeToRadian(angle))
        this.ctx.translate(-x, -y)
    }
    drawBullet(player, bullet) {
        let {pos, color} = player
        let {x, y} = posofPointOnCircle(
            pos.x,
            pos.y,
            bullet.currentRadius,
            bullet.angle,
        )
        this.ctx.beginPath()
        this.ctx.arc(x, y, bullet.size, 90, 0, 2 * Math.PI)
        this.ctx.fillStyle = color
        this.ctx.fill()
    }
    draw(player, list) {
        this.drawGridBg()
        this.drawCircleWithDash(player)
        this.drawCircleWithGlow(player)
        this.drawSplitLines(player)
        this.drawOuterArc(player)
        this.drawBulletHead(player)
        for (let i = 0; i < list.length; i++) {
            this.drawBullet(player, list[i])
        }
    }
}
