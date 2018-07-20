import {degreeToRadian, posofPointOnCircle} from "./calc.js"
import {CENTER_POS} from "./Const.js"

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
    setShadow(color, blurLevel, x, y) {
        this.ctx.shadowColor = color
        this.ctx.shadowBlur = blurLevel
        this.ctx.shadowOffsetX = x
        this.ctx.shadowOffsetY = y
    }
    resetShadow() {
        this.ctx.shadowColor = "rgba(255, 255, 255, 0)"
        this.ctx.shadowOffsetX = 0
        this.ctx.shadowOffsetY = 0
        this.ctx.shadowBlur = 0
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
        this.resetShadow()
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
        this.setShadow(glowColor, innerGlowLevel, 0, 0)
        this.ctx.stroke()
        this.resetShadow()
    }
    drawSplitLines(player) {
        let {
            pos,
            innerRadius,
            splitLines,
            splitLineWidth,
            innerGlowLevel,
            glowColor,
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
            this.setShadow(glowColor, innerGlowLevel, 0, 0)
            this.ctx.lineWidth = splitLineWidth
            this.ctx.stroke()
            this.resetShadow()
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
    drawTriangle(shape) {
        let {pos, shadowColor, angle, width, height, color} = shape
        let {x, y} = pos,
            hw = width / 2,
            hh = height / 2
        let ox = 0,
            oy = 0,
            na = degreeToRadian(angle - 180)
        this.ctx.translate(x, y)
        this.ctx.rotate(na)
        this.ctx.beginPath()
        this.ctx.moveTo(ox + width, oy)
        this.ctx.lineTo(ox, oy - hh)
        this.ctx.lineTo(ox, oy + hh)
        this.ctx.closePath()
        this.ctx.fillStyle = color
        // this.setShadow(shadowColor, 0, -10, -5)  //shadowEffect
        this.ctx.fill()
        this.ctx.rotate(-na)
        this.ctx.translate(-x, -y)
    }
    drawBullet(emitter) {
        let {bulletList, bulletSize} = emitter
        for (let i = 0; i < bulletList.length; i++) {
            let bullet = bulletList[i].pos
            let {x, y} = bullet
            this.ctx.beginPath()
            this.ctx.arc(x, y, bulletSize, 90, 0, 2 * Math.PI)
            this.ctx.fillStyle = bullet.color
            this.ctx.fill()
        }
    }
    drawPlayer(player) {
        this.drawGridBg()
        this.drawCircleWithDash(player)
        this.drawCircleWithGlow(player)
        this.drawSplitLines(player)
        this.drawOuterArc(player)
        this.drawBulletHead(player)
        this.drawBullet(player)
    }
    drawEnemy(enemy) {

        // remove this
        // this.ctx.beginPath()
        // this.ctx.arc(CENTER_POS.x , CENTER_POS.y, enemy.radius, 90, 0, 2 * Math.PI)
        // this.ctx.strokeStyle = "#fff"
        // this.ctx.stroke()
        


        if (enemy.shape === "triangle") {
            this.drawTriangle(enemy)
        }
        this.drawBullet(enemy)
    }
    drawEnemies(list) {
        list.forEach(enemy => this.drawEnemy(enemy))
    }
}
