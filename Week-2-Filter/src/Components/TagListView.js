import React, {Component} from "react";
import {Tag} from "antd";
import PropTypes from "prop-types";

const TagListView = ({tagList, closable}) => {
    console.log("tagList", tagList);
    let tags =
        tagList.length >= 0 ? (
            <div>
                {tagList.map((tag, i) => (
                    <Tag closable={closable} key={tag + "_" + i}> {tag} </Tag>
                ))}{" "}
            </div>
        ) : null;
    return tags;
};

TagListView.propTypes = {
    tagList: PropTypes.array,
};

export default TagListView;
