import React, { Component, MouseEvent } from 'react'
import { Card as BscCard, Col, Row, Button } from "react-bootstrap";

import Modal from "../Modal"
import { IProps, IState } from "./types";

export default class Card extends Component<IProps, IState> {

    public state: IState = {
        showModal: false
    }

    constructor(props: IProps) {
        super(props);
        this.edit = this.edit.bind(this);
    }

    edit(url: string): void {
        const baseUrl: string = location.origin;
        location.href = `${baseUrl}${url}`;
    }

    handleClose = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(event);
        this.setState({ showModal: !this.state.showModal });
    }

    render() {
        const { showModal } = this.state;
        return (
            <BscCard className={'shadow'}>
                <BscCard.Body>
                    <h4>{this.props.title}</h4>
                    <hr />
                    <p style = {{ textAlign: "justify" }}>{this.props.description}</p>
                </BscCard.Body>
                <BscCard.Footer 
                    className = "d-flex align-items-center justify-content-end">
                    <div>
                        <Button 
                            style = {{ marginRight: "10px" }} 
                            variant = "primary" size="sm" 
                            onClick = {() => this.edit(this.props.actions.edit)}>
                            Edit
                        </Button>
                        <Button 
                            variant = "danger" 
                            size = "sm"
                            onClick = { this.handleClose }>
                            Delete
                        </Button>
                    </div>
                </BscCard.Footer>
                <Modal 
                    title = "Are you sure to delete this note?"
                    message = "Some message"
                    show = { showModal }
                    handleClose = { this.handleClose } />
            </BscCard>
        )
    }
}