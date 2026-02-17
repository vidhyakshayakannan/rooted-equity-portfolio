import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <img src="/logo.svg" alt="Rooted Equity Logo" className="footer-logo" />
                        <div>
                            <h3>Rooted Equity</h3>
                            <p>Public Health Consulting</p>
                        </div>
                    </div>

                    <div className="footer-contact">
                        <h4>Connect & Collaborate</h4>

                        <a href="https://www.linkedin.com/in/dina-hamideh-phd-ms-a8a62330" target="_blank" rel="noopener noreferrer" className="footer-link">
                            <span className="footer-link-icon">in</span>
                            LinkedIn
                        </a>
                        <a href="https://www.researchgate.net/profile/Dina-Hamideh" target="_blank" rel="noopener noreferrer" className="footer-link">
                            <span className="footer-link-icon">RG</span>
                            ResearchGate
                        </a>
                    </div>

                    <div className="footer-cta">
                        <h4>Ready to advance equity?</h4>
                        <Link to="/consultation" className="btn btn-primary">Request a Consultation</Link>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Rooted Equity Public Health Consulting | Dina Hamideh, PhD, MS</p>
                    <p className="footer-copy">&copy; {new Date().getFullYear()} All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
