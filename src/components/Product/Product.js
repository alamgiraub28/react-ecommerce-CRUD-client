import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './Product.css';
import './responsive.css';

const Product = ({product}) => {
  
  return (
    <>
      <div className="product-card border rounded">
        <img className="w-100" src={product.image} alt="" />
        <h6 className="title">{product.title}</h6>
        <h6 className="price mt-3">${product.price}</h6>
        <Link to={"/product/" + product._id} ><Button className="m-3" variant="primary btn-sm"><FontAwesomeIcon icon={faShoppingCart} /> Buy Now</Button></Link>
      </div>
    </>
  );
};

export default Product;