import Player from "./components/Player.js"
import {SplitEnemy} from "./components/enemy.js"
import {getRandomInt, degreeToRadian} from "./components/calc.js"
import {Triangle, HollowCircle, Circle, Polygon} from "./components/shape.js"

export class Game {
    constructor() {
        this.player = this.createPlayer()
        this.levle = 0
        this.score = 0
        this.state = 0
        this.enemyList = this.createEnemey(3)
        this.landingShape = [new Polygon()]//, new Circle(), new Polygon()]
        this.landingDripple = new HollowCircle()
        this.attack()
        this.approach()
    }
    init() {
        this.state = 0
    }
    start() {
        this.state = 1
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
       // context.drawDripple(this.landingDripple)
    }
    draw(context) {
        context.drawPlayer(this.player)
        context.drawEnemies(this.enemyList)
    }
}
