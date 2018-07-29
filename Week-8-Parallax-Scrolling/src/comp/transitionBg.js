import React, {Component} from "react";
import {TweenMax, TimelineMax, TimelineLite} from "gsap/TweenMax";
import {ShapeData} from "./shapeData.js";


// Sliding page effect
export default class TransitionBg extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.onComplete = this.onComplete.bind(this);
    }
    componentDidMount() {
        this.play();
    }
    componentDidUpdate(oldProps) {
        if (this.props.dataIndex !== oldProps.dataIndex) {
            this.play();
        }
    }
    onComplete() {
        let props = this.props;
        this.props.onComplete();
    }
    play() {
        const data = ShapeData[this.props.dataIndex],
            rect = this.refs.rect,
            ww = window.innerWidth,
            onComplete = this.onComplete;

        TweenMax.from(rect, 1, {
            attr: {
                x: data.bg.from.x,
                width: data.bg.from.width,
            },
            ease: Sine.easeOut,
            onComplete: onComplete,
        });
    }

    render() {
        const ww = window.innerWidth,
            wh = window.innerHeight,
            data = ShapeData[this.props.dataIndex];

        return (
            <div className="pos-abs transbg">
                <svg width={ww} height={wh}>
                    <rect
                        ref="rect"
                        x={data.bg.to.x}
                        y={data.bg.to.y}
                        width={data.bg.to.width}
                        height={wh}
                        fill={
                            this.props.dataIndex === 3
                                ? data.rect.fill
                                : data.bg.fill
                        }
                    />
                </svg>
            </div>
        );
    }
}
