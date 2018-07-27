import React, {Component} from "react";

export default class Triangle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {x, y, width, height, fill} = this.props;
        const calcPoints = (x, y, width, height) => {
            return `${x + width / 2},${y} ${x + width},${y + height} ${x},${y +
                height}`;
        };
        let points = calcPoints(x, y, width, height);
        return <polygon ref="triangle" points={points} fill={fill} />;
    }
}
