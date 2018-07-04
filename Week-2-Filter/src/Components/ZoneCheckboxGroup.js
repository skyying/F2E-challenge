import React, {Component} from "react";
import {Checkbox} from "antd";

const CheckboxGroup = Checkbox.Group;
const zoneList = ["zone1", "zone2", "zone3"];

export default class ZoneCheckboxGruopFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedList: zoneList,
            indeterminate: false,
            checkAll: false,
        };
        this.onChange = this.onChange.bind(this);
        this.onCheckAllChange = this.onCheckAllChange.bind(this);
    }
    onChange(checkedList){
        this.setState({
            checkedList,
            indeterminate:
                !!checkedList.length &&
                checkedList.length < this.props.zoneList.length,
            checkAll: checkedList.length === this.props.zoneList.length,
        });

        this.props.onChange(checkedList);
    };
    onCheckAllChange(e){
        let list =e.target.checked ? this.props.zoneList : [];
        this.setState({
            checkedList: list,
            indeterminate: false,
            checkAll: e.target.checked,
        });
        this.props.onChange(list);
    };
    render() {
        return (
            <div>
                <div>
                    <Checkbox
                        indeterminate={this.state.indeterminate}
                        onChange={this.onCheckAllChange}
                        checked={this.state.checkAll}>
                        Select All
                    </Checkbox>
                </div>
                <br />
                <CheckboxGroup
                    options={this.props.zoneList}
                    value={this.state.checkedList}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}
