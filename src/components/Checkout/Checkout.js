import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { userContext } from '../../App';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [productInfo, setProductInfo] = useState({});
    const { id } = useParams();

    const { productName, productPrice } = productInfo;

    useEffect(() => {
        fetch(`https://radiant-retreat-65757.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProductInfo(data[0]))
    }, [id]);


    const handleCheckout = data =>{
        
        const orderDetailsInfo = {...loggedInUser, products: data, OrderTime: new Date()}
        fetch('https://radiant-retreat-65757.herokuapp.com/chekoutOrder', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(orderDetailsInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
               alert('order placed successfully'); 
            }
        })

    }

    return (
        <>
            <Container className="p-5 mt-5">
                <h2 className="mb-4 text">Checkout</h2>
                <div className="shadow-sm rounded">
                    <Table>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{productName}</td>
                                <td>1</td>
                                <td>${productPrice}</td>
                            </tr>

                            <tr>
                                <td colSpan="2">Total</td>
                                <td>${productPrice}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button onClick={() => handleCheckout(productInfo)} className="float-right" variant="primary">Checkout</Button>
                </div>
            </Container>
        </>
    );
};

export default Checkout;