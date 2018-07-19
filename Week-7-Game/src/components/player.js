export default class Player {
    constructor() {
        this.pos = {
            x: (window.innerWidth || window.body.clienWidth) / 2,
            y: (window.innerHeight || window.body.clientHeight) / 2,
        }
        this.dashColor = "#74878E"
        this.glowColor = "rgba(255, 255, 255, 0.6)"
        this.radius = 90
        this.color = "#fff"
        this.innerRadius = this.radius * 0.58
        this.splitLines = 3
        this.splitLineWidth = 3
        this.innerGlowLevel = this.innerRadius * 0.35
        this.bulletHead = {
            width: 40,
            height: 26,
            shrink: 6,
        }
        this.angle = 0
        this.outerArc = 80
        this.outerArcWidth = 6
        this.turnSpeed = 5
    }
}
