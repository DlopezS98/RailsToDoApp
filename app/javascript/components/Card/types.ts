export interface IProps {
    title: string;
    description: string;
    actions: ActionUrls;
}

export interface IState {
    showModal: boolean;
}

export interface ActionUrls {
    edit: string;
    delete: string;
}