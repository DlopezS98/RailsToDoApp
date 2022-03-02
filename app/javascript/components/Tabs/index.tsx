import * as React from 'react'
import { Tabs as BscTabs, Tab } from 'react-bootstrap';

import { IProps, IState } from './types';

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
            <BscTabs
                activeKey={ currentKey }
                onSelect={(key) => this.setState({ currentKey: key })}
            >
                {
                    tabs.map(tab => (
                        <Tab 
                            key = { tab.key } 
                            eventKey = { tab.key } 
                            title = { tab.caption }>
                            { tab.component }
                        </Tab>
                    )) 
                }
            </BscTabs>
        )
    }
}
