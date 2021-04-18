import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://radiant-retreat-65757.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            <Container className="d-flex">
                <Row>
                    {
                        products.length === 0 && <Spinner animation="border" />
                    }
                    {
                        products.map(product => <Product product={product} key={product._id}></Product>)
                    }
                </Row>
            </Container>

        </>
    );
};

export default Home;