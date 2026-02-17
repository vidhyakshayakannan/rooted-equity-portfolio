import { useState, useEffect, useCallback } from 'react';
import './ImageSlider.css';

const images = [
    { src: '/gallery_new/Speaking 3.jpeg', alt: 'Keynote speech' },
    { src: '/gallery_new/Speaking 1.jpeg', alt: 'Speaking engagement' },
    { src: '/gallery_new/MH workshop 3.jpeg', alt: 'Workshop discussion circle' },
    { src: '/gallery_new/blurred_man_presentation.png', alt: 'Presentation materials' },
    { src: '/gallery_new/qual data MH.jpeg', alt: 'Qualitative analysis chart' },
    { src: '/gallery_new/MH 2.jpeg', alt: 'Mental health workshop scene' },
    { src: '/gallery_new/Speaking 2.jpeg', alt: 'Conference presentation' },
    { src: '/gallery_new/MH 5.jpeg', alt: 'Interactive group work' },
    { src: '/gallery_new/MH 4.jpeg', alt: 'Training facilitation' },
    { src: '/gallery_new/3424A0BB-C75F-4CE3-85C2-DA2C536169A0_4_5005_c.jpeg', alt: 'Group discussion' },
    { src: '/gallery_new/20284824-33B7-4C92-BAAE-8616194BC5FC_4_5005_c.jpeg', alt: 'Community engagement meeting' },
    { src: '/gallery_new/87F331F8-7DEF-4517-9578-90A4530F1BC3_4_5005_c.jpeg', alt: 'Community event gathering' },
    { src: '/gallery_new/38BE1E10-780A-4CCB-8E63-C3A56026A181_4_5005_c.jpeg', alt: 'Workshop participation' },
    { src: '/gallery_new/E03FDB82-D83B-46C1-92D7-B814E23C25BD_4_5005_c.jpeg', alt: 'Planning session' },
    { src: '/gallery_new/08FA5F31-1508-4B34-A0BC-933094CDE361_4_5005_c.jpeg', alt: 'Interactive training session' },
    { src: '/gallery_new/0538656B-9D4D-434C-AC63-7F93F3F05873_4_5005_c.jpeg', alt: 'Community workshop activity' },
    { src: '/gallery_new/A3B116AA-D1D2-48B2-AC75-0E2B571381B1_4_5005_c.jpeg', alt: 'Fieldwork documentation' },
    { src: '/gallery_new/6522EA03-91C6-430B-BE31-2109503FAD85_4_5005_c.jpeg', alt: 'Feedback session' },
    { src: '/gallery_new/data_review_1.png', alt: 'Data review and analysis' },
    { src: '/gallery_new/data_review_2.png', alt: 'Field notes and documentation' }
];

const ImageSlider = () => {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const next = useCallback(() => {
        setCurrent(prev => (prev + 1) % images.length);
    }, []);

    const prev = useCallback(() => {
        setCurrent(prev => (prev - 1 + images.length) % images.length);
    }, []);

    // Auto-advance every 4 seconds
    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(next, 4000);
        return () => clearInterval(timer);
    }, [next, isPaused, current]);

    return (
        <section className="slider-section">
            <div className="container">
                <h2 className="section-title text-center">Our Work in Action</h2>
                <p className="slider-subtitle text-center">
                    Community health research, fieldwork, workshops, and speaking engagements
                </p>

                <div
                    className="slider-wrapper"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <button className="slider-arrow slider-prev" onClick={prev} aria-label="Previous image">
                        ‹
                    </button>

                    <div className="slider-viewport">
                        <div className="slider-track">
                            {images.map((img, i) => (
                                <div
                                    key={i}
                                    className={`slider-slide ${i === current ? 'active' : ''}`}
                                >
                                    <img src={img.src} alt={img.alt} loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="slider-arrow slider-next" onClick={next} aria-label="Next image">
                        ›
                    </button>
                </div>

                {/* Dots indicator */}
                <div className="slider-dots">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            className={`slider-dot ${current === i ? 'active' : ''}`}
                            onClick={() => setCurrent(i)}
                            aria-label={`Go to image ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImageSlider;
