import moment from 'moment';
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {

    const { _id, title, details, image_url, author } = news;
    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex'>
                    <Image className='mt-2' style={{height: '40px'}} src={author?.img} roundedCircle />
                    <div className='ps-3'>
                        <p className='mb-0'>{author?.name}</p>
                        <p>{moment(author?.published_date).format('yyyy-MM-D')}</p>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img className='my-3' variant="top" src={image_url} />
                    <Card.Text>
                        {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}.... <Link to={`/news/${_id}`}>Read More</Link></>}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;