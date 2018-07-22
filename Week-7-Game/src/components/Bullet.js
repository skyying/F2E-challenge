// a bullet object, will draw bullet base on data below
export class Bullet {
    constructor(emitter) {
        this.pos = emitter.pos
        this.size = emitter.bulletSize
        this.color = emitter.color
        this.angle = emitter.angle
        this.currentRadius = emitter.positionRadius
        this.initalRadius = emitter.positionRadius
    }
}

