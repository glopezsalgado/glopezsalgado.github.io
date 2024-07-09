import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";



const resumeTechData = [
    {
        company: "The Boeing Company",
        position: "Onboard Performance Tool Intern",
        startDate: "June 2024",
        endDate: "Present",
        experience: [
            "Did this",
            "Did that",
            "Did something else"
        ]
    },
    {
        company: "Cummins, H2 Connected Power Systems Department",
        position: "Test Engineer Intern",
        startDate: "June 2023 –",
        endDate: "August 2023",
        experience: [
            "•	Supported software implementation of a new transfer switch mechanism to an existing control by developing flow diagrams to visually represent power transfer processes in the transfer switch.",
            "•	Tested system flow on existing transfer switch hardware while tracking input and output signals to the control to understand and validate operation of the mechanism.",
            "•	Led efforts to recreate a software change request issue and defined the problem statement while collaborating with SMEs.",
            "•	Tested on a Hardware-In-Loop (HIL) test fixture, recommended and implemented a solution based on testing results, using MATLAB Simulink to resolve the transfer switch control’s load shed feature for a signal processing and timer issue."
        ]
    },
    {
        company: "Apple Developer Academy",
        position: "iOS Developer ",
        startDate: "May 2023 –",
        endDate: "June 2023",
        experience: [
            "•	Led a team in researching 60 recipes, 100+ workouts, and 20 selections of general advice in 10 hours for storing in a database.",
            "•	Developed a mobile iOS app in, ~70 hours, with an assistive feature to achieve a user’s personalized nutritional and workout goals."
        ]
    },
    {
        company: "Independent Researcher",
        position: "",
        startDate: "December 2022 –",
        endDate: "April 2023",
        experience: [
            "•	Built and deployed an embedded system used to study vibrations and temperature in concrete, as well as the effects of collecting data with epoxy-coated electronic components which proved that epoxy-coating has a minimal effect on that data’s accuracy.",
            "•	Analyzed and measured the compressive and flexural strength of concrete slabs with different reinforcement material, and discovered a material passing state specifications, being less laborious, and costing ~15% the cost of the material used in industry."
        ]
    },
    {
        company: "Michigan Human-Artificial Intelligence Laboratory",
        position: "iOS Developer",
        startDate: "May 2022 –",
        endDate: "September 2022",
        experience: [
            "•	Developed and tested the user interface (UI) of an iOS app for people with visual impairment to program their assistive technologies by leveraging various artificial intelligence (AI) functionalities and applying functions to off-the-shelf AI model out.",
            "•	Programmed voice-over accessibility and ark mode styles to improve the iOS app’s UI."
        ]
    },
    {
        company: "Michigan Robotics Department",
        position: "Research Assistant",
        startDate: "December 2021 –",
        endDate: "April 2022",
        experience: [
            "•	Investigated and designed a digital LED matrix alarm clock with an implemented FM radio, by creating an embedded system with an Arduino, LM386 amplifier, speaker, and button UI to allow setting alarms and time, monitoring the volume and station played."
        ]
    }
];

/*
export const TechnicalExperience = () => {
    return (
        <h3>Embedded Systems</h3>
    );
};
*/

const TechnicalExperience = () => {
    return (
        <div id="timeline">
            {timelineData.map((job, index) => (
                <div className="timeline-item" key={index}>
                    <div className="left">
                        <h2>{job.startDate} -</h2>
                        <h2>{job.endDate}&nbsp;&nbsp;</h2>
                    </div>
                    <div className="right">
                        <h2>{job.company}</h2>
                        <h3>{job.position}</h3>
                        <ul>
                            {job.experience.map((exp, i) => (
                                <li key={i}>{exp}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TechnicalExperience;