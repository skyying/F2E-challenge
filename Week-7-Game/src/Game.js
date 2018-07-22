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
        this.landingShape = [new Triangle(), new Polygon(), new Circle()] //, new Circle(), new Polygon()]
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
        // this.createLandingShape()
        this.approach()
        // this.landingAnimation()
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
        this.landingShape.map((x)=> console.log(x))
        context.drawLanding(this.landingShape)
        console.log("this.landingShape", this.landingShape);
        context.drawLanding(this.drippleList)
        console.log("this.drippleList", this.drippleList);
    }
    draw(context) {
        context.drawPlayer(this.player)
        context.drawEnemies(this.enemyList)
    }
}
