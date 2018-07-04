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
    data: {url, title, description, zone, tagList, openTime, ticketInfo},
}) => (
    <div>
        <img src={url}/>
        <h4>{title}</h4>
        <p>{description}</p>
        <div>
            <h5>{zone}</h5>
            <TagListView tagList={tagList} closable={false} />
            <InfoList city={openTime} date={ticketInfo} />
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
