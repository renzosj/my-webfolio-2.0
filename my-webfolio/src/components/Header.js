import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const name = "Renzo San Juan";
const job = "Full Stack Developer";

export default function Header() {
    return (
        <header className="soft-grey-bg soft-brown text-center py-3">
            <div className="container">
                <h1 className="mb-0">{name}</h1>
                <p className="lead">{job}</p>
            </div>
        </header>
    );
}