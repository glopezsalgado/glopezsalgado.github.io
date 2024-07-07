import { useState } from "react";
import { Container } from "react-bootstrap";
import PRarduinos from "../assets/img/PuertoRico/PRarduinos.jpg";
import PRsoldering from "../assets/img/PuertoRico/PRsoldering.jpg";
import PRgroup from "../assets/img/PuertoRico/PRgroup.jpeg";


export const MyCommunities = () => {
    const videoLinks = [
        "https://www.youtube.com/embed/GMPCD4WBhaU?si=67CuSVkEjlTuFSpi",
        "https://www.youtube.com/embed/r9sBq2I8Bnk?si=aX4CfysBgMeWb-H8",
        "https://www.youtube.com/embed/Wc1ey3yZGwU?si=8ZPieptZhUCPeSl2",
        "https://www.youtube.com/embed/GNhHIi7eChE?si=ngkSnmdiby1Ij87S",
        "https://www.youtube.com/embed/rSXTR1N-ZtA?si=CN-uC-4iksuUBzEa",
        "https://www.youtube.com/embed/eGFe5iAAnWA?si=i6xWTPBPlaGP9ecB"
    ];

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const nextSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % (videoLinks.length - 3));
    };

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
                <div className="row">
                    <div className="column left">
                        <p>In 2023 I founded and produced, with a committee, 6 Spotify podcast sessions and YouTube videos interviewing SHPE-UM alumni to strengthen our alumni network and speak about topics involving graduate school, life as an engineer, and imposters syndrome.</p>
                    </div>
                    <div className="column right">
                        <button onClick={prevSlide} className="prev">◀</button>
                        <div className="video-container">
                            {videoLinks.slice(currentSlideIndex, currentSlideIndex + 3).map((videoLink, index) => (
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
                        <button onClick={nextSlide} className="next">▶</button>
                    </div>
                </div>
                <h3>SHPE'd Abroad Program</h3>
                <p>SHPE’d Abroad is an annual week-long program unique to our chapter since 2013, dedicated to teaching about STEM and academic development in under-resourced communities in Latin America. Since its organization, our program has reached Guatemala, Puerto Rico, the Dominican Republic, and multiple locations in Costa Rica, educating K-12 students. My involvement began in 2022, when I supported the chapter’s outreach team in outreaching to schools in Puerto Rico, to find a school to support, and attended as a mentoring volunteer. At the end of the 2022 SHPE’d Abroad program, my involvement grew as I was elected as the Vice President of External Affairs two years consecutively and became the head of the program’s organization.</p>
                <h4>2024 in Quepos, Costa Rica</h4>
                <p>This year, we expanded the program to teach 50 K-12 students in the mornings and 60 adults, aged 20 to 60, in an evening school. I managed and oversaw fundraising of $19,650.39, sponsoring 16 members for SHPE’d Abroad in Costa Rica. I also co-developed a curriculum to teach the K-12 students aspects of robotics and 3D design with a focus on space, while adults learned how to utilize a computer and Microsoft programs. I created 6 lesson plans for 18 hours of instruction. This experience was particularly unique as none of the adults had ever used a computer. We had the privilege of teaching the adults to become internet autodidacts. Our primary goal was preparing them to be capable and encouraging them to continue learning for themselves beyond the end of our program.</p><p>During our community service trip, we also explored Costa Rica's natural beauty, engaging in activities like white-water rafting, beach relaxation, hiking in the Santa Elena Cloud Forest Reserve, snorkeling at Isla Tortuga, and horseback riding.
                </p>
                <h4>2023 in La Vega, Dominican Republic</h4>
                <p>In 2023, we held the SHPE’d Abroad program in the Dominican Republic for the first time. I managed and oversaw fundraising of $16,000 to sponsor 16 members for the program. Additionally, I co-developed the curriculum to teach two groups of 50 K-12 students about engineering through 12 personally designed lesson plans for 35 hours of instruction. During these instruction sessions, students learned about the work and academic responsibilities in various engineering fields, 3D design and research with a focus on space, coding in C, and robotics using Arduinos.</p>
                <h4>2022 in Puerto Rico</h4>
                <div className="puerto-rico-images">
                    <img src={PRarduinos} alt="PRarduinos Img" className="horizontal-image" />
                    <img src={PRsoldering} alt="PRsoldering Img" className="vertical-image" />
                    <img src={PRgroup} alt="PRgroup Img" className="horizontal-image" />
                </div>
                <h2>Women In Science and Engineering - Residence Program (WISE-RP)</h2>
                <h2>Michigan Robotics Department</h2>
            </Container>
            <div className="space"></div>
        </section>
    );
};
