import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import gabi from "../assets/img/gabi.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["an iOS Developer", "a Test Engineer", "a Researcher", "a Software Engineer", "a Web Developer", "a Web Designer", "a UI/UX Designer"];
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

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <div className="circular-image-container">
                                        <img src={gabi} alt="Header Img" />
                                    </div>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h1>{`My name is Gabriela Ivonne Lopez-Salgado`} <span><span className="wrap">{text}</span></span></h1>
                                    <h1>{`I'm`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "an iOS Developer", "a Test Engineer", "a Researcher", "a Software Engineer", "a Web Developer", "a Web Designer", "a UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                                    <p>My passion lies in computing all of the possible edge cases within a system.  I am experienced in mobile iOS app development, research, embedded systems, testing, and technical documentation.</p>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}