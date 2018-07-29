import "./style/reset.scss";
import "./style/main.scss";
import "./style/question.scss";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import Opening from "./comp/opening.js";
import QuestionPage from "./comp/question.js";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            stage: 0, // 0: opening, 1 - 3: question, 4: loading result, ...
        };
        this.next = this.next.bind(this);
    }
    componentDidMount() {
        if (this.state.stage === 0) {
            setTimeout(() => {
                this.refs.opening.play();
            }, 1000);
        }
    }
    next() {
        if (this.state.stage === 0) {
            this.setState({isLoaded: true, stage: 1});
        } else {
            this.setState({
                stage: this.state.stage + 1,
            });
        }
    }
    render() {
        // for animation purpose
        let body = document.body;
        if (this.state.stage === 3) {
            body.style.backgroundColor = "#0027c8";
        } else if (this.state.stage === 4) {
            body.style.backgroundColor = "#1469FF";
        }

        let opening = (
            <Opening
                onComplete={this.next}
                ref="opening"
                ww={window.innerWidth}
                wh={window.innerHeight}
            />
        );

        let page = this.state.isLoaded && (
            <QuestionPage stage={this.state.stage} next={this.next} />
        );

        return (
            <div className="bg">
                {opening}
                {page}
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("main"));
