import React from 'react';
import { Modal as BscModal, Button, Row, Col } from 'react-bootstrap';
import { IProps, styles } from './types';

export default class Modal extends React.Component<IProps> {

    constructor(props: IProps){
        super(props);
    }

    render() {
        const { title, message, handleClose, show } = this.props;
        return (
            <BscModal 
                show = { show }
                onHide = { handleClose } >
                <BscModal.Body>
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
                </BscModal.Body>
            </BscModal>
        )
    }
}