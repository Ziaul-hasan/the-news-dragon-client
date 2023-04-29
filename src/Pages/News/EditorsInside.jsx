import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import edimg1 from '../../assets/editorsInsight1.png';
import edimg2 from '../../assets/editorsInsight2.png';
import edimg3 from '../../assets/editorsInsight3.png';

const EditorsInside = () => {
    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-4 mt-5">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={edimg1} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={edimg2} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={edimg3} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default EditorsInside;