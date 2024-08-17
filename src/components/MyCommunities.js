import { useState } from "react";
import { Container } from "react-bootstrap";

/* Puerto Rico Images */
import PRarduinos from "../assets/img/PuertoRico/PRarduinos.jpg";
import PRsoldering from "../assets/img/PuertoRico/PRsoldering.jpg";
import PRgroup from "../assets/img/PuertoRico/PRgroup.jpeg";

/* Dominican Republic  Images */
import DRgirls from "../assets/img/DominicanRepublic/DRgirls.jpg";
import DRvolunteers from "../assets/img/DominicanRepublic/DRvolunteers.jpg";
import DRvolunteers2 from "../assets/img/DominicanRepublic/DRvolunteers2.jpg";

/* Costa Rica Images */
import CRadults from "../assets/img/CostaRica/CRadults.jpg";
import CRkids from "../assets/img/CostaRica/CRkids.jpg";
import CRgroup from "../assets/img/CostaRica/SantaElenaGroup.jpg";


/* WISE-RP Images */
import WISEgathering from "../assets/img/WISE/WISEgathering.jpg";
import WISEgroup from "../assets/img/WISE/WISEgroup.jpg";
import WISEpresentation from "../assets/img/WISE/WISEpresentation.jpg";

/* Robotics Images */
import ROBsoldering from "../assets/img/ROB/ROBsoldering.jpg";


export const MyCommunities = () => {
    const videoLinks = [
        "https://www.youtube.com/embed/GMPCD4WBhaU?si=67CuSVkEjlTuFSpi",
        "https://www.youtube.com/embed/r9sBq2I8Bnk?si=aX4CfysBgMeWb-H8",
        "https://www.youtube.com/embed/Wc1ey3yZGwU?si=8ZPieptZhUCPeSl2",
        "https://www.youtube.com/embed/GNhHIi7eChE?si=ngkSnmdiby1Ij87S",
        "https://www.youtube.com/embed/rSXTR1N-ZtA?si=CN-uC-4iksuUBzEa",
        "https://www.youtube.com/embed/eGFe5iAAnWA?si=1Fk8AlE7fR7squUi"
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
                {/************************************* PODCASTING *************************************/}
                <h2>Society of Hispanic Professional Engineers (SHPE)</h2>
                <h3>Podcasting</h3>
                <div className="podcasting row">
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

                {/************************************* SHPE ABROAD *************************************/}
                <h3>SHPE'd Abroad Program</h3>
                <p>SHPE’d Abroad is an annual week-long program unique to our chapter since 2013, dedicated to teaching about STEM and academic development in under-resourced communities in Latin America. Since its organization, our program has reached Guatemala, Puerto Rico, the Dominican Republic, and multiple locations in Costa Rica, educating K-12 grade students. My involvement began in 2022, when I supported the chapter’s outreach team in outreaching to schools in Puerto Rico to find a school to support, and attended as a mentoring volunteer. At the end of the 2022 SHPE’d Abroad program, my involvement grew as I was elected as the Vice President of External Affairs two years consecutively and became the head of the program’s organization.</p>
                <h4>2024 in Quepos, Costa Rica</h4>
                <p>This year, we expanded the program to teach 50 K-12 students in the mornings and 60 adults, aged 20 to 60, in an evening school. I managed and oversaw fundraising of $19,650.39, sponsoring 16 members for SHPE’d Abroad in Costa Rica. I also co-developed a curriculum to teach the K-12 students aspects of robotics and 3D design with a focus on space, while adults learned how to utilize a computer and Microsoft programs. I created 6 lesson plans for 18 hours of instruction. This experience was particularly unique as none of the adults had ever used a computer. We had the privilege of teaching the adults to become internet autodidacts. Our primary goal was preparing them to be capable and encouraging them to continue learning for themselves beyond the end of our program.</p><p>During our community service trip, we also explored Costa Rica's natural beauty, engaging in activities like white-water rafting, beach relaxation, hiking in the Santa Elena Cloud Forest Reserve, snorkeling at Isla Tortuga, and horseback riding.
                </p>
                <div className="costa-rica">
                    <img src={CRkids} alt="CRkids Img" className="horizontal-image" />
                    <img src={CRadults} alt="CRadults Img" className="horizontal-image" />
                    <img src={CRgroup} alt="CRgroup Img" className="horizontal-image" />
                </div>
                <h4>2023 in La Vega, Dominican Republic</h4>
                <div className="dominican-republic">
                    <p>In 2023, we held the SHPE’d Abroad program in the Dominican Republic for the first time. I managed and oversaw fundraising of $16,000 to sponsor 16 members for the program. Additionally, I co-developed the curriculum to teach two groups of 50 K-12 students about engineering through 12 personally designed lesson plans for 35 hours of instruction. During these instruction sessions, students learned about the work and academic responsibilities in various engineering fields, 3D design and research with a focus on space, coding in C, and robotics using Arduinos.</p>

                    <img src={DRvolunteers2} alt="DRvolunteers2 Img" className="horizontal-image" />
                    <img src={DRgirls} alt="DRgirls Img" className="vertical-image" />
                    <img src={DRvolunteers} alt="DRvolunteers Img" className="horizontal-image" />
                </div>
                <h4>2022 in Puerto Rico</h4>
                <div className="dominican-republic">
                    <img src={PRarduinos} alt="PRarduinos Img" className="horizontal-image" />
                    <img src={PRsoldering} alt="PRsoldering Img" className="vertical-image" />
                    <img src={PRgroup} alt="PRgroup Img" className="horizontal-image" />
                </div>

                {/************************************* WISE RP *************************************/}
                <h2>Women In Science and Engineering - Residence Program (WISE-RP)</h2>
                <div className="row">
                    <div className="column left">
                        <p>WISE-RP is a living-learning community at the University of Michigan for gender-minoritized students pursuing careers in science, technology, engineering, or mathematics. I joined WISE-RP in the fall of 2021 as a member and returned the following year as a Peer Mentor. In this role, I planned 30 personal, academic, and professional development sessions to help 8 first-year students transition to college life.</p>
                    </div>
                    <div className="column right">
                        <div className="WISE-images">
                            <img src={WISEgathering} alt="WISEgathering Img" className="vertical-image" />
                            <img src={WISEgroup} alt="WISEgroup Img" className="horizontal-image" />
                            <img src={WISEpresentation} alt="WISEpresentation Img" className="vertical-image" />
                        </div>
                    </div>
                </div>


                <h2>Michigan Robotics Department</h2>
                <div className="row">
                    <div className="column left">
                        <p>????.</p>
                    </div>
                    <div className="column right">
                        <img src={ROBsoldering} alt="ROB Soldering Img" />
                    </div>
                </div>
            </Container>
            <div className="space"></div>
        </section>
    );
};
