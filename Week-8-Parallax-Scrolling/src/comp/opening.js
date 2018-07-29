import React, {Component} from "react";
import PropTypes from "prop-types";
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

class Star extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {points} = this.props;
        return (
            <g ref="startGroup">
                <polygon ref="t1" points={points} fill="#FF3C82" />
                <polygon
                    ref="t2"
                    className="tri2"
                    points={points}
                    fill="#FF3C82"
                />
            </g>
        );
    }
}

export default class Opening extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.onComplete = this.onComplete.bind(this);
    }
    play() {
        let star = this.refs.star.refs.startGroup,
            rect = this.refs.rect,
            circle = this.refs.circle;
        let t1 = this.refs.star.refs.t1,
            t2 = this.refs.star.refs.t2;
        let onComplete = this.onComplete;
        let title = this.refs.title;
        let rect1 = this.refs.rect1;

        TweenMax.to(star, 4, {
            rotation: 360,
            transformOrigin: "center center",
            ease: Sine.easeInOut,
        });
        TweenMax.to(rect, 4, {
            rotation: -360,
            transformOrigin: "center center",
            ease: Sine.easeInOut,
        });

        const tl = new TimelineLite();
        // scale circle
        tl.to(circle, 2, {
            scale: 1.15,
            transformOrigin: "center center",
            ease: Sine.easeIn,
        })
            .to(circle, 2, {
                scale: 1,
                transformOrigin: "center center",
                ease: Sine.easeOut,
            }) // end of scaling, fadeout rectange  by scaling it
            .to(rect, 0.8, {
                scale: 3,
                transformOrigin: "center center",
                ease: Sine.easeInOut,
            }) //fade out circle by scaling it
            .to(
                circle,
                0.8,
                {
                    scale: 3,
                    transformOrigin: "center center",
                    ease: Sine.easeInOut,
                },
                "-=0.5",
            ) // fadeout star by scaling it
            .to(
                star,
                0.8,
                {
                    scale: 5,
                    transformOrigin: "center center",
                    ease: Sine.easeInOut,
                    onComplete: onComplete,
                },
                "-=0.4",
            )
            .to(
                rect1,
                0.01,
                {
                    fill: "#FF3C82",
                },
                "-=0.2",
            )
            .to(rect1, 0.5, {
                fill: "#1469FF",
                ease: Sine.easeInOut,
            })
            .to(
                title,
                0.5,
                {
                    opacity: 0,
                    ease: Sine.easeInOut,
                },
                "-=0.3",
            );
    }
    onComplete() {
        this.props.onComplete(true);
    }

    render() {
        let {ww, wh} = this.props;
        let cx = ww / 2,
            cy = wh / 2,
            r = wh * 0.35,
            or = r / 9,
            ct = wh * 0.25,
            tw = wh * 0.25 * 2,
            th = wh * 0.2 * 2,
            tox = tw / 2,
            toy = th / 2;

        let points = `${cx},${cy + toy + or} ${cx + tox},${cy - toy + or} ${cx -
            tox},${cy - toy + or}`;
        let starColor = "#FF3C82";

        return (
            <div>
                <svg width={ww} height={wh} version="1.1">
                    <rect
                        ref="rect"
                        x={cx - r + or}
                        y={cy - r + or}
                        width={(r - or) * 2}
                        height={(r - or) * 2}
                    />
                    <circle
                        ref="circle"
                        className="circle"
                        cx={cx}
                        cy={cy}
                        r={r}
                        fill="#0027C8"
                    />
                    <Star ref="star" points={points} />
                    <rect
                        ref="rect1"
                        fill="none"
                        x={0}
                        y={0}
                        width={window.innerWidth}
                        height={window.innerHeight}
                    />
                </svg>

                <div ref="title" className="fade">
                    <TitleInfo
                        title="GEOMETRY PERSON"
                        info="find your core personality type shapes"
                    />
                </div>
            </div>

        );
    }
}

export const TitleInfo = ({title, info}) => {
    return (
        <div className="pos-abs opening">
            <div className="title">
                <h1>{title}</h1>
                <p> {info}</p>
            </div>
        </div>
    );
};

TitleInfo.propTypes = {
    title: PropTypes.string,
    info: PropTypes.string,
};
