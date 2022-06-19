import React from 'react';
import './App.css';
import avatar from './assets/images/avatar.jpg';
import player from './assets/images/custom-video-player.png';
import clock from './assets/images/js-clock.png';
import museum from './assets/images/museum.png';

function App() {
  return (
    // <div className="main-container">
    //   <Header />
    //   <main>
    //     <Main />
    //     <About />
    //     <Skills />
    //     <Experience />
    //     <Projects />
    //   </main>
    //   <Footer />
    // </div>

    <div className="container">
        <div>
            <header>
                <h1>Pozdnyakov Andrey</h1>
                <h2>- Frontend developer -</h2>
            </header>
            <nav>
                <h4 className="nav-item">
                    <a href="#about">&gt; About me</a>
                    <a href="#skills">&gt; Skills</a>
                    <a href="#xp">&gt; Work XP</a>
                    <a href="#education">&gt; Education</a>
                    <a href="#languages">&gt; Languages</a>
                </h4>
            </nav>
            <section id="about">
                <h2>Brief info about me:</h2>
                <p>I am 36 years old, engineer and father of 2 sons :) Currently live and work in Kazan.</p>
                <p>During my studies at the university (in the early 2000s) I was engaged in the development of simple websites and freelance projects. Later I developed interactive teaching materials (HTML, CSS, Flash). After graduation, I got a job at the Kazan helicopter plant and still work there.</p> 
                <p>At the moment I want to return to web development again.</p>
                <p><b><mark>More information about me you can see in my <a href="#videocv">VideoCV</a></mark></b></p>
            </section>
            <section className="video" id="videocv">
                    <h2>My VideoCV:</h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/W5OqGDJf7jw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    <br />
                    <a href="https://www.youtube.com/watch?v=W5OqGDJf7jw">https://www.youtube.com/watch?v=W5OqGDJf7jw</a>
                </section>
                <div className="divider"></div>
                <section id="skills">
                    <h2>Programming skills:</h2>
                    <ul>
                        <li><b>HTML: </b>Layouts, Semantic HTML, Forms etc;</li>
                        <li><b>CSS: </b>Layouts, Responsive design and Media Queries;</li>
                        <li><b>JS: </b>DOM Manipulation, ES6 and modular JS etc;</li>
                        <li><b>Frameworks:</b> React.js;</li><br />
                        <li><b>Version control systems and repos:</b> Git, GitHub, GitLab;</li>
                        <li><b>Package managers:</b> npm;</li>
                        <li><b>Module Bundlers:</b> Webpack;</li>
                        <li><b>IDE:</b> VSCode</li>
                        <li>I have experience of working with <b>TypeScript, Node.js, styled components, i18n, themes etc</b></li>
                    </ul>
                </section>
            <div className="divider"></div>
            <section id="education">
                <h2>Higher education</h2>
                <ul>
                    <li><b>Radio equipment maintenance engineer</b> (Kazan National Research Technical University - KAI);</li>
                    <li><b>Professional communication translator</b> (Kazan National Research Technical University - KAI);</li>
                    <li><b>Introduction to development in JavaScript</b> (SoftLine Education);</li>
                    <li><b>Various advanced training courses on aviation technological topics</b></li>
                </ul>
            </section>
            <div className="divider"></div>
            <section id="languages">
                <h2>Languages:</h2>
                <b>B2</b> — Upper Intermediate
                <p>I had been on a business trip to India for 14 months, worked as part of a warranty & maintenance team.</p>
            </section>
            {/* <div className="divider"></div>
            <section>
                <h2>My code example:</h2>
                <pre><code>
                    function DNAStrand(dna){
                    return dna
                        .split('')
                        .map(function(currentValue){
                        switch (currentValue) {
                            case 'A': return 'T'
                            case 'T': return 'A'
                            case 'C': return 'G'
                            case 'G': return 'C'
                        }
                        })
                        .join('');
                    }
                </code></pre>
            </section> */}
            <div className="divider"></div>
            <section>
                <h2>My projects:</h2>
                <div className="projects-container">
                    <div className="project">
                        <a href="https://rolling-scopes-school.github.io/exekuta-JSFEPRESCHOOL/museum/"><img src={museum} height="200" alt="RS School Louvre project" /></a>
                        <h4 className="underline-project">RS School Louvre project</h4>
                    </div>
                    <div className="project">
                        <a href="https://rolling-scopes-school.github.io/exekuta-JSFEPRESCHOOL/js-clock/"><img src={clock} height="200" alt="RS School JS Clock project" /></a>
                        <h4 className="underline-project">RS School JS Clock project</h4>
                    </div>
                    <div className="project">
                        <a href="https://rolling-scopes-school.github.io/exekuta-JSFEPRESCHOOL/custom-video-player/"><img src={player} height="200" alt="RS School Custom Video Player project" /></a>
                        <h4 className="underline-project">RS School Custom Video Player project</h4>
                    </div>
                </div>
            </section>
            <div className="divider"></div>
            <footer>
                <a href="https://github.com/exekuta/"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" width="66" height="66" alt="My GitHub" /></a>
                <a href="https://rs.school/js/"><img src="https://rs.school/images/rs_school_js.svg" height="66" alt="RS School" /></a>
                <h5>&copy; 2021</h5>
            </footer>
        </div>

        {/* Right panel */}
        <div className="right-panel">
            <figure>
                <img src={avatar} alt="It`s me" />
                <figcaption>Pozdnyakov Andrey</figcaption>
            </figure>
            <div className="divider"></div>
            <section>
                <h2 className="contacts">Contacts:</h2>
                <ul>
                    <li><b>e-mail:</b> exekuta@gmail.com</li>
                    <li><b>phone:</b> +7 (917) 253-53-86</li>
                </ul>
            </section>
            <section>
                <h2 className="contacts">
                    <a href="https://github.com/exekuta/"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" width="66" height="66" alt="My GitHub" /></a>
                    <a href="https://www.codewars.com/users/exekuta/"><img src="https://docs.codewars.com/logo.svg" width="66" height="66" alt="My CODEWARS" /></a> <br />
                    <a href="https://www.instagram.com/garrrik/"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" width="66" height="66" alt="My Instagram" /></a>
                    <a href="https://vk.com/exekuta"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/VK_Compact_Logo.svg?uselang=ru" width="66" height="66" alt="My VK" /></a>
                </h2> 
            </section>
        </div>
    </div>
  );
}

export default App;
