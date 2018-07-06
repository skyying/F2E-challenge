import React, {Component} from "react";
import {Tag} from "antd";
import PropTypes from "prop-types";

const TagListView = ( {tagList, closable} ) => {
    return (
        ( tagList.length && (
            <div>
                {tagList.map( ( tag, i ) => (
                    <Tag closable={closable} key={tag + "_" + i}>
                        {" "}
                        {tag}{" "}
                    </Tag>
                ) )}{" "}
            </div>
        ) ) ||
        []
    );
};

TagListView.propTypes = {
    tagList: PropTypes.array,
    tagList: PropTypes.any,

};

export default TagListView;
