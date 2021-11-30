import * as React from 'react';
import { DataGrid as DxDataGrid, Column, FilterRow, SearchPanel } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.light.css';

import { IProps } from "./types";

export default class DataGrid extends React.Component<IProps> {

    constructor(props: IProps){
        super(props)
    }

    render() {
        const { dataSource } = this.props;
        return (
            <div className = "mb-5">
                <DxDataGrid 
                    dataSource = { dataSource }
                    keyExpr = "id"
                >
                    <Column dataField = "id"></Column>
                    <Column dataField = "title"></Column>
                    <Column dataField = "description"></Column>
                    <Column dataField = "created_at" dataType = "date"></Column>
                    <FilterRow visible = {true} />
                    <SearchPanel visible = {true} />
                </DxDataGrid>
            </div>
        )
    }
}