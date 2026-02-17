import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1>Public Health Consulting</h1>
                    <p className="hero-subtitle">Advancing Equity So Every Community Can Thrive</p>
                    <p className="hero-description">
                        Evidence based, community centered public health research, evaluation, and strategy.
                    </p>
                    <div className="hero-cta">
                        <Link to="/consultation" className="btn btn-primary">Request a Consultation</Link>
                        <Link to="/services" className="btn btn-secondary">Explore Services</Link>
                    </div>
                </div>
                <div className="hero-visual">
                    <img
                        src="/images/fieldwork-1.jpg"
                        alt="Community health research and engagement in action"
                        className="hero-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
