import "./style/main.scss"
import React, {Component} from "react"
import ReactDOM from "react-dom"
import Player from "./components/Player.js"
import Bullet from "./components/Bullet.js"
import CanvasTool from "./components/Canvas.js"

const playerBulletList = []

class App extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {}
    render() {
        return <div />
    }
}
ReactDOM.render(<App />, document.getElementById("main"))

let player = new Player()
let cns = new CanvasTool(document.getElementById("main"))

const emitBullet = list => {
    list.push(new Bullet(player.radius, player.angle))
}

const flyover = list => {
    for (let i = 0; i < list.length; i++) {
        let b = list[i]
        b.currentRadius += 8
        if (b.currentRadius > window.innerWidth) {
            list.splice(i, 1)
        }
    }
}

let start = new Date().getTime()
const update = () => {
    let current = new Date().getTime(),
        dt = current - start,
        delay = 1 
    if (dt >= delay) {
        flyover(playerBulletList)
        start = new Date().getTime()
    }
    cns.clear()
    cns.draw(player, playerBulletList)
    requestAnimationFrame(update)
}

document.addEventListener("keydown", e => {
    if (e.code === "ArrowLeft" || e.code === "KeyH") {
        player.angle -= 10
    } else if (e.code === "ArrowRight" || e.code === "KeyL") {
        player.angle += 10
    } else if (e.code === "Space") {
        emitBullet(playerBulletList)
    }
})

update()
