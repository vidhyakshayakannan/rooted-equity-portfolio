import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <Link to="/" className="navbar-brand">
          <img src="/logo.svg" alt="Rooted Equity Logo" className="navbar-logo" />
          <div className="brand-container">
            <span className="brand-main">Rooted Equity</span>
            <span className="brand-sub">Public Health Consulting</span>
          </div>
        </Link>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
        </button>

        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link></li>
          <li><Link to="/services" className={isActive('/services') ? 'active' : ''}>Services</Link></li>
          <li><Link to="/research" className={isActive('/research') ? 'active' : ''}>Research</Link></li>
          <li><Link to="/teaching" className={isActive('/teaching') ? 'active' : ''}>Teaching</Link></li>
          <li>
            <Link to="/consultation" className="nav-cta-btn">
              Request Consultation
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
