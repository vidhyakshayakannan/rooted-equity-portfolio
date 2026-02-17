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
                        <h4>Get in Touch</h4>
                        <a href="mailto:dinahamideh@gmail.com" className="footer-link">
                            <span className="footer-link-icon">✉</span>
                            dinahamideh@gmail.com
                        </a>
                        <a href="https://www.linkedin.com/in/dina-hamideh-phd-ms-a8a62330" target="_blank" rel="noopener noreferrer" className="footer-link">
                            <span className="footer-link-icon">in</span>
                            LinkedIn
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
