import {Distance} from "./calc.js"

export const CircleCollision = (c1, c2) => {
    return Distance(c1.pos, c2.pos) < c1.radius + c2.radius
}

// export const LineCircleCollision = (line, c1) => {
//     let {p1, p2} = line
    
// }
