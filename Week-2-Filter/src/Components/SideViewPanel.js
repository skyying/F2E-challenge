import React, {Component} from "react";
import PropTypes from "prop-types";
const SideViewPanel = ({title, children}) => (
    <div className="sidebar-panel">
        <h4>{title}</h4>
        <div className="sidebar-panel-content">
        {children}
        </div>
    </div>
);

SideViewPanel.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
};

export default SideViewPanel;
