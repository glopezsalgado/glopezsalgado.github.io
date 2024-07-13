import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import gabi from "../assets/img/gabi.png";
import 'animate.css';
import resume from "../assets/img/Gabriela Ivonne Lopez-Salgado - Resume Fall 2023.pdf";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const [showResume, setShowResume] = useState(false); // Define showResume state
    const toRotate = ["Mobile iOS Developer", "Test Engineer", "Researcher", "Software Engineer", "Web Developer", "Web Designer", "UI/UX Designer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    const resumeButtonClick = () => {
        setShowResume(true); // Show the PDF when button is clicked
    }


    return (
        <section className="banner" id="aboutMe">
            <Container fluid>
                <Row className="align-items-center">
                    <Col xs={12} md={6}>
                        <img className="circular-image-container" src={gabi} alt="Header Img" />
                    </Col>
                    <Col xs={12} md={6}>
                        {!showResume && (
                            <div className="right-column">
                                <h1><span>My name is </span><span className="name">Gabriela Ivonne Lopez-Salgado</span></h1>
                                <h1>{`I'm a`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Mobile iOS Developer", "Test Engineer", "Researcher", "Software Engineer", "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                                <p>My passion lies in computing all of the possible edge cases within a system. I have experience with electronic circuit design, mobile app development, research, embedded systems, and technical documentation.</p>
                                <button onClick={resumeButtonClick}>See Resume</button>
                            </div>
                        )}
                    </Col>
                </Row>
                {showResume && (
                    <Row>
                        <Col xs={12} md={6}>
                            <div className="below-image">
                                <h1><span>My name is </span><span className="name">Gabriela Ivonne Lopez-Salgado</span></h1>
                                <h1>{`I'm a`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Mobile iOS Developer", "Test Engineer", "Researcher", "Software Engineer", "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                                <p>My passion lies in computing all of the possible edge cases within a system. I have experience with electronic circuit design, mobile app development, research, embedded systems, and technical documentation.</p>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <iframe
                                src={resume}
                                style={{ width: '100%', height: '500px' }}
                                title="Resume PDF Viewer"
                            ></iframe>
                        </Col>
                    </Row>
                )}
            </Container>
            <div className="space"></div>
        </section>
    )
}