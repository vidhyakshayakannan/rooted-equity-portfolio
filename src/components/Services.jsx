import { useState } from 'react';
import { Sprout, Heart, ClipboardCheck, Scale } from 'lucide-react';
import './Services.css';

const servicesData = [
    {
        id: 'equity-consulting',
        title: 'Public Health & Health Equity Consulting',
        who: 'Funders, nonprofit organizations, academic institutions, and public agencies',
        problem: 'Organizations working to advance health equity often navigate complex regulatory and ethical requirements while lacking clear analytical frameworks, robust data, and culturally grounded strategies. Many also face challenges aligning community engaged research and programs with institutional, funder, and regulatory expectations.',
        deliverables: [
            'Equity focused assessments aligned with regulatory and funding requirements',
            'Community informed research, evaluation, and implementation frameworks that meet ethical and compliance standards',
            'Policy and program recommendations grounded in evidence, lived experience, and regulatory feasibility',
            'Stakeholder and community engagement strategies that support inclusive, ethical, and compliant decision making'
        ]
    },
    {
        id: 'program-evaluation',
        title: 'Program Design & Evaluation',
        who: 'Organizations that design, implement, or fund public health programs',
        problem: 'Programs often operate without clearly defined outcomes, rigorous evaluation frameworks, or sufficient accountability to funders, communities, and participants, limiting their ability to demonstrate impact and inform decision making.',
        deliverables: [
            'Theory driven logic models and comprehensive evaluation plans',
            'Quantitative and qualitative analyses grounded in rigorous public health methods',
            'Impact reports and funder ready summaries that support transparency, accountability, and continuous improvement'
        ]
    },
    {
        id: 'needs-assessments',
        title: 'Community Health Needs Assessments',
        who: 'Nonprofit organizations, health systems, community coalitions, and municipalities',
        problem: 'Organizations often lack a comprehensive and data driven understanding of community health priorities, structural barriers, and existing assets, limiting their ability to plan, allocate resources, and meet accountability or regulatory expectations.',
        deliverables: [
            'Community engaged and ethically grounded data collection approaches',
            'Quantitative and qualitative analyses that integrate population level trends with lived experience',
            'Actionable recommendations and clear presentations to inform planning, policy, and investment decisions'
        ]
    },
    {
        id: 'disparities-analysis',
        title: 'Health Equity & Disparities Analysis',
        who: 'Funders, policy teams, research institutions, and advocacy organizations',
        problem: 'Organizations often have access to data that are not adequately disaggregated, contextualized, or analyzed through an equity focused lens, limiting their ability to identify disparities, understand structural drivers, and inform equitable decision making.',
        deliverables: [
            'Rigorous disparities analyses grounded in public health and epidemiologic methods',
            'Stratified and intersectional reporting that captures variation across populations and social determinants',
            'Clear data visualization and interpretation to support policy development, program design, and advocacy'
        ]
    },
    {
        id: 'strategy-implementation',
        title: 'Public Health Strategy & Implementation',
        who: 'Organizations launching, scaling, or redesigning public health initiatives',
        problem: 'Fragmented efforts, misaligned priorities, and the absence of a clear long-term strategy—making it difficult to achieve sustainable and equitable impact.',
        deliverables: [
            'Evidence-informed strategic plans aligned with organizational goals and community priorities',
            'Clear theories of change that connect activities to measurable outcomes',
            'Practical implementation roadmaps that support coordination, accountability, and long-term success'
        ]
    },
    {
        id: 'research-funding',
        title: 'Research, Funding & Contractual Support',
        who: 'Academic institutions, federal and state agencies, research centers, and community–academic partnerships advancing public health and health equity initiatives.',
        whatIDo: 'I provide strategic support for sponsored research and public health initiatives, strengthening proposals, protocols, and contractual frameworks to ensure methodological rigor, regulatory compliance, and alignment with sponsor priorities.',
        problems: [
            'Strong ideas that struggle to secure competitive funding.',
            'Research plans that lack clarity, regulatory readiness, or analytic precision.',
            'Partnerships and contracts without clearly defined roles, deliverables, or compliance structures.'
        ],
        servicesInclude: [
            'Grant proposal development for federal, state, and foundation sponsors',
            'Research protocol design and IRB-ready documentation',
            'Data management and analytic plan development',
            'Scope of work drafting and deliverable structuring',
            'MOUs, subaward language, and partnership agreements'
        ],
        whatYouGet: [
            'Competitive, well-positioned proposals aligned with review criteria and guidance requirements',
            'Methodologically rigorous and regulation-ready research protocols',
            'Clear, structured agreements that support accountability and implementation',
            'Strategic alignment between funding mechanisms, research design, and program execution'
        ]
    },
    {
        id: 'speaking',
        title: 'Speaking & Facilitations',
        who: 'Public health organizations, nonprofits, agencies, academic partners, and coalitions',
        problem: 'Complex topics that feel disconnected from real-world and community contexts. Conversations or meetings that lack alignment, clarity, or momentum. Equity efforts that need shared understanding and next steps.',
        deliverables: [
            'Keynotes and invited talks',
            'Facilitated strategy sessions and retreats',
            'Workshops on community-informed, equity-centered research, program design, and evaluation',
            'Engaging, evidence-informed sessions that center lived experience',
            'Collaborative facilitation that lifts all voices',
            'Practical strategies teams can use right away'
        ],
        isSpeaking: true
    }
];

const principles = [
    {
        icon: <Sprout size={48} strokeWidth={1.5} />,
        title: 'Community Centered',
        text: 'Community centered and co-designed approaches that meaningfully engage participants and stakeholders throughout the research and planning process.'
    },
    {
        icon: <Heart size={48} strokeWidth={1.5} />,
        title: 'Trauma Informed',
        text: 'Trauma informed and culturally responsive practices that prioritize safety, respect, consent, and trust.'
    },
    {
        icon: <ClipboardCheck size={48} strokeWidth={1.5} />,
        title: 'Funder Ready',
        text: 'Funder ready methods that meet regulatory, ethical, and compliance standards.'
    },
    {
        icon: <Scale size={48} strokeWidth={1.5} />,
        title: 'Ethics & Experience',
        text: 'Work grounded in public health ethics and lived experience to ensure relevance, accountability, and impact.'
    }
];

const Services = () => {
    const [activeTab, setActiveTab] = useState(0);
    const active = servicesData[activeTab];

    return (
        <section className="section section-bg page-content">
            <div className="container">
                <h2 className="section-title text-center">Services</h2>
                <p className="services-intro text-center">
                    I help organizations design stronger programs, evaluate impact more rigorously, understand health inequities more clearly, and translate research and funding into ethical, effective action, while meeting funder and regulatory expectations.
                </p>

                <div className="services-tabs">
                    <div className="tabs-nav">
                        {servicesData.map((service, i) => (
                            <button
                                key={service.id}
                                className={`tab-btn ${activeTab === i ? 'active' : ''}`}
                                onClick={() => setActiveTab(i)}
                            >
                                {service.title}
                            </button>
                        ))}
                    </div>

                    <div className="tab-content">
                        <h3>{active.title}</h3>

                        <div className="tab-detail">
                            <span className="tab-label">Who This Is For</span>
                            <p>{active.who}</p>
                        </div>

                        {active.whatIDo && (
                            <div className="tab-detail">
                                <span className="tab-label">What I Do</span>
                                <p>{active.whatIDo}</p>
                            </div>
                        )}

                        <div className="tab-detail">
                            <span className="tab-label">{active.isSpeaking || active.problems ? 'Problems It Solves' : 'Problem It Solves'}</span>
                            {active.problems ? (
                                <ul className="deliverables-list">
                                    {active.problems.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            ) : (
                                <p>{active.problem}</p>
                            )}
                        </div>

                        {active.servicesInclude && (
                            <div className="tab-detail">
                                <span className="tab-label">Services Include</span>
                                <ul className="deliverables-list">
                                    {active.servicesInclude.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </div>
                        )}

                        {active.whatYouGet && (
                            <div className="tab-detail">
                                <span className="tab-label">What You Get</span>
                                <ul className="deliverables-list">
                                    {active.whatYouGet.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </div>
                        )}

                        {active.deliverables && (
                            <div className="tab-detail">
                                <span className="tab-label">{active.isSpeaking ? 'Services Include & What You Get' : 'Deliverables'}</span>
                                <ul className="deliverables-list">
                                    {active.deliverables.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* How We Work — integrated as subsection */}
                <div className="methodology-subsection">
                    <h3 className="text-center methodology-heading">How We Work</h3>
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
            </div>
        </section>
    );
};

export default Services;
