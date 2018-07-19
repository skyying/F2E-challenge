import "./style/main.scss"
import React, {Component} from "react"
import ReactDOM from "react-dom"
import Player from "./components/player.js";

var P;
var canvas;
(function() {
    var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame
    window.requestAnimationFrame = requestAnimationFrame
})()

let start = new Date().getTime();

const draw = () => {
    P.draw();
}

const update =() => {
    let current = new Date().getTime(),
        dt = current - start,
        delay = 1000;
    if( dt >= delay ){
        start = new Date().getTime();
    }
    draw()
    requestAnimationFrame(update);
}


class App extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        canvas = document.querySelector("canvas")
        P = new Player(canvas)
        update();
    }
    render() {
        return (
            <div>
                <canvas
                    className="canvas"
                    width={window.innerWidth}
                    height={window.innerHeight}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("main"))
