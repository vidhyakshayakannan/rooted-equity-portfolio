import './Methodology.css';

const Methodology = () => {
    const principles = [
        {
            icon: '🌱',
            title: 'Community Centered',
            text: 'Community centered and co-designed approaches that meaningfully engage participants and stakeholders throughout the research and planning process.'
        },
        {
            icon: '💛',
            title: 'Trauma Informed',
            text: 'Trauma informed and culturally responsive practices that prioritize safety, respect, consent, and trust.'
        },
        {
            icon: '📋',
            title: 'Funder Ready',
            text: 'Funder ready methods that meet regulatory, ethical, and compliance standards.'
        },
        {
            icon: '⚖️',
            title: 'Ethics & Experience',
            text: 'Work grounded in public health ethics and lived experience to ensure relevance, accountability, and impact.'
        }
    ];

    return (
        <section id="methodology" className="section">
            <div className="container">
                <h2 className="section-title text-center">How We Work</h2>
                <div className="methodology-grid">
                    {principles.map((p, i) => (
                        <div key={i} className="methodology-card">
                            <div className="methodology-icon">{p.icon}</div>
                            <h4>{p.title}</h4>
                            <p>{p.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Methodology;
