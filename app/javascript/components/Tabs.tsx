import * as React from 'react'
import { Card, Col, Row, Button, Tabs as BTabs, Tab } from "react-bootstrap";
import { TabParams } from "../Shared/types/Tabs";

export default class Tabs extends React.Component<IProps, IState> {

    constructor(props: IProps){
        super(props);
    }

    public state: IState = {
        currentKey: this.props.tabs[0].key
    }

    render() {
        const { currentKey } = this.state;
        const { tabs }  = this.props;
        return (
            <BTabs
                activeKey={ currentKey }
                onSelect={(key) => this.setState({ currentKey: key })}
            >
                {
                    tabs.map(tab => (
                        <Tab eventKey = {tab.key} title = {tab.caption}>
                            { tab.component }
                        </Tab>
                    )) 
                }
            </BTabs>
        )
    }
}

interface IProps {
    tabs: TabParams[]
}

interface IState {
    currentKey: string;
}
