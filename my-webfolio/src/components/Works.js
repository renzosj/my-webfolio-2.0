import React from 'react';

export default function Bio() {
    return (
        <section id="works">
            <h2>Work</h2>

            <figure id="work-1" className="card-1">
                <h3>Western Shootout</h3>
                <img id="western-shootout-img" src="assets/images/western-shootout.png" alt="cartoon graphic of two cowboys in a field, about to partake in a duel"/>
            </figure>

            <article className="card-article">
                <figure id="work-2">
                    <h3>Space Shooter Pro</h3>
                    <img className="card-article-img" src="assets/images/space-shooter-img.PNG" alt="2D top-down perspective of spaceships firing lasers amidst a backdrop of deep space cosmos"/>
                </figure>
                <figure id="work-3">
                    <h3 id="little-hero-title">Little Hero</h3>
                    <img className="card-article-img" src="assets/images/little-hero-img.png" alt="a graphic of a cartoon knight with a roman helmet, brandishing a broadsword"/>
                </figure>
                <figure id="work-4">
                    <h3>Goodnight, King</h3>
                    <a href="https://renzosj.github.io/goodnight-king/"><img className="card-article-img" src="assets/images/gnk-logo-proto-01.png" alt="a graphic of a crown with a light blue background"/></a>
                </figure>
                <figure id="work-5">
                    <h3>Creative Writings</h3>
                    <img className="card-article-img" src="assets/images/creative-writing.png" alt="a graphic of a an ink and a rainbow colored quill"/>
                </figure>
            </article>

        </section>
    );
}

