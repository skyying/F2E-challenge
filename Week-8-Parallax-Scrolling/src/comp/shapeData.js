const ww = window.innerWidth,
    wh = window.innerHeight,
    sw = Math.max(ww * 0.3, 500);


// animation param for sidebar shapes
export const ShapeData = {
    0: {
        id: 0,
        left: false, //sidebar at right
        bg: {
            fill: "None",
            size: sw,
            from: {
                x: ww - sw,
                width: 0,
                y: 0,
            },
            to: {
                x: 0,
                y: 0,
                width: ww,
            },
        },
    },
    1: {
        id: 1,
        left: false, 
        bg: {
            fill: "#0027C8",
            size: sw,
            from: {
                x: ww - sw,
                width: sw,
                y: 0,
            },
            to: {
                x: 0,
                y: 0,
                width: ww,
            },
        },
        rect: {
            to: {
                x: ww - sw,
            },
        },
        triangle: {
            fill: "#fff",
            size: wh * 0.18,
            pos: {
                x: ww - 130,
                y: -(wh * 0.57),
            },
        },
        square: {
            fill: "#ff3c82",
            size: wh * 0.2,
            pos: {
                x: ww - sw + 50,
                y: wh / 4,
            },
        },
        circle: {
            fill: "#000",
            size: wh * 0.25,
            pos: {
                x: ww - 100,
                y: wh - wh * 0.05,
            },
        },
    },
    2: {
        id: 2,
        left: true,
        bg: {
            fill: "#ff3c82",
            size: sw,
            from: {
                x: 0,
                y: 0,
                width: sw,
            },
            to: {
                x: 0,
                width: ww,
                y: 0,
            },
        },
        rect: {
            to: {
                x: 0,
            },
        },
        triangle: {
            fill: "#fff",
            size: wh * 0.4,
            pos: {
                x: 80,
                y: -(wh + 50),
            },
        },
        square: {
            fill: "#1469FF",
            size: wh * 0.4,
            pos: {
                x: -(ww * 0.07),
                y: wh * 0.38,
            },
        },
        circle: {
            fill: "#000",
            size: wh * 0.1,
            pos: {
                x: 300,
                y: Math.floor(wh * 0.7),
            },
        },
    },
    3: {
        id: 3,
        left: false,
        bg: {
            fill: "#1469FF", 
            size: sw,
            from: {
                x: 0,
                width: ww - sw,
                y: 0,
            },
            to: {
                x: 0,
                y: 0,
                width: 0,
            },
        },
        rect: {
            fill:"#ff3c82",
            from: {
                x: 0,
            },
            to: {
                x: ww - sw,
            },
        },
        triangle: {
            fill: "#000",
            size: wh * 0.3,
            pos: {
                x: ww - wh * 0.3,
                y: -(wh - wh * 0.6),
            },
        },
        square: {
            fill: "#0027C8",
            size: wh * 0.36,
            pos: {
                x: ww - wh * 0.36 - 50,
                y: 50,
            },
        },
        circle: {
            fill: "#fff",
            size: wh * 0.2,
            pos: {
                x: ww - 50,
                y: 50,
            },
        },
    },
};
