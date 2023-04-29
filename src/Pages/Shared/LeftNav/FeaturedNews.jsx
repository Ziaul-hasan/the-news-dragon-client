import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import sdimg1 from '../../../assets/1.png';
import sdimg2 from '../../../assets/2.png';
import sdimg3 from '../../../assets/3.png';

const FeaturedNews = () => {
    return (
        <div>
            <Row xs={1} className="g-4 mt-5">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={sdimg1} />
                        <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={sdimg2} />
                        <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={sdimg3} />
                        <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
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

export default FeaturedNews;