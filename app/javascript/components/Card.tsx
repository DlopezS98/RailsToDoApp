import * as React from "react";
import { Component, ReactNode } from 'react'
import { Card, Col, Row, Button } from "react-bootstrap";

export default class CardComponent extends Component<IProps> {

    constructor(props: IProps) {
        super(props);
        this.edit = this.edit.bind(this);
    }

    edit(url: string): void {
        const baseUrl: string = location.origin;
        location.href = `${baseUrl}${url}`;
    }

    render() {
        return (
            <Card className={'shadow'}>
                <Card.Body>
                    <h4>{this.props.title}</h4>
                    <hr />
                    <p style={{ textAlign: "justify" }}>{this.props.description}</p>
                </Card.Body>
                <Card.Footer className="d-flex align-items-center justify-content-end">
                    <div>
                        <Button style={{ marginRight: "10px" }} variant="primary" size="sm" onClick={() => this.edit(this.props.actions.edit)}>Edit</Button>
                        <Button variant="danger" size="sm">Delete</Button>
                    </div>
                </Card.Footer>
            </Card>
        )
    }
}

interface IProps {
    title: String;
    description: String;
    actions: ActionUrls;
}

type ActionUrls = {
    edit: string;
    delete: string;
}