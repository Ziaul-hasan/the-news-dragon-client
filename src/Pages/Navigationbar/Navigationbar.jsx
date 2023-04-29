import React from 'react';
import { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Navigationbar = () => {
    const { user } = useContext(AuthContext)
    return (
        <Container className='my-3'>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='mx-3' to="/category/0">Home</Link>
                            <Link className='mx-3' href="#pricing">About</Link>
                            <Link className='mx-3' href="#pricing">Career</Link>
                        </Nav>
                        <Nav>
                            {user &&
                                <FaUserCircle style={{ fontSize: '2.5rem' }}></FaUserCircle>
                            }

                            {user ?
                                <Button className='ms-3' variant="secondary">Logout</Button> :
                                <Link to="/login"><Button className='ms-3' variant="secondary">Login</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Navigationbar;