import { useState, useEffect, useCallback } from 'react';
import './ImageSlider.css';

const images = Array.from({ length: 21 }, (_, i) => {
    const num = i + 1;
    // Skip gallery-03 as it is used in the About page
    if (num === 3) return null;
    return {
        src: `/images/gallery-${String(num).padStart(2, '0')}.jpeg`,
        alt: `Community health and fieldwork photo ${num}`
    };
}).filter(Boolean);

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
    }, [next, isPaused]);

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
                        <div
                            className="slider-track"
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {images.map((img, i) => (
                                <div key={i} className="slider-slide">
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
