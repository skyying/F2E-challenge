import React, {Component} from "react";
import PropTypes from "prop-types";
import "../style/TextWithIcon.scss";


const TextWithIcon = ({name, text}) => (
    <span className="text-with-icon">
        <i className={"fa "+ name}/>
        {text}
    </span>
);

TextWithIcon.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
};

export default TextWithIcon;
