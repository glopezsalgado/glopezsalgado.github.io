import { Container, Row, Col } from "react-bootstrap";
import gitIcon from "../assets/img/github-icon.png.webp";
import lInIcon from "../assets/img/lIn4-removebg-preview.png";


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-divider"></div>

            <Container>
                <Row className="align-items-center gx-2">
                    <Col sm={3} className="text-center text-sm-end">
                        {/* LinkedIn button */}
                        <a href="https://www.linkedin.com/in/gabriela-lopez-salgado" target="_blank" rel="noopener noreferrer">
                            <button className="lIn-social-button"><img src={lInIcon} alt="LinkedIn" /></button></a>
                    </Col>
                    <Col sm={3} className="text-center text-sm-ensd">
                        {/* GitHub button */}
                        <a href="https://github.com/glopezsalgado" target="_blank" rel="noopener noreferrer">
                            <button className="git-social-button"><img src={gitIcon} alt="GitHub" /></button></a>
                    </Col>
                    <Col sm={3} className="text-center text-sm-end">
                        <button className="email" onClick={() => window.open('mailto:gsalgado@umich.edu')}>gsalgado@umich.edu</button>
                    </Col>
                    <Col sm={3} className="text-center text-sm-end">
                        <button className="phone" onClick={() => window.open('tel:+15179186443')}>517 - 918 - 6443</button>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}