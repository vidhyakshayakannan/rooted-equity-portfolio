import './About.css';

const About = () => {
    const values = [
        {
            title: "Community partnership over extraction",
            text: "I prioritize collaborative research models in which communities and participants are active partners in defining priorities, shaping research questions, and interpreting findings rather than passive sources of data."
        },
        {
            title: "Equity as practice, not rhetoric",
            text: "Equity guides every stage of the research process, from study design and recruitment to data analysis and dissemination, ensuring that research decisions reflect the needs, voices, and lived experiences of those most affected."
        },
        {
            title: "Scientific rigor with real world relevance",
            text: "I apply rigorous methodological standards while centering practical applicability, producing evidence that is both scientifically sound and directly responsive to public health decision making and community priorities."
        },
        {
            title: "Transparency, ethics, and accountability",
            text: "I uphold the highest ethical standards through transparent methods, clear communication of risks and benefits, and shared accountability to participants, communities, and institutional partners."
        },
        {
            title: "Sustainability and capacity building",
            text: "I design research to strengthen local capacity, support long term community benefit, and ensure that knowledge, skills, and infrastructure remain beyond the life of a single project."
        }
    ];

    const problems = [
        "Public health programs struggling to build community trust and engagement",
        "Equity goals without clear data, strategy, or measurable outcomes",
        "Research and initiatives requiring ethical and regulatory oversight",
        "Health programs or interventions with low adoption or cultural misalignment",
        "Grant proposals that need stronger methodology and equity-centered framing"
    ];

    return (
        <section className="section page-content">
            <div className="container">
                <h2 className="section-title text-center">Our Expert</h2>

                <div className="about-intro-grid">
                    <div className="about-photo">
                        <img
                            src="/images/portrait.jpg"
                            alt="Dina Hamideh, PhD, MS"
                            className="about-portrait"
                        />
                    </div>
                    <div className="about-bio">
                        <h3>Who I Am</h3>
                        <p>
                            I am a Public Health Researcher, Consultant, and Educator with a PhD in Public Health and Health Behavior, a Masters in Regulatory Affairs, and over 15 years of experience across global health, regulatory science, and community based research.
                        </p>
                        <p>
                            As a first generation Palestinian American Muslim woman, my work is deeply informed by lived experience. I work in public health because health is shaped not only by biology, but by culture, stress, environment, history, and power. My career has focused on ensuring communities are partners in knowledge creation, not subjects of research.
                        </p>
                        <p>
                            I have led international studies in Palestine, managed NIH funded precision medicine research, and designed community based mental health and digital health initiatives rooted in trust, ethics, and equity.
                        </p>
                    </div>
                </div>

                {/* Problems I Help Solve */}
                <div className="about-problems">
                    <h3>Problems I Help Solve</h3>
                    <div className="problems-grid">
                        {problems.map((problem, i) => (
                            <div key={i} className="problem-item">
                                <span className="problem-icon">→</span>
                                <p>{problem}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Values */}
                <div className="about-values">
                    <h3 className="text-center">My Values as a Public Health Researcher</h3>
                    <div className="values-grid">
                        {values.map((value, i) => (
                            <div key={i} className="value-card">
                                <h4>{value.title}</h4>
                                <p>{value.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div className="about-education">
                    <h3 className="text-center">Education</h3>
                    <div className="education-timeline">
                        <div className="education-item">
                            <span className="edu-year">2024</span>
                            <div className="edu-details">
                                <h4>Doctor of Philosophy in Public Health and Health Behavior</h4>
                                <p>University of California San Diego and San Diego State University</p>
                            </div>
                        </div>
                        <div className="education-item">
                            <span className="edu-year">2013</span>
                            <div className="edu-details">
                                <h4>Master of Science in Regulatory Affairs</h4>
                                <p>San Diego State University</p>
                            </div>
                        </div>
                        <div className="education-item">
                            <span className="edu-year">2010</span>
                            <div className="edu-details">
                                <h4>Bachelor of Science in Kinesiology</h4>
                                <p>California State University San Marcos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
