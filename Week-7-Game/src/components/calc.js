export const degreeToRadian = deg => (Math.PI / 180) * deg
export const posofPointOnCircle = (x, y, radius, deg) => {
    // x, y is the position of circle center
    let nX = x + Math.cos(degreeToRadian(deg)) * radius,
        nY = y + Math.sin(degreeToRadian(deg)) * radius
    return {x:nX, y: nY}
}

export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let ans =Math.floor(Math.random() * (max - min)) + min;
    console.log(ans);
    return Math.floor(Math.random() * (max - min)) + min;
}
