import React, {Component} from "react";
import PropTypes from "prop-types";
const SideViewPanel = ({title, children}) => (
    <div className="sideview-panel">
        <h4>{title}</h4>
        {children}
    </div>
);

SideViewPanel.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
};

export default SideViewPanel;
