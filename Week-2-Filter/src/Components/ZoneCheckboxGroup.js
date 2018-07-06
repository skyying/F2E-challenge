import React, {Component} from "react";
import {Checkbox} from "antd";
import ZoneList from "./ZoneList.js";

const CheckboxGroup = Checkbox.Group;

export default class ZoneCheckboxGruopFilter extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            checkedList: ZoneList,
            indeterminate: false,
            checkAll: true,
        };
        this.onChange = this.onChange.bind( this );
        this.onCheckAllChange = this.onCheckAllChange.bind( this );
    }
    onChange( checkedList ){
        this.setState( {
            checkedList,
            indeterminate:
                !!checkedList.length &&
                checkedList.length < ZoneList.length,
            checkAll: checkedList.length === ZoneList.length,
        } );

        this.props.onChange( checkedList );
    }
    onCheckAllChange( e ){
        let list =e.target.checked ? ZoneList : [];
        this.setState( {
            checkedList: list,
            indeterminate: false,
            checkAll: e.target.checked,
        } );
        this.props.onChange( list );
    }
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
                    options={ZoneList}
                    value={this.state.checkedList}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}
