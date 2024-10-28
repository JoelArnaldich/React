import React from 'react';
import './Main.css';

function MainContent({ title, content }) {
    return (
        <main className="main-content">
            <section className="intro">
                <h2>{title}</h2>
                <p>{content}</p>
            </section>
        </main>
    );
}

export default MainContent;