export const TimeOut = ({cb, ms}) => {
    let start = new Date().getTime()
    const update = () => {
        let current = new Date().getTime(),
            dt = current - start
        console.log(dt);
        if (dt > ms) {
            cb()
            start = new Date().getTime()
        }
        requestAnimationFrame(update)
    }
    update()
}
