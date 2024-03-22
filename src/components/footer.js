import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
//import logo from "../assets/img/logo.svg";
import gitIcon from "../assets/img/github-icon.png.webp";
import lInIcon from "../assets/img/lIn4-removebg-preview.png";

//import navIcon2 from "../assets/img/nav-icon2.svg";
//import navIcon3 from "../assets/img/nav-icon3.svg";

//import linkedInLogo from './linkedin_logo.png'; // Import LinkedIn logo image
//import githubLogo from './github_logo.png'; // Import GitHub logo image                         <p>Copyright 2024. All Rights Reserved</p>


export const Footer = () => {
    return (
        <div>
            {/* Divider line */}
            <div className="footer-divider"></div>
            <footer className="footer">
                <Container>
                    <Row className="align-items-center gx-2">
                        <Col sm={3} className="text-center text-sm-end">
                            {/* LinkedIn button */}
                            <a href="https://www.linkedin.com/in/gabriela-lopez-salgado" target="_blank" rel="noopener noreferrer">
                                <button className="social-button"><img src={lInIcon} alt="LinkedIn" /></button></a>
                        </Col>
                        <Col sm={3} className="text-center text-sm-ensd">
                            {/* GitHub button */}
                            <a href="https://github.com/glopezsalgado" target="_blank" rel="noopener noreferrer">
                                <button className="social-button"><img src={gitIcon} alt="GitHub" /></button></a>
                        </Col>
                        <Col sm={3} className="text-center text-sm-end">
                            <button className="contact" onClick={() => window.open('mailto:gsalgado@umich.edu')}>gsalgado@umich.edu</button>
                        </Col>
                        <Col sm={3} className="text-center text-sm-end">
                            <button className="contact" onClick={() => window.open('tel:+15179186443')}>517 - 918 - 6443</button>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}