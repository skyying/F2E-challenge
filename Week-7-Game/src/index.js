import "./style/main.scss"
import React, {Component} from "react"
import ReactDOM from "react-dom"
import Player from "./components/Player.js"
import CanvasTool from "./components/Canvas.js"
import {SplitEnemy} from "./components/enemy.js"
import {Game} from "./Game.js"

const playerBulletList = []
const enemyList = []

class App extends Component {
    constructor(props) {
        super(props)
        this.state={
            playing: false
        }
        this.start = this.start.bind(this)
    }
    start() {
        this.setState({
            playing: true
        })
    }
    render() {
        const content =  (
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
        return this.state.playing ? 
            <div></div> 
         : content;
    }
}

ReactDOM.render(<App />, document.getElementById("main"))

let game = new Game()
let cns = new CanvasTool(document.getElementById("main"))

game.init()

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
    // -1: game over
    // 0: landing
    // 1: playing
    if (game.state === 0) {
        game.drawLanding(cns)
    } else if (game.state === 1) {
        game.draw(cns)
    } else if (game.state === -1) {
        game.drawOver(cns)
    }
    requestAnimationFrame(update)
}

document.addEventListener("keydown", e => {
    if (e.code === "ArrowLeft" || e.code === "KeyH") {
        game.player.angle -= 5
    } else if (e.code === "ArrowRight" || e.code === "KeyL") {
        game.player.angle += 5
    } else if (e.code === "Space" || e.code === "KeyW") {
        game.player.emit()
    }
})

let startBtn = document.querySelector("a");
startBtn.addEventListener("click" , e => {
       game.state=1;
       cns.clear()
})


// move player
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
