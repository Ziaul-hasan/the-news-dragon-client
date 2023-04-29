import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    console.log('login page location', location);
    const from = location.state?.from?.pathname || '/category/0'

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <Container className='w-50 mx-auto my-5 p-5 bg-light rounded'>
            <h2>Please Login</h2>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Button className='w-100 mb-3' variant="secondary" type="submit">
                    Submit
                </Button>
                <p className="text-secondary text-center">
                    Don't have an Account? <Link to="/register" className="text-danger">Register</Link>
                </p>
                <p className="text-muted text-center">
                    We'll never share your email with anyone else.
                </p>
            </Form>
        </Container>
    );
};

export default Login;