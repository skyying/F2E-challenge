
// some helper to calculate position and movement of shapes and objects

export const degreeToRadian = deg => (Math.PI / 180) * deg
export const posofPointOnCircle = (x, y, radius, deg) => {
    // x, y is the position of circle center
    let nX = x + Math.cos(degreeToRadian(deg)) * radius,
        nY = y + Math.sin(degreeToRadian(deg)) * radius
    return {x: nX, y: nY}
}


export const Distance = (p1, p2) => {
    let dx = Math.pow(p2.x - p1.x, 2),
        dy = Math.pow(p2.y - p1.y, 2)
    return Math.sqrt(dx + dy)
}



export const getTriangeArea = (p1, p2, p3) => {
    return (
        (p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)) / 2
    )
}

export const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    let ans = Math.floor(Math.random() * (max - min)) + min
    return Math.floor(Math.random() * (max - min)) + min
}

export const RandomPoint = (pos, sides, radius) => {
    let coordinate = [],
        angleInterval = 120,
        angleSume = 0,
        margin = 16
    for (let i = 0; i < sides; i++) {
        angleInterval =
            sides === 3
                ? 120
                : getRandomInt(360 / sides - margin, 360 / sides + margin)
        angleSume += angleInterval
        coordinate.push(posofPointOnCircle(0, 0, radius, angleSume))
    }

    return coordinate
    
}



// use degree instead of radius
export const posAfterRotate = (pos, angle) => {
    return {
        x:
            pos.y * Math.cos(degreeToRadian(angle)) -
            pos.x * Math.sin(degreeToRadian(angle)),
        y:
            pos.y * -Math.sin(degreeToRadian(angle)) +
            pos.x * Math.cos(degreeToRadian(angle)),
    }
}



export const Vector = (p1, p2) => {
    return [p1.x - p2.x, p1.y - p2.y]
}
