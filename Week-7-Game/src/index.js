import "./style/main.scss"
import React, {Component} from "react"
import ReactDOM from "react-dom"
import Player from "./components/Player.js"
import CanvasTool from "./components/Canvas.js"
import {SplitEnemy} from "./components/enemy.js"
import {Game} from "./Game.js"

const playerBulletList = []
const enemyList = []
let game = new Game()
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            game: game.state
        }
        this.start = this.start.bind(this)
    }
    start() {
        this.setState({
            playing: true,
        })
    }
    render() {
        const content = (
            <div className="landing">
                <div className="content">
                    <h1>R</h1>
                    <h2>Radio Defense</h2>
                    <a onClick={this.start}>Start Game</a>
                </div>
                <div className="notes">
                    Press W or Space to shoot. Press Arrow Key to control
                    direction
                </div>
            </div>
        )
        return this.state.playing ? <div /> : content
    }
}

ReactDOM.render(<App />, document.getElementById("main"))

let cns = new CanvasTool(document.getElementById("main"))

game.init(0)


let start = new Date().getTime()
const update = () => {
    let current = new Date().getTime(),
        dt = current - start,
        delay = 1
    if (dt >= delay) {
        game.moveBullet()
        if (game.state === 0) {
            game.landingAnimation()
        }
        start = new Date().getTime()
    }
    cns.clear()
    // game state
    // -1: game over, user win
    // 0: landing
    // 1: playing
    // -2: game over, user lose
    if (game.state === 0) {
        game.drawLanding(cns)
    } else if (game.state === 1) {
        game.draw(cns)
        game.detect()
    } else if (game.state < 0) {
        cns.drawEnding(game.state+2)
    } 
    requestAnimationFrame(update)
}


// keybaord event
document.addEventListener("keydown", e => {
    if (e.code === "ArrowLeft" || e.code === "KeyH") {
        game.player.angle -= 5
    } else if (e.code === "ArrowRight" || e.code === "KeyL") {
        game.player.angle += 5
    } else if (e.code === "Space" || e.code === "KeyW") {
        game.player.emit()
    }
})

// user click start button, start to play game 
let startBtn = document.querySelector("a")
if (startBtn) {
    startBtn.addEventListener("click", e => {
        game.state = 1
        cns.clear()
        game.start()
    })
}



// detect click event if user game isn't over
document.addEventListener("click", e => {
    if (game.state === 1) {
        game.player.emit()
    }
})


// let rotate player's angle alongwith mousemove event
document.addEventListener(
    "mousemove",
    e => {
        let cx = e.clientX,
            cy = e.clientY
        game.player.setAngle(cx, cy)
    },
    false,
)

update()
