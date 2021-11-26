import * as React from 'react'
import { TabParams } from 'Shared/types/Tabs';

import Notes from '../Shared/models/notes';
import Tabs from "./Tabs";
import Card from "./Card";

export default class Dashboard extends React.Component<IProps> {

    constructor(props: IProps){
        super(props)
    }

    getTabParams(): TabParams[] {

        let tabs: TabParams[] = [
            { key: "home", caption: "Notes", component: this.createNotes() },
            { key: "details", caption: "Grid", component:  },
        ]
        return [];
    }

    createNotes(): JSX.Element {
        const { notes } = this.props;
        return (
            <div>
                {
                    notes.map(note => (
                        <Card 
                            title = {note.title} 
                            description = { note.description } 
                            actions = { { edit: 'url', delete: 'delete' } }
                        />
                    ))
                }
            </div>
        )
    }

    render() {
        return (
            <div>
                <Tabs tabs />
            </div>
        )
    }
}

interface IProps {
    notes: Notes[];
}
