import * as React from 'react'
import { Row, Col } from 'react-bootstrap';

import { TabParams } from '@Components/Tabs/types';
import Notes from '@Shared/models/notes';
import Tabs from '@Components/Tabs';
import Card from '@Components/Card';
import DataGrid from '@Components/DataGrid';
import HelloWorld from '@Components/HelloWorld';
import { IProps } from './types';

export default class Dashboard extends React.Component<IProps> {

    constructor(props: IProps) {
        super(props);

        this.getTabParams = this.getTabParams.bind(this);
        this.createCards = this.createCards.bind(this);
    }

    getTabParams(): TabParams[] {
        const { notes } = this.props;
        const tabs: TabParams[] = [
            { key: 'home', caption: 'Hello World', component: <HelloWorld /> },
            { key: 'cards', caption: 'Cards', component: this.createCards(notes) },
            { key: 'details', caption: 'Grid', component: <DataGrid dataSource = { notes } /> },
        ]
        return tabs;
    }

    createCards(notes: Notes[]): JSX.Element {
        return (
            <Row>
                {
                    notes.map(note => (
                        <Col 
                            key = { note.id } 
                            sm = {3} 
                            className = "mt-3"
                        >
                            <Card 
                                key = { note.id }
                                title = { note.title } 
                                description = { note.description } 
                                actions = { { edit: 'url', delete: 'delete' } }
                            />
                        </Col>
                    ))
                }
            </Row>
        )
    }

    render() {
        return (
            <div>
                <Tabs tabs = { this.getTabParams() } />
            </div>
        )
    }
}
