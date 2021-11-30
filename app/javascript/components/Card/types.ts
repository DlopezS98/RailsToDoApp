export interface IProps {
    title: String;
    description: String;
    actions: ActionUrls;
}

export interface IState {
    showModal: boolean;
}

export type ActionUrls = {
    edit: string;
    delete: string;
}