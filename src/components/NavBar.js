/*  NEEDED */
import { useState, useEffect } from "react"
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import mylogo from "../assets/img/mylogo1.png";

import {
    BrowserRouter as Router
} from "react-router-dom";

//

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
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={mylogo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <span className="navbar-text">
                            <HashLink to='#aboutMe'>
                                <button className="vvd"><span>About Me</span></button>
                            </HashLink>

                            <HashLink to='#technicalExperience'>
                                <button className="vvd"><span>Technical Experience</span></button>
                            </HashLink>
                            <HashLink to='#myCommunities'>
                                <button className="vvd"><span>My Communities</span></button>
                            </HashLink>

                            <HashLink to='#connect'>
                                <button className="vvd"><span>Let’s Connect</span></button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}