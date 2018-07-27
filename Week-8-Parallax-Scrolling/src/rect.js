import React, {Component} from "react";
import PropTypes from "prop-types";
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";
import ReactDOM from "react-dom";

export default class Rect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            play: true,
        };
    }
    componentDidMount() {
        if (this.state.play) {
            const rect = this.refs.rect;
            const tm = new TweenMax(rect, 4, {
                repeat: -1,
                rotation: 360,
                transformOrigin: "center center",
                ease: Linear.easeInOut,
            });
        }
    }
    toggleRotation() {
        this.setState({
            play: !this.state.play,
        });
    }
    render() {
        let ww = window.innerWidth,
            wh = window.innerHeight;
        const {x, y, width, height} = this.props;
        return <rect ref="rect" x={x} y={y} width={width} height={height} />;
    }
}
