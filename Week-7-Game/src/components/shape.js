import {CENTER_POS} from "./Const.js"
import {RandomPoint} from "./calc.js"

class shape {
    constructor(pos = CENTER_POS, color = "white") {
        this.color = color
        this.radius = 300
        this.pos = pos
    }
}

export class Circle extends shape {
    constructor(color = "#F6AF5F", lineWidth=0) {
        super()
        this.isFill=true
        this.side = 0
        this.lineWidth=lineWidth
        this.type="Circle"
        this.color = color
    }
}

export class HollowCircle extends shape {
    constructor(color = "white", lineWidth = 3) {
        super()
        this.color = color
        this.type="HollowCircle"
        this.side = 0
        this.lineWidth = lineWidth
    }
}

export class Triangle extends shape {
    constructor(height = 50, width = 50, angle = 0, color = "#2878cc") {
        super()
        this.color = color
        this.width = width
        this.type="Triangle"
        this.height = height
        this.sides = 3
        this.angle = angle
        this.coordinate = RandomPoint(this.pos, this.sides, this.radius)
    }
}

export class Polygon extends shape {
    constructor(radius = 100, sides = 5, color = "#E8465D", angle = 0) {
        super()
        this.radius = radius
        this.color = color
        this.type="Polygon"
        this.sides = sides
        this.angle = angle
        this.coordinate = RandomPoint(this.pos, this.sides, this.radius)
        console.log("in class", this.coordinate);
    }
}
