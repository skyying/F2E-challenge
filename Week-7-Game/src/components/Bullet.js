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

// class EnemyBullet extends Bullet {
//     constructor() {
//         super()
//         this.distance
//     }
//     isHit(player) {
//         this.distance = Math.sqrt(
//             Math.pow(player.pos.x - this.pos.x, 2) +
//                 Math.pow(player.pos.y - this.pos.y, 2),
//         )
//         if (this.distnace < player.radius + this.radius) {
//             return true
//         }
//     }
// }

// export class TrigBullet extends EnemyBullet{
//     constructor() {
//         super()
//         this.color = "#3677BB"
//     }
// }
