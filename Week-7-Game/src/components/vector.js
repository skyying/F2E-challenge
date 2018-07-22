import {Distance} from "./calc.js"

export default class Vector {
    constructor(x = 0, y = 0, origin = {x: 0, y: 0}) {
        this.pos = {
            x: x,
            y: y,
        }
        this.origin = origin
    }
    setOrigin(pos) {
        this.origin = pos
    }
    angle(vec){
    
    }
    collide(circle) {
        let dist = Distance(this.origin, this.pos)
        let cirDist =
            Distance(circle.pos, this.pos) + Distance(circle.pos, this.origin)
        if (Math.abs(dist - cirDist) < 1) {
            return true
        }
    }
}
// add(vec) {
//     return new Vector(
//         this.pos.x + vec.pos.x,
//         this.pos.y + vec.pos.y,
//         this.origin,
//     )
// }
// magnitude() {
//     // this is not right, should minus origin
//     return Math.sqrt(Math.pow(this.pos.x, 2) + Math.pow(this.pos.y, 2))
// }
// multiply(scaler) {
//     let ne = new Vector(
//         scaler * this.pos.x,
//         scaler * this.pos.y,
//         this.origin,
//     )
//     return ne
// }
// dot(vec) {
//     let d = this.pos.x * vec.pos.x + this.pos.y * vec.pos.y
//     return d
// }
// project(ontoVec) {
//     let n = ontoVec.dot(this),
//         d = this.dot(this)
//     let scaler = n / d
//     return this.multiply(scaler)
// }

// console.log("scaler", lv.project(vx))
// console.log(lv, vx);

// Vector.prototype = {
//     setOrigin: function(pos) {
//         this.origin = pos
//     },
//     add: function(vec) {
//         return new Vector(
//             this.pos.x + vec.pos.x,
//             this.pos.y + vec.pos.y,
//             this.origin,
//         )
//     },
//     magnitude: function() {
//         return Math.sqrt(Math.pow(this.pos.x, 2) + Math.pow(this.pos.y, 2))
//     },
//     multiply: function(scaler) {
//         return new Vector(
//             scaler * this.pos.x,
//             scaler * this.pos.y,
//             this.origin,
//         )
//     },
//     dot: function(vec) {
//         return this.pos.x * vec.pos.x + this.pos.y * vec.pos.y
//     },
//     project: function(ontoVec) {
//         let scaler = ontoVec.dot(this) / this.dot(this)
//         return this.multiply(scaler)
//     },
// }
