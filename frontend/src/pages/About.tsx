import "../css/About.css"
import {
    Brain,
    Hammer,
    RefreshCw,
    BookOpen
} from "lucide-react"

export default function About(){
    return (
        <div className="about-container">
            <div className="about-me-topSection">
                <div className="about-me-intro">
                    <div className="titleSection">
                        <span className="about-title aboutMe">ABOUT ME</span>
                        <span className="line about-line"></span>
                    </div>
                    <div className="paragraph-section">
                        <span>Aspiring Web & Software Developer</span>
                        <h1>HELLO, I'M TAUFIK AHMAD</h1>
                        <p>I'm an Electrical Engineering undergraduate with a strong interest in technology, software development, and problem-solving. I enjoy exploring new tools, turning ideas into practical solutions, and learning through hands-on projects. I'm currently developing my web development skills while building projects that combine creativity, functionality, and technical thinking.</p>
                    </div>
                    <div className="howIapproach-section">     
                        <div className="titleSection">
                            <span className="about-title hIa">MY APPROACH TO LEARNING</span>
                            <span className="line hIa-line"></span>
                        </div>
                        <div className="hIa-list">
                            <ol>
                                <li>
                                    <div className="hIa-list-item">
                                        <span>Understand the Why</span>
                                        <p>I focus on understanding how and why things work rather than simply memorizing instructions.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="hIa-list-item">
                                        <span>Learn by Building</span>
                                        <p>I apply what I learn through hands-on projects to gain practical experience and turn ideas into working solutions.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="hIa-list-item">
                                        <span>Learn from Mistakes</span>
                                        <p>I treat errors and setbacks as opportunities to improve my approach and develop better problem-solving skills.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="hIa-list-item">
                                        <span>Seek Guidance</span>
                                        <p>When I encounter unfamiliar concepts or difficult problems, I seek advice from experienced people or use AI tools to explore solutions and clarify my understanding.</p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="topSection-dividerLine">
                </div>
                <div className="whatIbring">
                    <div className="titleSection">
                        <span className="about-title wIb">WHAT I BRING TO THE TABLE</span>
                        <span className="line whatIbring-line"></span>
                    </div>
                    <div className="whatIbring-list">
                        <ul>
                            <li>
                                <div className="about-icon">
                                    <Brain/>
                                </div>
                                <div>
                                    <span>Analytical Thinking</span>
                                    <p>My Electrical Engineering background encourages me to approach problems logically, break them into smaller parts, and work toward practical solutions.</p>
                                </div>
                            </li>
                            <li>
                                <div className="about-icon">
                                    <Hammer/>
                                </div>
                                <div>
                                    <span>Hands-on Learning</span>
                                    <p>I learn by building, experimenting, identifying problems, and refining my approach through practical projects.</p>
                                </div>
                            </li>
                            <li>
                                <div className="about-icon">
                                    <RefreshCw/>
                                </div>
                                <div>
                                    <span>Adaptability</span>
                                    <p>I'm willing to explore unfamiliar technologies, learn new tools, and adapt my approach as project requirements evolve.</p>
                                </div>
                            </li>
                            <li>
                                <div className="about-icon">
                                    <BookOpen/>
                                </div>
                                <div>
                                    <span>Self-Directed Learning</span>
                                    <p>Developing practical skills through independent study and personal projects.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="about-me-bottomSection">
                <div className="my-journey">
                    <div className="titleSection">
                        <span className="about-title myJourney">MY JOURNEY</span>
                        <span className="line myJourney-line"></span>
                    </div>
                    <div>
                        <ul className="journey-list">
                            <li className="journey-item">
                                <span>2015 - 2018</span>
                                <h2>Vocational High School</h2>
                                <p>Studied Computer and Network Engineering, building foundational skills in computer hardware, networking, and technical troubleshooting.</p>
                            </li>
                            <li className="journey-item">
                                <span>2019 - 2024</span>
                                <h2>University</h2>
                                <p>Pursuing a Bachelor's degree in Electrical Engineering, developing technical knowledge, analytical thinking, and problem-solving skills.</p>
                            </li>
                            <li className="journey-item">
                                <span>2024 - Present</span>
                                <h2>Programming</h2>
                                <p>Developing my web development skills through hands-on projects, practical applications, and continuous learning.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div >
                <div className="current-interest">
                    <div className="titleSection">
                        <span className="about-title cI">CURRENT INTEREST</span>
                        <span className="line currentInterest-line"></span>
                    </div>
                    <div className="currentInterest-list">
                        <ul>
                            <li>Frontend Development</li>
                            <li>Backend Development</li>
                            <li>Desktop App Development</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}