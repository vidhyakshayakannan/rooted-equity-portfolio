import { Link } from 'react-router-dom';
import './Intro.css';

const Intro = () => {
    return (
        <section className="section section-bg">
            <div className="container">
                <h2 className="section-title text-center">Purpose &amp; Value Proposition</h2>

                <div className="intro-grid">
                    <div className="intro-card">
                        <h3>Who I Help</h3>
                        <p>
                            I partner with funders, nonprofits, academic institutions, public agencies, and community based organizations working to improve population health and reduce health inequities, particularly within immigrant, refugee, and communities facing structural inequities.
                        </p>
                    </div>

                    <div className="intro-card">
                        <h3>What I Do</h3>
                        <p>
                            I provide public health and health equity consulting, including research design, program evaluation, community engaged assessments, digital health strategy, and grant support.
                        </p>
                    </div>

                    <div className="intro-card">
                        <h3>Why I Am Different</h3>
                        <p>I bring a unique combination of:</p>
                        <ul className="intro-list">
                            <li>Deep field-based and international research leadership</li>
                            <li>National level experience with NIH and the All of Us Research Program</li>
                            <li>Regulatory, IRB, and clinical compliance expertise</li>
                            <li>Culturally grounded, community partnered approaches</li>
                        </ul>
                    </div>
                </div>

                <div className="intro-bridge">
                    <p>
                        My work bridges community trust, scientific rigor, and institutional accountability, ensuring solutions are ethical, implementable, and responsive to both community priorities and funder requirements.
                    </p>
                </div>

                <div className="intro-subtext">
                    <p>
                        With over a decade of experience across global health, clinical research, digital health, and health equity, I design and support public health initiatives that begin with listening, honor lived experience, and translate evidence into meaningful action. I specialize in complex settings where equity, culture, and regulatory requirements intersect.
                    </p>
                </div>

                <div className="intro-cta text-center">
                    <Link to="/consultation" className="btn btn-primary">Request a Consultation</Link>
                    <Link to="/services" className="btn btn-secondary">Explore Services</Link>
                </div>
            </div>
        </section>
    );
};

export default Intro;
