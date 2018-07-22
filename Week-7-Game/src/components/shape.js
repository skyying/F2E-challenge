import {CENTER_POS} from "./Const.js"
import {RandomPoint} from "./calc.js"

class shape {
    constructor(pos = CENTER_POS, color = "white", radius = 50) {
        this.color = color
        this.radius = radius
        this.pos = pos
    }
}

export class Circle extends shape {
    constructor(color = "#F6AF5F", lineWidth = 0) {
        super()
        this.isFill = true
        this.side = 0
        this.lineWidth = lineWidth
        this.type = "Circle"
        this.color = color
    }
    update(pos) {
        this.pos = pos
    }
}

export class HollowCircle extends shape {
    constructor(color = "white", radius = window.innerHeight / 2 - 150) {
        super()
        this.radius = radius
        this.color = color
        this.type = "Circle"
        this.side = 0
        this.lineWidth = 1
    }
}

export class Triangle extends shape {
    constructor(pos = CENTER_POS, radius = 70, angle = 0, color = "#2878cc") {
        super()
        this.pos = pos
        this.radius = radius // how big the trainagle is
        this.color = color
        this.type = "Polygon"
        this.sides = 3
        this.angle = angle
        this.initCoordinate = RandomPoint(
            {x: 0, y: 0},
            this.sides,
            this.radius,
        )

        this.cord = this.initCoordinate
    }
    updatePos(pos) {
        this.pos = pos
    }
}

export class Polygon extends Triangle {
    constructor(
        pos = CENTER_POS,
        radius = 60,
        sides = 6,
        color = "#E8465D",
        angle = 0,
    ) {
        super()
        this.pos = pos
        this.radius = radius
        this.color = color
        this.type = "Polygon"
        this.sides = sides
        this.angle = angle
        this.sides = sides
        this.initCoordinate = RandomPoint(
            {x: 0, y: 0},
            this.sides,
            this.radius,
        )
        this.cord = this.initCoordinate
    }
}
