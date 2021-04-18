import React from 'react';
import { Container } from 'react-bootstrap';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <>
            <Container fluid={true} className="text-center p-5 bg-primary">
                <div class="search-area mb-3">
                    <i className="material-icons search-icon">search</i>
                    <input id="type" className="search-field" type="text" placeholder="Search..." />
                    <button id="search" className="search-btn">Search</button>
                </div>
            </Container>
        </>
    );
};

export default HomeBanner;