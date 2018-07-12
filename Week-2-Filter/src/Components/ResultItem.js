import TagListView from "./TagListView.js";
import TextWithIcon from "./TextWithIcon.js";
import React, {Component} from "react";
import PropTypes from "prop-types";

const InfoList = ({city, date}) => (
    <div>
        <TextWithIcon name="fa-map-marker" text={city} />
        <TextWithIcon name="fa-calendar" text={date} />
    </div>
);

InfoList.propsTypes ={
    city: PropTypes.string,
    date: PropTypes.string,
}


const ResultItem = ({
    data: {url, title, description, zone, openTime, ticketInfo},
}) => (
    <div className="result-panel-item">
        <div className="result-panel-left">
            <img src={url}/>
        </div>
        <div className="result-panel-right">
            <h4>{title}</h4>
            <div className="description-wrapper">
                <div className="discription">{description}</div>
                <div className="ellipsis">...</div>
            </div>
            <div>
                <h5 className="zone-info">{zone}</h5>
                <InfoList city={openTime} date={ticketInfo} />
            </div>
        </div>
    </div>
);

ResultItem.propTypes = {
    data: PropTypes.object,
    url: PropTypes.string,
    data: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    host: PropTypes.string,
    tagList: PropTypes.array,
    city: PropTypes.string,
    date: PropTypes.string,
};

export default ResultItem;
