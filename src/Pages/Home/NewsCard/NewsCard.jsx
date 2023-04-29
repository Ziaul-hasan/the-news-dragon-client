import moment from 'moment';
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaEye, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const NewsCard = ({ news }) => {

    const { _id, title, details, image_url, author, total_view, rating } = news;
    return (
        <div>
            <Card className="my-4">
                <Card.Header className='d-flex'>
                    <Image className='mt-2' style={{ height: '40px' }} src={author?.img} roundedCircle />
                    <div className='ps-3 flex-grow-1'>
                        <p className='mb-0'>{author?.name}</p>
                        <p>{moment(author?.published_date).format('yyyy-MM-D')}</p>
                    </div>
                    <div>
                        <FaRegBookmark className='mx-2'></FaRegBookmark>
                        <FaShareAlt className='mx-2'></FaShareAlt>
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
                <Card.Footer className="text-muted d-flex">
                    <div className='flex-grow-1'>
                        <Rating
                            placeholderRating={rating?.number}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}>
                            </Rating>
                        <span className='ms-2 mt-1'>{rating?.number}</span>
                    </div>
                    <div>
                        <FaEye className='me-2'></FaEye> {total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;