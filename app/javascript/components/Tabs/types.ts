import { ReactNode } from 'react';

export interface TabParams {
    key: string,
    caption: string,
    component: ReactNode
}

export interface IProps {
    tabs: TabParams[]
}

export interface IState {
    currentKey: string;
}