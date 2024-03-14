import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
//import logo from "../assets/img/logo.svg";
//import navIcon1 from "../assets/img/nav-icon1.svg";
//import navIcon2 from "../assets/img/nav-icon2.svg";
//import navIcon3 from "../assets/img/nav-icon3.svg";

//import linkedInLogo from './linkedin_logo.png'; // Import LinkedIn logo image
//import githubLogo from './github_logo.png'; // Import GitHub logo image

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col size={12} sm={6}>
                        <img src={''} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            {/* LinkedIn button */}
                            <a href="www.linkedin.com/in/gabriela-lopez-salgado" target="_blank" rel="noopener noreferrer">
                                <button className="social-button">
                                    <img src={''} alt="LinkedIn" />
                                </button>
                            </a>
                            {/* GitHub button */}
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <button className="social-button">
                                    <img src={''} alt="GitHub" />
                                </button>
                            </a>
                            {/* Email button */}
                            <button className="contact-button" onClick={() => window.open('mailto:gsalgado@umich.edu')}>
                                Email
                            </button>
                            {/* Phone button */}
                            <button className="contact-button" onClick={() => window.open('tel:+15179186443')}>
                                Phone
                            </button>
                        </div>
                        <p>Copyright 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}