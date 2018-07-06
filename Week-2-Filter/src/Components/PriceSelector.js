import React, {Component} from "react";
import {Select} from "antd";

const Option = Select.Option;

export default class PriceSelector extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(value) {
        this.props.onChange(value);
        console.log("current", value);
    }
    render() {
        const {options, defaultValue} = this.props;
        const optionList = options.map((option, i) => (
            <Option key={option+"_"+i} value={option}>{option}</Option>
        ));
        return (
            <Select defaultValue={defaultValue} onChange={this.handleChange}>
                {optionList}
            </Select>
        );
    }
}
