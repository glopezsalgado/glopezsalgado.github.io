import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const MyCommunities = () => {
    const videoLinks = [
        "https://www.youtube.com/embed/GMPCD4WBhaU?si=67CuSVkEjlTuFSpi",
        "https://www.youtube.com/embed/r9sBq2I8Bnk?si=aX4CfysBgMeWb-H8",
        "https://www.youtube.com/embed/Wc1ey3yZGwU?si=8ZPieptZhUCPeSl2",
        "https://www.youtube.com/embed/GNhHIi7eChE?si=ngkSnmdiby1Ij87S",
        "https://www.youtube.com/embed/rSXTR1N-ZtA?si=CN-uC-4iksuUBzEa",
        "https://www.youtube.com/embed/eGFe5iAAnWA?si=i6xWTPBPlaGP9ecB"
        // Add more video links as needed
    ];

    // State to keep track of the current slide index
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    // Function to handle next slide
    const nextSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % (videoLinks.length - 3));
    };

    // Function to handle previous slide
    const prevSlide = () => {
        setCurrentSlideIndex((prevIndex) =>
            prevIndex === 0 ? videoLinks.length - 3 : prevIndex - 1
        );
    };

    return (
        <section className="myCommunities" id="communities">
            <Container fluid>
                <h2>Society of Hispanic Professional Engineers (SHPE)</h2>
                <h3>Podcasting</h3>
                <h3>SHPE'd Abroad Program</h3>
                <div className="video-container">
                    {videoLinks.slice(currentSlideIndex, currentSlideIndex + 4).map((videoLink, index) => (
                        <iframe
                            key={index}
                            width="300"
                            height="169"
                            src={videoLink}
                            title={`Podcasting Video ${currentSlideIndex + index + 1}`}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    ))}
                </div>
                <div>
                    <button onClick={prevSlide} className="prev">◀</button>
                    <button onClick={nextSlide} className="next">▶</button>
                </div>
                <h3>SHPE'd Abroad Program</h3>
                <h4>Dominican Republic</h4>
                <h3>SHPE Nights</h3>
                <h2>Women In Science and Engineering - Residence Program (WISE-RP)</h2>
                <h2>Michigan Robotics Department</h2>
                <h4>Dominican Republic</h4>
                <h3>SHPE Nights</h3>
                <h2>Women In Science and Engineering - Residence Program (WISE-RP)</h2>
                <h2>Michigan Robotics Department</h2>
            </Container>
            <div className="space"></div>

        </section >
    )
}