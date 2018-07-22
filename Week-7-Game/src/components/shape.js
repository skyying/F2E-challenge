import {CENTER_POS} from "./Const.js"
import {RandomPoint ,getRandomInt} from "./calc.js"

class shape {
    constructor(pos = CENTER_POS) {
        this.color = "white"
        this.radius = 50
        this.pos = pos
    }
}

export class Circle extends shape {
    constructor(pos = CENTER_POS) {
        super();
        (this.pos = pos), (this.isFill = true)
        this.side = 0
        this.lineWidth = 0
        this.type = "Circle"
        this.dx = Math.random() - 0.5 * getRandomInt(1, 2)
        this.dy = Math.random() - 0.5 * getRandomInt(1, 3)
        this.color = "#F6AF5F"
    }
}

export class HollowCircle extends shape {
    constructor(color, radius=window.innerHeight / 2 - 150) {
        super()
        this.pos = CENTER_POS
        this.radius = radius
        this.color = color
        this.dx = Math.random() - 0.5 * getRandomInt(1, 3)
        this.dy = Math.random() - 0.5 * getRandomInt(1, 3)
        this.type = "Circle"
        this.side = 0
        this.lineWidth = 1
    }
}

export class Triangle extends shape {
    constructor(pos = CENTER_POS) {
        super()
        this.pos = pos
        this.radius = 70 // how big the trainagle is
        this.color = "#2878cc"
        this.dx = (Math.random() - 0.5 ) * getRandomInt(1, 5)
        this.dy = (Math.random() - 0.5) * getRandomInt(1, 5) 
        this.type = "Polygon"
        this.sides = 3
        this.angle = 0
        this.initCoordinate = RandomPoint(
            {x: 0, y: 0},
            this.sides,
            this.radius,
        )
        this.cord = this.initCoordinate
    }
}

export class Polygon extends Triangle {
    constructor(pos = CENTER_POS) {
        super()
        this.pos = pos
        this.radius = 60
        this.color = "#E8465D"
        this.dx = Math.random() - 0.5
        this.dy = Math.random() - 0.5
        this.type = "Polygon"
        this.angle = 0
        this.sides = 6
        this.initCoordinate = RandomPoint(
            {x: 0, y: 0},
            this.sides,
            this.radius,
        )
        this.cord = this.initCoordinate
    }
}
