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
                    <span className="navbar-text">
                        <button className="vvd" onClick={() => console.log('aboutMe')}><span>About Me</span></button>
                        <button className="vvd" onClick={() => console.log('technicalExperience')}><span>Technical Experience</span></button>
                        <button className="vvd" onClick={() => console.log('myCommunities')}><span>My Communities</span></button>
                        <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}