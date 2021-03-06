import React, { useEffect, useState } from 'react';
import { Container, Button, Col, Row, Table, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import SideNav from '../SideNav/SideNav';

const ManageProduct = () => {
    const [manageProduct, setManageProduct] = useState([])

    useEffect(() => {
        fetch('https://radiant-retreat-65757.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setManageProduct(data))
    }, [])

    // Delete Product Item
    const deleteItem = id => {
        fetch(`https://radiant-retreat-65757.herokuapp.com/delete/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(result => {
                alert('delete successfully', result);
            })
    }

    return (
        <>
            <Container className="mt-4">
                <Row>
                    <Col lg={3} md={6} sm={12}>
                        <SideNav />
                    </Col>

                    <Col lg={9} md={10} sm={12}>
                        <h4 className="mb-4">Manage Product</h4>
                        {
                            manageProduct.length === 0 && <Spinner animation="border" variant="success" />
                        }
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {manageProduct.map(product =>
                                    <tr>
                                        <td>{product.title}</td>
                                        <td>${product.price}</td>
                                        <td>
                                            <Button variant="primary btn-sm"><FontAwesomeIcon className="" icon={faEdit} /></Button>
                                            <Button onClick={() => deleteItem(product._id)} variant="danger btn-sm" className="ml-2"><FontAwesomeIcon className="" icon={faTrash} /></Button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ManageProduct;