import "../style/common.scss";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export const Button = ({text, next}) => {
    return (
        <a onClick={next} className="btn">
            {text}
        </a>
    );
};

Button.propTypes = {
    text: PropTypes.string,
};

export class Triangle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {points, color} = this.props;
        return <polygon points={points} fill={color} />;
    }
}
