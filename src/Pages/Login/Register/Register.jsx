import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useState } from 'react';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        createUser(email, password)
        .then(result => {
            const createUser = result.user;
            console.log(createUser);
        })
        .catch(error => {
            console.log(error)
        })
    }
    const handleCheck = event => {
        setAccepted(event.target.checked)
    }

    return (
        <Container className='w-50 mx-auto my-5 p-5 bg-light rounded'>
            <h2>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="your photo url_" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleCheck} type="checkbox" label={<>Accept our <Link to="/terms">terms and condition</Link></>} />
                </Form.Group>
                <Button className='w-100 mb-3' disabled={!accepted} variant="secondary" type="submit">
                    Register
                </Button>
                <p className="text-secondary text-center">
                    Already have an Account? <Link to="/login" className="text-danger">Login</Link>
                </p>
                <p className="text-muted text-center">
                    We'll never share your email with anyone else.
                </p>
            </Form>
        </Container>
    );
};

export default Register;