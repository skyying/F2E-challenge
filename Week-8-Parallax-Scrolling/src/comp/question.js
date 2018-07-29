import React, {Component} from "react";
import {Button, Triangle} from "./common.js";
import {TweenMax} from "gsap/TweenMax";
import {QuestionData} from "./questionData.js";
import {ShapeData} from "./shapeData.js";
import TransitionBg from "./transitionBg.js";
import SidebarShapes from "./Sidebar.js";



class Question extends Component {
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
        let qContent = this.refs.qContent;
        if (this.props.stage === 2) {
            TweenMax.from(qContent, 2, {
                css: {
                    opacity: 0,
                },
            });
            TweenMax.to(qContent, 2, {
                css: {
                    opacity: 1,
                    left: "500px",
                },
                ease: Sine.easeOut,
            });
        }
        if (this.props.stage % 2 !== 0) {
            TweenMax.from(qContent, 2, {
                css: {
                    opacity: 0,
                },
            });
            TweenMax.to(qContent, 2, {
                css: {
                    opacity: 1,
                    left: "0",
                },
                ease: Sine.easeOut,
            });
        }
    }

    render() {
        let question = QuestionData[this.props.stage],
            buttons = question.buttons.map((button, i) => (
                <Button key={i} text={button} next={this.props.next} />
            ));

        return (
            <div
                ref="qWrapper"
                className={
                    "q-wrapper " +
                    (this.props.stage === 2 ? "pos-right" : "") +
                    (this.props.stage === 3 ? "secondary" : "")
                }>
                <div ref="qContent" className="questionnaire">
                    <h2> Q{question.id}</h2>
                    <p>{question.problem} </p>
                    <span>{question.instruction}</span>
                    {buttons}
                </div>
            </div>
        );
    }
}



export default class QuestionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: this.props.stage,
            playTransition: true,
            playSidebar: false,
        };
        this.next = this.next.bind(this);
        this.playSidebarAnim = this.playSidebarAnim.bind(this);
    }
    next() {
        this.props.next();
        this.setState({
            playTransition: false,
            playSidebar: false,
        });
    }
    playSidebarAnim() {
        this.setState({
            playSidebar: true,
        });
    }
    render() {
        const trans = (
            <TransitionBg
                dataIndex={this.props.stage - 1}
                onComplete={this.playSidebarAnim}
            />
        );
        const sidebar = this.props.stage <= 3 &&
            this.state.playSidebar && (
            <SidebarShapes stage={this.props.stage} />
        );

        const qus = this.props.stage <= 3 && (
            <Question stage={this.props.stage} next={this.next} />
        );
        return (
            <div className="pos-abs">
                {trans}
                {sidebar}
                {qus}
            </div>
        );
    }
}
