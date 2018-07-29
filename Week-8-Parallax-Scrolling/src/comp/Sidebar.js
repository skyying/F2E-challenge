import React, {Component} from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import {Button} from "./common.js";
import {TweenMax, TimelineMax} from "gsap/TweenMax";
import Triangle from "./triangle.js";
import {ShapeData} from "./shapeData.js";


//animation sidebar
export default class SidebarShapes extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
    }
    componentDidMount() {
        this.play();
    }
    componentDidUpdate(oldProps) {
        if (this.props.stage !== oldProps.stage) {
            this.play();
        }
    }
    play() {
        const data = ShapeData[this.props.stage];
        const ww = window.innerWidth,
            wh = window.innerHeight,
            rect = this.refs.rect,
            circle = this.refs.circle,
            square = this.refs.square,
            trig = this.refs.trig,
            bg = this.refs.bg,
            triangle = this.refs.triangle;

        const sideWidth = Math.max(ww * 0.41, 500);

        const timeline = new TimelineMax();

        timeline.to(bg, 1, {
            attr: {
                x: data.rect.to.x,
                width: data.bg.size,
            },
            ease: Sine.easeIn,
        });

        // todo should change appear order base on they y value
        timeline.to(square, 1, {
            attr: {y: data.square.pos.y},
            ease: Sine.easeInOut,
        });

        timeline.to(
            trig, // triangle warpper
            1,
            {
                y: data.triangle.pos.y,
                ease: Sine.easeOut,
            },
            "-=0.8",
        );
        timeline.to(
            triangle, // triangle warpper
            1,
            {
                attr: {
                    y: -data.triangle.pos.y,
                },
                ease: Sine.easeOut,
            },
            "-=0.8",
        );
        timeline.to(
            circle,
            1,
            {
                attr: {
                    cy: data.circle.pos.y,
                },
                ease: Sine.easeOut,
            },
            "-=0.6",
        );

        timeline.to(trig, 4, {
            repeat: -1,
            rotation: -360,
            transformOrigin: "center center",
            ease: Linear.easeInOut,
        });

        timeline.to(
            square,
            4,
            {
                repeat: -1,
                rotation: 180,
                transformOrigin: "center center",
                ease: Linear.easeInOut,
                // onComplete: onComplete,
            },
            "-=4",
        );

        timeline.to(
            circle,
            3,
            {
                repeat: -1,
                rotation: 360,
                transformOrigin: "60% 55%",
                ease: Linear.easeInOut,
            },
            "-=4",
        );
    }
    render() {
        const ww = window.innerWidth,
            wh = window.innerHeight;

        const data = ShapeData[this.props.stage];

        return (
            <div className="pos-abs">
                <svg width={ww} height={wh} y={wh} version="1.1">
                    <rect
                        ref="bg"
                        height={wh}
                        width={0}
                        x={data.left ? 0 : ww}
                        y={0}
                        fill={data.bg.fill}
                    />
                    <rect
                        ref="square"
                        x={data.square.pos.x}
                        y={wh + data.square.size}
                        fill={data.square.fill}
                        width={data.square.size}
                        height={data.square.size}
                    />
                    <circle
                        ref="circle"
                        cx={data.circle.pos.x}
                        cy={wh + data.circle.size}
                        r={data.circle.size}
                        fill={data.circle.fill}
                    />
                    <g ref="trig">
                        <Triangle
                            ref="triangle"
                            fill={data.triangle.fill}
                            x={data.triangle.pos.x}
                            y={wh}
                            width={data.triangle.size}
                            height={data.triangle.size * 0.85}
                        />
                    </g>
                </svg>
            </div>
        );
    }
}
