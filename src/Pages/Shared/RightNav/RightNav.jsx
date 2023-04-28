import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg1.png';

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className='mb-3 w-100' variant="outline-primary"> <FaGoogle /> Login With Google</Button>
            <Button className='mb-3 w-100' variant="outline-secondary"> <FaGithub /> Login With Github</Button>
            <div>
                <ListGroup className='mb-2'>
                    <ListGroup.Item> <FaFacebook className='me-3'/> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter className='me-3'/> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram className='me-3'/> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='my-4 p-4 bg-light'>
                <Qzone></Qzone>
            </div>
            <div className='position-relative'>
                <img className='w-100 h-50' src={bg} alt="" />
                <div className='text-center position-absolute top-50 start-50 translate-middle text-white'>
                    <h3>Create an Amazing Newspaper</h3>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;