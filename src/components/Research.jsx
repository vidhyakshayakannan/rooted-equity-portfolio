import './Research.css';

const publications = [
    {
        authors: 'Hamideh, Dina & Al Zabadi, Hamzeh & Mahmoud, Lamees & Bridi, Lana',
        year: '2026',
        title: '"Will It Be Used for Me or Against Me?": A Qualitative Study on the Use of Mobile Health Interventions Among Adolescents and Parents Living in Palestine',
        journal: '[Under Review]',
        volume: '',
        doi: '',
        link: null
    },
    {
        authors: 'Hamideh, Dina & Al Zabadi, Hamzeh & Crespo, Noe & Mansour, Mariam & Real, Marcos & Hamideh, Baseel & Ahmadi, Nargis & Mahmoud, Lamees & Constant, Aymery & Strong, David',
        year: '2026',
        title: 'The "Pressure" of Occupation: A Cross-sectional Study Evaluating the Relationship of Psychosocial Factors with High Blood Pressure Among Palestinian Adolescents in West Bank, Palestine',
        journal: '[Under Review]',
        volume: '',
        doi: '',
        link: null
    },
    {
        authors: 'Hamideh, Dina & Al Zabadi, Hamzeh & Crespo, Noe & Alcaraz, John & Mansour, Mariam & Real, Marcos & Hamideh, Baseel & Ahmadi, Nargis & Mahmoud, Lamees & Strong, David',
        year: '2025',
        title: 'The "pressure" of being an adolescent in the West Bank, Palestine: prevalence of prehypertension and hypertension',
        journal: 'Frontiers in Public Health',
        volume: '13',
        doi: '10.3389/fpubh.2025.1620629',
        link: 'https://doi.org/10.3389/fpubh.2025.1620629'
    },
    {
        authors: 'Taylor, Jennifer & Allman-Farinelli, Margaret & Chen, Juliana & Gauglitz, Julia & Hamideh, Dina & Jankowska, Marta & Johnson, Abigail & Rangan, Anna & Spruijt-Metz, Donna & Yang, Jiue-An & Hekler, Eric',
        year: '2022',
        title: 'Perspective: A Framework for Addressing Dynamic Food Consumption Processes',
        journal: 'Advances in Nutrition',
        volume: '13',
        doi: '10.1093/advances/nmab156',
        link: 'https://doi.org/10.1093/advances/nmab156'
    },
    {
        authors: 'Radin, Jennifer & Quer, Giorgio & Jalili, Marwa & Hamideh, Dina & Steinhubl, Steven',
        year: '2021',
        title: 'The hopes and hazards of using personal health technologies in the diagnosis and prognosis of infections',
        journal: 'The Lancet Digital Health',
        volume: '3',
        doi: '10.1016/S2589-7500(21)00064-9',
        link: 'https://doi.org/10.1016/S2589-7500(21)00064-9'
    },
    {
        authors: 'Hamideh, D., Nebeker, C.',
        year: '2020',
        title: 'The Digital Health Landscape in Addiction and Substance Use Research: Will Digital Health Exacerbate or Mitigate Health Inequities in Vulnerable Populations?',
        journal: 'Current Addiction Reports',
        volume: '7, 317–332',
        doi: '10.1007/s40429-020-00325-9',
        link: 'https://doi.org/10.1007/s40429-020-00325-9'
    },
    {
        authors: 'Hamideh, Dina & Arellano, Bianca & Topol, Eric & Steinhubl, Steven',
        year: '2019',
        title: 'Your digital nutritionist',
        journal: 'The Lancet',
        volume: '393, 19',
        doi: '10.1016/S0140-6736(18)33170-2',
        link: 'https://doi.org/10.1016/S0140-6736(18)33170-2'
    },
    {
        authors: 'Lee, J., Hamideh, D. & Nebeker, C.',
        year: '2019',
        title: 'Qualifying and quantifying the precision medicine rhetoric',
        journal: 'BMC Genomics',
        volume: '20, 868',
        doi: '10.1186/s12864-019-6242-8',
        link: 'https://doi.org/10.1186/s12864-019-6242-8'
    }
];

const Research = () => {
    return (
        <section className="section section-bg page-content">
            <div className="container">
                <h2 className="section-title text-center">Research and Publications</h2>

                <div className="publications-list">
                    {publications.map((pub, i) => (
                        <div key={i} className="publication-item">
                            <span className="pub-year">{pub.year}</span>
                            <div className="pub-details">
                                <h4 className="pub-title">
                                    {pub.link ? (
                                        <a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.title}</a>
                                    ) : pub.title}
                                </h4>
                                <p className="pub-authors">{pub.authors}</p>
                                <p className="pub-journal">
                                    <em>{pub.journal}</em>
                                    {pub.volume && <>, {pub.volume}</>}
                                    {pub.doi && <span className="pub-doi"> · DOI: {pub.doi}</span>}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Research;
