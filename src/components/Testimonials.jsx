import { useState, useEffect, useCallback } from 'react';
import './Testimonials.css';

const testimonials = [
    {
        quote: "The entire process of working with Dr. Hamideh was wonderful. From the second she started the first session with the community, setting an intentional foundation of trust-building, to her ability to approach the conversations with humility and compassion. She was able to provide a sense of safety to participants, while still maintaining an ethical and professional approach. Her passion and devotion can easily be observed in her work, which elevates the quality of everything she produces.",
        name: "Eriq Vargas",
        role: "Campaign Manager, San Diego Refugee Communities Coalition"
    },
    {
        quote: "Dina has a strong grasp of how to translate research questions into well-designed studies, and she consistently brought a thoughtful and strategic approach to our work. Her ability to manage complex research efforts—while keeping collaborators aligned and the science front and center—made a real difference. She's also one of the most dependable and grounded people I've worked with.",
        name: "Michael Galarnyk",
        role: "ML Ph.D. Candidate, Georgia Tech"
    },
    {
        quote: "Dina's expertise is exceptional, and she's a fantastic collaborator, effectively bridging gaps between diverse teams. What's truly impressive is her dedication to health equity and her ability to balance demanding work with pursuing her PhD. Her blend of regulatory knowledge, research skills, and genuine care makes her a valuable asset.",
        name: "Lauren A.",
        role: "Senior Project Manager, Scripps Research"
    },
    {
        quote: "Dina has been on top of many of the regulatory approvals, demonstrating to be a reliable and very knowledgeable colleague. I have enjoyed working with her and appreciated her help every time that a new IRB approval was needed. I'm sure she will provide her unique knowledge and passion in her new effort.",
        name: "Giorgio Quer",
        role: "Director of AI, Assistant Professor, Scripps Research"
    },
    {
        quote: "Dina stands out not only for her thorough knowledge of regulatory affairs but also for her genuine drive to create a more equitable healthcare system. What impresses me most is her ability to balance complex responsibilities while pursuing her PhD, a testament to her resilience and dedication to lifelong learning. Dina brings both heart and intellect to everything she does.",
        name: "Michael (Ting-Yang) Hung",
        role: "Data Scientist, Scripps Research"
    },
    {
        quote: "Dina's knowledge of regulatory affairs is exceptional. Her ability to draft and analyze protocols, consents, and institutional documents is impressive. What really stood out to me was Dina's kindness and thoughtfulness throughout every interaction. Her professionalism paired with genuine warmth made working with her an absolute pleasure.",
        name: "David Rodriguez",
        role: "Clinical Operations Leader, All of Us Research Program"
    },
    {
        quote: "I can confidently say that she is an exceptional expert in regulatory affairs. Her deep knowledge of federal regulations and institutional policies, coupled with her unwavering commitment to good clinical practices, makes her an invaluable asset. Dina is highly organized, pragmatic, and ensures compliance without unnecessary burden.",
        name: "Gayle Valensky, MPH",
        role: "Engagement Professional, Scripps Research"
    },
    {
        quote: "She carries a wealth of experience on human subjects research as well as community and behavioral health. She is always quick to jump on a call to help and provide information when needed, works independently and can execute long term planning of deliverables working across various teams. She is a thoughtful and curious person, who welcomes everyone.",
        name: "Romina Foster-Bonds",
        role: "Director, Research Implementation, Scripps Research"
    },
    {
        quote: "Her expertise is truly impressive, and her ability to tackle complex challenges with creativity and precision sets her apart. Beyond her technical skills, Dina is a fantastic team player—always willing to support colleagues, share knowledge, and contribute to a positive and productive work environment.",
        name: "Kendall Laycock",
        role: "Senior Administrative Assistant, Scripps Research"
    },
    {
        quote: "Dina is an exemplary researcher with a strong foundation in theories of disease distribution and the impact of sociopolitical factors on human health. She's a thoughtful and supportive research collaborator, with novel insights and ideas, impressive methodological acumen, and myriad leadership skills. She will enrich any faculty she joins.",
        name: "Bram Wispelwey",
        role: "Public Health Physician"
    },
    {
        quote: "She is detail-oriented, kind, and incredibly knowledgeable in her field. Dina brings a diverse skill set in research, including grant writing, hands-on fieldwork, data analysis, project management, and leading research initiatives. Her exceptional presentation skills further highlight her ability to communicate complex ideas effectively.",
        name: "Fatima Ashaq, MPH",
        role: "Community Engagement Program Manager, Leap to Success"
    },
    {
        quote: "Dina was instrumental in navigating regulatory landscapes and ensuring compliance with all relevant laws and regulations. Her deep understanding of regulatory requirements and their ability to interpret and apply these regulations to our business operations have been invaluable. Her proactive approach and problem-solving mindset have made them a go-to resource.",
        name: "Andrea Goosen",
        role: "Digital Health Research Senior Lead, Scripps Research"
    },
    {
        quote: "She has consistently demonstrated exceptional knowledge and dedication as a regulatory manager. Not only did she earn her PhD while working full-time, which speaks to her impressive work ethic, but she also brings a deep passion for advancing health equity and is unwavering in her commitment to this vital cause.",
        name: "Lena Miyasaki",
        role: "Marketing & Communications, Scripps Research"
    },
    {
        quote: "Dina was kind and knowledgeable — a rare find in today's work place. Always willing to share her ideas or provide guidance when asked. Dina took great pride in continuing her education to help others. I know Dina will be successful at whatever she does.",
        name: "Cynthia DeMent",
        role: "Former Colleague, Gen-Probe/Hologic"
    },
    {
        quote: "Her deep expertise in regulatory compliance, attention to detail, and ability to navigate complex frameworks make her an asset to any organization. Her ability to interpret and implement regulatory requirements with clarity and precision has consistently contributed to project and operational success.",
        name: "Nicole P.",
        role: "Senior Program Manager, Scripps Research"
    },
    {
        quote: "She is extremely thorough in her regulatory reviews, thoughtful in her consideration of inclusion of diverse populations, and recently received her PhD while working full time. She is genuinely motivated by working to make the world a better place by enthusiastically improving cultural competency, and reducing health disparities.",
        name: "Julia Moore Vogel",
        role: "Health Research Leader, Scripps Research"
    }
];

const Testimonials = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 3;
    const totalPages = Math.ceil(testimonials.length / cardsPerPage);

    const nextPage = useCallback(() => {
        setCurrentPage(prev => (prev + 1) % totalPages);
    }, [totalPages]);

    const prevPage = useCallback(() => {
        setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
    }, [totalPages]);

    // Auto-advance every 8 seconds
    useEffect(() => {
        const timer = setInterval(nextPage, 8000);
        return () => clearInterval(timer);
    }, [nextPage]);

    const visibleTestimonials = testimonials.slice(
        currentPage * cardsPerPage,
        currentPage * cardsPerPage + cardsPerPage
    );

    return (
        <section className="section section-bg">
            <div className="container">
                <h2 className="section-title text-center">What Collaborators Say</h2>
                <p className="testimonials-subtitle text-center">
                    Recommendations from research partners, community organizations, and colleagues
                </p>

                <div className="testimonials-carousel">
                    <button className="testimonial-arrow testimonial-prev" onClick={prevPage} aria-label="Previous testimonials">
                        ‹
                    </button>

                    <div className="testimonials-grid">
                        {visibleTestimonials.map((t, i) => (
                            <div key={currentPage * cardsPerPage + i} className="testimonial-card">
                                <div className="quote-icon">"</div>
                                <p className="testimonial-text">{t.quote}</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar">
                                        <span className="avatar-initial">{t.name[0]}</span>
                                    </div>
                                    <div>
                                        <span className="author-name">{t.name}</span>
                                        <span className="author-role">{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="testimonial-arrow testimonial-next" onClick={nextPage} aria-label="Next testimonials">
                        ›
                    </button>
                </div>

                <div className="testimonial-dots">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            className={`testimonial-dot ${currentPage === i ? 'active' : ''}`}
                            onClick={() => setCurrentPage(i)}
                            aria-label={`Go to page ${i + 1}`}
                        />
                    ))}
                </div>

                <p className="testimonial-count text-center">
                    {testimonials.length} recommendations from LinkedIn
                </p>
            </div>
        </section>
    );
};

export default Testimonials;
