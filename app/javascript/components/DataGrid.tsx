import * as React from 'react';
import { DataGrid, Column, FilterRow, SearchPanel } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.light.css';

export default class DataGridComponent extends React.Component<IProps> {

    constructor(props: IProps){
        super(props)
    }

    render() {
        const { dataSource } = this.props;
        return (
            <div className="mb-5">
                <DataGrid 
                    dataSource = { dataSource }
                    keyExpr = "id"
                >
                    <Column dataField="id"></Column>
                    <Column dataField="title"></Column>
                    <Column dataField="description"></Column>
                    <Column dataField="created_at" dataType="date"></Column>
                    <FilterRow visible={true} />
                    <SearchPanel visible={true} />
                </DataGrid>
            </div>
        )
    }
}

interface IProps {
    dataSource: Notes[]
}

class Notes {
    id: number;
    title: string;
    description: string;
    created_at: Date;
    updated_at?: Date;
    deleted: boolean;
}