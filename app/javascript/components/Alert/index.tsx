import React from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { IProps, styles } from "./types";

export default class Alert extends React.Component<IProps> {

    constructor(props: IProps){
        super(props);
    }

    render() {
        const { title, message, handleClose, show } = this.props;
        return (
            <Modal 
                show = { show }
                onHide = { handleClose } >
                <Modal.Body>
                    <Row>
                        <Col>
                            { title }
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col style = {styles.AxisXEnd}>
                            <Button
                                variant = "primary"
                                size = "sm"
                                onClick = { handleClose }>
                                Close
                            </Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        )
    }
}