import React, {Component} from "react";
import {Checkbox} from "antd";

const CheckboxGroup = Checkbox.Group;
const zoneOptions = ["zone1", "zone2", "zone3"];

export default class ZoneCheckboxGruopFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedList: zoneOptions,
            indeterminate: true,
            checkAll: true,
        };
        this.onChange = this.onChange.bind(this);
        this.onCheckAllChange = this.onCheckAllChange.bind(this);
    }
    onChange(checkedList){
        this.setState({
            checkedList,
            indeterminate:
                !!checkedList.length &&
                checkedList.length < zoneOptions.length,
            checkAll: checkedList.length === zoneOptions.length,
        });
        console.log("onChange", this.state.checkedList);
    };
    onCheckAllChange(e){
        this.setState({
            checkedList: e.target.checked ? zoneOptions : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
        console.log("onCheckAll", this.state.checkList);
    };
    render() {
        const {checkedList, indeterminate, checkAll} = this.state;
        return (
            <div>
                <div>
                    <Checkbox
                        indeterminate={indeterminate}
                        onChange={this.onCheckAllChange}
                        checked={checkAll}>
                        Select All
                    </Checkbox>
                </div>
                <br />
                <CheckboxGroup
                    options={zoneOptions}
                    value={checkedList}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}
