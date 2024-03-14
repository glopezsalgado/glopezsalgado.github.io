/*  NEEDED */
import { useState, useEffect } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"

//


// Functional Component:
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) { setScrolled(true); }
            else { setScrolled(false); }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => { setActiveLink(value); }
    // LEFT OFF HERE AT 11:30


    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={''} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#aboutMe" className={activeLink === 'aboutMe' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutMe')}>About Me</Nav.Link>
                        <Nav.Link href="#technicalExperience" className={activeLink === 'technicalExperience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('technicalExperience')}>Technical Experience</Nav.Link>
                        <Nav.Link href="#myCommunities" className={activeLink === 'myCommunities' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('myCommunities')}>My Communities</Nav.Link>
                        <Nav.Link href="#letsConnect" className={activeLink === 'letsConnect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('letsConnect')}>Let's Connect</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={''} alt="" /></a>
                            <a href="#"><img src={''} alt="" /></a>
                            <a href="#"><img src={''} alt="" /></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>

                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}