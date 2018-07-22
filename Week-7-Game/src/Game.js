import Player from "./components/Player.js"
import {SplitEnemy} from "./components/enemy.js"
import {
    RandomPoint,
    getRandomInt,
    degreeToRadian,
    posofPointOnCircle,
} from "./components/calc.js"
import {Triangle, HollowCircle, Circle, Polygon} from "./components/shape.js"
import {CENTER_POS} from "./components/Const.js"

export class Game {
    constructor() {
        this.player = this.createPlayer()
        this.levle = 0
        this.score = 0
        this.state = 0
        this.enemyList = this.createEnemey(3)
        this.landingShape = []
        this.landingDripple = new HollowCircle()
        this.dripperList = []
        this.drippleIn = {
            color: "rgba(255, 255, 255, 1)",
            radius: window.innerHeight / 2 - 230,
        }
        this.drippleOut = {
            color: "rgba(255, 255, 255, .3)",
            radius: window.innerHeight / 2 - 100,
        }
        this.landingMaxRadius = 500
        this.attack()
        this.createDripple()
        this.approach()
        this.createLandingShape()
    }
    createLandingShape() {
        let n = 3
        let ww = window.innerWidth,
            wh = window.innerHeight
        let cord = []
        for (let i = 0; i < n; i++) {
            let x = getRandomInt(0, ww),
                y = getRandomInt(0, wh)
            cord.push({x: x, y: y})
        }
        let s1 = new Triangle(cord[0]),
            s2 = new Polygon(cord[1]),
            s3 = new Circle(cord[2])
        this.landingShape = [s1, s2, s3]
    }
    init() {
        this.state = 0
    }
    start() {
        this.state = 1
    }
    createDripple() {
        this.drippleList = [
            new HollowCircle(this.drippleIn.color, this.drippleIn.radius),
            new HollowCircle(this.drippleOut.color, this.drippleOut.radius),
        ]
    }
    startDripple() {
        let ww = window.innerWidth / 2
        if (this.drippleOut.radius < ww + 50) {
            this.drippleOut.radius += 2
        } else {
            this.drippleOut.radius = Math.abs(ww - 330)
        }

        if (this.drippleIn.radius < ww + 50) {
            this.drippleIn.radius += 3
        } else {
            this.drippleIn.radius = Math.abs(ww - 430)
        }

        this.drippleList = [
            new HollowCircle(this.drippleIn.color, this.drippleIn.radius),
            new HollowCircle(this.drippleOut.color, this.drippleOut.radius),
        ]
    }
    createPlayer() {
        let player = new Player()
        return player
    }
    createEnemey(n) {
        let list = []
        for (let i = 0; i < n; i++) {
            let eny = new SplitEnemy()
            list.push(eny)
        }
        return list
    }
    attack() {
        this.enemyList.forEach(enemy => {
            enemy.autoEmit()
        })
    }
    approach() {
        this.enemyList.forEach(enemy => {
            enemy.move()
        })
    }
    moveBullet() {
        this.player.moveBullet()
        this.enemyList.forEach(enemy => {
            enemy.moveBullet(-1)
            this.killEnemy()
        })
    }
    killEnemy() {
        if (this.enemyList.length) {
            let list = this.enemyList.filter(enemy => enemy.life >= 0)
            this.enemyList = list
            this.enemyList.forEach(enemy => {
                enemy.collide(this.player)
            })
        }
    }
    drawLanding(context) {
        context.drawLanding(this.landingShape)
        context.drawLanding(this.drippleList)
    }
    draw(context) {
        context.drawPlayer(this.player)
        context.drawEnemies(this.enemyList)
    }
    moveLandingShape() {
        let list = this.landingShape
        let ww = window.innerWidth,
            wh = window.innerHeight
        for (let i = 0; i < list.length; i++) {
            let shape = list[i]
            if (shape.pos.x + 100 > ww || shape.pos.x < 0) {
                shape.dx = -shape.dx
            }
            if (shape.pos.y + 100 > wh || shape.pos.y < 0) {
                shape.dy = -shape.dy
            }
            let x = shape.pos.x + shape.dx
            let y = shape.pos.y + shape.dy
            shape.pos = {x: x, y: y}
        }
    }
    landingAnimation() {
        this.startDripple()
        this.moveLandingShape()
    }
}
