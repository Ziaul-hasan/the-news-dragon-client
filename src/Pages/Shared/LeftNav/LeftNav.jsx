import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftNav.css'
import FeaturedNews from './FeaturedNews';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data =>setCategories(data))
        .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h3>All Categories</h3>
            <div className='my-4'>
                {
                    categories.map(category => <p key={category.id} className='cateLink px-4 py-3'>
                        <Link to={`/category/${category.id}`} className='text-black text-decoration-none'>{category.name}</Link>
                    </p>)
                }
            </div>
            <FeaturedNews></FeaturedNews>
        </div>
    );
};

export default LeftNav;