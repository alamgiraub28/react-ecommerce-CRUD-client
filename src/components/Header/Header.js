import React, { useContext } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Header.css';
import logo from '../../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <>
            <Container fluid={true} className="header-bg-custom">
                <Container>
                    <Navbar  expand="lg">
                        <Link to="/"><Navbar.Brand href="#home"><img className="customlogo" src={logo} alt=""/></Navbar.Brand></Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto p-1">
                                <Link to="/"><Nav.Link  href="#home">Home</Nav.Link></Link>
                                <Link to="/orders"><Nav.Link href="#link">Orders</Nav.Link></Link>
                                <Link to="/manageProduct"><Nav.Link href="#link">Dashboard</Nav.Link></Link>
                                <Nav.Link className="navlink" href="#link"><FontAwesomeIcon className="mr-2" icon={faUser}/>{loggedInUser.name || loggedInUser.displayName}</Nav.Link>
                            </Nav>
                            {
                                !loggedInUser.name || loggedInUser.displayName ? (<Link to="/login"><Button variant="primary">Login</Button></Link>)
                                : (<Button onClick={() => setLoggedInUser({})} variant="primary">SignOut</Button>)
                            }
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </Container>
        </>
    );
};

export default Header;