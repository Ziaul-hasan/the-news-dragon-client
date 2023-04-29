import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container className='w-75 mx-auto'>
            <h2 className='text-center'>Terms & Condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam incidunt earum ad distinctio, fugit molestias laboriosam optio repellendus excepturi dolorem ut officia aut dignissimos reprehenderit sunt consequuntur ipsam neque labore dolorum quis? Sint numquam culpa ex dolorem repudiandae, molestiae alias eius laborum placeat mollitia iste accusantium eos itaque facilis explicabo aspernatur ab et natus exercitationem officiis ipsam? Deleniti eaque eos assumenda! Quo deserunt dolorum mollitia quam voluptas magni autem fugit quibusdam fugiat minima. Inventore quidem quaerat placeat suscipit optio repudiandae voluptatibus, nobis fugit nulla, veniam error asperiores non totam vitae autem ut corporis nisi officia vel reiciendis aspernatur ea.</p>
            <p className='text-center'>Go to <Link to="/register">Register</Link></p>
        </Container>
    );
};

export default Terms;