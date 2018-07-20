import Player from "./components/Player.js"
import {SplitEnemy} from "./components/enemy.js"
import {getRandomInt, degreeToRadian} from "./components/calc.js"
export class Game {
    constructor() {
        this.player = this.createPlayer()
        this.levle = 0
        this.score = 0
        this.state = {
            loading: false,
            playing: true,
            over: false,
        }
        this.enemyList = this.createEnemey(2)
        this.attack()
        this.approach()
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
        this.enemyList.forEach(enemy => enemy.moveBullet(-1))
    }
    draw(context) {
        context.drawPlayer(this.player)
        context.drawEnemies(this.enemyList)
    }
}
