import React from 'react';
import {
        Card,
        HeaderNav
} from './routes.js'
import projects from './data/projects'

import './scss/styles.scss'

function App() {
    return (
        <>
            <header className='header'>
                <HeaderNav></HeaderNav>
            </header>
            <main className='main'>
                <section id='projects' class='projects' aria-labelledby='projectsTitle'>
                    <div class='cards-container' role='list'>
                    </div>
                </section>
            </main>
        </>
    )
}

export default App