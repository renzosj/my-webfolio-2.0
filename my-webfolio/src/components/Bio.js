import React from 'react';
import portrait from '../assets/images/portrait.jpg'


export default function Bio() {
    return (
        <section id="about-me">
            <div className="bio">
                <h2>About Me</h2>
                <p className="bio-text">
                    Hi, I'm Renzo San Juan. I am currently a student at Berkeley Extensions Bootcamp for Web Development. My passions are in story-telling and video games.
                    I currently reside in Southern California. My favorite food is sushi and anything with cheese. I am currently watching The Sopranos. Ask me anything!
                </p>
            </div>
            <img className="portrait" src={portrait} alt="Renzo San Juan"/>
        </section>
    );
}