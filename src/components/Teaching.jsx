import './Teaching.css';

const Teaching = () => {
    return (
        <section className="section page-content">
            <div className="container">
                <h2 className="section-title text-center">Teaching Experience</h2>

                <div className="teaching-content">
                    <div className="teaching-text">
                        <p>
                            I have taught undergraduate and graduate courses in public health communication, structural racism and health inequity, and behavioral and social science in public health at San Diego State University. My teaching focuses on helping students communicate complex health information clearly, understand how systems and policies shape health inequities, and apply behavioral and social science theory to real world public health challenges.
                        </p>
                        <p>
                            I have also mentored students in the United States and globally on public health research methods and community based approaches, working closely with community partners, refugee camps, and education centers as both a learner and collaborator. These experiences have shaped a collaborative and practical teaching style grounded in listening, shared learning, and respect for community knowledge.
                        </p>
                    </div>

                    <div className="teaching-gallery">
                        <div className="gallery-item">
                            <img src="/images/fieldwork-1.jpg" alt="Community health screening" />
                        </div>
                        <div className="gallery-item">
                            <img src="/images/fieldwork-2.jpg" alt="Group health assessment" />
                        </div>
                        <div className="gallery-item">
                            <img src="/images/fieldwork-3.jpg" alt="Community engagement outdoors" />
                        </div>
                        <div className="gallery-item">
                            <img src="/images/fieldwork-4.jpg" alt="Clinical health work" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Teaching;
