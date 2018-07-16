import React, {Component} from "react";

export const SearchInput = ( {text, placeholder, onSearchTermChange} ) => {
    return (
        <span className="ant-input-search ant-input-affix-wrapper">
            <input
                value={text}
                placeholder={placeholder}
                className="ant-input"
                onChange={e => onSearchTermChange( e.target.value )}
                type="text"
            />
        </span>
    );
};
