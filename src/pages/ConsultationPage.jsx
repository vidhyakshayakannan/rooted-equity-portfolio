import { useState } from 'react';
import './Consultation.css';

const ConsultationPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        role: '',
        service: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        // Submitting to Formspree (Replace YOUR_FORM_ID_HERE with your actual Formspree ID)
        try {
            const response = await fetch("https://formspree.io/f/mreakrkp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    organization: '',
                    role: '',
                    service: '',
                    message: ''
                });
            } else {
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    setError(data.errors.map(error => error.message).join(", "));
                } else {
                    setError("Oops! There was a problem submitting your form. Please try again or email directly.");
                }
            }
        } catch (err) {
            setError("There was a problem submitting your form. Please check your internet connection and try again.");
        } finally {
            setSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <section className="section page-content consultation-page">
                <div className="container">
                    <div className="consultation-success">
                        <div className="success-icon">✓</div>
                        <h2>Thank You!</h2>
                        <p>Your consultation request has been received. I will review your inquiry and respond within 2 business days.</p>

                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="section page-content consultation-page">
            <div className="container">
                <div className="consultation-header text-center">
                    <h2>Request a Consultation</h2>
                    <p className="consultation-subtitle">
                        Tell me about your organization and how I can help. I'll respond within 2 business days.
                    </p>
                </div>

                <div className="consultation-grid">
                    <form className="consultation-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your full name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="you@organization.com"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="organization">Organization</label>
                                <input
                                    type="text"
                                    id="organization"
                                    name="organization"
                                    value={formData.organization}
                                    onChange={handleChange}
                                    placeholder="Your organization name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="role">Your Role</label>
                                <input
                                    type="text"
                                    id="role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    placeholder="e.g. Program Director"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="service">Service of Interest</label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                            >
                                <option value="">Select a service area</option>
                                <option value="equity-consulting">Public Health & Health Equity Consulting</option>
                                <option value="program-evaluation">Program Design & Evaluation</option>
                                <option value="needs-assessments">Community Health Needs Assessments</option>
                                <option value="disparities-analysis">Health Equity & Disparities Analysis</option>
                                <option value="strategy-implementation">Public Health Strategy & Implementation</option>
                                <option value="speaking">Speaking & Facilitations</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Tell me about your project *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="Briefly describe your goals, timeline, and any specific challenges you're facing."
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary btn-submit">
                            Submit Request
                        </button>
                    </form>

                    <div className="consultation-sidebar">
                        <div className="sidebar-card">
                            <h4>What to Expect</h4>
                            <div className="expect-item">
                                <span className="expect-num">1</span>
                                <div>
                                    <strong>Submit Your Inquiry</strong>
                                    <p>Share your project details and goals using the form.</p>
                                </div>
                            </div>
                            <div className="expect-item">
                                <span className="expect-num">2</span>
                                <div>
                                    <strong>Initial Review</strong>
                                    <p>I'll review your inquiry and reach out to schedule a brief discovery call.</p>
                                </div>
                            </div>
                            <div className="expect-item">
                                <span className="expect-num">3</span>
                                <div>
                                    <strong>Discovery Call</strong>
                                    <p>We'll discuss your needs, timeline, and how I can best support your work.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsultationPage;
