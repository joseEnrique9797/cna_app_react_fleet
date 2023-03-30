import React, { Component } from 'react'
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as data from '/Users/K/Documents/react_project/cna_app_react_fleet/cna-app/src/dataSource.json';
export class MulitselectDrop extends Component {
    constructor() {
        
        super(...arguments);
        console.log('load constructor ------------------------>')
        this.temp = 'empList';
        this.empList = data[this.temp];
        console.log(this.empList);
        this.fields = { text: 'Name', value: 'Id' };
        this.value = '100';
    }
    render() {
        return (
            <div class="container">
                <div class="row" className="hdr">
                    <div class="col-sm-12 btn btn-info">
                        How to Use Syncfusion Multiselect Dropdown in React applicatiom
                    </div>
                </div>
                <div class="form-group row" style={{ marginTop: "20px" }}>
                    <label class="control-label col-sm-2" for="email">Select Name:</label>
                    <div class="col-sm-4">
                        <MultiSelectComponent id="defaultelement" dataSource={this.empList} mode="Default" fields={this.fields} placeholder="Select Name" />
                    </div>
                    <div class="col-sm-6"></div>
                </div>
            </div>);
    }
}
export default MulitselectDrop