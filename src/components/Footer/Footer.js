import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import './Footer.css';

const Footer = () => {
    return (
        <>
            <Container fluid={true} className="text-center p-2 bg-light">
                <FontAwesomeIcon className="social-icon" icon={faFacebook} />
                <FontAwesomeIcon className="social-icon" icon={faYoutube} />
                <FontAwesomeIcon className="social-icon" icon={faTwitter} />
                <FontAwesomeIcon className="social-icon" icon={faInstagram} />
                <p className="mt-2">Copyright © 2021 eBrandShop. All Rights Reserved.</p>
            </Container>
        </>
    );
};

export default Footer;