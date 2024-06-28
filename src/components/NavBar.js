import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import mylogo from "../assets/img/mylogo1.png";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={mylogo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className={activeLink === 'aboutMe' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutme')}>About Me</Nav.Link>
                        <Nav.Link as={Link} to="/technicalExperience" className={activeLink === 'communities' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('technicalexperience')}>Technical Experience</Nav.Link>
                        <Nav.Link as={Link} to="/myCommunities" className={activeLink === 'communities' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('communities')}>My Communities</Nav.Link>
                        <Nav.Link as={Link} to="/connect" className={activeLink === 'communities' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connectint')}>Let’s Connect</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
